<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { VPLink } from 'vitepress/theme'

const { frontmatter } = useData()

const projects = computed(() => list(frontmatter.value.projects))
const fundamentals = computed(() => list(frontmatter.value.fundamentals))
const notes = computed(() => list(frontmatter.value.notes))
const recent = computed(() => list(frontmatter.value.recent))

function list(value) {
  return Array.isArray(value) ? value : []
}
</script>

<template>
  <div class="home-sections">
    <section class="home-section" aria-labelledby="home-projects">
      <header class="section-header">
        <p class="section-index">01</p>
        <div>
          <h2 id="home-projects">โปรเจคของฉัน</h2>
          <p>เลือกโปรเจค แล้วไล่อ่านจากภาพรวมไปจนถึงการทำงานของแต่ละส่วน</p>
        </div>
      </header>
      <div class="card-grid">
        <article v-for="item in projects" :key="item.link" class="doc-card">
          <p v-if="item.kicker" class="card-kicker">{{ item.kicker }}</p>
          <h3>
            <VPLink :href="item.link">{{ item.title }}</VPLink>
          </h3>
          <p>{{ item.description }}</p>
          <p v-if="item.status" class="card-status">{{ item.status }}</p>
        </article>
      </div>
    </section>

    <section class="home-section" aria-labelledby="home-fundamentals">
      <header class="section-header">
        <p class="section-index">02</p>
        <div>
          <h2 id="home-fundamentals">พื้นฐานการเขียนโปรแกรม</h2>
          <p>ความรู้ที่ใช้ตอนเปิดไฟล์แล้วอยากรู้ว่าโค้ดบรรทัดนั้นทำอะไร</p>
        </div>
      </header>
      <div class="card-grid cols-3">
        <article v-for="item in fundamentals" :key="item.link" class="doc-card">
          <h3>
            <VPLink :href="item.link">{{ item.title }}</VPLink>
          </h3>
          <p>{{ item.description }}</p>
        </article>
      </div>
    </section>

    <section class="home-section" aria-labelledby="home-notes">
      <header class="section-header">
        <p class="section-index">03</p>
        <div>
          <h2 id="home-notes">บันทึกการเรียนรู้</h2>
          <p>ที่สำหรับจดสิ่งที่เข้าใจแล้ว และคำที่ควรกลับมาอ่านซ้ำ</p>
        </div>
      </header>
      <div class="card-grid cols-3">
        <article v-for="item in notes" :key="item.link" class="doc-card">
          <h3>
            <VPLink :href="item.link">{{ item.title }}</VPLink>
          </h3>
          <p>{{ item.description }}</p>
        </article>
      </div>
    </section>

    <section class="home-section" aria-labelledby="home-recent">
      <header class="section-header">
        <p class="section-index">04</p>
        <div>
          <h2 id="home-recent">บทเรียนที่เพิ่มล่าสุด</h2>
          <p>รายการนี้แก้เองได้ในไฟล์ docs/index.md</p>
        </div>
      </header>
      <div class="lesson-panel">
        <ol class="lesson-list">
          <li v-for="item in recent" :key="item.link">
            <VPLink :href="item.link">{{ item.title }}</VPLink>
            <p>{{ item.detail }}</p>
          </li>
        </ol>
      </div>
    </section>
  </div>
</template>
