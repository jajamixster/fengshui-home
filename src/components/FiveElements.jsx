import React from 'react'

const elements = [
  {
    cls: 'wood', icon: '🌳', name: 'Wood ไม้', cn: '木 Mu',
    meaning: 'ธาตุไม้หมายถึง การเติบโต ชีวิตชีวา สุขภาพ ความยืดหยุ่น — เหมือนต้นไม้ที่เติบโตจากเมล็ด คนธาตุไม้มักเป็นคนสร้างสรรค์ มองโลกในแง่ดี ชอบเรียนรู้ มีพลัง',
    details: [
      ['🌐 ทิศ', 'East, Southeast'],
      ['🎨 สี', 'เขียว น้ำตาลไม้'],
      ['📐 รูปทรง', 'สูง แนวตั้ง ทรงเสา'],
      ['🏠 ของตกแต่ง', 'ต้นไม้สด เฟอร์นิเจอร์ไม้ ภาพป่าไม้ ผ้าฝ้าย ลินิน'],
      ['💚 อวัยวะ', 'ตับ ถุงน้ำดี ตา เส้นเอ็น'],
      ['🌤 ฤดู', 'ฤดูใบไม้ผลิ'],
      ['➕ เสริมโดย', 'น้ำ (水) — น้ำหล่อเลี้ยงต้นไม้ให้เติบโต'],
      ['➖ ทำลายโดย', 'ทอง (金) — ขวานตัดต้นไม้'],
      ['💡 ประยุกต์ใช้', 'ถ้าทิศ E/SE ขาดพลัง เสริมด้วยน้ำ (สีดำ น้ำพุ) หลีกเลี่ยงโลหะ (สีขาว)']
    ],
    bgColor: 'rgba(76,175,80,0.06)', borderColor: '#4CAF50', textColor: '#4CAF50'
  },
  {
    cls: 'fire', icon: '🔥', name: 'Fire ไฟ', cn: '火 Huo',
    meaning: 'ธาตุไฟหมายถึง ความหลงใหล พลังงาน ชื่อเสียง การแสดงออก — เหมือนเปลวเพลิงที่ส่องสว่าง คนธาตุไฟมักเป็นผู้นำ กระตือรือร้น มีเสน่ห์ ชอบอยู่ท่ามกลางผู้คน',
    details: [
      ['🌐 ทิศ', 'South'],
      ['🎨 สี', 'แดง ส้ม ชมพู ม่วง'],
      ['📐 รูปทรง', 'สามเหลี่ยม แหลม ดาว'],
      ['🏠 ของตกแต่ง', 'เทียน ไฟประดับ ศิลปะสีแดง แสงสว่าง ของหนังสัตว์'],
      ['💚 อวัยวะ', 'หัวใจ ลำไส้เล็ก ตา ระบบเลือด'],
      ['🌤 ฤดู', 'ฤดูร้อน'],
      ['➕ เสริมโดย', 'ไม้ (木) — ไม้เป็นเชื้อเพลิงให้ไฟ'],
      ['➖ ทำลายโดย', 'น้ำ (水) — น้ำดับไฟ'],
      ['💡 ประยุกต์ใช้', 'ถ้าทิศ S ขาดพลัง เสริมด้วยต้นไม้/สีเขียว หลีกเลี่ยงน้ำ (สีดำ น้ำพุ)']
    ],
    bgColor: 'rgba(255,87,34,0.06)', borderColor: '#FF5722', textColor: '#FF5722'
  },
  {
    cls: 'earth', icon: '🌍', name: 'Earth ดิน', cn: '土 Tu',
    meaning: 'ธาตุดินหมายถึง ความมั่นคง ความอบอุ่น การดูแล สมดุล — เหมือนพื้นดินที่รองรับทุกสิ่ง คนธาตุดินมักน่าเชื่อถือ จริงใจ เป็นผู้ให้ อดทน',
    details: [
      ['🌐 ทิศ', 'Southwest, Northeast, Center'],
      ['🎨 สี', 'เหลือง น้ำตาลอ่อน เบจ ส้ม'],
      ['📐 รูปทรง', 'เตี้ยแบน สี่เหลี่ยม'],
      ['🏠 ของตกแต่ง', 'เซรามิก หินอ่อน คริสตัล กระถางดินเผา'],
      ['💚 อวัยวะ', 'ม้าม กระเพาะ กล้ามเนื้อ ปาก'],
      ['🌤 ฤดู', 'ปลายฤดูร้อน / ช่วงเปลี่ยนฤดู'],
      ['➕ เสริมโดย', 'ไฟ (火) — ไฟเผาเป็นเถ้า กลายเป็นดิน'],
      ['➖ ทำลายโดย', 'ไม้ (木) — รากไม้แทรกดิน ทำลายโครงสร้าง'],
      ['💡 ประยุกต์ใช้', 'ถ้าทิศ SW/NE/Center ขาดพลัง เสริมด้วยเทียน/แสง หลีกเลี่ยงต้นไม้ใหญ่']
    ],
    bgColor: 'rgba(255,152,0,0.06)', borderColor: '#FF9800', textColor: '#FF9800'
  },
  {
    cls: 'metal', icon: '⚙', name: 'Metal ทอง', cn: '金 Jin',
    meaning: 'ธาตุทองหมายถึง ความแม่นยำ ระเบียบ ความชัดเจน ความยุติธรรม — เหมือนดาบที่คมกริบ คนธาตุทองมักมีวินัย มีเหตุผล เป็นระเบียบ พูดจาชัดเจน',
    details: [
      ['🌐 ทิศ', 'West, Northwest'],
      ['🎨 สี', 'ขาว เงิน ทอง เทา'],
      ['📐 รูปทรง', 'กลม โค้ง ทรงโดม'],
      ['🏠 ของตกแต่ง', 'ของโลหะ ระฆังลม กรอบรูปเงิน ลูกบอลโลหะ'],
      ['💚 อวัยวะ', 'ปอด ลำไส้ใหญ่ ผิวหนัง จมูก'],
      ['🌤 ฤดู', 'ฤดูใบไม้ร่วง'],
      ['➕ เสริมโดย', 'ดิน (土) — ดินอัดแน่นเป็นแร่ธาตุ'],
      ['➖ ทำลายโดย', 'ไฟ (火) — ไฟหลอมทอง ทำให้เสียรูป'],
      ['💡 ประยุกต์ใช้', 'ถ้าทิศ W/NW ขาดพลัง เสริมด้วยเซรามิก/หิน หลีกเลี่ยงเทียน/สีแดง']
    ],
    bgColor: 'rgba(207,216,220,0.06)', borderColor: '#CFD8DC', textColor: '#CFD8DC'
  },
  {
    cls: 'water', icon: '💧', name: 'Water น้ำ', cn: '水 Shui',
    meaning: 'ธาตุน้ำหมายถึง ปัญญา ความลึกซึ้ง การไหลเวียน อาชีพ — เหมือนน้ำที่ไหลไม่หยุดและปรับตัวตามภาชนะ คนธาตุน้ำมักฉลาด ปรับตัวเก่ง สัญชาตญาณดี',
    details: [
      ['🌐 ทิศ', 'North'],
      ['🎨 สี', 'ดำ น้ำเงินเข้ม'],
      ['📐 รูปทรง', 'ไหลลื่น ไม่มีรูปแบบ คลื่น'],
      ['🏠 ของตกแต่ง', 'น้ำพุ ตู้ปลา กระจก แก้วใส ภาพน้ำตก'],
      ['💚 อวัยวะ', 'ไต กระเพาะปัสสาวะ หู กระดูก'],
      ['🌤 ฤดู', 'ฤดูหนาว'],
      ['➕ เสริมโดย', 'ทอง (金) — แร่ละลายเป็นน้ำ (ทองให้กำเนิดน้ำ)'],
      ['➖ ทำลายโดย', 'ดิน (土) — ดินกั้นน้ำ สร้างเขื่อนกั้น'],
      ['💡 ประยุกต์ใช้', 'ถ้าทิศ N ขาดพลัง เสริมด้วยของโลหะ/สีขาว หลีกเลี่ยงหิน/เซรามิก (ดินกั้นน้ำ)']
    ],
    bgColor: 'rgba(33,150,243,0.06)', borderColor: '#2196F3', textColor: '#2196F3'
  }
]

