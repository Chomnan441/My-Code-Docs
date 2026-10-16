---
title: Backend
description: โครงบทเรียนสำหรับอ่านโค้ด Go ของ Job Application Tracker
outline: [2, 3]
---

# Backend

หน้านี้จะเก็บคำอธิบายโค้ดฝั่งเซิร์ฟเวอร์ ของ Job Application Tracker เทคโนโลยีที่ใช้คือ Go และเฟรมเวิร์ก Gin

::: info โครงบทเรียน
ยังไม่มีไฟล์ Go จากโปรเจคนี้ให้วิเคราะห์ ยังไม่บันทึกเส้นทาง API โครงสร้าง handler หรือวิธีเชื่อมต่อฐานข้อมูล
:::

## หน้านี้จะตอบอะไร เมื่อมีซอร์สโค้ดแล้ว

- เซิร์ฟเวอร์เริ่มทำงานจากไฟล์ใด
- มีเส้นทางให้ Frontend เรียกอะไรบ้าง
- แต่ละเส้นทางรับข้อมูลแบบใด และตอบกลับแบบใด
- จุดใดส่งคำสั่งต่อไปยัง PostgreSQL

## สิ่งที่ควรอ่านคู่กัน

ถ้าเพิ่งเริ่มอ่านภาษา Go ให้เปิด [Go Basics](/fundamentals/go/) ก่อน แล้วอ่าน [REST API](/fundamentals/rest-api) เพื่อรู้ว่าคำขอจากหน้าเว็บมาถึงเซิร์ฟเวอร์อย่างไร

เมื่อเจอโค้ดจริง ให้ใช้เทมเพลต `templates/code-explanation.md` แล้วเขียนบทเรียนทีละไฟล์หรือทีละฟังก์ชัน

## หน้าถัดไปในโปรเจค

- [Database](/projects/job-application-tracker/database/)
- [Frontend](/projects/job-application-tracker/frontend/)
- [ภาพรวมโปรเจค](/projects/job-application-tracker/)
