---
title: React Basics
description: จุดเริ่มสำหรับอ่านคอมโพเนนต์ React
outline: [2, 3]
---

# React Basics

React ใช้สร้างส่วนที่ผู้ใช้เห็นบนเบราว์เซอร์ Job Application Tracker ใช้ React ที่ฝั่ง Frontend ตัวอย่างด้านล่างเป็นตัวอย่างทั่วไป ไม่ได้มาจากโปรเจค

## คอมโพเนนต์คืออะไร

คอมโพเนนต์คือชิ้นส่วนของหน้าเว็บที่เขียนเป็นฟังก์ชัน แล้วคืนค่าสิ่งที่จะให้เบราว์เซอร์แสดง รูปแบบที่เห็นในไฟล์มักเรียกว่า JSX คือ HTML ที่เขียนปนอยู่ใน JavaScript

```jsx
function LessonCard(props) {
  return <h2>{props.title}</h2>
}
```

1. `function LessonCard` สร้างคอมโพเนนต์ชื่อ `LessonCard`
2. `props` คือข้อมูลที่คอมโพเนนต์อื่นส่งเข้ามา ในที่นี้มี `title`
3. `return` ส่งสิ่งที่จะแสดงกลับไป
4. `<h2>{props.title}</h2>` แสดงข้อความหัวข้อ ปีกกา `{ }` ใช้แทรกค่าจาก JavaScript เข้าไปใน JSX

ไฟล์จริงอาจเขียนแบบ TypeScript ซึ่งระบุชนิดของข้อมูลเพิ่ม เช่น `title` ต้องเป็นข้อความ

```tsx
function LessonCard({ title }: { title: string }) {
  return <h2>{title}</h2>
}
```

`string` แปลว่าค่านี้เป็นข้อความ TypeScript ช่วยบอกชนิดไว้ล่วงหน้า เพื่อให้แก้โค้ดผิดได้ก่อนรัน

## เวลาอ่านไฟล์ React ให้มองหาอะไร

- ชื่อคอมโพเนนต์ ซึ่งมักขึ้นต้นด้วยตัวพิมพ์ใหญ่
- ข้อมูลที่รับเข้ามาผ่าน `props`
- สิ่งที่อยู่หลัง `return` เพราะนั่นคือสิ่งที่ผู้ใช้เห็น
- ฟังก์ชันที่ทำงานเมื่อผู้ใช้กดปุ่มหรือส่งฟอร์ม

รายละเอียดหน้าจอของโปรเจคยังไม่ถูกบันทึก ไปต่อได้ที่ [Frontend](/projects/job-application-tracker/frontend/)

## อ่านต่อ

- [REST API](/fundamentals/rest-api)
- [Frontend ของโปรเจค](/projects/job-application-tracker/frontend/)
