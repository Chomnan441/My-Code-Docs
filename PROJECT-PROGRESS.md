# ความคืบหน้า My Code Docs

อัปเดต: 2026-10-23  
ขอบเขตของไฟล์นี้คือเว็บเอกสาร `my-code-docs` ไม่ใช่ความคืบหน้าการพัฒนาแอป Job Application Tracker

งานเอกสารที่ค้างถูก commit และ push แล้วก่อนเขียนไฟล์นี้

| รายการ | ค่า |
| --- | --- |
| Branch | `main` |
| Commit | `62b95f9` |
| ข้อความ | `docs: explain Job Application Tracker from its source` |
| Remote | https://github.com/Chomnan441/My-Code-Docs |

## สรุป

โครงเว็บ หน้าพื้นฐาน และระบบเผยแพร่ขึ้น GitHub Pages ใช้ได้แล้ว

โปรเจกต์แรกในคลังคือ Job Application Tracker ห้าหน้าโครงถูกเติมจากซอร์สโค้ดแล้ว และมีบทเรียนลึกสามบท สถานะของทั้งสามบทยังเป็น `ร่าง`

ส่วนที่ยังว่างคืองานอธิบายรายพฤติกรรมที่เหลือของ Frontend และงานตรวจความสอดคล้องของบางประโยคกับไฟล์ต้นทาง

## ทำเสร็จแล้ว

### ตัวเว็บ

- VitePress 2 ภาษาไทย เมนู แถบข้าง ค้นหาในเครื่อง และหน้าแรก
- หน้าแรกแบ่งเป็นโปรเจกต์ พื้นฐาน บันทึก และบทเรียนล่าสุด
- เทมเพลตบทเรียน 9 หัวข้อที่ `templates/code-explanation.md`
- คู่มือรันใน `README.md` คำสั่งคือ `npm run docs:dev`, `docs:build`, `docs:preview`
- GitHub Actions deploy ขึ้น GitHub Pages เมื่อ push สาขา `main`
- `base` ของเว็บคือ `/My-Code-Docs/`

### พื้นฐานและบันทึก

หน้าเหล่านี้เป็นความรู้ทั่วไปสำหรับเปิดไฟล์ มีลิงก์กลับไปหน้าโปรเจกต์ที่เกี่ยวข้องแล้วในบางบท

- Go Basics
- React Basics
- REST API
- SQL & PostgreSQL ระบุแล้วว่า Job Application Tracker ยังไม่เชื่อมฐานข้อมูล
- Git & GitHub
- บันทึกการเรียนรู้ และคำศัพท์ที่ควรจำ

### Job Application Tracker ที่ลงจากซอร์สแล้ว

ชุดนี้ถูกรวบรวมวันที่ 2026-10-19 แล้วลงเว็บใน commit `62b95f9`

| หน้า | ไฟล์ | สถานะเนื้อหา |
| --- | --- | --- |
| ภาพรวม | `docs/projects/job-application-tracker/index.md` | เติมจากซอร์ส เทคโนโลยีและสิ่งที่ผู้ใช้ทำได้ |
| Frontend | `docs/projects/job-application-tracker/frontend/index.md` | แผนที่หน้าจอ คอมโพเนนต์ และที่เก็บข้อมูลจำลอง |
| ฟอร์มเพิ่มการสมัครงาน | `docs/projects/job-application-tracker/frontend/add-application-dialog.md` | บทเรียน 9 หัวข้อ สถานะร่าง |
| การกรองรายการสมัครงาน | `docs/projects/job-application-tracker/frontend/applications-state-and-filtering.md` | บทเรียน 9 หัวข้อ สถานะร่าง |
| Backend | `docs/projects/job-application-tracker/backend/index.md` | `net/http` และ `GET /health` |
| Go HTTP Server และ Health Check | `docs/projects/job-application-tracker/backend/health-check-server.md` | บทเรียน 9 หัวข้อ สถานะร่าง |
| Database | `docs/projects/job-application-tracker/database/index.md` | ชนิด `Application` ในหน่วยความจำ ไม่มีฐานข้อมูลภายนอก |
| การทำงานร่วมกัน | `docs/projects/job-application-tracker/architecture.md` | เส้นทางเพิ่มและกรองรายการบนหน้าเว็บ และเส้นทาง health check |

สิ่งที่รอบนี้แก้ให้ตรงซอร์ส

- เอาคำว่า Backend ใช้ Gin และมี PostgreSQL ออกจากหน้าที่ยังเขียนไว้แบบนั้น
- หน้าแรกเปลี่ยนสถานะโปรเจกต์เป็น "อ่านจากซอร์สโค้ดแล้ว"
- แถบข้าง หน้าแรก บันทึก และคำศัพท์ชี้มาที่บทเรียนสามบท
- คำศัพท์ที่เพิ่มคือ Controlled Component, Derived state, ServeMux

ข้อเท็จจริงจากหน้าที่ลงแล้ว และควรถือเป็นฐานตอนเขียนบทถัดไป

