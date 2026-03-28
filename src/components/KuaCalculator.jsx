import React, { useState } from 'react'
import { calcKuaNum, kuaData, getZodiac, getChineseElement } from '../data/kuaData'

function PersonForm({ idx, person, onChange }) {
  const updateField = (field, value) => onChange({ ...person, [field]: value })
  return (
    <div>
      <div className="form-row">
        <div className="form-group">
          <label>วันเกิด (ค.ศ.) <span className="hint">/ Birthdate</span></label>
          <input type="date" value={person.birthdate} onChange={e => {
            updateField('birthdate', e.target.value)
            if (e.target.value) {
              const y = new Date(e.target.value).getFullYear()
              onChange({ ...person, birthdate: e.target.value, zodiac: getZodiac(y), chElement: getChineseElement(y) })
            }
          }} />
        </div>
        <div className="form-group">
          <label>เวลาเกิด <span className="hint">/ Birth Time (ถ้าทราบ)</span></label>
          <input type="time" value={person.birthtime} onChange={e => updateField('birthtime', e.target.value)} />
        </div>
      </div>
      <div className="form-group">
        <label>เพศ / Gender</label>
        <div style={{ display: 'flex', gap: 10 }}>
          {['male', 'female'].map(g => (
            <button key={g} onClick={() => updateField('gender', g)} style={{
              flex: 1, padding: 12, background: person.gender === g ? 'rgba(212,168,83,0.08)' : 'var(--bg-surface)',
              border: `1.5px solid ${person.gender === g ? 'var(--gold)' : 'var(--border)'}`,
              borderRadius: 10, color: person.gender === g ? 'var(--gold)' : 'var(--text-secondary)',
              fontSize: '.9rem', cursor: 'pointer', fontFamily: 'inherit', transition: 'all .2s'
            }}>
              {g === 'male' ? '♂ ชาย' : '♀ หญิง'}
            </button>
          ))}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>ชื่อเล่น <span className="hint">(ไม่บังคับ)</span></label>
          <input type="text" placeholder={`เช่น ${idx === 0 ? 'มิกซ์' : 'มินนี่'}`} value={person.name} onChange={e => updateField('name', e.target.value)} />
        </div>
        <div className="form-group">
          <label>ปีนักษัตร + ธาตุ <span className="hint">(อัตโนมัติ)</span></label>
          <input type="text" readOnly value={person.zodiac ? `${person.zodiac} | ${person.chElement}` : 'กรอกวันเกิดก่อน'} style={{ opacity: person.zodiac ? 1 : .5 }} />
        </div>
      </div>
    </div>
  )
}