export default function FiveElements() {
  return (
    <section id="elements" style={{ background: 'linear-gradient(180deg,rgba(20,20,32,1),var(--bg-dark))' }}>
      <div className="container">
        <div className="section-header">
          <h2>Five Elements</h2>
          <div className="cn-sub">五行 — 木火土金水 — หัวใจของฮวงจุ้ย</div>
          <p>ธาตุทั้ง 5 คือรากฐานของจักรวาลในปรัชญาจีน ทุกสิ่งในโลก — สี รูปทรง วัสดุ ทิศทาง อารมณ์ อวัยวะ ฤดูกาล — ล้วนจัดอยู่ในธาตุใดธาตุหนึ่ง</p>
        </div>

        <div className="card" style={{ maxWidth: 800, margin: '0 auto 2rem', padding: '2rem' }}>
          <h3 style={{ color: 'var(--gold)', fontFamily: "'Playfair Display',serif", marginBottom: '.8rem', fontSize: '1.1rem' }}>
            📖 ธาตุ 5 ทำงานอย่างไรในฮวงจุ้ย?
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '.88rem', lineHeight: 1.8, marginBottom: '.6rem' }}>
            <strong style={{ color: '#4CAF50' }}>วงจรเสริม (相生):</strong> ไม้ → ไฟ → ดิน → ทอง → น้ำ → ไม้ — ธาตุหนึ่งให้กำเนิดอีกธาตุหนึ่ง เช่น ไม้เป็นเชื้อเพลิงให้ไฟ ไฟเผาเป็นเถ้า(ดิน) ดินอัดแน่นเป็นแร่(ทอง) แร่ละลายเป็นน้ำ น้ำหล่อเลี้ยงต้นไม้
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '.88rem', lineHeight: 1.8, marginBottom: '.6rem' }}>
            <strong style={{ color: 'var(--red)' }}>วงจรทำลาย (相剋):</strong> ไม้ → ดิน → น้ำ → ไฟ → ทอง → ไม้ — เช่น รากไม้แทรกดิน ดินกั้นน้ำ น้ำดับไฟ ไฟหลอมทอง ทอง(ขวาน)ตัดไม้
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '.88rem', lineHeight: 1.8 }}>
            <strong style={{ color: 'var(--gold)' }}>การประยุกต์ใช้:</strong> ถ้าทิศตะวันออก (ธาตุไม้) ขาดพลัง — เสริมด้วยน้ำ (สีดำ/น้ำเงิน น้ำพุ) เพราะน้ำเสริมไม้ หลีกเลี่ยงธาตุทอง (สีขาว ของโลหะ) เพราะทองทำลายไม้ ถ้ามีปัญหาธาตุขัดแย้ง — ใส่ธาตุกลาง (เช่น ไฟ-น้ำ ขัดแย้ง → ใส่ไม้เป็นตัวกลาง)
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '.85rem', color: 'var(--text-secondary)' }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#4CAF50' }} /> วงจรเสริม 相生 — ธาตุแม่ให้กำเนิดธาตุลูก
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '.85rem', color: 'var(--text-secondary)' }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#C23B22' }} /> วงจรทำลาย 相剋 — ธาตุหนึ่งข่มอีกธาตุ
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
          {elements.map(el => (
            <div key={el.cls} style={{
              borderRadius: 16, padding: '1.5rem', background: el.bgColor,
              border: '1.5px solid transparent', transition: 'all .3s', cursor: 'default'
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = el.borderColor; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '.6rem' }}>{el.icon}</div>
                <h4 style={{ fontSize: '1rem', marginBottom: 2, color: el.textColor }}>{el.name}</h4>
                <div style={{ color: 'var(--text-muted)', fontSize: '.82rem', marginBottom: '.8rem' }}>{el.cn}</div>
              </div>
              <p style={{ fontSize: '.82rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '.8rem' }}>{el.meaning}</p>
              <dl style={{ fontSize: '.78rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {el.details.map(([label, value]) => (
                  <div key={label}>
                    <dt style={{ color: 'var(--text-primary)', fontWeight: 600, marginTop: '.4rem' }}>{label}</dt>
                    <dd style={{ marginLeft: 0 }}>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
