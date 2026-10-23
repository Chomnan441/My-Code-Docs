---
title: Go HTTP Server และ Health Check
description: ทำความเข้าใจโครงสร้างการเริ่มต้นเซิร์ฟเวอร์ด้วย net/http และ handler ตรวจสอบสถานะการทำงานในภาษา Go
outline: [2, 3]
---

# Go HTTP Server และ Health Check

- โปรเจค: Job Application Tracker
- วันที่จด: 2026-10-19
- สถานะ: ร่าง

## 1. บทเรียนนี้เกี่ยวกับอะไร?

บทเรียนนี้อธิบาย Backend ภาษา Go ใน `backend/cmd/server/main.go` และ `backend/internal/server/server.go` โค้ดชุดนี้สร้าง HTTP server ด้วยไลบรารีมาตรฐาน `net/http` และเปิด `GET /health` ให้ภายนอกตรวจว่าเซิร์ฟเวอร์พร้อมทำงาน

## 2. ไฟล์ต้นฉบับและตำแหน่งโค้ด

| ไฟล์ | ช่วงบรรทัด | ภาษา |
| --- | --- | --- |
| `backend/cmd/server/main.go` | 1–25 | Go |
| `backend/internal/server/server.go` | 1–35 | Go |

## 3. โค้ดที่ต้องทำความเข้าใจ

```go
func NewServer() *Server {
	s := &Server{
		mux: http.NewServeMux(),
	}
	s.routes()
	return s
}

func (s *Server) routes() {
	s.mux.HandleFunc("GET /health", s.healthHandler)
}

func (s *Server) healthHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
}
```

ช่วงนี้อยู่ใน `backend/internal/server/server.go` บรรทัด 10–30

```go
func main() {
	srv := server.NewServer()
	log.Println("Server starting on :8080...")
	if err := http.ListenAndServe(":8080", srv.Mux()); err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
}
```

ช่วงนี้อยู่ใน `backend/cmd/server/main.go` บรรทัด 1–20

## 4. อธิบายการทำงานทีละขั้นตอน

1. `main()` ใน `backend/cmd/server/main.go` ทำงานเป็นจุดแรก
2. `server.NewServer()` สร้างโครงสร้าง `Server` และ `http.ServeMux` สำหรับจับคู่เส้นทาง
3. `routes()` ผูก `"GET /health"` กับ `healthHandler` ตามรูปแบบเส้นทางของ Go 1.22 ขึ้นไป
4. `http.ListenAndServe(":8080", srv.Mux())` เปิดรอคำขอที่พอร์ต `:8080`
5. เมื่อมี `GET /health` ฟังก์ชัน `healthHandler` ตั้งหัวข้อ `Content-Type: application/json` ตอบสถานะ `200 OK` แล้วเขียน JSON `{"status":"ok"}`

## 5. คำศัพท์เทคนิคที่ควรรู้

| คำ | ความหมายในบทนี้ |
| --- | --- |
| `http.ServeMux` | ตัวจับคู่เมธอดและ path ของไลบรารีมาตรฐาน Go |
| Handler | ฟังก์ชันที่รับคำขอ HTTP แล้วเขียนคำตอบกลับ |
| `json.NewEncoder` | ตัวแปลงค่าใน Go เป็น JSON แล้วเขียนลงคำตอบโดยตรง |

## 6. ตัวอย่างการทำงานจริง

เมื่อรันเซิร์ฟเวอร์แล้วเรียก `http://localhost:8080/health` เซิร์ฟเวอร์ส่งคำขอเข้า `healthHandler` และตอบ JSON ด้านล่าง

```json
{"status":"ok"}
```

## 7. ความสัมพันธ์กับไฟล์อื่น

- `backend/cmd/server/main.go` เรียกแพ็กเกจ `backend/internal/server`
- `backend/internal/server/server.go` เป็นจุดลงทะเบียนเส้นทางของ Backend ในตอนนี้มีเส้นทาง `/health`

## 8. สรุปสิ่งที่ควรจำ

- โปรเจคใช้ `net/http` ของ Go โดยไม่มีเฟรมเวิร์กเพิ่ม
- `healthHandler` เป็นจุดตรวจว่าเซิร์ฟเวอร์เปิดทำงานอยู่

## 9. คำถามทบทวนความเข้าใจ

1. `http.NewServeMux()` ทำอะไรในเซิร์ฟเวอร์นี้
   เป็นตัวจับคู่เมธอดกับ path แล้วส่งคำขอไปยัง handler ที่ลงทะเบียนไว้
2. ทำไมต้องตั้ง `Content-Type: application/json`
   เพื่อบอกผู้เรียกว่าคำตอบเป็น JSON
3. รูปแบบ `"GET /health"` ใน `HandleFunc` ใช้ได้ตั้งแต่ Go รุ่นใด
   ตั้งแต่ Go 1.22 ขึ้นไป
