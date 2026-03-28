import React from 'react'

export default function Footer() {
  return (
    <footer style={{ padding: '3rem 2rem', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
      <div style={{ color: 'var(--gold)', fontFamily: "'Playfair Display',serif", fontSize: '1.1rem', marginBottom: 8 }}>
        🏮 ซินแส AI 風水大師
      </div>
      <p style={{ color: 'var(--text-muted)', fontSize: '.82rem' }}>
        ระบบวิเคราะห์ฮวงจุ้ยอัจฉริยะ — ศาสตร์จีนโบราณ 5,000 ปี ผสานเทคโนโลยีสมัยใหม่
      </p>
      <p style={{ color: 'var(--text-muted)', fontSize: '.75rem', marginTop: 8 }}>
        ⚠️ การวิเคราะห์นี้เป็นไปเพื่อข้อมูลประกอบการตัดสินใจ สำหรับกรณีสำคัญ แนะนำปรึกษาซินแสที่ได้รับการรับรอง
      </p>
    </footer>
  )
}
