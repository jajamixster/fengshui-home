import React, { useState, useEffect } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#kua', label: 'Kua Calculator' },
  { href: '#bagua', label: 'Bagua Map' },
  { href: '#elements', label: 'Five Elements' },
  { href: '#rooms', label: 'Room Guide' },
  { href: '#inspector', label: 'Inspector' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(10,10,15,0.95)' : 'rgba(10,10,15,0.85)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(212,168,83,0.15)',
      padding: '0 2rem', transition: 'all .3s'
    }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: "'Playfair Display',serif", fontSize: '1.3rem', fontWeight: 700, color: 'var(--gold)', textDecoration: 'none' }}>
          🏮 ซินแส AI <span style={{ fontSize: '1rem', color: 'var(--text-muted)', marginLeft: 4 }}>風水大師</span>
        </a>
        <ul style={{ display: open ? 'flex' : '', flexDirection: open ? 'column' : 'row', position: open ? 'absolute' : 'static', top: open ? 64 : 'auto', left: 0, right: 0, background: open ? 'rgba(10,10,15,0.98)' : 'transparent', padding: open ? '1rem' : 0, listStyle: 'none', gap: 6 }} className={open ? '' : 'nav-links-desktop'}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} style={{ color: 'var(--text-secondary)', textDecoration: 'none', padding: '8px 14px', borderRadius: 8, fontSize: '.85rem', fontWeight: 500, transition: 'all .2s', whiteSpace: 'nowrap' }}
                onMouseEnter={e => { e.target.style.color = 'var(--gold)'; e.target.style.background = 'rgba(212,168,83,0.1)' }}
                onMouseLeave={e => { e.target.style.color = 'var(--text-secondary)'; e.target.style.background = 'transparent' }}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button onClick={() => setOpen(!open)} style={{ display: 'none', background: 'none', border: 'none', color: 'var(--gold)', fontSize: '1.5rem', cursor: 'pointer' }} className="mobile-toggle">☰</button>
      </div>
      <style>{`
        @media(max-width:768px){ .nav-links-desktop{display:none!important} .mobile-toggle{display:block!important} }
      `}</style>
    </nav>
  )
}
