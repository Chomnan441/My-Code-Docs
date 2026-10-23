---
layout: home
markdownStyles: false

hero:
  name: "My Code Docs"
  text: "เรียนรู้โค้ด เข้าใจการทำงานจริง"
  tagline: "คลังความรู้ส่วนตัวสำหรับทำความเข้าใจ Source Code จากโปรเจคที่พัฒนาด้วย Cursor และ ChatGPT"
  actions:
    - theme: brand
      text: เริ่มเรียนรู้
      link: /fundamentals/
    - theme: alt
      text: สำรวจโปรเจค
      link: /projects/

# เพิ่มบทเรียนล่าสุดโดยใส่รายการใหม่ใต้ recent
projects:
  - title: "Job Application Tracker"
    kicker: "React · TypeScript · Go"
    description: "ระบบติดตามและบันทึกสถานะการสมัครงาน พัฒนาด้วย React, Tailwind CSS และ Go HTTP Server"
    status: "อ่านจากซอร์สโค้ดแล้ว"
    link: "/projects/job-application-tracker/"

fundamentals:
  - title: "Go Basics"
    description: "คำสั่ง ตัวแปร และฟังก์ชันพื้นฐานของภาษา Go ที่ใช้เขียน Backend"
    link: "/fundamentals/go/"
  - title: "React Basics"
    description: "คอมโพเนนต์และ JSX ซึ่งเป็นจุดเริ่มตอนอ่านโค้ดฝั่งหน้าเว็บ"
    link: "/fundamentals/react/"
  - title: "REST API"
    description: "วิธีที่หน้าเว็บคุยกับเซิร์ฟเวอร์ผ่านคำขอ HTTP และ JSON"
    link: "/fundamentals/rest-api"
  - title: "SQL & PostgreSQL"
    description: "ตาราง แถว และคำสั่ง SQL ที่ใช้คุยกับฐานข้อมูล"
    link: "/fundamentals/postgresql"
  - title: "Git & GitHub"
    description: "การบันทึกการเปลี่ยนแปลงและส่งโค้ดขึ้น GitHub"
    link: "/fundamentals/git-github"

notes:
  - title: "บันทึกทั้งหมด"
    description: "จุดเริ่มของบันทึก และวิธีเพิ่มบทเรียนใหม่"
    link: "/notes/"
  - title: "สิ่งที่เรียนรู้"
    description: "สรุปสั้น ๆ ของเรื่องที่ควรกลับมาอ่านซ้ำ"
    link: "/notes/#learned"
  - title: "คำศัพท์ที่ควรจำ"
    description: "คำเทคนิคที่ใช้บ่อย พร้อมความหมายแบบสั้น"
    link: "/notes/glossary"

recent:
  - title: "ฟอร์มบันทึกการสมัครงานใหม่"
    detail: "การจัดการ state ของฟอร์ม การตรวจข้อมูล และการอัปเดตรายการบนหน้าเว็บ"
    link: "/projects/job-application-tracker/frontend/add-application-dialog"
  - title: "การกรองข้อมูลรายการสมัครงาน"
    detail: "การใช้ useMemo กรองรายการตามคำค้นหาและสถานะในหน้า Applications"
    link: "/projects/job-application-tracker/frontend/applications-state-and-filtering"
  - title: "Go HTTP Server และ Health Check"
    detail: "โครงสร้างเซิร์ฟเวอร์ด้วย net/http และเส้นทาง GET /health"
    link: "/projects/job-application-tracker/backend/health-check-server"
---

<script setup>
import HomeSections from './.vitepress/theme/components/HomeSections.vue'
</script>

<HomeSections />
