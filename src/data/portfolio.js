// Asset paths remain local in development and are fingerprinted by Vite at build time.
const images = import.meta.glob('../assets/portfolio/*.{png,webp}', { eager: true, query: '?url', import: 'default' })
export const asset = (name) =>
  images[`../assets/portfolio/${name}.webp`] ?? images[`../assets/portfolio/${name}.png`]

export const technologyGroups = [
  { title: 'Development', items: [
    ['java', 'Java'], ['python', 'Python'], ['php', 'PHP'], ['javascript', 'JavaScript'],
    ['flutter', 'Flutter'], ['html', 'HTML'], ['css', 'CSS'], ['react', 'React'],
  ] },
  { title: 'Databases', items: [['postgresql', 'PostgreSQL'], ['mysql', 'MySQL'], ['supabase', 'Supabase']] },
  { title: 'Tools & Cloud', items: [['git', 'Git'], ['github', 'GitHub'], ['docker', 'Docker'], ['aws', 'AWS']] },
  { title: 'Design', items: [['figma', 'Figma'], ['photoshop', 'Photoshop'], ['canva', 'Canva']] },
  { title: 'Productivity', items: [['powerpoint', 'Microsoft PowerPoint'], ['excel', 'Microsoft Excel'], ['productivity', 'Google Sheets']] },
]

export const education = [
  {
    id: 'university', school: 'Holy Angel University', logo: 'hau',
    qualification: 'Bachelor of Science in Computer Science', dates: '2023 - Present',
    achievements: [
      { title: 'President’s Lister', detail: '1st and 2nd Semesters', year: 'A.Y. 2025-2026' },
      { title: 'President’s Lister', detail: '1st and 2nd Semesters', year: 'A.Y. 2024-2025' },
      { title: 'Dean’s Lister', detail: '1st and 2nd Semesters', year: 'A.Y. 2023-2024' },
    ],
  },
  {
    id: 'senior-high', school: 'Holy Angel University', logo: 'hau',
    qualification: 'Senior High School (Information and Communications Technology Strand)', dates: '2021 - 2023',
    achievements: [
      { title: 'With Honors', detail: 'Grade 12', year: 'S.Y. 2022-2023' },
      { title: 'With Honors', detail: 'Grade 11', year: 'S.Y. 2021-2022' },
    ],
  },
  {
    id: 'junior-high', school: 'St. Joseph College – Olongapo Inc.', logo: 'st-joseph',
    qualification: 'Junior High School', dates: '2017 - 2021',
    achievements: [
      { title: 'With Honors', detail: 'Grade 10', year: 'S.Y. 2020-2021' },
      { title: 'With Honors', detail: 'Grade 9', year: 'S.Y. 2019-2020' },
      { title: 'With Honors', detail: 'Grade 8', year: 'S.Y. 2018-2019' },
      { title: 'With Honors', detail: 'Grade 7', year: 'S.Y. 2017-2018' },
      { title: 'Central Board of Students', detail: 'Grade 10 Representative', year: 'S.Y. 2020-2021' },
      { title: 'Camera Club', detail: 'Secretary', year: 'S.Y. 2019-2020' },
      { title: 'TLE Club', detail: 'Video Editor', year: 'S.Y. 2019-2020' },
      { title: 'Youth for Environment in Schools Organization', detail: 'Video Editor', year: 'S.Y. 2019-2020' },

      { title: 'Robotics Competition', detail: 'Champion', year: 'S.Y. 2018-2019' },
    ],
  },
  {
    id: 'elementary', school: 'FIRST School of SBFZ', logo: 'first',
    qualification: 'Elementary School', dates: '2011 - 2017',
    achievements: [{ title: 'Consistent Honor Roll', detail: 'Grades 1 - 6', year: 'S.Y. 2011 - 2017' }],
  },
]



