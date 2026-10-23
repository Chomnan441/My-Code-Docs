---
title: การทำงานร่วมกันของระบบ
description: ทำความเข้าใจเส้นทางการเดินทางของข้อมูลและการทำงานร่วมกันระหว่าง Frontend และ Backend
outline: [2, 3]
---

# การทำงานร่วมกันของระบบ

หน้านี้อธิบายว่าข้อมูลเดินทางอย่างไรเมื่อผู้ใช้ทำกิจกรรมใน Job Application Tracker

## เส้นทางในภาพกว้าง

```text
[ ผู้ใช้ ]
     │
     ▼
[ React Frontend (App.tsx) ] ── จัดการ state ในเบราว์เซอร์
     │
     ├─ สลับหน้าจอ Dashboard หรือ Applications
     └─ เพิ่มหรือกรองข้อมูล ──► [ mockApplications ในหน่วยความจำ ]

[ ไคลเอ็นต์ ] ── GET /health ──► [ Go Backend ที่พอร์ต 8080 ]
                                        │
                                        ▼
                                 [ healthHandler ]
                                        │
                                        ▼
                                 JSON {"status":"ok"}
```

## การกรองและเพิ่มรายการสมัครงาน

1. ผู้ใช้เปิดหน้าเว็บ เบราว์เซอร์โหลด React จาก `frontend/src/main.tsx` เข้าสู่ `frontend/src/App.tsx`
2. ผู้ใช้กดเมนู Applications ที่แถบด้านข้าง สคริปต์เปลี่ยน state `currentView` เป็น `'applications'` แล้วเรนเดอร์ `<ApplicationsPage>`
3. `ApplicationsPage` อ่านรายการตั้งต้นจาก `mockApplications` ใน `frontend/src/data/mock-applications.ts`
4. ผู้ใช้พิมพ์ในช่องค้นหา ค่า `searchQuery` เปลี่ยน `useMemo` กรองอาร์เรย์แล้วส่งผลไปเรนเดอร์ใน `<ApplicationTable>` หรือ `<ApplicationCard>`
5. ผู้ใช้เปิด `<AddApplicationDialog>` กรอกข้อมูลแล้วกดบันทึก ฟังก์ชัน `onAddApplication` นำรายการใหม่ไปต่อท้าย state `applications` ในเบราว์เซอร์

## การตรวจความพร้อมของ Backend

1. ไคลเอ็นต์ส่ง `GET` ไปที่ `http://localhost:8080/health`
2. เซิร์ฟเวอร์ใน `backend/cmd/server/main.go` รับคำขอที่พอร์ต `:8080`
3. `http.ServeMux` จับคู่ path `/health` กับ `healthHandler` ใน `backend/internal/server/server.go`
4. `healthHandler` ตอบสถานะ `200 OK` และ JSON `{"status":"ok"}`

::: info สรุปการเชื่อมโยงในปัจจุบัน
Frontend กับ Backend ยังทำงานแยกกัน Frontend เก็บข้อมูลใน React state และข้อมูลจำลอง ส่วน Backend เปิด HTTP server และเส้นทางตรวจสุขภาพของเซิร์ฟเวอร์
:::

## อ่านต่อ

- [ภาพรวมโปรเจค](/projects/job-application-tracker/)
- [Frontend](/projects/job-application-tracker/frontend/)
- [Backend](/projects/job-application-tracker/backend/)
- [React Basics](/fundamentals/react/)
- [Go Basics](/fundamentals/go/)
- [REST API](/fundamentals/rest-api)
