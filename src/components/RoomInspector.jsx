import React, { useState } from 'react'
import { conditionsData, penaltyMap, dirElements, dirLifeArea, dirCn, concernAdvice } from '../data/inspectorData'

const roomOptions = [
  { value: 'bedroom', label: '🛌 ห้องนอน (Bedroom)' },
  { value: 'livingroom', label: '🛋️ ห้องนั่งเล่น (Living Room)' },
  { value: 'kitchen', label: '🍳 ห้องครัว (Kitchen)' },
  { value: 'office', label: '💻 ห้องทำงาน (Office)' },
  { value: 'bathroom', label: '🚿 ห้องน้ำ (Bathroom)' },
  { value: 'dining', label: '🍽️ ห้องอาหาร (Dining)' },
  { value: 'entrance', label: '🚪 ประตูหน้าบ้าน (Entrance)' }
]

const dirOptions = [
  { value: 'N', label: '⬆ North เหนือ' }, { value: 'NE', label: '↗ Northeast ตะวันออกเฉียงเหนือ' },
  { value: 'E', label: '➡ East ตะวันออก' }, { value: 'SE', label: '↘ Southeast ตะวันออกเฉียงใต้' },
  { value: 'S', label: '⬇ South ใต้' }, { value: 'SW', label: '↙ Southwest ตะวันตกเฉียงใต้' },
  { value: 'W', label: '⬅ West ตะวันตก' }, { value: 'NW', label: '↖ Northwest ตะวันตกเฉียงเหนือ' }
]

const concernOptions = [
  { value: 'general', label: '⭐ ทั่วไป (General)' }, { value: 'health', label: '💚 สุขภาพ (Health)' },
  { value: 'wealth', label: '💰 การเงิน (Wealth)' }, { value: 'love', label: '❤ ความรัก (Relationships)' },
  { value: 'career', label: '💼 การงาน (Career)' }, { value: 'sleep', label: '💤 คุณภาพการนอน (Sleep)' }
]

const roomNameTh = { bedroom: 'ห้องนอน', livingroom: 'ห้องนั่งเล่น', kitchen: 'ห้องครัว', office: 'ห้องทำงาน', bathroom: 'ห้องน้ำ', dining: 'ห้องอาหาร', entrance: 'ประตูหน้าบ้าน' }
const concernTh = { general: 'ทั่วไป', health: 'สุขภาพ', wealth: 'การเงิน', love: 'ความรัก', career: 'การงาน', sleep: 'คุณภาพการนอน' }

