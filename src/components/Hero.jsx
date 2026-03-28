import React, { useEffect, useRef } from 'react'

export default function Hero() {
  const particlesRef = useRef()

  useEffect(() => {
    const el = particlesRef.current
    if (!el) return
    for (let i = 0; i < 25; i++) {
      const p = document.createElement('div')
      Object.assign(p.style, {
        position: 'absolute', width: `${2 + Math.random() * 4}px`, height: `${2 + Math.random() * 4}px`,
        background: 'var(--gold)', borderRadius: '50%', opacity: '0.2',
        left: `${Math.random() * 100}%`,
        animation: `drift ${8 + Math.random() * 12}s linear infinite`,
        animationDelay: `${Math.random() * 10}s`
      })
      el.appendChild(p)
    }
    return () => { el.innerHTML = '' }
  }, [])

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', position: 'relative', overflow: 'hidden', padding: '80px 2rem 2rem'
    }}>
      <div ref={particlesRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 20% 50%,rgba(212,168,83,0.06) 0%,transparent 60%),radial-gradient(ellipse at 80% 50%,rgba(194,59,34,0.04) 0%,transparent 60%),radial-gradient(ellipse at 50% 100%,rgba(212,168,83,0.08) 0%,transparent 50%)'
      }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 800 }}>
        <div style={{
          width: 120, height: 120, margin: '0 auto 2rem',
          background: 'radial-gradient(circle,rgba(212,168,83,0.2),transparent 70%)',
          borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '3.5rem', animation: 'float 4s ease-in-out infinite'
        }}>☯</div>
        <h1 style={{
          fontFamily: "'Playfair Display',serif", fontSize: '3.5rem', fontWeight: 700,
          background: 'linear-gradient(135deg,var(--gold-light),var(--gold),var(--gold-dark))',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '.5rem'
        }}>
          ซินแส AI
          <span style={{ display: 'block', fontSize: '1.8rem', marginTop: '.3rem', opacity: 0.7 }}>風水大師 Feng Shui Master</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: 600, margin: '1rem auto 2.5rem', lineHeight: 1.8 }}>
          ระบบวิเคราะห์ฮวงจุ้ยอัจฉริยะ ผสมผสานศาสตร์จีนโบราณ 5,000 ปี กับเทคโนโลยีสมัยใหม่ — วิเคราะห์ได้ทั้งเดี่ยวและคู่รัก
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#inspector" className="btn btn-primary">🔍 เริ่มตรวจฮวงจุ้ย</a>
          <a href="#kua" className="btn btn-outline">⭐ คำนวณเลข Kua คู่รัก</a>
        </div>
      </div>
      <style>{`
        @keyframes drift { 0%{transform:translateY(100vh) rotate(0);opacity:0}10%{opacity:.3}90%{opacity:.3}100%{transform:translateY(-10vh) rotate(720deg);opacity:0} }
        @keyframes float { 0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)} }
        @media(max-width:640px){ h1{font-size:2rem!important} }
      `}</style>
    </section>
  )
}
