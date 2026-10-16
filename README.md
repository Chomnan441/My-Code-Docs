# My Code Docs

เอกสารส่วนตัวสำหรับจดบันทึกสิ่งที่เรียนรู้จากการเขียนโค้ด สร้างเป็นเว็บไซต์ด้วย [VitePress](https://vitepress.dev/) เพื่อใช้เป็นพอร์ตโฟลิโอและแหล่งอ้างอิงของตัวเอง

## เทคโนโลยี

- [VitePress](https://vitepress.dev/) 2
- Node.js

## วิธีรัน

ต้องมี Node.js ติดตั้งอยู่ก่อน

```bash
npm install
npm run docs:dev
```

จากนั้นเปิดเบราว์เซอร์ที่อยู่ที่ VitePress แสดงในเทอร์มินัล (ค่าเริ่มต้นคือ `http://localhost:5173`)

## สคริปต์

| คำสั่ง | ใช้ทำอะไร |
| --- | --- |
| `npm run docs:dev` | รันเซิร์ฟเวอร์สำหรับเขียนเอกสาร |
| `npm run docs:build` | สร้างไฟล์สำหรับนำไปเผยแพร่ |
| `npm run docs:preview` | ดูผลลัพธ์หลัง build ในเครื่อง |

## โครงสร้างโปรเจกต์

```text
docs/
  index.md                 หน้าแรก
  markdown-examples.md     ตัวอย่าง Markdown
  api-examples.md          ตัวอย่าง Runtime API
  .vitepress/config.mts    การตั้งค่าเว็บไซต์
```

หน้าเอกสารอยู่ในโฟลเดอร์ `docs/` การตั้งค่าชื่อเว็บ เมนู และแถบด้านข้างอยู่ใน `docs/.vitepress/config.mts`
