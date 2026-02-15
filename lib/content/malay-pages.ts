import { siteConfig } from '../config'

export interface MalayPage {
  slug: string
  title: string
  description: string
  h1: string
  content: {
    intro: string
    sections: Array<{
      heading: string
      content: string
    }>
    cta: string
  }
}

export const malayPages: MalayPage[] = [
  {
    slug: 'atap-bocor',
    title: `Pakar Baiki Atap Bocor Malaysia ${siteConfig.currentYear}`,
    description:
      'Cari tukang pakar baiki atap bocor di Malaysia. Dapatkan sebut harga percuma dari kontraktor berpengalaman.',
    h1: `Pakar Baiki Atap Bocor Malaysia ${siteConfig.currentYear}`,
    content: {
      intro:
        'Atap bocor adalah masalah biasa yang dihadapi oleh pemilik rumah di Malaysia. Jika tidak dibaiki segera, ia boleh menyebabkan kerosakan serius kepada rumah anda. Cari kontraktor pakar baiki atap bocor yang berpengalaman melalui direktori kami.',
      sections: [
        {
          heading: 'Punca Utama Atap Bocor',
          content:
            'Atap bocor boleh disebabkan oleh beberapa faktor seperti jubin atap retak atau pecah, flashing rosak, pembentangan atap yang tidak betul, atau penuaan bahan atap. Di Malaysia, hujan lebat dan kelembapan tinggi juga menyumbang kepada masalah atap bocor.',
        },
        {
          heading: 'Kenapa Perlu Baiki Atap Bocor Segera?',
          content:
            'Atap bocor yang dibiarkan boleh menyebabkan kerosakan struktur bangunan, pertumbuhan kulat dan cendawan, kerosakan pada perabot dan barangan, serta bil elektrik yang meningkat disebabkan penghawa dingin yang bekerja lebih keras.',
        },
        {
          heading: 'Kos Baiki Atap Bocor di Malaysia',
          content:
            'Kos repair atap bocor bergantung kepada tahap kerosakan. Pembaikan kecil biasanya antara RM500-RM2,000, manakala pembaikan besar boleh mencecah RM3,000-RM10,000. Dapatkan sebut harga percuma dari beberapa kontraktor untuk perbandingan.',
        },
      ],
      cta: 'Dapatkan Sebut Harga Percuma dari Kontraktor Atap Bocor Berdaftar',
    },
  },
  {
    slug: 'tukang-atap',
    title: `Tukang Atap Berpengalaman Malaysia ${siteConfig.currentYear}`,
    description:
      'Cari tukang atap profesional dan berpengalaman di Malaysia. Perkhidmatan pasang dan baiki atap rumah.',
    h1: `Cari Tukang Atap Berpengalaman di Malaysia`,
    content: {
      intro:
        'Mencari tukang atap yang berkualiti dan berpengalaman adalah penting untuk memastikan rumah anda terlindung dengan baik. Direktori kami menghubungkan anda dengan tukang atap profesional di seluruh Malaysia.',
      sections: [
        {
          heading: 'Perkhidmatan Tukang Atap',
          content:
            'Tukang atap kami menawarkan pelbagai perkhidmatan termasuk pasang atap baru, tukar atap lama, baiki atap bocor, waterproofing, dan penyelenggaraan atap. Mereka berpengalaman dengan semua jenis atap seperti zink, konkrit, tanah liat, dan polycarbonate.',
        },
        {
          heading: 'Ciri-ciri Tukang Atap Yang Baik',
          content:
            'Tukang atap profesional harus mempunyai pengalaman yang terbukti, lesen dan insurans yang sah, menggunakan bahan berkualiti, menawarkan waranti untuk kerja mereka, dan memberikan harga yang berpatutan dan telus.',
        },
        {
          heading: 'Cara Pilih Tukang Atap',
          content:
            'Semak portfolio dan ulasan pelanggan sebelumnya, bandingkan sebut harga dari beberapa tukang atap, tanya tentang bahan yang digunakan, pastikan mereka mempunyai insurans, dan dapatkan kontrak bertulis yang jelas.',
        },
      ],
      cta: 'Hubungi Tukang Atap Berdaftar Sekarang',
    },
  },
  {
    slug: 'zink-bocor',
    title: `Penyelesaian Zink Bocor Malaysia ${siteConfig.currentYear}`,
    description:
      'Atap zink bocor? Cari kontraktor pakar baiki dan waterproof atap zink di Malaysia.',
    h1: `Penyelesaian Atap Zink Bocor`,
    content: {
      intro:
        'Atap zink adalah pilihan popular di Malaysia kerana harganya yang berpatutan dan pemasangan yang mudah. Namun, ia boleh mengalami masalah kebocoran akibat karat, lubang, atau sambungan yang longgar.',
      sections: [
        {
          heading: 'Masalah Biasa Atap Zink',
          content:
            'Atap zink sering menghadapi masalah seperti karat dan kakisan terutama di kawasan lembap, lubang disebabkan karat atau kerosakan fizikal, sambungan yang longgar atau tidak kemas, dan bocor di bahagian flashing atau ridge capping.',
        },
        {
          heading: 'Cara Baiki Zink Bocor',
          content:
            'Pembaikan atap zink bergantung pada tahap kerosakan. Untuk lubang kecil, penutup khas atau waterproofing coating boleh digunakan. Untuk kerosakan besar, penggantian kepingan zink mungkin diperlukan. Waterproofing menyeluruh juga disyorkan untuk pencegahan jangka panjang.',
        },
        {
          heading: 'Kos Repair Zink Bocor',
          content:
            'Kos pembaikan atap zink bermula dari RM500 untuk pembaikan kecil, RM1,500-RM3,000 untuk pembaikan sederhana, dan RM5,000-RM15,000 untuk penggantian keseluruhan atap zink. Waterproofing coating biasanya RM10-RM25 per kaki persegi.',
        },
      ],
      cta: 'Dapatkan Sebut Harga Percuma untuk Baiki Atap Zink',
    },
  },
  {
    slug: 'kos-repair-atap',
    title: `Kos Repair Atap di Malaysia ${siteConfig.currentYear}`,
    description:
      'Panduan lengkap harga dan kos repair atap bocor di Malaysia. Bandingkan sebut harga dari kontraktor.',
    h1: `Berapa Kos Repair Atap di Malaysia?`,
    content: {
      intro:
        'Memahami kos repair atap membantu anda merancang bajet dengan lebih baik. Harga boleh berbeza bergantung pada jenis atap, tahap kerosakan, dan lokasi rumah anda.',
      sections: [
        {
          heading: 'Anggaran Kos Repair Atap',
          content:
            'Pembaikan kecil (tampalan bocor): RM500-RM2,000. Pembaikan sederhana (ganti beberapa jubin): RM2,000-RM5,000. Pembaikan besar (kerosakan struktur): RM5,000-RM15,000. Penggantian atap keseluruhan: RM15,000-RM50,000+.',
        },
        {
          heading: 'Faktor Yang Mempengaruhi Kos',
          content:
            'Jenis bahan atap (zink lebih murah dari tanah liat), saiz kawasan yang rosak, kesukaran akses kepada atap, kos buruh di kawasan anda, dan kualiti bahan penggantian yang dipilih.',
        },
        {
          heading: 'Tips Jimat Kos Repair Atap',
          content:
            'Baiki masalah kecil segera sebelum menjadi besar, dapatkan beberapa sebut harga untuk perbandingan, lakukan penyelenggaraan berkala untuk elak kerosakan besar, dan pilih kontraktor yang menawarkan waranti untuk kerja mereka.',
        },
      ],
      cta: 'Bandingkan Sebut Harga Percuma Sekarang',
    },
  },
  {
    slug: 'repair-bumbung',
    title: `Kontraktor Repair Bumbung Rumah Malaysia ${siteConfig.currentYear}`,
    description:
      'Perkhidmatan repair dan baiki bumbung rumah di Malaysia. Kontraktor berpengalaman dan harga berpatutan.',
    h1: `Kontraktor Repair Bumbung Rumah`,
    content: {
      intro:
        'Bumbung yang sihat adalah penting untuk melindungi rumah anda dari cuaca Malaysia yang panas dan hujan lebat. Cari kontraktor repair bumbung yang profesional dan berpengalaman melalui platform kami.',
      sections: [
        {
          heading: 'Jenis-jenis Bumbung di Malaysia',
          content:
            'Bumbung konkrit (yang paling biasa di rumah teres dan semi-D), bumbung zink/metal (popular untuk rumah kampung dan banglo), bumbung tanah liat (tradisional dan tahan lama), bumbung polycarbonate (untuk canopy dan awning), dan bumbung datar (untuk bangunan komersial).',
        },
        {
          heading: 'Tanda-tanda Bumbung Perlu Repair',
          content:
            'Air bocor atau siling basah semasa hujan, jubin atau zink retak atau hilang, karat pada bumbung metal, cendawan atau lumut tumbuh pada bumbung, dan bumbung melendut atau tidak rata.',
        },
        {
          heading: 'Proses Repair Bumbung',
          content:
            'Pemeriksaan awal untuk mengenal pasti punca masalah, sebut harga terperinci disediakan, penjadualan kerja yang sesuai dengan cuaca, pelaksanaan repair oleh tukang berpengalaman, pembersihan kawasan selepas kerja siap, dan waranti untuk kerja yang dilakukan.',
        },
      ],
      cta: 'Hubungi Kontraktor Bumbung Sekarang',
    },
  },
  {
    slug: 'waterproofing',
    title: `Waterproofing Malaysia ${siteConfig.currentYear} - Penyelesaian Kalis Air`,
    description:
      'Perkhidmatan waterproofing atap dan bangunan di Malaysia. Cegah masalah bocor dengan waterproofing profesional.',
    h1: `Waterproofing Malaysia - Penyelesaian Kalis Air Profesional`,
    content: {
      intro:
        'Waterproofing adalah proses melapisi permukaan bangunan dengan bahan kalis air untuk mencegah kebocoran. Ia penting untuk melindungi rumah anda dari kerosakan akibat air, terutama di Malaysia yang mempunyai curah hujan tinggi.',
      sections: [
        {
          heading: 'Kepentingan Waterproofing',
          content:
            'Waterproofing melindungi struktur bangunan dari kerosakan air, mencegah pertumbuhan kulat dan cendawan, menjimatkan kos pembaikan jangka panjang, meningkatkan nilai hartanah, dan memastikan persekitaran dalaman yang sihat.',
        },
        {
          heading: 'Jenis-jenis Waterproofing',
          content:
            'Membrane waterproofing (menggunakan membran kalis air), coating waterproofing (cat atau coating kalis air), injection waterproofing (untuk retakan struktur), dan crystalline waterproofing (untuk konkrit).',
        },
        {
          heading: 'Kos Waterproofing di Malaysia',
          content:
            'Harga waterproofing bergantung pada jenis dan luas kawasan. Coating waterproofing: RM10-RM25 per kaki persegi. Membrane waterproofing: RM15-RM35 per kaki persegi. Injection waterproofing: RM50-RM150 per titik suntikan. Dapatkan sebut harga percuma untuk anggaran yang tepat.',
        },
      ],
      cta: 'Dapatkan Sebut Harga Waterproofing Percuma',
    },
  },
  {
    slug: 'siling-bocor',
    title: `Siling Bocor - Punca dan Penyelesaian ${siteConfig.currentYear}`,
    description:
      'Siling bocor di rumah? Kenali punca dan dapatkan penyelesaian dari kontraktor berpengalaman.',
    h1: `Siling Bocor - Punca dan Cara Mengatasinya`,
    content: {
      intro:
        'Siling bocor adalah tanda bahawa terdapat masalah pada atap atau sistem saliran rumah anda. Ia perlu ditangani segera untuk mengelakkan kerosakan yang lebih serius.',
      sections: [
        {
          heading: 'Punca Siling Bocor',
          content:
            'Atap bocor atau rosak, salur paip pecah atau bocor (terutama di tingkat atas), sistem saliran tersumbat, retakan pada dinding atau lantai atas, dan peluwapan air (condensation) dari penghawa dingin.',
        },
        {
          heading: 'Langkah Segera Jika Siling Bocor',
          content:
            'Letakkan baldi untuk tampung air, matikan bekalan elektrik di kawasan bocor untuk keselamatan, kenal pasti sumber bocor jika boleh, hubungi kontraktor untuk pemeriksaan dan pembaikan, dan dokumentasi kerosakan untuk tuntutan insurans jika ada.',
        },
        {
          heading: 'Kos Repair Siling Bocor',
          content:
            'Pembaikan siling bocor melibatkan kos untuk baiki punca bocor (RM500-RM5,000) dan kos repair siling dalaman (RM200-RM2,000). Jumlah kos bergantung pada tahap kerosakan dan punca masalah.',
        },
      ],
      cta: 'Hubungi Kontraktor Untuk Repair Siling Bocor',
    },
  },
  {
    slug: 'pasang-atap-baru',
    title: `Pasang Atap Baru Malaysia ${siteConfig.currentYear}`,
    description:
      'Perkhidmatan pasang atap baru di Malaysia. Pilihan atap berkualiti dengan harga berpatutan.',
    h1: `Pasang Atap Baru - Pilihan dan Kos`,
    content: {
      intro:
        'Memasang atap baru adalah projek besar yang memerlukan perancangan teliti. Pilih bahan atap yang sesuai dengan iklim Malaysia dan bajet anda.',
      sections: [
        {
          heading: 'Pilihan Bahan Atap',
          content:
            'Atap konkrit (tahan lama, sesuai untuk rumah teres), atap zink/metal (murah dan senang dipasang), atap tanah liat (tradisional dan berkelas), atap polycarbonate (untuk awning), dan atap composite (moden dan ringan).',
        },
        {
          heading: 'Kos Pasang Atap Baru',
          content:
            'Atap zink: RM15-RM30 per kaki persegi. Atap konkrit: RM25-RM50 per kaki persegi. Atap tanah liat: RM40-RM80 per kaki persegi. Atap metal deck: RM35-RM60 per kaki persegi. Harga termasuk bahan dan upah pemasangan.',
        },
        {
          heading: 'Faktor Pilih Bahan Atap',
          content:
            'Pertimbangkan bajet anda, jangka hayat bahan, kesesuaian dengan iklim Malaysia, penyelenggaraan yang diperlukan, dan estetika rumah anda.',
        },
      ],
      cta: 'Dapatkan Sebut Harga Pasang Atap Baru',
    },
  },
  {
    slug: 'kontraktor-atap',
    title: `Kontraktor Atap Berdaftar Malaysia ${siteConfig.currentYear}`,
    description:
      'Senarai kontraktor atap berdaftar dan berpengalaman di Malaysia. Perbandingan harga dan ulasan pelanggan.',
    h1: `Kontraktor Atap Berdaftar dan Dipercayai`,
    content: {
      intro:
        'Memilih kontraktor atap yang betul adalah penting untuk memastikan kerja siap dengan berkualiti dan mengikut jadual. Platform kami menyenaraikan kontraktor atap berdaftar di seluruh Malaysia.',
      sections: [
        {
          heading: 'Kriteria Kontraktor Berkualiti',
          content:
            'Berdaftar dengan SSM atau badan berkaitan, mempunyai pengalaman minimum 3-5 tahun, portfolio kerja yang boleh dirujuk, ulasan positif dari pelanggan sebelum, insurans dan waranti yang sah, dan harga yang kompetitif dan telus.',
        },
        {
          heading: 'Soalan Untuk Tanya Kontraktor',
          content:
            'Berapa lama pengalaman anda? Adakah anda ada lesen dan insurans? Boleh tunjuk contoh kerja sebelum ini? Berapa lama kerja akan siap? Apakah waranti yang ditawarkan? Adakah harga termasuk bahan dan buruh?',
        },
        {
          heading: 'Cara Dapatkan Sebut Harga',
          content:
            'Isi borang di platform kami dengan butiran projek anda. Anda akan menerima sebut harga percuma dari beberapa kontraktor. Bandingkan harga, perkhidmatan, dan ulasan sebelum membuat keputusan.',
        },
      ],
      cta: 'Bandingkan Sebut Harga dari Kontraktor Berdaftar',
    },
  },
  {
    slug: 'atap-kalis-haba',
    title: `Atap Kalis Haba Malaysia ${siteConfig.currentYear}`,
    description:
      'Penyelesaian atap kalis haba untuk rumah di Malaysia. Kurangkan suhu dalaman dan jimat bil elektrik.',
    h1: `Atap Kalis Haba - Heat Resistant Roofing`,
    content: {
      intro:
        'Malaysia beriklim panas dan lembap. Atap kalis haba membantu mengurangkan haba yang masuk ke dalam rumah, menjadikan rumah lebih selesa dan menjimatkan kos penghawa dingin.',
      sections: [
        {
          heading: 'Jenis Penyelesaian Kalis Haba',
          content:
            'Heat reflective coating (cat pantul haba), insulation foam (busa penebat), heat resistant membrane (membran tahan haba), double layer roofing (atap dua lapisan), dan ventilation system (sistem pengudaraan atap).',
        },
        {
          heading: 'Manfaat Atap Kalis Haba',
          content:
            'Mengurangkan suhu dalaman sehingga 5-10°C, menjimatkan bil elektrik sehingga 30%, meningkatkan keselesaan penghuni, melindungi atap dari kerosakan haba, dan meningkatkan hayat atap.',
        },
        {
          heading: 'Kos Heat Proofing',
          content:
            'Heat reflective coating: RM8-RM20 per kaki persegi. Insulation foam: RM15-RM35 per kaki persegi. Heat resistant membrane: RM20-RM40 per kaki persegi. Kos bergantung pada jenis penyelesaian dan luas kawasan.',
        },
      ],
      cta: 'Dapatkan Sebut Harga Atap Kalis Haba',
    },
  },
]
