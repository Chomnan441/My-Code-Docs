---
title: Backend
description: สำรวจโครงสร้าง Go HTTP Server และ REST API Endpoint ฝั่ง Backend
outline: [2, 3]
---

# Backend

เซิร์ฟเวอร์ของโปรเจคเขียนด้วย Go และใช้แพ็กเกจมาตรฐาน `net/http` เปิด HTTP server พร้อมเส้นทาง REST API

## เซิร์ฟเวอร์เริ่มทำงานที่ไฟล์ใด

`backend/cmd/server/main.go` เป็นจุดเริ่ม ฟังก์ชัน `main()` เรียก `server.NewServer()` จากแพ็กเกจ `job-application-tracker/backend/internal/server` แล้วเปิดรับคำขอด้วย `http.ListenAndServe(":8080", srv.Mux())`

## เส้นทางที่เปิดให้เรียก

| เมธอด | Path | Handler | หน้าที่ |
| --- | --- | --- | --- |
| `GET` | `/health` | `healthHandler` | ตรวจว่าเซิร์ฟเวอร์พร้อมทำงาน |

`GET /health` ไม่ต้องส่ง query หรือ body ตอบ `200 OK` พร้อมหัวข้อ `Content-Type: application/json` และเนื้อหาด้านล่าง

```json
{
  "status": "ok"
}
```

## จุดที่คุยกับฐานข้อมูล

::: info ผลการตรวจซอร์สโค้ด
ใน `backend/cmd/server/main.go` และ `backend/internal/server/server.go` ยังไม่พบการเชื่อมต่อฐานข้อมูลหรือชั้น repository
:::

## บทเรียนในส่วนนี้

- [Go HTTP Server และ Health Check](/projects/job-application-tracker/backend/health-check-server)

## อ่านต่อ

- [ภาพรวมโปรเจค](/projects/job-application-tracker/)
- [Frontend](/projects/job-application-tracker/frontend/)
- [การทำงานร่วมกันของระบบ](/projects/job-application-tracker/architecture)
- [Go Basics](/fundamentals/go/)
- [REST API](/fundamentals/rest-api)
