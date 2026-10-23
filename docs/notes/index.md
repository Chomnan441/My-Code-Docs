---
title: บันทึกทั้งหมด
description: จุดเริ่มของบันทึกการเรียนรู้และวิธีเพิ่มบทเรียน
outline: [2, 3]
---

# บันทึกทั้งหมด

ส่วนนี้ใช้จดความเข้าใจหลังจากอ่านโค้ด บันทึกที่ดีบอกได้ว่าไฟล์ใดทำอะไร และคำใดต้องจำ โดยไม่คัดลอกทั้งไฟล์มาวาง

## สิ่งที่เรียนรู้ {#learned}

เรื่องจากซอร์สโค้ดของ Job Application Tracker

- [การกรองข้อมูลรายการสมัครงาน](/projects/job-application-tracker/frontend/applications-state-and-filtering) state ของหน้า Applications และการกรองด้วย `useMemo`
- [ฟอร์มบันทึกการสมัครงานใหม่](/projects/job-application-tracker/frontend/add-application-dialog) ฟอร์มที่ผูกกับ state และการตรวจข้อมูลก่อนบันทึก
- [Go HTTP Server และ Health Check](/projects/job-application-tracker/backend/health-check-server) เซิร์ฟเวอร์ด้วย `net/http` และเส้นทาง `GET /health`

พื้นฐานที่ยังใช้ประกอบตอนเปิดไฟล์

- [Go Basics](/fundamentals/go/) โครง `package`, `func` และตัวแปร
- [React Basics](/fundamentals/react/) คอมโพเนนต์, JSX และ props
- [REST API](/fundamentals/rest-api) เมธอด HTTP กับ JSON
- [SQL & PostgreSQL](/fundamentals/postgresql) ตารางกับ `SELECT` และ `INSERT`
- [Git & GitHub](/fundamentals/git-github) commit และ push

## เพิ่มบทเรียนใหม่

1. คัดลอกไฟล์ `templates/code-explanation.md` จากโฟลเดอร์โปรเจค
2. วางไว้ในโฟลเดอร์ที่ตรงเรื่อง เช่น `docs/projects/job-application-tracker/frontend/`
3. ตั้งชื่อไฟล์ให้สื่อเรื่อง เช่น `job-form.md`
4. เติมทั้ง 9 หัวข้อจากโค้ดที่อ่านจริง ถ้ายังไม่รู้ให้เขียนว่ายังไม่ได้ตรวจจากซอร์สโค้ด
5. เพิ่มลิงก์ของหน้าใหม่ในแถบข้าง ที่ `docs/.vitepress/config.mts`
6. ถ้าอยากให้โผล่ที่หน้าแรก ให้เพิ่มรายการใน `recent` ของ `docs/index.md`

คำศัพท์แยกไว้ที่ [คำศัพท์ที่ควรจำ](/notes/glossary)