function KuaResult({ person, kua, label }) {
  const data = kuaData[kua]
  if (!data) return null
  return (
    <div className="card fade-up" style={{ marginBottom: '1rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <div style={{ fontSize: '.85rem', color: 'var(--text-muted)' }}>{label}</div>
        <div style={{ fontSize: '.9rem' }}>เลข Kua</div>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '3.5rem', fontWeight: 700, color: 'var(--gold)' }}>{kua}</div>
        <div style={{
          display: 'inline-block', padding: '5px 18px', borderRadius: 50, fontSize: '.8rem', fontWeight: 600,
          background: data.group === 'east' ? 'rgba(76,175,80,0.15)' : 'rgba(207,216,220,0.15)',
          color: data.group === 'east' ? '#4CAF50' : '#CFD8DC'
        }}>
          {data.group === 'east' ? '🌳 East Group กลุ่มตะวันออก' : '⚙ West Group กลุ่มตะวันตก'}
        </div>
        <div style={{ fontSize: '.82rem', color: 'var(--text-muted)', marginTop: 6 }}>ธาตุ: {data.element}</div>
        {person.zodiac && <div style={{ fontSize: '.78rem', color: 'var(--text-muted)', marginTop: 4 }}>นักษัตร: {person.zodiac} | ธาตุจีน: {person.chElement}</div>}
      </div>
      <h4 style={{ marginBottom: 10, fontSize: '.95rem' }}>✨ ทิศมงคล 4 ทิศ</h4>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {data.good.map(d => (
          <div key={d.name} style={{ padding: '10px 14px', borderRadius: 10, background: 'rgba(76,175,80,0.08)', border: '1px solid rgba(76,175,80,0.2)' }}>
            <div style={{ fontWeight: 600, color: '#4CAF50', fontSize: '.82rem' }}>✔ {d.name}</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>{d.cn} — {d.desc}</div>
          </div>
        ))}
      </div>
      <h4 style={{ margin: '14px 0 10px', fontSize: '.95rem' }}>⚠️ ทิศอัปมงคล 4 ทิศ</h4>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {data.bad.map(d => (
          <div key={d.name} style={{ padding: '10px 14px', borderRadius: 10, background: 'rgba(194,59,34,0.08)', border: '1px solid rgba(194,59,34,0.2)' }}>
            <div style={{ fontWeight: 600, color: 'var(--red)', fontSize: '.82rem' }}>✘ {d.name}</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '.75rem' }}>{d.cn} — {d.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function KuaCalculator() {
  const [activeTab, setActiveTab] = useState(0)
  const [persons, setPersons] = useState([
    { name: '', birthdate: '', birthtime: '', gender: 'male', zodiac: '', chElement: '' },
    { name: '', birthdate: '', birthtime: '', gender: 'female', zodiac: '', chElement: '' }
  ])
  const [results, setResults] = useState(null)

  const updatePerson = (idx, data) => {
    const next = [...persons]
    next[idx] = data
    setPersons(next)
  }

  const calculate = () => {
    if (!persons[0].birthdate) { alert('กรุณากรอกวันเกิดคนที่ 1'); return }
    const y0 = new Date(persons[0].birthdate).getFullYear()
    const kua0 = calcKuaNum(y0, persons[0].gender)
    let kua1 = null, compat = null
    if (persons[1].birthdate) {
      const y1 = new Date(persons[1].birthdate).getFullYear()
      kua1 = calcKuaNum(y1, persons[1].gender)
      const d0 = kuaData[kua0], d1 = kuaData[kua1]
      const sameGroup = d0.group === d1.group
      const shared = d0.good.map(x => x.name).filter(x => d1.good.map(y => y.name).includes(x))
      const sharedBad = d0.bad.map(x => x.name).filter(x => d1.bad.map(y => y.name).includes(x))
      let score = sameGroup ? 85 : 50
      score += shared.length * 5
      score = Math.min(100, Math.max(20, score))
      compat = { score, sameGroup, shared, sharedBad, g0: d0.group, g1: d1.group, e0: d0.element, e1: d1.element }
    }
    setResults({ kua0, kua1, compat })
  }

  return (
    <section id="kua" style={{ background: 'linear-gradient(180deg,var(--bg-dark),rgba(20,20,32,1))' }}>
      <div className="container">
        <div className="section-header">
          <h2>Kua Number Calculator</h2>
          <div className="cn-sub">八宅命卦計算器 — คำนวณเดี่ยว หรือ เทียบคู่รัก</div>
          <p>กรอกวันเกิด เวลาเกิด เพศ เพื่อหาเลข Kua ส่วนตัว ทิศมงคล 4 ทิศ ทิศอัปมงคล 4 ทิศ พร้อมนักษัตรและธาตุจีน สามารถกรอกข้อมูลคู่รักเพื่อดูความเข้ากัน</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }} className="kua-grid">
          <div className="card" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontFamily: "'Playfair Display',serif", color: 'var(--gold)', fontSize: '1.3rem', marginBottom: '.3rem' }}>⭐ กรอกข้อมูล</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '.85rem', marginBottom: '1.5rem' }}>คำนวณได้ 1 คน หรือ 2 คน (คู่รัก/ครอบครัว)</p>
            <div style={{ display: 'flex', gap: 8, marginBottom: '1.5rem' }}>
              {['👤 คนที่ 1', '👥 คนที่ 2 (คู่รัก)'].map((label, i) => (
                <button key={i} onClick={() => setActiveTab(i)} style={{
                  flex: 1, padding: 10, borderRadius: 10, border: `1.5px solid ${activeTab === i ? 'var(--gold)' : 'var(--border)'}`,
                  background: activeTab === i ? 'rgba(212,168,83,0.08)' : 'var(--bg-surface)',
                  color: activeTab === i ? 'var(--gold)' : 'var(--text-secondary)',
                  fontSize: '.9rem', cursor: 'pointer', fontFamily: 'inherit', transition: 'all .2s'
                }}>{label}</button>
              ))}
            </div>
            <PersonForm idx={activeTab} person={persons[activeTab]} onChange={data => updatePerson(activeTab, data)} />
            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '.8rem' }} onClick={calculate}>
              ⭐ คำนวณเลข Kua
            </button>
          </div>
          <div>
            {results && (
              <>
                <KuaResult person={persons[0]} kua={results.kua0} label={persons[0].name || 'คนที่ 1'} />
                {results.kua1 && <KuaResult person={persons[1]} kua={results.kua1} label={persons[1].name || 'คนที่ 2'} />}
                {results.compat && (
                  <div className="card fade-up" style={{ background: 'rgba(212,168,83,0.04)', border: '1px solid rgba(212,168,83,0.2)' }}>
                    <h3 style={{ fontFamily: "'Playfair Display',serif", color: 'var(--gold)', fontSize: '1.2rem', textAlign: 'center', marginBottom: '1rem' }}>
                      💕 ความเข้ากัน {persons[0].name || 'คนที่ 1'} + {persons[1].name || 'คนที่ 2'}
                    </h3>
                    <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                      <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '2.5rem', fontWeight: 700, color: results.compat.score >= 70 ? '#4CAF50' : results.compat.score >= 45 ? '#FF9800' : '#F44336' }}>
                        {results.compat.score}/100
                      </div>
                      <div style={{ width: '100%', height: 12, background: 'var(--bg-surface)', borderRadius: 6, overflow: 'hidden', margin: '10px 0' }}>
                        <div style={{ height: '100%', borderRadius: 6, width: `${results.compat.score}%`, background: results.compat.score >= 70 ? '#4CAF50' : '#FF9800', transition: 'width 1s' }} />
                      </div>
                      <div style={{ fontSize: '.85rem', color: 'var(--text-secondary)' }}>
                        {results.compat.sameGroup
                          ? `✨ อยู่กลุ่มเดียวกัน (${results.compat.g0.toUpperCase()}) — เข้ากันได้ดีมาก!`
                          : `⚠️ อยู่คนละกลุ่ม (${results.compat.g0.toUpperCase()} vs ${results.compat.g1.toUpperCase()}) — ต้องปรับสมดุล`}
                      </div>
                    </div>
                    {results.compat.shared.length > 0 && (
                      <div style={{ padding: 12, background: 'var(--bg-surface)', borderRadius: 12, marginBottom: 8 }}>
                        <h4 style={{ fontSize: '.9rem', color: 'var(--gold)', marginBottom: 4 }}>✨ ทิศมงคลร่วม</h4>
                        <p style={{ fontSize: '.82rem', color: 'var(--text-secondary)' }}>
                          {results.compat.shared.join(', ')} — หันหัวเตียงหรือโต๊ะทำงานไปทิศเหล่านี้ จะดีกับทั้งคู่!
                        </p>
                      </div>
                    )}
                    <div className="summary-box">
                      <h4>💡 คำแนะนำสำหรับคู่รัก</h4>
                      <p>{results.compat.sameGroup
                        ? 'คุณทั้งคู่อยู่กลุ่มเดียวกัน ทิศมงคลตรงกัน — จัดห้องนอนให้หัวเตียงหันไปทิศมงคลร่วม ใช้สีและธาตุที่เสริมทั้งคู่ นับว่าเป็นคู่ที่เข้ากันดีมากในด้านฮวงจุ้ย!'
                        : 'คุณอยู่คนละกลุ่ม — ให้เลือกทิศที่ดีสำหรับคนที่สุขภาพอ่อนกว่า หรือคนที่หาเงินหลักเลี้ยงครอบครัว เป็นทิศหลัก อีกคนเสริมด้วยธาตุกลางเพื่อสร้างสมดุล วางคริสตัลหรือต้นไม้เป็นตัวเชื่อม'}</p>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.kua-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}
