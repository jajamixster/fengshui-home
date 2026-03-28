import React, { useState } from 'react'
import { roomsData } from '../data/roomsData'

export default function RoomGuide() {
  const [activeRoom, setActiveRoom] = useState(roomsData[0].id)
  const room = roomsData.find(r => r.id === activeRoom)

  return (
    <section id="rooms">
      <div className="container">
        <div className="section-header">
          <h2>Room Feng Shui Guide</h2>
          <div className="cn-sub">房間風水指南 — คู่มือฮวงจุ้ยแต่ละห้อง</div>
          <p>กฎสำคัญ สิ่งที่ควรทำ/ไม่ควรทำ สีที่แนะนำ พร้อมภาพประกอบ และสรุปคำแนะนำแบบครบวงจร</p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {roomsData.map(r => (
            <button key={r.id} onClick={() => setActiveRoom(r.id)} style={{
              padding: '10px 22px', borderRadius: 50, border: `1px solid ${activeRoom === r.id ? 'var(--gold)' : 'var(--border)'}`,
              background: activeRoom === r.id ? 'rgba(212,168,83,0.12)' : 'var(--bg-card)',
              color: activeRoom === r.id ? 'var(--gold)' : 'var(--text-secondary)',
              fontSize: '.88rem', fontFamily: 'inherit', cursor: 'pointer', transition: 'all .2s',
              display: 'flex', alignItems: 'center', gap: 8
            }}>
              {r.icon} {r.nameTh}
            </button>
          ))}
        </div>

        {/* Content */}
        {room && (
          <div key={room.id} className="fade-up">
            {/* Hero image placeholder */}
            <div style={{
              width: '100%', height: 220, borderRadius: 16, background: 'var(--bg-surface)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1.5rem', gap: 8, color: 'var(--text-muted)', fontSize: '.85rem'
            }}>
              <span style={{ fontSize: '4rem' }}>{room.heroEmoji}</span>
              {room.name} — {room.cn}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }} className="room-grid">
              {/* Left: Rules */}
              <div className="card" style={{ padding: '2rem' }}>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.5rem', color: 'var(--gold)', marginBottom: 4 }}>
                  {room.icon} {room.name}
                </h3>
                <div style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>{room.cn}</div>

                <h4 style={{ color: '#4CAF50', marginBottom: 10 }}>✅ สิ่งที่ควรทำ (Do's)</h4>
                <ul style={{ listStyle: 'none' }}>
                  {room.dos.map((d, i) => {
                    const [title, ...rest] = d.split(' — ')
                    return (
                      <li key={i} style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: '1px solid rgba(42,42,62,0.5)' }}>
                        <div style={{ width: 30, height: 30, minWidth: 30, borderRadius: 8, background: 'rgba(76,175,80,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.8rem' }}>✔</div>
                        <div style={{ fontSize: '.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                          <strong style={{ color: 'var(--text-primary)' }}>{title}</strong>
                          {rest.length > 0 && ` — ${rest.join(' — ')}`}
                        </div>
                      </li>
                    )
                  })}
                </ul>

                <h4 style={{ color: 'var(--red)', margin: '16px 0 10px' }}>❌ สิ่งที่ไม่ควรทำ (Don'ts)</h4>
                <ul style={{ listStyle: 'none' }}>
                  {room.donts.map((d, i) => {
                    const [title, ...rest] = d.split(' — ')
                    return (
                      <li key={i} style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: '1px solid rgba(42,42,62,0.5)' }}>
                        <div style={{ width: 30, height: 30, minWidth: 30, borderRadius: 8, background: 'rgba(194,59,34,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.8rem' }}>✘</div>
                        <div style={{ fontSize: '.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                          <strong style={{ color: 'var(--text-primary)' }}>{title}</strong>
                          {rest.length > 0 && ` — ${rest.join(' — ')}`}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* Right: Tips + Colors + Summary */}
              <div>
                <div className="card" style={{ padding: '2rem', marginBottom: '1rem' }}>
                  <h4 style={{ color: 'var(--gold)', marginBottom: '1rem', fontSize: '1rem' }}>✨ เคล็ดลับเสริมฮวงจุ้ย</h4>
                  {room.tips.map((t, i) => (
                    <div key={i} style={{ background: 'var(--bg-surface)', borderRadius: 12, padding: '1rem 1.2rem', marginBottom: 10 }}>
                      <p style={{ fontSize: '.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{t}</p>
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <h4 style={{ color: 'var(--gold)', marginBottom: '.6rem', fontSize: '.95rem' }}>🎨 สีที่แนะนำ</h4>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {room.colors.map(c => (
                      <div key={c.c} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                        <div style={{ width: 40, height: 40, borderRadius: 10, background: c.c, border: '2px solid rgba(255,255,255,0.08)', transition: 'transform .2s', cursor: 'default' }}
                          onMouseEnter={e => e.target.style.transform = 'scale(1.15)'}
                          onMouseLeave={e => e.target.style.transform = 'scale(1)'} />
                        <span style={{ fontSize: '.68rem', color: 'var(--text-muted)' }}>{c.n}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="summary-box">
                  <h4>📖 สรุปฮวงจุ้ย{room.nameTh}</h4>
                  <p>{room.summary}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <style>{`@media(max-width:900px){.room-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
