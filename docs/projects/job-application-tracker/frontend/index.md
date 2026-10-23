---
title: Frontend
description: สำรวจโครงสร้างหน้าจอ คอมโพเนนต์หลัก และการจัดการข้อมูลฝั่ง Frontend ในระบบ Job Application Tracker
outline: [2, 3]
---

# Frontend

ส่วนที่ผู้ใช้เห็นของ Job Application Tracker พัฒนาด้วย React 18, TypeScript และ Tailwind CSS คอมโพเนนต์ถูกแยกตามหน้าที่ใช้งาน

## แอปเริ่มทำงานที่ไฟล์ใด

1. `frontend/src/main.tsx` เป็นจุดเริ่มของแอป React เรียก `createRoot` เพื่อวางคอมโพเนนต์ `<App />` ลงในองค์ประกอบ `#root` ของ `index.html`
2. `frontend/src/App.tsx` เป็นคอมโพเนนต์บนสุด เก็บ state สำหรับสลับหน้าจอระหว่าง `'dashboard'` กับ `'applications'` และห่อหน้าจอด้วย `<AppShell>`

## หน้าจอและคอมโพเนนต์หลัก

หน้า Dashboard อยู่ใน `frontend/src/pages/dashboard-page.tsx`

- `<StatCard>` แสดงตัวเลขสถิติ เช่น จำนวนงานที่สมัครและงานที่อยู่ระหว่างสัมภาษณ์
- `<InsightsSummary>` สรุปภาพรวมการสมัครงาน
- `<RecentApplications>` แสดงรายการสมัครงานล่าสุด

หน้า Applications อยู่ใน `frontend/src/pages/applications-page.tsx`

- `<AddApplicationDialog>` เป็นหน้าต่างฟอร์มสำหรับเพิ่มรายการสมัครงาน
- `<ApplicationTable>` แสดงรายการแบบตาราง
- `<ApplicationCard>` แสดงรายการแบบการ์ด
- `<ApplicationStatusBadge>` แสดงสีตามสถานะของงาน

โครงเลย์เอาต์อยู่ใน `frontend/src/components/layout/`

- `app-shell.tsx`, `app-header.tsx`, `app-sidebar.tsx` และ `mobile-nav.tsx` จัดกรอบแอป แถบด้านข้าง และเมนูบนจอเล็ก

## ข้อมูลจัดเก็บอยู่ที่ไหน

- `frontend/src/data/mock-applications.ts` เก็บรายการสมัครงานจำลองชื่อ `mockApplications`
- `frontend/src/data/mock-dashboard.ts` เก็บสถิติภาพรวมชื่อ `mockDashboardStats`
- `frontend/src/lib/types.ts` กำหนดชนิด `Application`, `ApplicationStatus` และ `DashboardStats`

## จุดที่เรียก Backend

::: info ผลการตรวจซอร์สโค้ด
ฝั่ง Frontend ใช้ข้อมูลจำลองจาก `frontend/src/data/mock-applications.ts` ยังไม่พบฟังก์ชัน `fetch` หรือตัวเรียก HTTP ที่ส่งคำขอไปยัง Backend
:::

## บทเรียนในส่วนนี้

- [ฟอร์มบันทึกการสมัครงานใหม่](/projects/job-application-tracker/frontend/add-application-dialog)
- [การกรองข้อมูลรายการสมัครงาน](/projects/job-application-tracker/frontend/applications-state-and-filtering)

## อ่านต่อ

- [ภาพรวมโปรเจค](/projects/job-application-tracker/)
- [Backend](/projects/job-application-tracker/backend/)
- [การทำงานร่วมกันของระบบ](/projects/job-application-tracker/architecture)
- [React Basics](/fundamentals/react/)