export default function RoomInspector() {
  const [room, setRoom] = useState('bedroom')
  const [dir, setDir] = useState('N')
  const [concern, setConcern] = useState('general')
  const [checked, setChecked] = useState(new Set())
  const [result, setResult] = useState(null)

  const toggle = val => {
    const next = new Set(checked)
    next.has(val) ? next.delete(val) : next.add(val)
    setChecked(next)
  }

  const runInspection = () => {
    let score = 78
    const element = dirElements[dir], lifeArea = dirLifeArea[dir], trigram = dirCn[dir]
    const warnings = [], fixes = [], goods = []

    checked.forEach(c => {
      if (penaltyMap[c]) { score += penaltyMap[c].s; warnings.push(penaltyMap[c].t); fixes.push(penaltyMap[c].fix) }
    })

    if ((room === 'kitchen' && element === 'Fire') || (room === 'bathroom' && element === 'Water') || (room === 'office' && element === 'Wood')) {
      score += 8; goods.push('ธาตุห้องสอดคล้องกับธาตุประจำทิศ — ส่งเสริมพลังงานดี!')
    }
    if (room === 'bedroom' && element === 'Fire') { score -= 5; warnings.push('ห้องนอนทิศใต้ (Fire) — Yang สูง อาจนอนไม่หลับ'); fixes.push('เพิ่มธาตุดิน (เบจ เซรามิก คริสตัล) ดูดซับไฟ') }
    if (room === 'bedroom' && element === 'Water') { score += 3; goods.push('ทิศเหนือ (Water) สงบ เหมาะห้องนอน Yin') }
    if (room === 'kitchen' && element === 'Water') { score -= 5; warnings.push('ครัวทิศเหนือ (Water) — ไฟ-น้ำ ขัดแย้งถาวร'); fixes.push('เพิ่มธาตุไม้ (สีเขียว ต้นไม้) เป็นตัวกลาง') }
    if (room === 'entrance' && dir === 'SE') { score += 5; goods.push('ประตูหน้าทิศ SE (Wealth) — ดึงดูดความมั่งคั่ง!') }
    if (checked.size === 0) { score += 8; goods.push('ไม่พบปัญหาหลัก — พื้นฐานฮวงจุ้ยดี!') }

    score = Math.max(10, Math.min(100, score))

    const actions = []
    if (checked.has('leak')) actions.push({ pri: '🔴', text: 'ซ่อมก๊อกน้ำรั่วทันที (เร่งด่วนที่สุด)' })
    if (checked.has('beam_bed')) actions.push({ pri: '🔴', text: 'แก้ไขคานทับเตียง (ย้ายเตียง/ทำฝ้า)' })
    if (checked.has('mirror_bed')) actions.push({ pri: '🟠', text: 'จัดการกระจกหันเตียง' })
    if (checked.has('back_to_door')) actions.push({ pri: '🟠', text: 'หมุนเฟอร์นิเจอร์ให้เห็นประตู' })
    if (checked.has('water_fire')) actions.push({ pri: '🟠', text: 'แก้ไขเตา-อ่าง ด้วยธาตุไม้' })
    if (checked.has('clutter')) actions.push({ pri: '🟡', text: 'จัดระเบียบห้อง' })
    if (checked.has('dark_corners')) actions.push({ pri: '🟡', text: 'เพิ่มแสงมุมมืด' })
    actions.push({ pri: '🟢', text: `เสริมด้าน${concernTh[concern]}ตามคำแนะนำ` })

    setResult({ score, element, lifeArea, trigram, warnings, fixes, goods, actions })
  }

  const circ = 2 * Math.PI * 55

  return (
    <section id="inspector" style={{ background: 'linear-gradient(180deg,var(--bg-dark),rgba(20,20,32,1))' }}>
      <div className="container">
        <div className="section-header">
          <h2>Feng Shui Room Inspector</h2>
          <div className="cn-sub">風水房間檢測系統 — วิเคราะห์ให้คะแนนพร้อมแผนแก้ไข</div>
          <p>กรอกข้อมูลห้อง เลือกสภาพปัจจุบัน รับผลวิเคราะห์คะแนน คำเตือน วิธีแก้ไข และแผนการดำเนินงานเรียงตามความเร่งด่วน</p>
        </div>

        <div className="card" style={{ maxWidth: 750, margin: '0 auto', padding: '2.5rem' }}>
          <h3 style={{ fontFamily: "'Playfair Display',serif", color: 'var(--gold)', fontSize: '1.3rem', marginBottom: '.3rem' }}>🔍 ตรวจฮวงจุ้ยห้อง</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '.88rem', marginBottom: '2rem' }}>กรุณากรอกข้อมูลให้ครบเพื่อผลวิเคราะห์ที่แม่นยำที่สุด</p>

          <div className="form-row">
            <div className="form-group">
              <label>ประเภทห้อง / Room Type</label>
              <select value={room} onChange={e => setRoom(e.target.value)}>
                {roomOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>ทิศที่ห้องหันไป / Facing Direction</label>
              <select value={dir} onChange={e => setDir(e.target.value)}>
                {dirOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
          </div>

          {/* Direction explanation */}
          <div className="info-box">
            <strong>📌 "ทิศที่ห้องหันไป" หมายถึงอะไร?</strong><br />
            <strong>🛌 ห้องนอน:</strong> ทิศที่ <strong>หัวเตียง</strong> ชิดผนัง เช่น หัวเตียงชิดผนังด้านเหนือ = North<br />
            <strong>💻 ห้องทำงาน:</strong> ทิศที่คุณ <strong>หันหน้าไปขณะนั่งทำงาน</strong><br />
            <strong>🍳 ห้องครัว:</strong> ทิศที่ <strong>เตาหันไป</strong> (ด้านที่คุณยืนทำอาหาร)<br />
            <strong>🚪 ประตูหน้า:</strong> ทิศที่ประตู <strong>เปิดออกไปด้านนอก</strong> (ใช้เข็มทิศวัด)<br />
            <strong>🛋️ ห้องนั่งเล่น / 🍽️ ห้องอาหาร:</strong> ทิศที่ <strong>หน้าต่างหลัก</strong> หันไป หรือ <strong>ทิศของห้อง</strong> เมื่อวัดจากจุดศูนย์กลางบ้าน<br />
            <strong>🚿 ห้องน้ำ:</strong> ทิศของห้องเมื่อวัดจากจุดศูนย์กลางบ้าน<br /><br />
            💡 <strong>เคล็ดลับ:</strong> ใช้แอปเข็มทิศในมือถือ ยืนตรงกลางห้อง แล้ววัดทิศที่หัวเตียง/โต๊ะ/เตาหันไป
          </div>

          {/* Conditions with visual explanations */}
          <div className="form-group">
            <label>สภาพปัจจุบัน <span className="hint">— เลือกทุกข้อที่ตรง (แต่ละข้อมีคำอธิบายและภาพประกอบ)</span></label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {conditionsData.map(cd => (
                <div key={cd.val} onClick={() => toggle(cd.val)} style={{
                  width: 'calc(50% - 5px)', borderRadius: 12, background: checked.has(cd.val) ? 'rgba(212,168,83,0.08)' : 'var(--bg-surface)',
                  border: `1px solid ${checked.has(cd.val) ? 'var(--gold)' : 'var(--border)'}`,
                  cursor: 'pointer', transition: 'all .2s', overflow: 'hidden'
                }}>
                  <div style={{
                    height: 56, background: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.3rem', letterSpacing: 2, borderBottom: '1px solid var(--border)',
                    color: cd.severity === 'high' ? '#F44336' : cd.severity === 'medium' ? '#FF9800' : 'var(--text-muted)'
                  }}>
                    {cd.visual}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px' }}>
                    <span style={{ fontSize: '1.2rem', minWidth: 28, textAlign: 'center' }}>{cd.icon}</span>
                    <span style={{ fontWeight: 500, color: checked.has(cd.val) ? 'var(--gold)' : 'var(--text-primary)', fontSize: '.82rem' }}>{cd.label}</span>
                    {cd.severity === 'high' && <span style={{ fontSize: '.65rem', background: 'rgba(244,67,54,0.15)', color: '#F44336', padding: '2px 6px', borderRadius: 4 }}>ร้ายแรง</span>}
                  </div>
                  <div style={{ padding: '0 14px 10px', fontSize: '.75rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{cd.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>ความกังวลหลัก / Main Concern</label>
            <select value={concern} onChange={e => setConcern(e.target.value)}>
              {concernOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>
          <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={runInspection}>🔍 วิเคราะห์ฮวงจุ้ย</button>
        </div>

        {/* Result */}
        {result && (
          <div style={{ maxWidth: 750, margin: '2rem auto 0' }} className="fade-up">
            <div className="card" style={{ textAlign: 'center', marginBottom: '2rem', padding: '2.5rem' }}>
              <h3 style={{ color: 'var(--gold)', fontFamily: "'Playfair Display',serif", marginBottom: '.5rem' }}>🔍 ผลการวิเคราะห์ฮวงจุ้ย</h3>
              <div style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '.88rem' }}>
                {roomNameTh[room]} — ทิศ {dir} ({result.trigram}) — ธาตุ{result.element} — {result.lifeArea}
              </div>
              <div style={{ width: 140, height: 140, margin: '0 auto 1.5rem', position: 'relative' }}>
                <svg width="140" height="140" style={{ transform: 'rotate(-90deg)' }}>
                  <circle cx="70" cy="70" r="55" fill="none" stroke="var(--border)" strokeWidth="8" />
                  <circle cx="70" cy="70" r="55" fill="none"
                    stroke={result.score >= 70 ? '#4CAF50' : result.score >= 45 ? '#FF9800' : '#F44336'}
                    strokeWidth="8" strokeLinecap="round"
                    strokeDasharray={circ} strokeDashoffset={circ - (result.score / 100) * circ}
                    style={{ transition: 'stroke-dashoffset 1s ease' }} />
                </svg>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: "'Playfair Display',serif", fontSize: '2.5rem', fontWeight: 700, color: 'var(--gold)' }}>{result.score}</span>
                  <span style={{ fontSize: '.75rem', color: 'var(--text-muted)' }}>/100</span>
                </div>
              </div>
              <div style={{ fontSize: '1.2rem' }}>
                {result.score >= 80 ? '🎉 ดีเยี่ยม' : result.score >= 65 ? '👍 ดี' : result.score >= 45 ? '⚠️ พอใช้' : '⚠️ ต้องปรับปรุง'}
              </div>
            </div>

            <div style={{ display: 'grid', gap: 16 }}>
              {result.goods.length > 0 && (
                <div className="card">
                  <h4 style={{ color: '#4CAF50', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: 8 }}>✅ สิ่งที่ดี</h4>
                  <ul style={{ listStyle: 'none' }}>
                    {result.goods.map((g, i) => <li key={i} style={{ padding: '8px 0', borderBottom: '1px solid rgba(42,42,62,0.3)', fontSize: '.88rem', color: 'var(--text-secondary)', display: 'flex', gap: 10, lineHeight: 1.6 }}>🍀 {g}</li>)}
                  </ul>
                </div>
              )}
              {result.warnings.length > 0 && (
                <>
                  <div className="card">
                    <h4 style={{ color: 'var(--red)', marginBottom: '1rem' }}>⚠️ ข้อควรระวัง</h4>
                    <ul style={{ listStyle: 'none' }}>
                      {result.warnings.map((w, i) => <li key={i} style={{ padding: '8px 0', borderBottom: '1px solid rgba(42,42,62,0.3)', fontSize: '.88rem', color: 'var(--text-secondary)', display: 'flex', gap: 10, lineHeight: 1.6 }}>⚠️ {w}</li>)}
                    </ul>
                  </div>
                  <div className="card">
                    <h4 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>💡 วิธีแก้ไข</h4>
                    <ul style={{ listStyle: 'none' }}>
                      {result.fixes.map((f, i) => <li key={i} style={{ padding: '8px 0', borderBottom: '1px solid rgba(42,42,62,0.3)', fontSize: '.88rem', color: 'var(--text-secondary)', display: 'flex', gap: 10, lineHeight: 1.6 }}>✨ {f}</li>)}
                    </ul>
                  </div>
                </>
              )}
              <div className="card">
                <h4 style={{ color: 'var(--water)', marginBottom: '1rem' }}>🎯 คำแนะนำเฉพาะด้าน: {concernTh[concern]}</h4>
                <p style={{ fontSize: '.88rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>✨ {concernAdvice[concern]}</p>
              </div>
            </div>

            {/* Comprehensive Action Plan */}
            <div className="summary-box" style={{ marginTop: '1rem' }}>
              <h4>📖 สรุปแผนการแก้ไข (Action Plan) — เรียงตามความเร่งด่วน</h4>
              <p>จากการวิเคราะห์{roomNameTh[room]}ทิศ {dir} ({result.trigram}) ได้คะแนน <strong>{result.score}/100</strong> — {result.score >= 70 ? 'พื้นฐานดี ปรับเล็กน้อยจะยิ่งเยี่ยม' : 'มีจุดที่ต้องปรับปรุง ทำตามลำดับด้านล่าง'}</p>
              <ul style={{ listStyle: 'none', marginTop: '.8rem' }}>
                {result.actions.map((a, i) => (
                  <li key={i} style={{ fontSize: '.85rem', padding: '6px 0', display: 'flex', gap: 8, color: 'var(--text-secondary)' }}>
                    {a.pri} {a.text}
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: '1rem', fontSize: '.82rem', color: 'var(--text-muted)' }}>
                💡 เริ่มจากข้อที่มี 🔴 ก่อน แล้วค่อยทำ 🟠 และ 🟡 ตามลำดับ การเปลี่ยนแปลงเล็กน้อยก็สร้างผลลัพธ์ใหญ่ได้!
              </p>
            </div>
          </div>
        )}
      </div>
      <style>{`@media(max-width:640px){#inspector .form-row{grid-template-columns:1fr!important} #inspector [style*="calc(50%"]{width:100%!important}}`}</style>
    </section>
  )
}