- หน้าเว็บเก็บรายการสมัครงานใน React state เริ่มจาก `mockApplications`
- Frontend ที่ตรวจแล้วยังไม่พบ `fetch` ไปหา Backend
- Backend เปิดพอร์ต `8080` และมีเส้นทาง `GET /health` ตอบ `{"status":"ok"}`
- ยังไม่พบการเชื่อม PostgreSQL หรือ repository ใน Backend

## ยังเหลือ

### บทเรียนที่ยังไม่มีหน้าของตัวเอง

หน้า Frontend เอ่ยไฟล์เหล่านี้ไว้แล้ว แต่ยังไม่มีบทเรียน 9 หัวข้อ

- Dashboard ใน `frontend/src/pages/dashboard-page.tsx` รวม `StatCard`, `InsightsSummary`, `RecentApplications`
- การสลับหน้า Dashboard กับ Applications จาก `frontend/src/App.tsx`
- ตาราง การ์ด และป้ายสถานะ คือ `ApplicationTable`, `ApplicationCard`, `ApplicationStatusBadge`
- โครงแอป `app-shell.tsx`, `app-header.tsx`, `app-sidebar.tsx`, `mobile-nav.tsx`
- ชนิดข้อมูลและข้อมูลจำลองเป็นบทสั้นของตัวเอง ถ้าต้องการลงลึกกว่าหน้า Database ที่มีอยู่

Backend ยังมีบทเรียนเดียว เพราะซอร์สที่อ่านมีเส้นทาง `/health` เส้นทางใหม่ควรได้บทเรียนเมื่อมีในโค้ดจริง

### งานตรวจและความสอดคล้อง

- ทั้งสามบทเรียนยังเป็น `ร่าง` เจ้าของยังไม่ได้ติ๊กว่าอ่านแล้วเข้าใจ
- หน้าการทำงานร่วมกันเล่าว่ามีไคลเอ็นต์เรียก `GET /health` ส่วนหน้า Frontend บอกว่ายังไม่พบ `fetch` รอบหน้าควรระบุให้ได้ว่าใครเป็นคนเรียกเส้นทางนี้ หรือเขียนว่ายังไม่พบตัวเรียกใน Frontend
- หน้าพื้นฐานยังใช้ตัวอย่างทั่วไป ยังไม่ยกช่วงโค้ดจริงจากบทเรียนมาประกอบ
- ไฟล์นี้กับ `INTENT-FOR-CHATGPT.md` ยังไม่ได้ commit

### นอกโปรเจกต์แรก

ยังไม่มีโปรเจกต์ที่สองใน `docs/projects/` เมื่อจะเพิ่ม ให้ ChatGPT อ่านโปรเจกต์นั้น แล้วส่งห้าหน้าโครงกับบทเรียนชุดแรกมาให้ Cursor

## คำแนะนำจาก Cursor

1. ให้ ChatGPT อ่านทีละพฤติกรรม แล้วส่งหนึ่งถึงสามบทเรียนต่อครั้ง พร้อมรายการไฟล์เก่าที่ต้องแก้ ชุดถัดไปที่คุ้มที่สุดคือหน้า Dashboard เพราะผู้ใช้เห็นเป็นหน้าแรกและยังไม่มีบทเรียน
2. เวลาเอาข้อความจาก ChatGPT มาลงเว็บ ให้วางในแชท Cursor ของโปรเจกต์ `my-code-docs` ทั้งก้อนที่ขึ้นต้นด้วย `=== ไฟล์: ... ===` Cursor จะได้สร้างไฟล์ เมนูข้าง หน้าแรก บันทึก และคำศัพท์ในรอบเดียว
3. ก่อนปิดงานแต่ละชุด ให้อ่านสามบทที่เป็น `ร่าง` บนเว็บจริง แล้วบอก Cursor ว่าบทไหนเข้าใจแล้ว เพื่อเปลี่ยนสถานะออกจาก `ร่าง` คำตอบในข้อ 9 มีไว้ให้ใช้ตอนอ่านทวน
4. รอบวางเนื้อหาถัดไป ให้ ChatGPT ตอบให้ชัดว่าใครเรียก `GET /health` แล้วให้ Cursor แก้ `architecture.md` ให้ตรงกับผลนั้น
5. เมื่อบทเรียนใหม่อยู่ตัวแล้ว ค่อยเพิ่มลิงก์ "ดูของจริงในโปรเจกต์" จากหน้าพื้นฐานที่เกี่ยวข้อง หน้า Go ชี้มาที่ Backend แล้ว หน้า React ยังชี้มาที่บทฟอร์มและการกรองได้
6. เก็บไฟล์สั่งงานอย่าง `INTENT-FOR-CHATGPT.md` กับไฟล์นี้ไว้ที่รากของรีโป ให้อยู่นอก `docs/` จะได้ไม่โผล่เป็นบทเรียนบนเว็บ
7. ถ้า Job Application Tracker ได้เส้นทางบันทึกข้อมูลหรือฐานข้อมูลจริง ให้เขียนบทจากไฟล์ใหม่นั้น แล้วแทนที่ประโยค "ยังไม่เชื่อมฐานข้อมูล" ในหน้า Database, สถาปัตยกรรม และ PostgreSQL พร้อมกัน
