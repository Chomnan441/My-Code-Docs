---
title: ภาพรวมโปรเจค
description: ทำความเข้าใจภาพรวมของโปรเจค Job Application Tracker ระบบบันทึกและติดตามสถานะการสมัครงานที่พัฒนาด้วย React, TypeScript, Tailwind CSS และ Go
outline: [2, 3]
---

# ภาพรวมโปรเจค

Job Application Tracker เป็นเว็บแอปพลิเคชันส่วนตัวสำหรับบันทึกและติดตามสถานะการสมัครงาน ผู้ใช้จัดการข้อมูลการสมัครงานแต่ละบริษัท ตรวจสถานะขั้นตอนการสัมภาษณ์ ดูสถิติภาพรวม และกรองค้นหาข้อมูลย้อนหลังได้

## เทคโนโลยีที่ใช้ในโปรเจค

| เทคโนโลยี | ส่วนงาน | หลักฐานจากไฟล์ | รายละเอียดการใช้งาน |
| --- | --- | --- | --- |
| React 18 | Frontend | `frontend/package.json` | สร้างส่วนที่ผู้ใช้เห็นแบบคอมโพเนนต์ |
| TypeScript | Frontend | `frontend/package.json` | กำหนดชนิดข้อมูลของโค้ดฝั่งหน้าเว็บ |
| Vite | Frontend | `frontend/package.json` | รันเซิร์ฟเวอร์ตอนพัฒนาและรวมไฟล์ตอน build |
| Tailwind CSS และ Radix UI | ส่วนที่ผู้ใช้เห็น | `frontend/package.json` | จัดเลย์เอาต์และสร้างหน้าต่าง Dialog |
| Go 1.22 ขึ้นไป | Backend | `backend/go.mod` | เปิด REST API ด้วยไลบรารีมาตรฐาน `net/http` |
| ข้อมูลจำลองใน TypeScript | ที่เก็บข้อมูล | `frontend/src/data/mock-applications.ts` | เก็บรายการสมัครงานไว้บนหน้าเว็บชั่วคราว |

## สิ่งที่ผู้ใช้ทำได้

1. ดูสถิติภาพรวมบน Dashboard ได้แก่ จำนวนงานที่สมัครทั้งหมด งานที่อยู่ในช่วงสัมภาษณ์ งานที่ได้รับข้อเสนอ และสถิติย่อล่าสุด
2. ดูรายการสมัครงานทั้งหมด แล้วสลับระหว่างมุมมองตารางกับมุมมองการ์ด
3. ค้นด้วยชื่อบริษัทหรือตำแหน่งงาน และกรองตามสถานะ `APPLIED`, `INTERVIEWING`, `OFFERED`, `REJECTED`, `BOOKMARKED`, `ARCHIVED`
4. เปิดหน้าต่าง Dialog เพื่อกรอกบริษัท ตำแหน่ง วันที่สมัคร เงินเดือน และรายละเอียดเพิ่มเติม

## แผนที่การอ่านโค้ด

- [Frontend](/projects/job-application-tracker/frontend/) โครงสร้างหน้าจอและคอมโพเนนต์
- [Backend](/projects/job-application-tracker/backend/) เซิร์ฟเวอร์ Go และเส้นทาง API
- [Database](/projects/job-application-tracker/database/) รูปแบบข้อมูลที่ใช้จริงในตอนนี้
- [การทำงานร่วมกันของระบบ](/projects/job-application-tracker/architecture) เส้นทางของข้อมูลทั้งระบบ
