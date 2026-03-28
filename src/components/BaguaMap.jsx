import React, { useState } from 'react'
import { baguaInfo, gridOrder } from '../data/baguaData'

function getElBg(el) {
  if (el.includes('Wood')) return 'rgba(76,175,80,0.06)'
  if (el.includes('Fire')) return 'rgba(255,87,34,0.06)'
  if (el.includes('Earth')) return 'rgba(255,152,0,0.06)'
  if (el.includes('Metal')) return 'rgba(207,216,220,0.06)'
  if (el.includes('Water')) return 'rgba(33,150,243,0.06)'
  return 'rgba(212,168,83,0.06)'
}

export default function BaguaMap() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="bagua">
      <div className="container">
        <div className="section-header">
          <h2>Bagua Map</h2>
          <div className="cn-sub">八卦方位圖 — แผนที่ 8 ทิศพลังงานชีวิต</div>
          <p>Bagua คือเครื่องมือหลักของฮวงจุ้ย ใช้วิเคราะห์ว่าแต่ละทิศของบ้านส่งผลต่อด้านใดของชีวิต คลิกแต่ละทิศเพื่อดูรายละเอียด</p>
        </div>

        {/* Explanation box */}
        <div className="card" style={{ maxWidth: 800, margin: '0 auto 2.5rem', padding: '2rem' }}>
          <h3 style={{ color: 'var(--gold)', fontFamily: "'Playfair Display',serif", marginBottom: '1rem', fontSize: '1.2rem' }}>
            📖 Bagua Map คืออะไร? ใช้อย่างไร?
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem', lineHeight: 1.8, marginBottom: '.8rem' }}>
            Bagua (八卦) คือแผนที่พลังงาน 8 ทิศ + 1 ศูนย์กลาง ที่ซ้อนทับกับแปลนบ้าน โดยใช้ <strong style={{ color: 'var(--gold)' }}>เข็มทิศจริง</strong> วัดทิศที่ประตูหน้าบ้านหันออกไป แล้ววางแผนที่ Bagua ตาม
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '.9rem', lineHeight: 1.8, marginBottom: '.8rem' }}>
            <strong style={{ color: 'var(--gold)' }}>สำคัญ:</strong> Bagua ไม่ได้บอกว่า "บ้านต้องหันทิศไหน" แต่บอกว่า <strong style={{ color: 'var(--text-primary)' }}>พื้นที่ทิศนั้นๆ ในบ้านคุณ ส่งผลต่อด้านใดของชีวิต</strong> — ถ้าพื้นที่นั้นสะอาด สว่าง มีธาตุถูกต้อง = ด้านนั้นของชีวิตดี ถ้ารก มืด ธาตุผิด = ด้านนั้นมีปัญหา
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 12, marginTop: '1rem' }}>
            {[
              { icon: '🏠', title: 'ใช้กับตัวบ้าน', text: 'วาง Bagua ทับแปลนบ้าน จับคู่ทิศเข็มทิศจริง' },
              { icon: '📍', title: 'ใช้กับแต่ละห้อง', text: 'วาง Bagua ย่อยทับแต่ละห้องได้อีกชั้น' },
              { icon: '🧭', title: 'วัดจากจุดศูนย์กลาง', text: 'ยืนกลางบ้าน ใช้เข็มทิศวัดทิศ แบ่ง 9 ช่อง' },
              { icon: '🚪', title: 'ทิศที่บ้านหัน', text: 'คือทิศที่ประตูหน้าเปิดออก ไม่ใช่ทิศ "ด้านหน้า"' }
            ].map(item => (
              <div key={item.title} style={{ padding: 12, background: 'var(--bg-surface)', borderRadius: 10, fontSize: '.82rem', color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: 4 }}>{item.icon} {item.title}</strong>
                {item.text}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,140px)', gridTemplateRows: 'repeat(3,140px)', gap: 6 }}>
            {gridOrder.map(pos => {
              const info = baguaInfo.find(b => b.pos === pos)
              const isActive = selected?.pos === pos
              return (
                <div key={pos} onClick={() => setSelected(info)} style={{
                  borderRadius: 14, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  textAlign: 'center', cursor: 'pointer', transition: 'all .3s',
                  border: `1.5px solid ${isActive ? 'var(--gold)' : 'transparent'}`,
                  boxShadow: isActive ? 'var(--shadow-gold)' : 'none',
                  background: getElBg(info.element), padding: 8,
                  transform: isActive ? 'scale(1.05)' : 'scale(1)'
                }}>
                  <div style={{ fontSize: '.65rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: 2 }}>{pos}</div>
                  <div style={{ fontSize: '1.1rem', marginBottom: 4 }}>{info.trigram}</div>
                  <div style={{ fontSize: '.78rem', fontWeight: 600, color: info.color }}>{info.name}</div>
                  <div style={{ fontSize: '.68rem', color: 'var(--text-muted)' }}>{info.nameTh}</div>
                </div>
              )
            })}
          </div>

          {/* Detail */}
          <div className="card" style={{ maxWidth: 400, minHeight: 420, padding: '2rem' }}>
            {selected ? (
              <div className="fade-up">
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.3rem', color: 'var(--gold)', marginBottom: 4 }}>
                  {selected.trigram} {selected.name}
                </h3>
                <div style={{ color: 'var(--text-muted)', fontSize: '.85rem', marginBottom: '1rem' }}>
                  {selected.pos} — {selected.cn} — {selected.nameTh}
                </div>
                {[
                  ['🌐 ทิศ', selected.pos],
                  ['☯ ธาตุ', selected.element],
                  ['💡 ด้านชีวิต', selected.lifeArea],
                  ['✨ เสริมด้วย', selected.enhance]
                ].map(([label, value]) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ color: 'var(--text-muted)', fontSize: '.82rem' }}>{label}</span>
                    <span style={{ fontWeight: 600, fontSize: '.85rem', textAlign: 'right', maxWidth: 220 }}>{value}</span>
                  </div>
                ))}
                <div style={{ marginTop: '1rem' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '.82rem', marginBottom: 8 }}>🎨 สีแนะนำ</div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    {selected.colors.map(c => <div key={c} style={{ width: 28, height: 28, borderRadius: 8, background: c, border: '2px solid rgba(255,255,255,0.1)' }} />)}
                  </div>
                </div>
                <div style={{ marginTop: '1rem', padding: 12, background: 'var(--bg-surface)', borderRadius: 10 }}>
                  <h5 style={{ color: 'var(--gold)', fontSize: '.85rem', marginBottom: 6 }}>📖 ใช้อย่างไรในบ้านจริง?</h5>
                  <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{selected.howTo}</p>
                </div>
                <div style={{ marginTop: '.8rem', padding: 12, background: 'rgba(212,168,83,0.05)', borderRadius: 10, border: '1px solid rgba(212,168,83,0.1)' }}>
                  <h5 style={{ color: 'var(--gold)', fontSize: '.85rem', marginBottom: 6 }}>💡 หมายความว่าอะไร?</h5>
                  <p style={{ fontSize: '.8rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{selected.whatItMeans}</p>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-muted)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '.5rem' }}>👆</div>
                คลิกที่ทิศทางด้านซ้ายเพื่อดูข้อมูลธาตุ สีแนะนำ ด้านชีวิต และวิธีเสริมพลังงาน
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){#bagua .container>div:last-child{flex-direction:column;align-items:center}}`}</style>
    </section>
  )
}
