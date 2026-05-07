export interface Project {
  slug: string
  title: string
  category: 'Campaigns' | 'Branding' | 'Content' | 'Events' | 'Institutional'
  tags: string[]
  description: string
  coverImage?: string
  coverPosition?: string
  images: string[]
  videos: string[]
  instagramPosts?: string[]
  year: string
}

/** Converts any public Instagram post/reel URL into its embed URL.
 *  Handles: /p/CODE, /reel/CODE, /reels/CODE, /username/reel/CODE */
export function getInstagramEmbedUrl(url: string): string {
  const match = url.match(/\/(?:p|reels?)\/([A-Za-z0-9_-]+)/)
  if (!match) return ''
  const isPost = url.includes('/p/')
  return `https://www.instagram.com/${isPost ? 'p' : 'reel'}/${match[1]}/embed/`
}

export const projects: Project[] = [

  // ─── CAMPAIGNS ───────────────────────────────────────────────────────────────

  {
    slug: 'viali',
    title: 'Viali — Vista a sua Essencia',
    category: 'Campaigns',
    tags: ['Fashion', 'Brand Launch', 'Campaign Concept', 'UGC Strategy', 'Social Media', 'Copywriting'],
    description:
      'Brand launch campaign for Viali, a fashion brand created to dress real, professional women who lead with their identity. "Vista Sua Essencia" (Wear Your Essence) was more than a product launch — it was a positioning manifesto. The campaign invited real women to reflect on how their clothing expresses who they are, generating authentic storytelling content. Responsible for concept, copy direction, social media launch strategy, UGC briefings, and campaign production across Instagram feed and Reels.',
    coverImage: 'viali.jpg',
    coverPosition: 'center 15%',
    images: ['viali.jpg', 'vialii.jpg'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/p/DHL2_O5sF3G/',
      'https://www.instagram.com/p/DH69LV9MWWT/',
      'https://www.instagram.com/p/DH3gm0hM-aA/',
      'https://www.instagram.com/p/DH9koWPs7rk/',
      'https://www.instagram.com/p/DM06DqASsqb/',
      'https://www.instagram.com/p/DHmL3QihAqa/',
      'https://www.instagram.com/p/DJcsD0GuAMx/',
      'https://www.instagram.com/p/DJfR34tvMqH/',
      'https://www.instagram.com/p/DJFmgv7N-aE/',
      'https://www.instagram.com/p/DIzjBHBsdWJ/',
      'https://www.instagram.com/p/DIhnbb8sYXE/',
      'https://www.instagram.com/p/DISFEshs5AU/',
    ],
    year: '2024',
  },
  {
    slug: 'banese',
    title: 'BANESE — Banco do Estado de Sergipe',
    category: 'Institutional',
    tags: ['Banking', 'Financial Education', 'Institutional', 'Campaign', 'Social Media Management'],
    description:
      'Content strategy, social media management, and campaign development for BANESE, the official state bank of Sergipe. Created content across banking products, financial education, institutional milestones, and seasonal campaigns — growing the brand\'s digital presence while reinforcing its identity as Sergipe\'s bank. The work required adapting complex financial information for everyday audiences while maintaining regulatory compliance and a consistent, trustworthy brand voice.',
    coverImage: 'banesee.jpeg',
    images: ['banesee.jpeg'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/p/DXxVJ65BZVr/',
      'https://www.instagram.com/p/DXoxATYjLC6/',
      'https://www.instagram.com/p/DXg7bgyjsSm/',
      'https://www.instagram.com/p/DXXQrJtgj2k/',
      'https://www.instagram.com/p/DRAhtb8DjMv/',
    ],
    year: '2022–2025',
  },
  {
    slug: 'mitsubishi',
    title: 'Mitsubishi Xingo — Year-End Campaign',
    category: 'Campaigns',
    tags: ['Automotive', 'Campaign Concept', 'Video Production', 'Brand Activation', 'Event'],
    description:
      'Year-end campaign for Xingo Mitsubishi, built on the insight that the brand transcends the vehicle — it is about aligning the right car with each person\'s lifestyle, values, and routine. The campaign invited the public to discover their Mitsubishi through a sensory brand experience at the dealership. Deliverables included campaign concept, social media content, video testimonials with real customers, a Year-End Gift Kit, and the Christmas Breakfast event that brought the campaign to life with clients and partners.',
    coverImage: 'xingoo.png',
    images: ['xingo.png', 'xingoo.png', 'xingooo.png'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/p/DRz77mfkeor/',
    ],
    year: '2023',
  },
  {
    slug: 'shopping-premium',
    title: 'Shopping Premium',
    category: 'Campaigns',
    tags: ['Social Media Management', 'Campaign Strategy', 'Content Creation', 'Retail', 'Copywriting'],
    description:
      'Shopping Premium is one of the largest retail destinations in Sergipe. Led the social media strategy and content creation for the brand — building a consistent digital presence that resonated with local consumers. The scope included campaign concept, seasonal content calendars, copywriting, visual production, and community management. Every piece of content was crafted to drive both online engagement and physical foot traffic to the mall.',
    coverImage: 'shoppingpremcampaing.jpg',
    images: ['shoppingpremcampaing.jpg', 'shoppingpremm.jpg'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/shoppingpremio/reel/DAv3KIluDNR/',
      'https://www.instagram.com/jotabomfiim/reel/C_TmsFtRS4j/',
      'https://www.instagram.com/shoppingpremio/reel/C8rsKSDuPpU/',
      'https://www.instagram.com/shoppingpremio/reel/Cw0jGtBuB3g/',
      'https://www.instagram.com/shoppingpremio/reel/Cx3EVrpOTFQ/',
    ],
    year: '2022–2023',
  },
  {
    slug: 'shopping-praia-sul',
    title: 'Shopping Praia Sul',
    category: 'Campaigns',
    tags: ['Social Media', 'Campaign', 'Community Management', 'Retail', 'Visual Content'],
    description:
      'Social media management and campaign strategy for Shopping Praia Sul, located in the Poxim district of Aracaju. Developed the brand\'s content calendar, produced visual materials for seasonal promotions, and managed the community — strengthening the mall\'s relationship with local residents and tenant stores. The strategy focused on promoting events, store offers, and the neighborhood lifestyle in an authentic and engaging way.',
    coverImage: 'praiasul-11.png',
    images: ['praiasul-11.png', 'Praia Sul - 12.png', 'Praia Sul - 13.png', 'Praia Sul - 31.png'],
    videos: [],
    year: '2022',
  },
  {
    slug: 'sonho-dos-pes',
    title: 'Sonho dos Pes',
    category: 'Campaigns',
    tags: ['Fashion', 'Footwear', 'Campaign', 'Brand Content', 'Social Media', 'Valentine\'s Day'],
    description:
      'Valentine\'s Day campaign for Sonho dos Pes, a footwear brand based in Aracaju. The campaign brought together three expressions of elegance in a single visual story — Sonho dos Pes, Afontes Joias, and Viali — celebrating love in its most beautiful forms. Centered around the Aura dress, a capsule collection created for the occasion, the campaign captured the essence of romance with presence, lightness, and refined aesthetic. A collaboration that turned a seasonal moment into a memorable brand statement.',
    coverImage: 'sonhosdospes.png',
    images: ['sonhosdospes.png'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/p/DKXx3N5PwtN/',
    ],
    year: '2025',
  },

  // ─── BRANDING ─────────────────────────────────────────────────────────────────

  {
    slug: 'sabor-nordestino',
    title: 'Sabor Nordestino',
    category: 'Branding',
    tags: ['Brand Identity', 'Visual Identity', 'Restaurant', 'Culture', 'Logo Design', 'Typography'],
    description:
      'Complete visual identity and brand strategy for Sabor Nordestino, a restaurant celebrating authentic northeastern Brazilian gastronomy. Every creative decision honored the region\'s rich cultural heritage — earthy palettes inspired by the sertao landscape, hand-drawn motifs referencing regional artisanship, and a typographic system that balances warmth with sophistication. The brand positions Sabor Nordestino as a cultural experience, not just a meal: a place where gastronomy and identity are inseparable.',
    coverImage: 'sabornordestino.jpg',
    images: ['sabornordestino.jpg', 'sabornordestinoo.jpg'],
    videos: [],
    year: '2022',
  },
  {
    slug: 'casse',
    title: 'Casse',
    category: 'Branding',
    tags: ['Brand Strategy', 'Social Media Management', 'Visual Identity', 'Content Calendar', 'Community'],
    description:
      'Long-term brand strategy and social media management for Casse — building and sustaining a distinctive digital presence aligned with the brand\'s core identity. Developed the content calendar, refined the visual language for digital channels, managed the community, and produced campaign content across all formats. The work focused on organic growth through authentic storytelling and a visually cohesive feed that consistently communicated the brand\'s values over time.',
    coverImage: 'cassee.png',
    images: ['cassee.png'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/p/DWRHh3PjhM7/',
      'https://www.instagram.com/p/DXy61hkOMZF/',
      'https://www.instagram.com/p/DXhPSx2Do1W/',
      'https://www.instagram.com/p/DXo8ZoNjnXh/',
      'https://www.instagram.com/p/DWuEon2DnDb/',
    ],
    year: '2022–2025',
  },
  {
    slug: 'daniela-lelis',
    title: 'Daniela Lelis — Imagem e Decor',
    category: 'Branding',
    tags: ['Personal Branding', 'Content Creation', 'Video Production', 'Interior Decor', 'Reels'],
    description:
      'Video content production and social media strategy for Daniela Lelis, a specialist in personal image consulting and interior decoration. Produced Reels that showcased her expertise, aesthetic sensibility, and the transformations she delivers to clients — building her authority on Instagram and attracting her ideal audience. The visual language was refined to reflect Daniela\'s own taste: elegant, curated, and distinctly personal.',
    coverImage: 'danilelis.png',
    coverPosition: 'center 15%',
    images: ['danilelis.png'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/danielalelis_/reel/CtxOu37LNmr/',
      'https://www.instagram.com/danielalelis_/reel/CrgplHzuZGF/',
    ],
    year: '2023',
  },

  // ─── CONTENT ──────────────────────────────────────────────────────────────────

  {
    slug: 'ugc-viali',
    title: 'UGC Creator — Viali',
    category: 'Content',
    tags: ['UGC', 'Content Creation', 'Video Production', 'Fashion', 'Reels', 'Influencer'],
    description:
      'UGC (User-Generated Content) creation for Viali — acting as a content creator to produce authentic, platform-native videos that showcase the brand\'s products in real lifestyle contexts. This role required deeply understanding the brand\'s voice and target audience, then translating that into engaging short-form content that feels organic and relatable. Content that converts because it trusts the audience\'s intelligence and connects through genuine moments.',
    coverImage: 'ugc.png',
    coverPosition: 'center 15%',
    images: ['ugc.png'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/p/DQZ4f2_AUb_/',
      'https://www.instagram.com/p/DNgnNRNBZzi/',
      'https://www.instagram.com/p/DM8d6lGJjD6/',
      'https://www.instagram.com/p/DJ2SHhBv2WX/',
      'https://www.instagram.com/p/DIkDwdQOcbF/',
    ],
    year: '2024–2025',
  },

  // ─── EVENTS ───────────────────────────────────────────────────────────────────

  {
    slug: 'events',
    title: 'Events — Weddings & Celebrations',
    category: 'Events',
    tags: ['Wedding', 'Event Coverage', 'Photography', 'Videography', 'Real-Time Content'],
    description:
      'Event photography direction, video production, and social media coverage for weddings, birthdays, and special celebrations across Sergipe. From pre-event content strategy to real-time coverage and post-production, each celebration was treated as a unique narrative — with care given to every detail of how memories would be preserved, edited, and shared with the world.',
    coverImage: 'eventoss-aniversario.jpg',
    images: [
      'eventoss-aniversario.jpg',
    ],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/p/C_1a_jVSB0Z/',
      'https://www.instagram.com/p/C_vYmqHObL3/',
      'https://www.instagram.com/p/C_RKFusSZ6a/',
      'https://www.instagram.com/p/C-iZTtpuy7U/',
      'https://www.instagram.com/p/CqkvbRujaLL/',
      'https://www.instagram.com/p/Cmt3yxNJNti/',
    ],
    year: '2022–2024',
  },
  {
    slug: 'expogloria',
    title: 'ExpoGloria 2025',
    category: 'Events',
    tags: ['Government Event', 'Institutional', 'Social Media', 'Event Coverage', 'Content Strategy'],
    description:
      'Communications and social media coverage for ExpoGloria 2025, one of the largest promotional and cultural events produced by the Government of Sergipe. Delivered a content strategy and real-time coverage that captured the highlights of the expo — showcasing the state\'s agricultural, cultural, and commercial sectors to a broad public audience. The work combined institutional communication with engaging storytelling, maximizing reach and generating organic engagement throughout the event.',
    coverImage: 'expogloria-banese.jpeg',
    images: ['expogloria-banese.jpeg', 'expogloria-banese1.jpeg', 'expogloria-banese2.jpeg'],
    videos: [],
    year: '2025',
  },

  // ─── INSTITUTIONAL ────────────────────────────────────────────────────────────

  {
    slug: 'google-developer-group',
    title: 'Google Developer Group Sergipe',
    category: 'Institutional',
    tags: ['Technology', 'Community', 'Event Marketing', 'Developer Content', 'Social Media'],
    description:
      'Social media management and content strategy for GDG Sergipe (Google Developer Group), one of the most active tech communities in Northeast Brazil. Produced educational content, event promotion materials, and developer spotlight posts — amplifying the voices of the local tech ecosystem and building the community\'s digital identity. The strategy focused on engaging developers, students, and tech enthusiasts around Google technologies and open community events.',
    coverImage: 'gdg.png',
    images: ['gdg.png'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/p/C9cavY5J9ZR/',
      'https://www.instagram.com/p/C8hvSyKuuSg/',
      'https://www.instagram.com/p/C99zcP4JWh_/',
    ],
    year: '2022',
  },
  {
    slug: 'policia-militar',
    title: 'Policia Militar de Sergipe',
    category: 'Institutional',
    tags: ['Government', 'Public Safety', 'Institutional Communication', 'Social Media', 'Community Relations'],
    description:
      'Social media management and institutional communication for the Military Police of Sergipe. Created content that humanized the institution, highlighted the daily work of officers across the state, and promoted public safety campaigns. The strategy focused on transparency, community engagement, and trust-building — positioning the PMSE as a modern, accessible public institution on digital platforms.',
    coverImage: 'pmse.png',
    images: [],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/reels/DBvu_1aMdvc/',
    ],
    year: '2021',
  },
  {
    slug: 'educacao-sergipe',
    title: 'Secretaria de Educacao de Sergipe',
    category: 'Institutional',
    tags: ['Government', 'Education', 'Public Communication', 'Campaign', 'Social Media'],
    description:
      'Content strategy and social media management for the Sergipe State Education Department. Produced campaigns about school enrollment, student achievements, teacher spotlights, and program launches — reaching students, parents, teachers, and the broader Sergipe community. The challenge was communicating government actions with clarity and warmth, making education news relevant and engaging for diverse audiences across the state.',
    coverImage: 'education.png',
    images: ['education.png', 'educationn.png', 'educations.png'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/reels/DBqldLux5ek/',
    ],
    year: '2021',
  },
  {
    slug: 'samu',
    title: 'SAMU — Servico de Atendimento Movel de Urgencia',
    category: 'Institutional',
    tags: ['Emergency Services', 'Healthcare', 'Government', 'Public Awareness', 'Social Media'],
    description:
      'Social media content and public communication strategy for SAMU Sergipe. Developed awareness campaigns about emergency services, prevention content, and institutional posts educating the population on how and when to use the mobile emergency system. The strategy combined impactful visuals with clear, accessible messaging — reaching Sergipe residents with potentially life-saving information through digital channels.',
    coverImage: 'samu.png',
    coverPosition: 'center 15%',
    images: ['samu.png'],
    videos: ['samu.MOV'],
    year: '2021',
  },
  {
    slug: 'grupo-gabillaud',
    title: 'Grupo Gabillaud',
    category: 'Institutional',
    tags: ['Business Group', 'Institutional', 'Event Coverage', 'Social Media', 'Brand Positioning'],
    description:
      'Social media strategy, content production, and event coverage for Grupo Gabillaud. Developed campaigns that communicate the group\'s values, services, and institutional positioning across digital platforms. Participated in the coverage of several key events hosted by the group — including a standout event featuring Alexandra Casoni, entrepreneur and shark from the Brazilian Shark Tank, which generated significant reach and brand exposure. The work combined institutional communication with high-energy event storytelling.',
    coverImage: 'gabillaud.png',
    coverPosition: 'center 15%',
    images: ['gabillaud.png'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/p/DLAwgN9A6Q0/',
      'https://www.instagram.com/reel/C7mo0CmudK8/',
      'https://www.instagram.com/reels/C7CJ_e2uzRG/',
      'https://www.instagram.com/reel/DBwL9QsOwtd/',
      'https://www.instagram.com/reel/C71o_gnOWzj/',
    ],
    year: '2024–2025',
  },
  {
    slug: 'igreja',
    title: 'Church — Institutional Communication',
    category: 'Institutional',
    tags: ['Religious Institution', 'Community', 'Social Media', 'Event Communication', 'Copywriting'],
    description:
      'Social media management and communication strategy for a church community. Developed content that connected the congregation digitally, promoted events and services, and communicated the church\'s message in an accessible, visually consistent, and engaging way. The work focused on building an online community that extended the church\'s reach beyond physical gatherings — bringing people together through digital platforms with warmth and intentionality.',
    coverImage: 'churchchurch.png',
    images: ['churchchurch.png'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/p/CwoGntdASaO/',
      'https://www.instagram.com/p/C6e4ynKOvX9/',
    ],
    year: '2022',
  },
]
