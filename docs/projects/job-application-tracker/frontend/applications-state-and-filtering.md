---
title: การกรองข้อมูลรายการสมัครงาน
description: เจาะลึกการกรองข้อมูลตามคำค้นหาและสถานะการสมัครงานในหน้า ApplicationsPage
outline: [2, 3]
---

# การกรองข้อมูลรายการสมัครงาน

- โปรเจค: Job Application Tracker
- วันที่จด: 2026-10-19
- สถานะ: ร่าง

## 1. บทเรียนนี้เกี่ยวกับอะไร?

บทเรียนนี้อธิบาย state และวิธีกรองข้อมูลใน `ApplicationsPage` ที่ `frontend/src/pages/applications-page.tsx` หน้านี้ค้นจากชื่อบริษัทหรือตำแหน่ง กรองตามสถานะ และสลับการแสดงผลระหว่างตารางกับการ์ด

## 2. ไฟล์ต้นฉบับและตำแหน่งโค้ด

| ไฟล์ | ช่วงบรรทัด | ภาษา |
| --- | --- | --- |
| `frontend/src/pages/applications-page.tsx` | 1–110 | TypeScript (React) |
| `frontend/src/data/mock-applications.ts` | 1–50 | TypeScript |

## 3. โค้ดที่ต้องทำความเข้าใจ

```tsx
export function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>(mockApplications)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('ALL')
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table')

  const filteredApplications = useMemo(() => {
    return applications.filter((app) => {
      const matchesSearch =
        app.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.position.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesStatus = statusFilter === 'ALL' || app.status === statusFilter

      return matchesSearch && matchesStatus
    })
  }, [applications, searchQuery, statusFilter])
```

ช่วงนี้อยู่ใน `frontend/src/pages/applications-page.tsx` บรรทัด 15–40

## 4. อธิบายการทำงานทีละขั้นตอน

1. `applications` เก็บรายการทั้งหมด และเริ่มจาก `mockApplications`
2. `searchQuery` เก็บข้อความจากช่องค้นหา `statusFilter` เก็บสถานะที่เลือก โดยเริ่มที่ `'ALL'` และ `viewMode` เก็บรูปแบบการแสดงผลเป็น `'table'` หรือ `'cards'`
3. `useMemo` กรอง `applications` ใหม่เมื่อรายการ คำค้นหา หรือสถานะเปลี่ยน
4. `matchesSearch` แปลงข้อความเป็นตัวพิมพ์เล็ก แล้วตรวจว่าคำค้นอยู่ใน `company` หรือ `position`
5. `matchesStatus` ผ่านทุกรายการเมื่อตัวกรองเป็น `'ALL'` นอกนั้นต้องตรงกับ `app.status`
6. ผลลัพธ์ `filteredApplications` ถูกส่งไปที่ `<ApplicationTable>` หรือ `<ApplicationCard>` ตาม `viewMode`

## 5. คำศัพท์เทคนิคที่ควรรู้

| คำ | ความหมายในบทนี้ |
| --- | --- |
| `useMemo` | Hook ที่จำผลกรองไว้ และคำนวณใหม่เมื่อค่าในรายการ dependency เปลี่ยน |
| Derived state | รายการที่คำนวณจาก state อื่น จึงไม่ต้องเก็บซ้ำอีกชุด |

## 6. ตัวอย่างการทำงานจริง

ผู้ใช้พิมพ์ Developer แล้วเลือกสถานะ `INTERVIEWING` ฟังก์ชันใน `useMemo` คัดเฉพาะรายการที่ชื่อบริษัทหรือตำแหน่งมีคำว่า Developer และสถานะเป็น `INTERVIEWING` แล้วแสดงผลนั้นบนหน้าจอ

## 7. ความสัมพันธ์กับไฟล์อื่น

- ถูกเรียกจาก `frontend/src/App.tsx`
- เรียกต่อไปที่ `frontend/src/components/applications/application-table.tsx`, `frontend/src/components/applications/application-card.tsx` และ `frontend/src/components/applications/add-application-dialog.tsx`
- ข้อมูลตั้งต้นมาจาก `frontend/src/data/mock-applications.ts`

## 8. สรุปสิ่งที่ควรจำ

- `useMemo` ช่วยไม่ให้วนกรองรายการใหม่ทุกครั้งที่คอมโพเนนต์เรนเดอร์จากเหตุอื่น
- การคำนวณรายการที่แสดงจาก state หลัก ทำให้ผลบนหน้าจอตรงกับคำค้นและตัวกรองเสมอ

## 9. คำถามทบทวนความเข้าใจ

1. `useMemo` มีประโยชน์อย่างไรในหน้านี้
   จำผลกรองไว้ และคำนวณใหม่เมื่อ `applications`, `searchQuery` หรือ `statusFilter` เปลี่ยน
2. ถ้าต้องการค้นจาก `location` ด้วย ต้องเพิ่มตรงไหน
   เพิ่มเงื่อนไข `app.location` ใน `matchesSearch` ให้ตรวจคำค้นแบบเดียวกับชื่อบริษัทและตำแหน่ง
3. `viewMode` ใช้ทำอะไร
   สลับการแสดงผลระหว่างตาราง `'table'` กับการ์ด `'cards'`
