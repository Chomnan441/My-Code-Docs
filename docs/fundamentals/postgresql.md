---
title: SQL & PostgreSQL
description: จุดเริ่มสำหรับอ่านตารางและคำสั่ง SQL
outline: [2, 3]
---

# SQL & PostgreSQL

PostgreSQL เป็นฐานข้อมูลที่ Job Application Tracker ใช้ ข้อมูลอยู่ในตาราง แต่ละแถวคือหนึ่งรายการ และแต่ละคอลัมน์คือข้อมูลหนึ่งอย่างของรายการนั้น

SQL คือภาษาที่ใช้สั่งฐานข้อมูล ตัวอย่างต่อไปนี้เป็นตัวอย่างทั่วไป ไม่ใช่ตารางของโปรเจค

## อ่านข้อมูล

```sql
SELECT title, status
FROM lesson
WHERE status = 'draft';
```

1. `SELECT` เลือกว่าจะเอาคอลัมน์ใด ในที่นี้คือ `title` และ `status`
2. `FROM lesson` บอกว่าอ่านจากตารางชื่อ `lesson`
3. `WHERE` กรองเฉพาะแถวที่เงื่อนไขเป็นจริง

## เพิ่มข้อมูล

```sql
INSERT INTO lesson (title, status)
VALUES ('Go Basics', 'draft');
```

คำสั่งนี้เพิ่มหนึ่งแถว ค่าในวงเล็บต้องเรียงตรงกับชื่อคอลัมน์ด้านบน

## เวลาเจอ SQL ในโค้ด Backend

Backend มักไม่ให้ผู้ใช้พิมพ์ SQL เอง แต่มีโค้ด Go ที่ประกอบคำสั่งแล้วส่งไปที่ PostgreSQL ให้มองหาชื่อตารางในคำสั่ง แล้วจดว่าฟังก์ชันนั้นอ่านข้อมูลหรือเขียนข้อมูล

ชื่อตารางจริงของโปรเจคยังไม่ได้บันทึก หน้า [Database](/projects/job-application-tracker/database/) รอไว้สำหรับเรื่องนั้น

## อ่านต่อ

- [REST API](/fundamentals/rest-api)
- [Database ของโปรเจค](/projects/job-application-tracker/database/)
