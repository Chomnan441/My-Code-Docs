import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/My-Code-Docs/',
  lang: 'th',
  title: 'My Code Docs',
  description:
    'คลังความรู้ส่วนตัวสำหรับทำความเข้าใจ Source Code จากโปรเจคที่พัฒนาด้วย Cursor และ ChatGPT',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'หน้าแรก', link: '/' },
      { text: 'โปรเจค', link: '/projects/' },
      { text: 'พื้นฐานการเขียนโปรแกรม', link: '/fundamentals/' },
      { text: 'บันทึกการเรียนรู้', link: '/notes/' }
    ],

    sidebar: {
      '/projects/': [
        {
          text: 'Job Application Tracker',
          items: [
            { text: 'โปรเจคทั้งหมด', link: '/projects/' },
            { text: 'ภาพรวมโปรเจค', link: '/projects/job-application-tracker/' },
            { text: 'Frontend', link: '/projects/job-application-tracker/frontend/' },
            { text: 'Backend', link: '/projects/job-application-tracker/backend/' },
            { text: 'Database', link: '/projects/job-application-tracker/database/' },
            {
              text: 'การทำงานร่วมกันของระบบ',
              link: '/projects/job-application-tracker/architecture'
            }
          ]
        }
      ],

      '/fundamentals/': [
        {
          text: 'พื้นฐานการเขียนโปรแกรม',
          items: [
            { text: 'ภาพรวม', link: '/fundamentals/' },
            { text: 'Go Basics', link: '/fundamentals/go/' },
            { text: 'React Basics', link: '/fundamentals/react/' },
            { text: 'REST API', link: '/fundamentals/rest-api' },
            { text: 'SQL & PostgreSQL', link: '/fundamentals/postgresql' },
            { text: 'Git & GitHub', link: '/fundamentals/git-github' }
          ]
        }
      ],

      '/notes/': [
        {
          text: 'บันทึกการเรียนรู้',
          items: [
            { text: 'บันทึกทั้งหมด', link: '/notes/' },
            { text: 'สิ่งที่เรียนรู้', link: '/notes/#learned' },
            { text: 'คำศัพท์ที่ควรจำ', link: '/notes/glossary' }
          ]
        }
      ]
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'ค้นหา',
            buttonAriaLabel: 'ค้นหาเอกสาร'
          },
          modal: {
            displayDetails: 'แสดงรายละเอียด',
            resetButtonTitle: 'ล้างคำค้น',
            backButtonTitle: 'ปิดรายละเอียด',
            noResultsText: 'ไม่พบผลลัพธ์สำหรับ',
            footer: {
              selectText: 'เลือก',
              navigateText: 'เลื่อน',
              closeText: 'ปิด'
            }
          }
        }
      }
    },

    outline: {
      label: 'ในหน้านี้',
      level: [2, 3]
    },

    docFooter: {
      prev: 'หน้าก่อนหน้า',
      next: 'หน้าถัดไป'
    },

    darkModeSwitchLabel: 'ธีม',
    lightModeSwitchTitle: 'เปลี่ยนเป็นโหมดสว่าง',
    darkModeSwitchTitle: 'เปลี่ยนเป็นโหมดมืด',
    sidebarMenuLabel: 'เมนู',
    returnToTopLabel: 'กลับขึ้นด้านบน',
    skipToContentLabel: 'ข้ามไปยังเนื้อหา',
    navMenuLabel: 'เมนูหลัก',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Chomnan441/My-Code-Docs' }
    ],

    footer: {
      message: 'คลังความรู้ส่วนตัวสำหรับอ่านและทำความเข้าใจซอร์สโค้ด',
      copyright: 'My Code Docs'
    }
  }
})
