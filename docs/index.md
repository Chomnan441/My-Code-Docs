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
    kicker: "React · Go (Gin) · PostgreSQL"
    description: "โปรเจคแรกในคลังนี้ ใช้ฝึกอ่านโค้ดฝั่งหน้าเว็บ ฝั่งเซิร์ฟเวอร์ และฐานข้อมูล รายละเอียดจากซอร์สโค้ดจะถูกเติมภายหลัง"
    status: "โครงบทเรียน"
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
  - title: "ภาพรวม Job Application Tracker"
    detail: "โครงของโปรเจคแรก ยังไม่ลงรายละเอียดซอร์สโค้ด"
    link: "/projects/job-application-tracker/"
  - title: "Frontend"
    detail: "รอเติมหลังจากอ่านโค้ด React ของโปรเจค"
    link: "/projects/job-application-tracker/frontend/"
  - title: "Backend"
    detail: "รอเติมหลังจากอ่านโค้ด Go ของโปรเจค"
    link: "/projects/job-application-tracker/backend/"
  - title: "Database"
    detail: "รอเติมหลังจากอ่านโครงสร้าง PostgreSQL ของโปรเจค"
    link: "/projects/job-application-tracker/database/"
---

<script setup>
import HomeSections from './.vitepress/theme/components/HomeSections.vue'
</script>

<HomeSections />
