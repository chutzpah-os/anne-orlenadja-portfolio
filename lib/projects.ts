export interface Project {
  slug: string
  title: string
  roles: string[]
  skills: string[]
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

  // 1 ─── BANESE ─────────────────────────────────────────────────────────────────
  {
    slug: 'banese',
    title: 'BANESE — Banco do Estado de Sergipe',
    roles: ['Filmmaking & Editing'],
    skills: ['Video Production', 'Social Media Management', 'Content Creation', 'Campaign Strategy'],
    tags: ['Banking', 'Financial Education', 'Institutional', 'Campaign', 'Social Media Management'],
    description:
      'Content strategy, social media management, and campaign development for BANESE, the official state bank of Sergipe. Created content across banking products, financial education, institutional milestones, and seasonal campaigns — growing the brand\'s digital presence while reinforcing its identity as Sergipe\'s bank. The work required adapting complex financial information for everyday audiences while maintaining regulatory compliance and a consistent, trustworthy brand voice.',
    coverImage: 'equipebanese.png',
    coverPosition: 'center 15%',
    images: ['equipebanese.png', 'banesee.jpeg', 'baneseagro.jpeg', 'banessseee.jpeg', 'bannnnesssse.jpeg', 'credijunino.jpeg'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/reel/DbGCpQbBZI5/',
      'https://www.instagram.com/reel/DbBHzE6u72X/',
      'https://www.instagram.com/reels/DYJ9thJh4PF/',
      'https://www.instagram.com/reels/DXy5c8khaWU/',
      'https://www.instagram.com/reels/DW7c6-tiPxt/',
      'https://www.instagram.com/reels/DWkbBaLjdxl/',
      'https://www.instagram.com/reels/DSqDxZ6jipQ/',
      'https://www.instagram.com/reels/DRAhtb8DjMv/',
      'https://www.instagram.com/reels/DQULCTUEl_V/',
      'https://www.instagram.com/reels/DHn-I8mixRL/',
      'https://www.instagram.com/p/DXxVJ65BZVr/',
      'https://www.instagram.com/p/DXoxATYjLC6/',
      'https://www.instagram.com/p/DXg7bgyjsSm/',
      'https://www.instagram.com/p/DXXQrJtgj2k/',
    ],
    year: '2024–2026',
  },

  // 2 ─── CASSE ──────────────────────────────────────────────────────────────────
  {
    slug: 'casse',
    title: 'Casse',
    roles: ['Filmmaking & Editing', 'Social Media'],
    skills: ['Social Media Management', 'Content Creation', 'Brand Strategy'],
    tags: ['Brand Strategy', 'Social Media Management', 'Visual Identity', 'Content Calendar', 'Community'],
    description:
      'Long-term brand strategy and social media management for Casse — building and sustaining a distinctive digital presence aligned with the brand\'s core identity. Developed the content calendar, refined the visual language for digital channels, managed the community, and produced campaign content across all formats. The work focused on organic growth through authentic storytelling and a visually cohesive feed that consistently communicated the brand\'s values over time.',
    coverImage: 'capacasse.jpeg',
    images: ['cassee.png'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/reel/DZnqrT6PZgu/',
      'https://www.instagram.com/reel/DYX1sBpBbMR/',
      'https://www.instagram.com/reel/DYPYNxEOnXC/',
      'https://www.instagram.com/reels/DYfFHoqOsur/',
      'https://www.instagram.com/reels/DYVcv8oPIfA/',
      'https://www.instagram.com/p/DYz5FDjJodm/',
      'https://www.instagram.com/reels/DXo8ZoNjnXh/',
      'https://www.instagram.com/reel/DX7Dhs_ue5g/',
      'https://www.instagram.com/reels/DWRHh3PjhM7/',
      'https://www.instagram.com/p/DXy61hkOMZF/',
      'https://www.instagram.com/p/DXhPSx2Do1W/',
      'https://www.instagram.com/p/DbG5YA3PU5r/',
      'https://www.instagram.com/p/DWuEon2DnDb/',
    ],
    year: '2026',
  },

  // 3 ─── SHOPPING PREMIO ────────────────────────────────────────────────────────
  {
    slug: 'shopping-premium',
    title: 'Shopping Premio',
    roles: ['Filmmaking & Editing', 'Influencer Management'],
    skills: ['Social Media Management', 'Content Creation', 'Campaign Strategy', 'Copywriting'],
    tags: ['Social Media Management', 'Campaign Strategy', 'Content Creation', 'Retail', 'Copywriting', 'Marketing Analytics'],
    description:
      'Shopping Premio is one of the largest retail destinations in Sergipe. Led the social media strategy and content creation for the brand — building a consistent digital presence that resonated with local consumers. The scope included campaign concept, seasonal content calendars, copywriting, visual production, and community management. Every piece of content was crafted to drive both online engagement and physical foot traffic to the mall.',
    coverImage: 'shoppingpremioequipe.png',
    coverPosition: 'center 15%',
    images: ['shoppingpremioequipe.png', 'shoppingpremcampaing.jpg', 'shoppingpremm.jpg'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/shoppingpremio/reel/DAv3KIluDNR/',
      'https://www.instagram.com/jotabomfiim/reel/C_TmsFtRS4j/',
      'https://www.instagram.com/shoppingpremio/reel/C8rsKSDuPpU/',
      'https://www.instagram.com/shoppingpremio/reel/Cw0jGtBuB3g/',
      'https://www.instagram.com/shoppingpremio/reel/Cx3EVrpOTFQ/',
    ],
    year: '2023–2024',
  },

  // 4 ─── SABOR NORDESTINO ───────────────────────────────────────────────────────
  {
    slug: 'sabor-nordestino',
    title: 'Sabor Nordestino',
    roles: ['Branding', 'Marketing & Growth'],
    skills: ['Brand Strategy'],
    tags: ['Brand Identity', 'Visual Identity', 'Restaurant', 'Culture', 'Logo Design', 'Typography'],
    description:
      'Complete visual identity and brand strategy for Sabor Nordestino, a restaurant celebrating authentic northeastern Brazilian gastronomy. Every creative decision honored the region\'s rich cultural heritage — earthy palettes inspired by the sertao landscape, hand-drawn motifs referencing regional artisanship, and a typographic system that balances warmth with sophistication. The brand positions Sabor Nordestino as a cultural experience, not just a meal: a place where gastronomy and identity are inseparable.',
    coverImage: 'sabornordestino.jpg',
    images: ['sabornordestino.jpg', 'sabornordestinoo.jpg'],
    videos: [],
    year: '2024',
  },

  // 5 ─── EXPOGLÓRIA ─────────────────────────────────────────────────────────────
  {
    slug: 'expogloria',
    title: 'ExpoGloria 2025',
    roles: ['Filmmaking & Editing'],
    skills: ['Video Production', 'Social Media Management', 'Event Coverage', 'Content Creation'],
    tags: ['Government Event', 'Institutional', 'Social Media', 'Event Coverage', 'Content Strategy'],
    description:
      'Communications and social media coverage for ExpoGloria 2025, one of the largest promotional and cultural events produced by the Government of Sergipe. Delivered a content strategy and real-time coverage that captured the highlights of the expo — showcasing the state\'s agricultural, cultural, and commercial sectors to a broad public audience. The work combined institutional communication with engaging storytelling, maximizing reach and generating organic engagement throughout the event.',
    coverImage: 'expogloria-banese.jpeg',
    images: ['expogloria-banese.jpeg', 'expogloria-banese1.jpeg', 'expogloria-banese2.jpeg'],
    videos: [],
    year: '2025',
  },

  // 6 ─── ARRAIA DO POVO ─────────────────────────────────────────────────────────
  {
    slug: 'arraia-do-povo',
    title: 'Arraia do Povo 2025',
    roles: ['Filmmaking & Editing'],
    skills: ['Video Production', 'Event Coverage', 'Content Creation'],
    tags: ['Festival', 'June Festival', 'Event Coverage', 'Video Production', 'Live Coverage', 'Government Event'],
    description:
      'Media production and social media coverage for Arraia do Povo 2025, one of the largest June festival events in Sergipe — promoted by the Government of Sergipe. Responsible for video production, photography, editing, and real-time content delivery across social media platforms. The work captured the vibrant energy of forró, quadrilha, and northeastern cultural traditions, extending the festival\'s reach to audiences across the state and beyond.',
    coverImage: 'arraiadopovo1.jpeg',
    images: ['arraiadopovo1.jpeg', 'arraiadopovo2.jpeg'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/reels/DLC02R_OK1H/',
      'https://www.instagram.com/reels/DKxnExiObdt/',
      'https://www.instagram.com/reels/DKpoPHLStMX/',
    ],
    year: '2025',
  },

  // ─── ARRAIA DO POVO 2026 ──────────────────────────────────────────────────────
  {
    slug: 'arraia-do-povo-2026',
    title: 'Arraia do Povo 2026',
    roles: ['Filmmaking & Editing'],
    skills: ['Video Production', 'Event Coverage', 'Content Creation'],
    tags: ['Festival', 'June Festival', 'Event Coverage', 'Video Production', 'Live Coverage', 'Government Event'],
    description:
      'Media production and social media coverage for Arraia do Povo 2026, one of the largest June festival events in Sergipe — promoted by the Government of Sergipe. Responsible for video production, photography, editing, and real-time content delivery across social media platforms. The work captured the vibrant energy of forró, quadrilha, and northeastern cultural traditions, extending the festival\'s reach to audiences across the state and beyond.',
    coverImage: 'arraiadopovo20261.jpeg',
    images: ['arraiadopovo20261.jpeg', 'arraiadopovo20262.jpeg', 'arraiadopovo20263.jpeg'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/reel/DZVMEfHjWxU/',
      'https://www.instagram.com/reel/DZNL7nhO7vX/',
      'https://www.instagram.com/reel/DZIn9tPhoEH/',
      'https://www.instagram.com/reel/DZC0Va_jbvC/',
      'https://www.instagram.com/reel/DZBY4i0Nd-_/',
      'https://www.instagram.com/reel/DZAyIxDRrwP/',
      'https://www.instagram.com/reel/DY-D0Gwub_g/',
      'https://www.instagram.com/reel/DY5Dlh_xveR/',
    ],
    year: '2026',
  },

  // 7 ─── PRÉ-CAJU ───────────────────────────────────────────────────────────────
  {
    slug: 'pre-caju',
    title: 'Pré-Caju Festival',
    roles: ['Filmmaking & Editing'],
    skills: ['Video Production', 'Event Coverage', 'Content Creation'],
    tags: ['Festival', 'Event Coverage', 'Video Production', 'Interviews', 'Live Coverage', 'Editing'],
    description:
      'Full media production for Pré-Caju, one of the biggest pre-carnival festivals in Sergipe, sponsored by BANESE — Banco do Estado de Sergipe. Responsible for video production, photography, editing, and on-site interviews with bands, revelers, singers, songwriters, and the festival\'s main attractions. The work captured the energy and culture of the event across multiple stages and moments — delivering content that extended the festival\'s reach beyond the venue and brought the experience to audiences online.',
    coverImage: 'precaju5.jpg',
    coverPosition: 'center 15%',
    images: [
      'precaju5.jpg',
      'precaju1.jpg',
      'precaju2.jpg',
      'precaju3.jpg',
      'precaju4.jpg',
      'precaju6.jpg',
      'precaju7.jpg',
      'precaju8.jpg',
    ],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/reels/DR2oBKikfhL/',
    ],
    year: '2025',
  },

  // 8 ─── SHOPPING PRAIA SUL ─────────────────────────────────────────────────────
  {
    slug: 'shopping-praia-sul',
    title: 'Shopping Praia Sul',
    roles: ['Marketing & Growth'],
    skills: ['Social Media Management', 'Content Creation', 'Campaign Strategy'],
    tags: ['Social Media', 'Campaign', 'Community Management', 'Retail', 'Visual Content'],
    description:
      'Social media management and campaign strategy for Shopping Praia Sul, located in the Poxim district of Aracaju. Developed the brand\'s content calendar, produced visual materials for seasonal promotions, and managed the community — strengthening the mall\'s relationship with local residents and tenant stores. The strategy focused on promoting events, store offers, and the neighborhood lifestyle in an authentic and engaging way.',
    coverImage: 'annepraiasul.png',
    coverPosition: 'center 15%',
    images: ['annepraiasul.png', 'praiasul-11.png', 'Praia Sul - 12.png', 'Praia Sul - 13.png', 'Praia Sul - 31.png'],
    videos: [],
    year: '2022',
  },

  // 9 ─── MITSUBISHI ─────────────────────────────────────────────────────────────
  {
    slug: 'mitsubishi',
    title: 'Mitsubishi Xingo — Year-End Campaign',
    roles: ['Filmmaking & Editing', 'Social Media'],
    skills: ['Video Production', 'Social Media Management', 'Campaign Strategy', 'Event Coverage'],
    tags: ['Automotive', 'Campaign Concept', 'Video Production', 'Brand Activation', 'Event', 'Social Media Management'],
    description:
      'Year-end campaign for Xingo Mitsubishi, built on the insight that the brand transcends the vehicle — it is about aligning the right car with each person\'s lifestyle, values, and routine. The campaign invited the public to discover their Mitsubishi through a sensory brand experience at the dealership. Deliverables included campaign concept, social media content, video testimonials with real customers, a Year-End Gift Kit, and the Christmas Breakfast event that brought the campaign to life with clients and partners.',
    coverImage: 'capamitsubishi.jpeg',
    images: ['xingo.png', 'xingoo.png', 'xingooo.png'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/p/DRz77mfkeor/',
    ],
    year: '2026',
  },

  // 10 ─── VIALI ─────────────────────────────────────────────────────────────────
  {
    slug: 'viali',
    title: 'Viali — Vista a sua Essencia',
    roles: ['Marketing & Growth', 'Branding'],
    skills: ['Social Media Management', 'Brand Strategy', 'Copywriting', 'Campaign Strategy'],
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
    year: '2025–2026',
  },

  // 11 ─── SONHO DOS PÉS ─────────────────────────────────────────────────────────
  {
    slug: 'sonho-dos-pes',
    title: 'Sonho dos Pes',
    roles: ['Filmmaking & Editing'],
    skills: ['Video Production', 'Social Media Management', 'Content Creation'],
    tags: ['Fashion', 'Footwear', 'Campaign', 'Brand Content', 'Social Media', 'Valentine\'s Day'],
    description:
      'Valentine\'s Day campaign for Sonho dos Pes, a footwear brand based in Aracaju. The campaign brought together three expressions of elegance in a single visual story — Sonho dos Pes, Afontes Joias, and Viali — celebrating love in its most beautiful forms. Centered around the Aura dress, a capsule collection created for the occasion, the campaign captured the essence of romance with presence, lightness, and refined aesthetic. A collaboration that turned a seasonal moment into a memorable brand statement.',
    coverImage: 'capasonhodospes.jpeg',
    images: ['sonhosdospes.png'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/p/DKXx3N5PwtN/',
      'https://www.instagram.com/p/DLGUdiey9g-/',
      'https://www.instagram.com/p/DK-a82ZvMuL/',
    ],
    year: '2025',
  },

  // 12 ─── DANIELA LELIS ─────────────────────────────────────────────────────────
  {
    slug: 'daniela-lelis',
    title: 'Daniela Lelis — Imagem e Decor',
    roles: ['Influencer Management', 'Filmmaking & Editing', 'Social Media'],
    skills: ['Video Production', 'Content Creation'],
    tags: ['Personal Branding', 'Content Creation', 'Video Production', 'Interior Decor', 'Reels', 'Influencer Management'],
    description:
      'Video content production and social media strategy for Daniela Lelis, a specialist in personal image consulting and interior decoration. Produced Reels that showcased her expertise, aesthetic sensibility, and the transformations she delivers to clients — building her authority on Instagram and attracting her ideal audience. The visual language was refined to reflect Daniela\'s own taste: elegant, curated, and distinctly personal.',
    coverImage: 'capadani.jpeg',
    coverPosition: 'center 15%',
    images: ['danilelis.png'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/danielalelis_/reel/CtxOu37LNmr/',
      'https://www.instagram.com/danielalelis_/reel/CrgplHzuZGF/',
    ],
    year: '2023',
  },

  // 13 ─── UGC CREATOR ───────────────────────────────────────────────────────────
  {
    slug: 'ugc-viali',
    title: 'UGC Creator',
    roles: ['Filmmaking & Editing', 'Branding', 'Marketing & Growth', 'Influencer Management'],
    skills: ['Video Production', 'Content Creation'],
    tags: ['UGC', 'Content Creation', 'Video Production', 'Fashion', 'Reels', 'Influencer'],
    description:
      'UGC (User-Generated Content) creation — acting as a content creator to produce authentic, platform-native videos that showcase brand products in real lifestyle contexts. This role required deeply understanding each brand\'s voice and target audience, then translating that into engaging short-form content that feels organic and relatable. Content that converts because it trusts the audience\'s intelligence and connects through genuine moments.',
    coverImage: 'ugc.png',
    coverPosition: 'center 15%',
    images: ['ugc.png'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/reel/DYKAtsxOVa5/',
      'https://www.instagram.com/reels/DRezuO2jSAd/',
      'https://www.instagram.com/reels/DOeY9OegXfu/',
      'https://www.instagram.com/p/DYyRjaaTxzt/',
      'https://www.instagram.com/p/DYyRWXSzicN/',
      'https://www.instagram.com/p/DYyRLJMzoz7/',
      'https://www.instagram.com/p/DYyQ82zzOcQ/',
      'https://www.instagram.com/p/DYyQ00nzRsp/',
      'https://www.instagram.com/p/DYyQta7zKr8/',
      'https://www.instagram.com/p/DYyQSZ_z4d5/',
      'https://www.instagram.com/p/DYyQJyLzRu_/',
      'https://www.instagram.com/p/DYyPJlMzK-6/',
      'https://www.instagram.com/p/DYyO9ycTvTU/',
      'https://www.instagram.com/p/DYyOtOFTgRk/',
      'https://www.instagram.com/p/DQZ4f2_AUb_/',
      'https://www.instagram.com/p/DNgnNRNBZzi/',
      'https://www.instagram.com/p/DM8d6lGJjD6/',
      'https://www.instagram.com/p/DJ2SHhBv2WX/',
      'https://www.instagram.com/p/DIkDwdQOcbF/',
    ],
    year: '2024–2025',
  },

  // 14 ─── EVENTS ────────────────────────────────────────────────────────────────
  {
    slug: 'events',
    title: 'Events — Weddings & Celebrations',
    roles: ['Filmmaking & Editing'],
    skills: ['Video Production', 'Event Coverage'],
    tags: ['Wedding', 'Event Coverage', 'Photography', 'Videography', 'Real-Time Content'],
    description:
      'Event photography direction, video production, and social media coverage for weddings, birthdays, and special celebrations across Sergipe. From pre-event content strategy to real-time coverage and post-production, each celebration was treated as a unique narrative — with care given to every detail of how memories would be preserved, edited, and shared with the world.',
    coverImage: 'eventoss-aniversario.jpg',
    images: ['eventoss-aniversario.jpg'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/p/C_1a_jVSB0Z/',
      'https://www.instagram.com/p/C_vYmqHObL3/',
      'https://www.instagram.com/p/C_RKFusSZ6a/',
      'https://www.instagram.com/p/C-iZTtpuy7U/',
      'https://www.instagram.com/p/CqkvbRujaLL/',
      'https://www.instagram.com/p/Cmt3yxNJNti/',
    ],
    year: '2020–2025',
  },

  // 15 ─── GOOGLE DEVELOPER GROUP ────────────────────────────────────────────────
  {
    slug: 'google-developer-group',
    title: 'Google Developer Group Sergipe',
    roles: ['Volunteering', 'Marketing & Growth', 'Social Media', 'Filmmaking & Editing'],
    skills: ['Social Media Management', 'Event Coverage', 'Content Creation'],
    tags: ['Technology', 'Community', 'Event Marketing', 'Developer Content', 'Social Media', 'Volunteering'],
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
    year: '2024–2026',
  },

  // 16 ─── POLÍCIA MILITAR ───────────────────────────────────────────────────────
  {
    slug: 'policia-militar',
    title: 'Policia Militar de Sergipe',
    roles: ['Filmmaking & Editing'],
    skills: ['Social Media Management', 'Content Creation'],
    tags: ['Government', 'Public Safety', 'Institutional Communication', 'Social Media', 'Community Relations'],
    description:
      'Social media management and institutional communication for the Military Police of Sergipe. Created content that humanized the institution, highlighted the daily work of officers across the state, and promoted public safety campaigns. The strategy focused on transparency, community engagement, and trust-building — positioning the PMSE as a modern, accessible public institution on digital platforms.',
    coverImage: 'pmse.png',
    images: [],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/reels/DBvu_1aMdvc/',
    ],
    year: '2025',
  },

  // 17 ─── GRUPO GABILLAUD ───────────────────────────────────────────────────────
  {
    slug: 'grupo-gabillaud',
    title: 'Grupo Gabillaud',
    roles: ['Filmmaking & Editing'],
    skills: ['Social Media Management', 'Event Coverage', 'Content Creation'],
    tags: ['Business Group', 'Institutional', 'Event Coverage', 'Social Media', 'Brand Positioning'],
    description:
      'Social media strategy, content production, and event coverage for Grupo Gabillaud. Developed campaigns that communicate the group\'s values, services, and institutional positioning across digital platforms. Participated in the coverage of several key events hosted by the group — including a standout event featuring Alexandra Casoni, entrepreneur and shark from the Brazilian Shark Tank, which generated significant reach and brand exposure. The work combined institutional communication with high-energy event storytelling.',
    coverImage: 'gabillaud.png',
    coverPosition: 'center 15%',
    images: ['gabillaud.png'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/p/DLAwgN9A6Q0/',
    ],
    year: '2024–2025',
  },

  // 18 ─── IGREJA ────────────────────────────────────────────────────────────────
  {
    slug: 'igreja',
    title: 'Church — Institutional Communication',
    roles: ['Volunteering', 'Marketing & Growth', 'Social Media', 'Filmmaking & Editing'],
    skills: ['Social Media Management', 'Content Creation', 'Copywriting'],
    tags: ['Religious Institution', 'Community', 'Social Media', 'Event Communication', 'Copywriting', 'Volunteering'],
    description:
      'Social media management and communication strategy for a church community. Developed content that connected the congregation digitally, promoted events and services, and communicated the church\'s message in an accessible, visually consistent, and engaging way. The work focused on building an online community that extended the church\'s reach beyond physical gatherings — bringing people together through digital platforms with warmth and intentionality.',
    coverImage: 'churchchurch.png',
    images: ['churchchurch.png'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/p/CwoGntdASaO/',
      'https://www.instagram.com/p/C6e4ynKOvX9/',
    ],
    year: '2019–2023',
  },

  // 20 ─── COLO DE MÃE ───────────────────────────────────────────────────────────
  {
    slug: 'colo-de-mae',
    title: 'Colo de Mãe — Nursery & School',
    roles: ['Social Media', 'Filmmaking & Editing', 'Marketing & Growth'],
    skills: ['Social Media Management', 'Video Production', 'Content Creation'],
    tags: ['Education', 'Nursery', 'Social Media Management', 'Video Production', 'Community Management'],
    description:
      'Social media management, video production, and marketing strategy for Colo de Mãe, a nursery and early childhood school in Aracaju. Developed a warm, trust-building content strategy to connect with parents — showcasing the school\'s pedagogical approach, day-to-day moments, and milestone events. Produced Reels and feed content that humanized the institution and grew its organic community of families.',
    coverImage: 'colodemae.jpeg',
    images: ['colodemae.jpeg'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/p/CyS_5OmuTb9/',
      'https://www.instagram.com/p/CxVd38YOWEH/',
      'https://www.instagram.com/reel/CxeOTSbuNNQ/',
      'https://www.instagram.com/p/CxtdV55OrTb/',
      'https://www.instagram.com/reel/CwBiXHIMiML/',
      'https://www.instagram.com/reel/CwWLS5sstgH/',
      'https://www.instagram.com/reel/CvhbadJgWs-/',
      'https://www.instagram.com/reel/CuzZzdYgHUb/',
      'https://www.instagram.com/p/CurYNwROE9_/',
      'https://www.instagram.com/p/Cuh_so3Ogl0/',
      'https://www.instagram.com/reel/CuUknOegVI-/',
      'https://www.instagram.com/p/CuPTwP6O2WA/',
      'https://www.instagram.com/reel/Ct1iAopAIhY/',
      'https://www.instagram.com/reel/CvsiEhUAN6m/',
      'https://www.instagram.com/reel/CwQ_zVYMJAD/',
    ],
    year: '2023',
  },

  // 21 ─── DA HORTINHA ───────────────────────────────────────────────────────────
  {
    slug: 'da-hortinha',
    title: 'Da Hortinha',
    roles: ['Social Media', 'Filmmaking & Editing'],
    skills: ['Social Media Management', 'Video Production', 'Content Creation'],
    tags: ['Food', 'Organic', 'Social Media', 'Video Production', 'Reels'],
    description:
      'Social media and video content for Da Hortinha, a small organic produce brand. Produced short-form Reels that brought the garden-to-table story to life — capturing the freshness, care, and passion behind each harvest. The content strategy focused on authentic storytelling to build a loyal local following.',
    coverImage: 'dahortinha.jpeg',
    images: ['dahortinha.jpeg'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/reel/DMStc4esPb0/',
      'https://www.instagram.com/reel/DMGv2mcMsjP/',
    ],
    year: '2024',
  },

  // 22 ─── DRA. RYANE VIEIRA ─────────────────────────────────────────────────────
  {
    slug: 'dra-ryane-vieira',
    title: 'Dra. Ryane Vieira',
    roles: ['Social Media', 'Filmmaking & Editing'],
    skills: ['Social Media Management', 'Video Production', 'Content Creation'],
    tags: ['Healthcare', 'Medical', 'Personal Branding', 'Reels', 'Social Media'],
    description:
      'Personal branding and social media strategy for Dr. Ryane Vieira, a medical professional building her digital authority. Produced Reels focused on health education, professional positioning, and patient trust-building — creating content that translated complex medical information into accessible, engaging short-form video.',
    coverImage: 'ryane.jpeg',
    images: ['ryane.jpeg'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/reel/C5Oh_2tuNFB/',
      'https://www.instagram.com/reel/C4ZGiVwOlo2/',
      'https://www.instagram.com/reel/C2AhAkRO2zD/',
      'https://www.instagram.com/reel/C2xezj4ujQ8/',
    ],
    year: '2022–2024',
  },

  // ─── CLÍNICA CONDUZIR ────────────────────────────────────────────────────────
  {
    slug: 'clinica-conduzir',
    title: 'Clínica Conduzir',
    roles: ['Social Media'],
    skills: ['Social Media Management', 'Content Creation'],
    tags: ['Healthcare', 'Clinic', 'Social Media', 'Community Management', 'Wellness'],
    description:
      'Social media management for Clínica Conduzir, a health and wellness clinic. Developed content that communicated the clinic\'s services and values, built community engagement, and created a consistent digital presence reflecting the team\'s professionalism and care.',
    coverImage: 'capaconduzir.jpeg',
    images: ['capaconduzir.jpeg'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/p/C0ohubgumLE/',
      'https://www.instagram.com/p/Cw0ySqovMVP/',
      'https://www.instagram.com/p/C3LAYLdsj6B/',
      'https://www.instagram.com/p/CzHzQihsjjb/',
      'https://www.instagram.com/p/Cv4shECOz4K/',
    ],
    year: '2023',
  },

  // 23 ─── CLÍNICA AFETO ─────────────────────────────────────────────────────────
  {
    slug: 'clinica-afeto',
    title: 'Clínica Afeto',
    roles: ['Social Media'],
    skills: ['Social Media Management', 'Content Creation'],
    tags: ['Healthcare', 'Clinic', 'Social Media', 'Community Management', 'Wellness'],
    description:
      'Social media management for Clínica Afeto, a health and wellness clinic. Developed content that communicated the clinic\'s humanized approach to patient care, promoted services, and built an online presence that reflected the warmth and professionalism of the team.',
    coverImage: 'clinicaafeto.jpeg',
    images: ['clinicaafeto.jpeg'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/p/C1h9ENHOzSo/',
    ],
    year: '2022–2023',
  },

  // 24 ─── PHONE+ ────────────────────────────────────────────────────────────────
  {
    slug: 'phone-plus',
    title: 'Phone+',
    roles: ['Social Media', 'Filmmaking & Editing', 'Marketing & Growth'],
    skills: ['Social Media Management', 'Video Production', 'Content Creation', 'Campaign Strategy'],
    tags: ['Technology', 'Retail', 'Social Media Management', 'Video Production', 'Campaign'],
    description:
      'Social media strategy, video production, and marketing campaigns for Phone+, a mobile phone retail store. Created content that showcased products, promotions, and the store\'s personality — driving both online engagement and in-store foot traffic through a mix of Reels, feed posts, and seasonal campaign activations.',
    coverImage: 'iphonemais.jpeg',
    images: ['iphonemais.jpeg'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/reel/Cg4ei8bgRsz/',
      'https://www.instagram.com/p/Ch2MOMAuNVF/',
      'https://www.instagram.com/reel/Chj-Vl_ANpz/',
      'https://www.instagram.com/reel/Ci3OqpBJaxb/',
    ],
    year: '2022',
  },

  // 25 ─── DC STUDIO CRIATIVO ────────────────────────────────────────────────────
  {
    slug: 'dc-studio-criativo',
    title: 'DC Studio Criativo',
    roles: ['Social Media'],
    skills: ['Social Media Management', 'Content Creation'],
    tags: ['Creative Studio', 'Social Media', 'Content Creation', 'Brand Positioning'],
    description:
      'Social media management and content creation for DC Studio Criativo, a creative studio. Developed a consistent digital presence that reflected the studio\'s creative identity and showcased its portfolio across social media platforms — building brand recognition and engaging the local creative community.',
    coverImage: 'DCStudioCriativo.jpeg',
    images: ['DCStudioCriativo.jpeg'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/p/CZRvNGguzsh/',
      'https://www.instagram.com/p/CWqdbl7Js_R/',
      'https://www.instagram.com/p/CZj0k2_uOad/',
      'https://www.instagram.com/p/CgPgt0AOtyn/',
      'https://www.instagram.com/p/CcOHjbSuOB-/',
      'https://www.instagram.com/p/CeEGizurX6j/',
      'https://www.instagram.com/p/CkQxW7jraO4/',
    ],
    year: '2022',
  },

  // 26 ─── VISUALLY ──────────────────────────────────────────────────────────────
  {
    slug: 'visually',
    title: 'Visually',
    roles: ['Branding'],
    skills: ['Brand Strategy'],
    tags: ['Design', 'Visual Identity', 'Branding', 'Creative Direction', 'Typography'],
    description:
      'Brand design and visual identity work at Visually, a creative studio. Contributed to the development of visual identities, brand materials, and design projects — building deep skills in brand strategy, typography, and visual communication across diverse client projects.',
    coverImage: 'visually.jpeg',
    images: ['visually.jpeg'],
    videos: [],
    year: '2021–2023',
  },

  // 19 ─── EDUCAÇÃO SERGIPE ──────────────────────────────────────────────────────
  {
    slug: 'educacao-sergipe',
    title: 'Secretaria de Educacao de Sergipe',
    roles: ['Filmmaking & Editing'],
    skills: ['Social Media Management', 'Content Creation', 'Campaign Strategy'],
    tags: ['Government', 'Education', 'Public Communication', 'Campaign', 'Social Media'],
    description:
      'Content strategy and social media management for the Sergipe State Education Department. Produced campaigns about school enrollment, student achievements, teacher spotlights, and program launches — reaching students, parents, teachers, and the broader Sergipe community. The challenge was communicating government actions with clarity and warmth, making education news relevant and engaging for diverse audiences across the state.',
    coverImage: 'education.png',
    images: ['education.png', 'educationn.png', 'educations.png'],
    videos: [],
    instagramPosts: [
      'https://www.instagram.com/reels/DBqldLux5ek/',
    ],
    year: '2025',
  },
]
