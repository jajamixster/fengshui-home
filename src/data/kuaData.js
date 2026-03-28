export const zodiacAnimals = [
  '🐀 หนู (鼠 Rat)', '🐂 วัว (牛 Ox)', '🐅 เสือ (虎 Tiger)', '🐇 กระต่าย (兔 Rabbit)',
  '🐉 มังกร (龍 Dragon)', '🐍 งู (蛇 Snake)', '🐎 ม้า (馬 Horse)', '🐐 แพะ (羊 Goat)',
  '🐒 ลิง (猴 Monkey)', '🐓 ไก่ (雞 Rooster)', '🐕 หมา (狗 Dog)', '🐗 หมู (豬 Pig)'
]

export function getZodiac(year) {
  return zodiacAnimals[(year - 4) % 12]
}

export function getChineseElement(year) {
  const elements = ['Metal ทอง 金', 'Water น้ำ 水', 'Wood ไม้ 木', 'Fire ไฟ 火', 'Earth ดิน 土']
  return elements[Math.floor((year - 4) % 10 / 2)]
}

export function calcKuaNum(year, gender) {
  let sum = String(year).split('').reduce((a, b) => a + parseInt(b), 0)
  while (sum > 9) sum = String(sum).split('').reduce((a, b) => a + parseInt(b), 0)
  let kua
  if (gender === 'male') {
    kua = 11 - sum
    if (kua > 9) kua -= 9
  } else {
    kua = sum + 4
    if (kua > 9) kua -= 9
  }
  if (kua === 5) kua = gender === 'male' ? 2 : 8
  return kua
}

