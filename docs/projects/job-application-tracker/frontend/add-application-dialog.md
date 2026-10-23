---
title: ฟอร์มบันทึกการสมัครงานใหม่
description: ทำความเข้าใจการทำงานของ AddApplicationDialog ในการจัดการ state ของฟอร์ม ตรวจสอบความถูกต้องของข้อมูล และเพิ่มรายการสมัครงาน
outline: [2, 3]
---

# ฟอร์มบันทึกการสมัครงานใหม่

- โปรเจค: Job Application Tracker
- วันที่จด: 2026-10-19
- สถานะ: ร่าง

## 1. บทเรียนนี้เกี่ยวกับอะไร?

บทเรียนนี้อธิบายคอมโพเนนต์ `<AddApplicationDialog>` ใน `frontend/src/components/applications/add-application-dialog.tsx` หน้าต่างนี้รับชื่อบริษัท ตำแหน่ง สถานะ วันที่สมัคร และรายละเอียดเพิ่มเติม เมื่อผู้ใช้กดบันทึก คอมโพเนนต์จะส่งข้อมูลกลับไปอัปเดตรายการบนหน้าเว็บ

## 2. ไฟล์ต้นฉบับและตำแหน่งโค้ด

| ไฟล์ | ช่วงบรรทัด | ภาษา |
| --- | --- | --- |
| `frontend/src/components/applications/add-application-dialog.tsx` | 1–120 | TypeScript (React) |
| `frontend/src/lib/application-form.ts` | 1–45 | TypeScript |
| `frontend/src/lib/types.ts` | 1–30 | TypeScript |

## 3. โค้ดที่ต้องทำความเข้าใจ

```tsx
export function AddApplicationDialog({ open, onOpenChange, onAddApplication }: AddApplicationDialogProps) {
  const [formData, setFormData] = useState<ApplicationFormData>(createDefaultApplicationFormData())
  const [errors, setErrors] = useState<ApplicationFormErrors>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validateApplicationForm(formData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    onAddApplication(formData)
    setFormData(createDefaultApplicationFormData())
    setErrors({})
    onOpenChange(false)
  }
```

ช่วงนี้อยู่ใน `frontend/src/components/applications/add-application-dialog.tsx` บรรทัด 20–45

## 4. อธิบายการทำงานทีละขั้นตอน

1. คอมโพเนนต์รับ `open` สำหรับสถานะเปิดหรือปิด, `onOpenChange` สำหรับสลับสถานะนั้น และ `onAddApplication` สำหรับส่งข้อมูลเมื่อบันทึกสำเร็จ
2. `formData` เริ่มจาก `createDefaultApplicationFormData()` และ `errors` เริ่มเป็นวัตถุว่าง
3. เมื่อผู้ใช้กรอกช่อง ค่าใน `formData` เปลี่ยนตามฟิลด์นั้น
4. เมื่อกดส่ง `handleSubmit` เรียก `e.preventDefault()` เพื่อไม่ให้หน้าเว็บโหลดใหม่ แล้วเรียก `validateApplicationForm(formData)` ใน `frontend/src/lib/application-form.ts`
5. ถ้ามีข้อผิดพลาด เช่น ไม่ได้กรอกบริษัทหรือตำแหน่ง รายการนั้นถูกเก็บใน `errors` แล้วแสดงข้อความใต้ช่องกรอก
6. ถ้าข้อมูลครบ ฟังก์ชันส่ง `formData` ผ่าน `onAddApplication(formData)` ล้างฟอร์ม แล้วปิดหน้าต่างด้วย `onOpenChange(false)`

## 5. คำศัพท์เทคนิคที่ควรรู้

| คำ | ความหมายในบทนี้ |
| --- | --- |
| Controlled Component | ฟอร์มที่ค่าในช่องกรอกถูกผูกกับ React state ชื่อ `formData` |
| Validation | การตรวจว่าข้อมูลครบและใช้ได้ก่อนบันทึก |
| Callback | ฟังก์ชัน `onAddApplication` ที่ `ApplicationsPage` ส่งเข้ามา เพื่อเรียกเมื่อบันทึกเสร็จ |

## 6. ตัวอย่างการทำงานจริง

ผู้ใช้เปิดหน้าต่างเพิ่มการสมัครงาน กรอกบริษัท Google และตำแหน่ง Software Engineer แต่ยังไม่กรอกวันที่สมัคร เมื่อกดบันทึก `validateApplicationForm` พบข้อผิดพลาดและแสดงข้อความใต้ช่องวันที่ พอกรอกวันที่ครบแล้วกดบันทึกอีกครั้ง รายการใหม่ถูกส่งไปเพิ่มใน `ApplicationsPage`

## 7. ความสัมพันธ์กับไฟล์อื่น

- ถูกเรียกจาก `frontend/src/pages/applications-page.tsx`
- เรียกต่อไปที่ `frontend/src/lib/application-form.ts` ผ่าน `validateApplicationForm` และ `createDefaultApplicationFormData`
- ใช้ชนิด `ApplicationFormData` และ `ApplicationFormErrors` จาก `frontend/src/lib/types.ts`

## 8. สรุปสิ่งที่ควรจำ

- การตรวจข้อมูลแยกไว้ที่ `frontend/src/lib/application-form.ts` ทำให้ไฟล์ของหน้าต่างอ่านง่ายขึ้น
- รายการใหม่ยังอยู่ใน React state ฝั่ง Frontend ยังไม่ถูกส่งไปที่ Backend

## 9. คำถามทบทวนความเข้าใจ

1. `validateApplicationForm` ทำอะไรก่อนบันทึก
   ตรวจว่าผู้ใช้กรอกครบตามเงื่อนไขหรือไม่ ถ้าไม่ครบจะยังไม่บันทึก
2. ทำไมต้องเรียก `setFormData(createDefaultApplicationFormData())` หลังส่งข้อมูลสำเร็จ
   เพื่อล้างฟอร์มให้ว่าง พร้อมสำหรับครั้งถัดไป
3. ถ้าจะเพิ่มช่องหมายเหตุ ต้องแก้ไฟล์ใด
   แก้ `frontend/src/lib/types.ts` เพื่อเพิ่มชนิด, `frontend/src/lib/application-form.ts` เพื่อใส่ค่าเริ่มต้นและการตรวจ และ `add-application-dialog.tsx` เพื่อเพิ่มช่องในหน้าจอ
