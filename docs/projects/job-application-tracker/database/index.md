---
title: Database
description: สรุปสถานะการจัดเก็บข้อมูลและโครงสร้าง Data Models ในโปรเจค Job Application Tracker
outline: [2, 3]
---

# Database

## สถานะระบบฐานข้อมูล

::: warning ตรวจแล้วไม่พบฐานข้อมูลภายนอก
ทั้ง Backend (`backend/go.mod`, `backend/internal/server/server.go`) และ Frontend ไม่พบการเชื่อมต่อฐานข้อมูลภายนอก เช่น PostgreSQL หรือ MongoDB
:::

## โครงสร้างข้อมูลที่ใช้จริงในตอนนี้

ข้อมูลการสมัครงานอยู่ในอ็อบเจกต์ TypeScript บนหน่วยความจำฝั่ง Frontend ชนิดหลักประกาศไว้ใน `frontend/src/lib/types.ts`

### ApplicationStatus

ชนิดนี้ระบุสถานะของการสมัครงานหนึ่งรายการ

- `'APPLIED'` สมัครงานแล้ว
- `'INTERVIEWING'` อยู่ระหว่างการสัมภาษณ์
- `'OFFERED'` ได้รับข้อเสนอเข้าทำงาน
- `'REJECTED'` ไม่ผ่านการคัดเลือก
- `'BOOKMARKED'` บันทึกไว้สนใจ
- `'ARCHIVED'` เก็บเข้าคลัง

### Application

หนึ่งค่าแทนการสมัครงานหนึ่งรายการ

| ฟิลด์ | ชนิด | จำเป็น | ความหมาย |
| --- | --- | --- | --- |
| `id` | `string` | ใช่ | รหัสอ้างอิงรายการ |
| `company` | `string` | ใช่ | ชื่อบริษัท |
| `position` | `string` | ใช่ | ชื่อตำแหน่ง |
| `status` | `ApplicationStatus` | ใช่ | สถานะปัจจุบัน |
| `appliedDate` | `string` | ใช่ | วันที่ยื่นสมัคร |
| `location` | `string` | ไม่ | สถานที่ทำงาน |
| `salary` | `string` | ไม่ | ช่วงเงินเดือน |
| `jobUrl` | `string` | ไม่ | ลิงก์ประกาศรับสมัคร |
| `notes` | `string` | ไม่ | บันทึกเพิ่มเติม |

ข้อมูลตัวอย่างอยู่ในอาร์เรย์ `mockApplications` ที่ `frontend/src/data/mock-applications.ts`

## อ่านต่อ

- [ภาพรวมโปรเจค](/projects/job-application-tracker/)
- [Frontend](/projects/job-application-tracker/frontend/)
- [Backend](/projects/job-application-tracker/backend/)