export const kuaData = {
  1: {
    group: 'east', element: 'Water 💧 น้ำ',
    good: [
      { name: 'Southeast', cn: '生氣 Sheng Chi', desc: 'โชคใหญ่ ความรุ่งเรือง — ดีที่สุดสำหรับความมั่งคั่งและความสำเร็จ' },
      { name: 'East', cn: '天醫 Tien Yi', desc: 'สุขภาพดี หมอรักษา — ดีที่สุดสำหรับสุขภาพ หันหัวเตียงทิศนี้' },
      { name: 'South', cn: '延年 Nien Yen', desc: 'ความรักมั่นคง ยืนยาว — ดีที่สุดสำหรับความสัมพันธ์' },
      { name: 'North', cn: '伏位 Fu Wei', desc: 'ความสงบ มั่นคง ปัญญา — ดีสำหรับการเรียนรู้และสมาธิ' }
    ],
    bad: [
      { name: 'West', cn: '禍害 Ho Hai', desc: 'อุปสรรคเล็กน้อย ความล่าช้า — ทิศอัปมงคลเบาที่สุด' },
      { name: 'Northeast', cn: '五鬼 Wu Gui', desc: 'ห้าผี โชคร้าย ไฟไหม้ ลักขโมย — ระวังอุบัติเหตุ' },
      { name: 'Northwest', cn: '六煞 Liu Sha', desc: 'หกศัตรู ความขัดแย้ง เรื่องชู้สาว — ระวังเรื่องคน' },
      { name: 'Southwest', cn: '絕命 Jue Ming', desc: 'โชคร้ายรุนแรงที่สุด — หลีกเลี่ยงการนอน/ทำงานทิศนี้' }
    ]
  },
  2: {
    group: 'west', element: 'Earth 🌍 ดิน',
    good: [
      { name: 'Northeast', cn: '生氣 Sheng Chi', desc: 'โชคใหญ่ ความรุ่งเรือง' },
      { name: 'West', cn: '天醫 Tien Yi', desc: 'สุขภาพดี หมอรักษา' },
      { name: 'Northwest', cn: '延年 Nien Yen', desc: 'ความรักมั่นคง ยืนยาว' },
      { name: 'Southwest', cn: '伏位 Fu Wei', desc: 'ความสงบ มั่นคง ปัญญา' }
    ],
    bad: [
      { name: 'East', cn: '禍害 Ho Hai', desc: 'อุปสรรคเล็กน้อย' },
      { name: 'Southeast', cn: '五鬼 Wu Gui', desc: 'ห้าผี โชคร้าย' },
      { name: 'South', cn: '六煞 Liu Sha', desc: 'หกศัตรู ความขัดแย้ง' },
      { name: 'North', cn: '絕命 Jue Ming', desc: 'โชคร้ายรุนแรงที่สุด' }
    ]
  },
  3: {
    group: 'east', element: 'Wood 🌳 ไม้',
    good: [
      { name: 'South', cn: '生氣 Sheng Chi', desc: 'โชคใหญ่ ความรุ่งเรือง' },
      { name: 'North', cn: '天醫 Tien Yi', desc: 'สุขภาพดี หมอรักษา' },
      { name: 'Southeast', cn: '延年 Nien Yen', desc: 'ความรักมั่นคง ยืนยาว' },
      { name: 'East', cn: '伏位 Fu Wei', desc: 'ความสงบ มั่นคง ปัญญา' }
    ],
    bad: [
      { name: 'Southwest', cn: '禍害 Ho Hai', desc: 'อุปสรรคเล็กน้อย' },
      { name: 'Northwest', cn: '五鬼 Wu Gui', desc: 'ห้าผี โชคร้าย' },
      { name: 'Northeast', cn: '六煞 Liu Sha', desc: 'หกศัตรู ความขัดแย้ง' },
      { name: 'West', cn: '絕命 Jue Ming', desc: 'โชคร้ายรุนแรงที่สุด' }
    ]
  },
  4: {
    group: 'east', element: 'Wood 🌳 ไม้',
    good: [
      { name: 'North', cn: '生氣 Sheng Chi', desc: 'โชคใหญ่ ความรุ่งเรือง' },
      { name: 'South', cn: '天醫 Tien Yi', desc: 'สุขภาพดี หมอรักษา' },
      { name: 'East', cn: '延年 Nien Yen', desc: 'ความรักมั่นคง ยืนยาว' },
      { name: 'Southeast', cn: '伏位 Fu Wei', desc: 'ความสงบ มั่นคง ปัญญา' }
    ],
    bad: [
      { name: 'Northwest', cn: '禍害 Ho Hai', desc: 'อุปสรรคเล็กน้อย' },
      { name: 'Southwest', cn: '五鬼 Wu Gui', desc: 'ห้าผี โชคร้าย' },
      { name: 'West', cn: '六煞 Liu Sha', desc: 'หกศัตรู ความขัดแย้ง' },
      { name: 'Northeast', cn: '絕命 Jue Ming', desc: 'โชคร้ายรุนแรงที่สุด' }
    ]
  },
  6: {
    group: 'west', element: 'Metal ⚙ ทอง',
    good: [
      { name: 'West', cn: '生氣 Sheng Chi', desc: 'โชคใหญ่ ความรุ่งเรือง' },
      { name: 'Northeast', cn: '天醫 Tien Yi', desc: 'สุขภาพดี หมอรักษา' },
      { name: 'Southwest', cn: '延年 Nien Yen', desc: 'ความรักมั่นคง ยืนยาว' },
      { name: 'Northwest', cn: '伏位 Fu Wei', desc: 'ความสงบ มั่นคง ปัญญา' }
    ],
    bad: [
      { name: 'Southeast', cn: '禍害 Ho Hai', desc: 'อุปสรรคเล็กน้อย' },
      { name: 'East', cn: '五鬼 Wu Gui', desc: 'ห้าผี โชคร้าย' },
      { name: 'North', cn: '六煞 Liu Sha', desc: 'หกศัตรู ความขัดแย้ง' },
      { name: 'South', cn: '絕命 Jue Ming', desc: 'โชคร้ายรุนแรงที่สุด' }
    ]
  },
  7: {
    group: 'west', element: 'Metal ⚙ ทอง',
    good: [
      { name: 'Northwest', cn: '生氣 Sheng Chi', desc: 'โชคใหญ่ ความรุ่งเรือง' },
      { name: 'Southwest', cn: '天醫 Tien Yi', desc: 'สุขภาพดี หมอรักษา' },
      { name: 'Northeast', cn: '延年 Nien Yen', desc: 'ความรักมั่นคง ยืนยาว' },
      { name: 'West', cn: '伏位 Fu Wei', desc: 'ความสงบ มั่นคง ปัญญา' }
    ],
    bad: [
      { name: 'North', cn: '禍害 Ho Hai', desc: 'อุปสรรคเล็กน้อย' },
      { name: 'South', cn: '五鬼 Wu Gui', desc: 'ห้าผี โชคร้าย' },
      { name: 'East', cn: '六煞 Liu Sha', desc: 'หกศัตรู ความขัดแย้ง' },
      { name: 'Southeast', cn: '絕命 Jue Ming', desc: 'โชคร้ายรุนแรงที่สุด' }
    ]
  },
  8: {
    group: 'west', element: 'Earth 🌍 ดิน',
    good: [
      { name: 'Southwest', cn: '生氣 Sheng Chi', desc: 'โชคใหญ่ ความรุ่งเรือง' },
      { name: 'Northwest', cn: '天醫 Tien Yi', desc: 'สุขภาพดี หมอรักษา' },
      { name: 'West', cn: '延年 Nien Yen', desc: 'ความรักมั่นคง ยืนยาว' },
      { name: 'Northeast', cn: '伏位 Fu Wei', desc: 'ความสงบ มั่นคง ปัญญา' }
    ],
    bad: [
      { name: 'South', cn: '禍害 Ho Hai', desc: 'อุปสรรคเล็กน้อย' },
      { name: 'North', cn: '五鬼 Wu Gui', desc: 'ห้าผี โชคร้าย' },
      { name: 'Southeast', cn: '六煞 Liu Sha', desc: 'หกศัตรู ความขัดแย้ง' },
      { name: 'East', cn: '絕命 Jue Ming', desc: 'โชคร้ายรุนแรงที่สุด' }
    ]
  },
  9: {
    group: 'east', element: 'Fire 🔥 ไฟ',
    good: [
      { name: 'East', cn: '生氣 Sheng Chi', desc: 'โชคใหญ่ ความรุ่งเรือง' },
      { name: 'Southeast', cn: '天醫 Tien Yi', desc: 'สุขภาพดี หมอรักษา' },
      { name: 'North', cn: '延年 Nien Yen', desc: 'ความรักมั่นคง ยืนยาว' },
      { name: 'South', cn: '伏位 Fu Wei', desc: 'ความสงบ มั่นคง ปัญญา' }
    ],
    bad: [
      { name: 'Northeast', cn: '禍害 Ho Hai', desc: 'อุปสรรคเล็กน้อย' },
      { name: 'West', cn: '五鬼 Wu Gui', desc: 'ห้าผี โชคร้าย' },
      { name: 'Southwest', cn: '六煞 Liu Sha', desc: 'หกศัตรู ความขัดแย้ง' },
      { name: 'Northwest', cn: '絕命 Jue Ming', desc: 'โชคร้ายรุนแรงที่สุด' }
    ]
  }
}
