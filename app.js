/**
 * Djournal - Database Publikasi Karya Ilmiah Dosen & Mahasiswa
 * CourseConnect Dark Theme Edition
 */

// 1. KATEGORI UTAMA (PUB-01 s/d PUB-10)
const CATEGORIES = [
  { code: 'PUB-01', name: 'Media Pembelajaran', full: 'Pengembangan Media Pembelajaran', example: 'Multimedia, video, animasi', icon: '🎨' },
  { code: 'PUB-02', name: 'Desain Pembelajaran', full: 'Desain Pembelajaran', example: 'Model & strategi pembelajaran', icon: '📐' },
  { code: 'PUB-03', name: 'Teknologi Digital & AI', full: 'Teknologi Pembelajaran Digital', example: 'E-learning, LMS, AI', icon: '🤖' },
  { code: 'PUB-04', name: 'Evaluasi Pembelajaran', full: 'Evaluasi Pembelajaran', example: 'Evaluasi media & program', icon: '📊' },
  { code: 'PUB-05', name: 'Teori Tekpend', full: 'Teori Teknologi Pendidikan', example: 'Kajian teori & konsep', icon: '📚' },
  { code: 'PUB-06', name: 'Inovasi Pembelajaran', full: 'Inovasi Pembelajaran', example: 'Gamifikasi, AR, VR', icon: '✨' },
  { code: 'PUB-07', name: 'Pendidikan Inklusif', full: 'Pendidikan Inklusif', example: 'Teknologi adaptif', icon: '♿' },
  { code: 'PUB-08', name: 'Profesi Pendidik', full: 'Pengembangan Profesi Pendidik', example: 'Kompetensi digital guru', icon: '🎓' },
  { code: 'PUB-09', name: 'Kebijakan Pendidikan', full: 'Kebijakan Pendidikan', example: 'Kebijakan pemanfaatan teknologi', icon: '🏛️' },
  { code: 'PUB-10', name: 'Kajian Literatur', full: 'Kajian Literatur', example: 'SLR, bibliometrik, meta-analisis', icon: '🔍' }
];

// 2. TINGKAT DAN INDEKSASI JURNAL
const JOURNAL_INDEX_LEVELS = [
  { id: 'scopus', label: 'Jurnal Internasional Bereputasi (Scopus / WoS)', badgeClass: 'badge-scopus', short: 'Scopus Q1' },
  { id: 'internasional', label: 'Jurnal Internasional', badgeClass: 'badge-internasional', short: 'Internasional' },
  { id: 'sinta-1', label: 'Jurnal Nasional Terakreditasi SINTA 1', badgeClass: 'badge-sinta', short: 'SINTA 1' },
  { id: 'sinta-2', label: 'Jurnal Nasional Terakreditasi SINTA 2', badgeClass: 'badge-sinta', short: 'SINTA 2' },
  { id: 'sinta-3', label: 'Jurnal Nasional Terakreditasi SINTA 3', badgeClass: 'badge-sinta', short: 'SINTA 3' },
  { id: 'sinta-4', label: 'Jurnal Nasional Terakreditasi SINTA 4', badgeClass: 'badge-sinta', short: 'SINTA 4' },
  { id: 'sinta-5', label: 'Jurnal Nasional Terakreditasi SINTA 5', badgeClass: 'badge-sinta', short: 'SINTA 5' },
  { id: 'sinta-6', label: 'Jurnal Nasional Terakreditasi SINTA 6', badgeClass: 'badge-sinta', short: 'SINTA 6' },
  { id: 'nasional', label: 'Jurnal Nasional', badgeClass: 'badge-nasional', short: 'Nasional' }
];

// 3. SEED DATA PUBLIKASI (Menyerupai style kartu di CourseConnect)
const DEFAULT_PUBLICATIONS = [
  {
    id: 'pub-001',
    code: 'PUB-06',
    title: 'Inovasi Gamifikasi Interaktif Berbasis H5P untuk Siswa Vokasi',
    indexLevel: 'sinta-2',
    journalName: 'Jurnal Inovasi Pendidikan Vokasi (JIPV)',
    doi: 'https://doi.org/10.21831/jipv.v14i2.58921',
    author: {
      id: 'mhs-01',
      name: 'Delia Salsabila',
      role: 'mahasiswa',
      nimNip: '210103045',
      prodi: 'Teknologi Pendidikan',
      univ: 'Universitas Negeri Semarang',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
    },
    publishedDate: '15 Nov - 17 Jan',
    dateLabel: 'Terbit: 15 Nov 2026',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    iconSymbol: '🎨',
    tags: ['Gamifikasi', 'H5P', 'Vokasi'],
    problem: 'Rendahnya keterlibatan dan daya ingat siswa SMK pada materi teknis akibat metode pengajaran konvensional dan materi teks satu arah.',
    isiSingkat: 'Pengembangan modul interaktif H5P (Interactive Video & Branching Scenario) diuji dengan quasi-experiment pada 72 siswa vokasi.',
    solusi: 'Meningkatkan retensi belajar dari 54.2% menjadi 86.8% (N-Gain 0.71). Siswa dapat simulasi pemecahan masalah langsung di video.',
    h5pLink: 'https://h5p.org/h5p/embed/617',
    hasH5p: true,
    fileAttachment: {
      name: 'Naskah_Gamifikasi_H5P_Delia.pdf',
      size: '2.8 MB',
      type: 'pdf'
    },
    likes: 42,
    likedBy: ['user-demo-dosen', 'user-demo-umum'],
    views: 318,
    reviews: [
      {
        id: 'rev-01',
        reviewerName: 'Dr. Siti Nurhaliza, M.Pd',
        reviewerRole: 'dosen',
        reviewerUniv: 'Universitas Pendidikan Indonesia',
        rating: 5,
        date: '14 Okt 2026',
        comment: 'Karya solutif untuk pendidikan vokasi! Integrasi H5P dengan skenario percabangan sangat tepat guna.'
      },
      {
        id: 'rev-02',
        reviewerName: 'Budi Santoso',
        reviewerRole: 'umum',
        reviewerUniv: 'Praktisi EdTech',
        rating: 5,
        date: '20 Okt 2026',
        comment: 'Saya sudah coba simulasi H5P-nya, navigasinya sangat intuitif di ponsel!'
      }
    ]
  },
  {
    id: 'pub-002',
    code: 'PUB-03',
    title: 'Generative AI & Adaptive Learning Management System',
    indexLevel: 'scopus',
    journalName: 'International Journal of Educational Technology',
    doi: 'https://doi.org/10.1186/s41239-026-00451-2',
    author: {
      id: 'dsn-01',
      name: 'Prof. Dr. Hendra Wijaya, M.T.',
      role: 'dosen',
      nimNip: '197804152003121002',
      prodi: 'Teknik Informatika & Tekpend',
      univ: 'Universitas Indonesia',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    },
    publishedDate: '15 Nov - 30 Jan',
    dateLabel: 'Terbit: 28 Sep 2026',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    iconSymbol: '🤖',
    tags: ['AI LMS', 'Scopus Q1', 'Adaptive'],
    problem: 'Heterogenitas kemampuan mahasiswa di kelas komputasi dasar menyulitkan dosen menyediakan jalur belajar mandiri yang personal.',
    isiSingkat: 'Arsitektur adaptive LMS bertenaga model GenAI menyusun materi latihan berjenjang dan umpan balik otomatis bagi 180 mahasiswa.',
    solusi: 'Pencapaian kompetensi kelompok rentan naik 34%. Waktu deteksi kesulitan belajar terpangkas dari 3 minggu menjadi hitungan menit.',
    h5pLink: '',
    hasH5p: false,
    fileAttachment: {
      name: 'Scopus_HendraWijaya_AdaptiveLMS.pdf',
      size: '4.1 MB',
      type: 'pdf'
    },
    likes: 89,
    likedBy: ['user-demo-mhs'],
    views: 742,
    reviews: [
      {
        id: 'rev-03',
        reviewerName: 'Ahmad Fauzan',
        reviewerRole: 'mahasiswa',
        reviewerUniv: 'UNY',
        rating: 5,
        date: '02 Okt 2026',
        comment: 'Sangat menginspirasi untuk skripsi saya. Desain adaptifnya menjawab kendala saat belajar mandiri di kampus.'
      }
    ]
  },
  {
    id: 'pub-003',
    code: 'PUB-01',
    title: 'Media Pembelajaran 3D & Augmented Reality Anatomi',
    indexLevel: 'sinta-1',
    journalName: 'Jurnal Teknologi Pembelajaran Indonesia',
    doi: 'https://doi.org/10.23887/jtpi.v16i1.4120',
    author: {
      id: 'dsn-02',
      name: 'Dr. Siti Nurhaliza, M.Pd',
      role: 'dosen',
      nimNip: '198405122008122003',
      prodi: 'Pendidikan Biologi & Media Edukasi',
      univ: 'Universitas Pendidikan Indonesia',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
    },
    publishedDate: '5 Jan - 15 Feb',
    dateLabel: 'Terbit: 18 Agu 2026',
    thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    iconSymbol: '🔬',
    tags: ['AR 3D', 'Biologi', 'SINTA 1'],
    problem: 'Siswa kesulitan membayangkan struktur mikroskopis jaringan tumbuhan pada buku teks 2D statis sehingga menimbulkan miskonsepsi.',
    isiSingkat: 'Pengembangan media dengan model ADDIE menggunakan Unity AR Foundation dan Blender, diuji kevalidan oleh 6 pakar.',
    solusi: 'Kevalidan media mencapai 94.6% dan kepraktisan 91.2%. Siswa dapat membedah potongan melintang sel secara 3D langsung dari HP.',
    h5pLink: 'https://h5p.org/h5p/embed/617',
    hasH5p: true,
    fileAttachment: {
      name: 'AR_Anatomi_SitiNurhaliza.pdf',
      size: '3.5 MB',
      type: 'pdf'
    },
    likes: 67,
    likedBy: [],
    views: 520,
    reviews: [
      {
        id: 'rev-04',
        reviewerName: 'Rian Pratama',
        reviewerRole: 'mahasiswa',
        reviewerUniv: 'UNNES',
        rating: 5,
        date: '22 Agu 2026',
        comment: 'Aplikasi AR-nya ringan dan responsif di smartphone menengah!'
      }
    ]
  },
  {
    id: 'pub-004',
    code: 'PUB-02',
    title: 'Model Flipped Classroom Terintegrasi Inquiry Learning',
    indexLevel: 'sinta-3',
    journalName: 'Jurnal Ilmiah Kependidikan',
    doi: 'https://doi.org/10.31294/jikt.v8i1.1290',
    author: {
      id: 'mhs-02',
      name: 'Ahmad Fauzan',
      role: 'mahasiswa',
      nimNip: '220108012',
      prodi: 'Kurikulum & Tekpend',
      univ: 'Universitas Negeri Yogyakarta',
      photo: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80'
    },
    publishedDate: '10 Feb - 20 Mar',
    dateLabel: 'Terbit: 05 Sep 2026',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    iconSymbol: '📐',
    tags: ['Flipped', 'Inquiry', 'SINTA 3'],
    problem: 'Waktu kuliah tatap muka sering habis untuk ceramah searah sehingga mahasiswa minim waktu diskusi skripsi mendalam.',
    isiSingkat: 'Perancangan sintaks 4 tahap Flipped-Inquiry didukung video micro-learning pra-kelas dan pemecahan kasus otentik di kelas.',
    solusi: 'Kualitas proposal skripsi mahasiswa yang memenuhi standar metodologis melonjak dari 48% menjadi 89%.',
    h5pLink: '',
    hasH5p: false,
    fileAttachment: {
      name: 'Flipped_Inquiry_AhmadFauzan.docx',
      size: '1.2 MB',
      type: 'docx'
    },
    likes: 31,
    likedBy: [],
    views: 290,
    reviews: []
  },
  {
    id: 'pub-005',
    code: 'PUB-07',
    title: 'Aplikasi Pembelajaran Adaptif bagi Siswa Disleksia',
    indexLevel: 'scopus',
    journalName: 'Computers & Education Open',
    doi: 'https://doi.org/10.1016/j.caeo.2026.100142',
    author: {
      id: 'dsn-03',
      name: 'Dr. Fitri Handayani, M.Ed.',
      role: 'dosen',
      nimNip: '198809202015042001',
      prodi: 'Pendidikan Inklusi',
      univ: 'Universitas Sebelas Maret',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80'
    },
    publishedDate: '12 Jan - 25 Feb',
    dateLabel: 'Terbit: 15 Jul 2026',
    thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
    iconSymbol: '♿',
    tags: ['Inklusif', 'Disleksia', 'Scopus'],
    problem: 'Siswa disleksia tertinggal di kelas reguler karena ketiadaan font khusus (OpenDyslexic) dan integrasi fonik suara audio.',
    isiSingkat: 'Pengembangan aplikasi multi-sensory metode Orton-Gillingham terintegrasi voice recognition pada siswa usia 8-11 tahun.',
    solusi: 'Kecepatan membaca meningkat 42% dan menurunkan tingkat kecemasan akademik anak berkebutuhan khusus secara signifikan.',
    h5pLink: 'https://h5p.org/h5p/embed/617',
    hasH5p: true,
    fileAttachment: {
      name: 'Disleksia_Adaptif_Fitri.pdf',
      size: '5.2 MB',
      type: 'pdf'
    },
    likes: 112,
    likedBy: [],
    views: 980,
    reviews: []
  },
  {
    id: 'pub-006',
    code: 'PUB-10',
    title: 'Systematic Literature Review: Tren Virtual Reality Sains',
    indexLevel: 'internasional',
    journalName: 'Journal of Science Education Trends',
    doi: 'https://doi.org/10.1007/s10956-026-09941-w',
    author: {
      id: 'mhs-03',
      name: 'Kevin Sanjaya',
      role: 'mahasiswa',
      nimNip: '210204099',
      prodi: 'Pendidikan Sains & STEM',
      univ: 'Universitas Pendidikan Indonesia',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
    },
    publishedDate: '1 Mar - 15 Apr',
    dateLabel: 'Terbit: 10 Jun 2026',
    thumbnail: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=800&q=80',
    iconSymbol: '🔍',
    tags: ['SLR PRISMA', 'VR Sains', 'Global'],
    problem: 'Banyak sekolah mengadopsi headset VR berbiaya mahal tanpa peta bukti empiris topik mana yang paling berdampak positif.',
    isiSingkat: 'Protokol PRISMA menelaah 142 artikel jurnal bereputasi Scopus/WoS periode 2020-2026 menggunakan pemetaan bibliometrik VOSviewer.',
    solusi: 'VR paling efektif pada topik kimia molekuler dan astronomi (d=0.88), sedangkan biologi ekologi cukup dengan video interaktif.',
    h5pLink: '',
    hasH5p: false,
    fileAttachment: {
      name: 'SLR_VR_Sains_Kevin.pdf',
      size: '2.1 MB',
      type: 'pdf'
    },
    likes: 47,
    likedBy: [],
    views: 410,
    reviews: []
  }
];

// 4. USERS PRE-LOADED
const PRELOADED_USERS = {
  dosen: {
    id: 'user-demo-dosen',
    name: 'Dr. Siti Nurhaliza, M.Pd',
    role: 'dosen',
    nimNip: '198405122008122003',
    nidn: '0012058401',
    prodi: 'Pendidikan Biologi & Media Edukasi',
    univ: 'Universitas Pendidikan Indonesia',
    bio: 'Dosen peneliti berfokus pada inovasi media pembelajaran augmented reality, teknologi sains digital, dan kurikulum abad 21.',
    scopusId: '57218940123',
    sintaId: '6012944',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
  },
  mahasiswa: {
    id: 'user-demo-mhs',
    name: 'Ahmad Fauzan',
    role: 'mahasiswa',
    nimNip: '210103045',
    prodi: 'Kurikulum & Teknologi Pendidikan',
    univ: 'Universitas Negeri Yogyakarta',
    bio: 'Mahasiswa tingkat akhir bersemangat dalam riset teknologi edukasi, gamifikasi H5P, e-learning design, dan Kurikulum Merdeka.',
    sintaId: 'MHS-210103',
    photo: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80'
  },
  umum: {
    id: 'user-demo-umum',
    name: 'Budi Santoso',
    role: 'umum',
    nimNip: '-',
    prodi: '-',
    univ: 'Praktisi Pendidikan & EdTech Enthusiast',
    bio: 'Reviewer umum publikasi ilmiah dan pegiat inovasi media pembelajaran interaktif.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
  }
};

// 5. APPLICATION CLASS
class DjournalDarkApp {
  constructor() {
    this.currentUser = null;
    this.publications = [];
    this.activeCategory = 'ALL';
    this.searchQuery = '';
    this.activeTab = 'courses'; // courses | my-pubs | schedule | bookmarks
    this.selectedPubId = null;
    this.pendingFileAttachment = null;
    this.pendingThumbnail = null;

    this.init();
  }

  init() {
    this.loadState();
    this.bindEvents();

    if (this.currentUser) {
      this.showDashboard();
    } else {
      this.showLogin();
    }
  }

  loadState() {
    const savedPubs = localStorage.getItem('djournal_dark_pubs_v1');
    if (savedPubs) {
      try {
        this.publications = JSON.parse(savedPubs);
      } catch (e) {
        this.publications = [...DEFAULT_PUBLICATIONS];
      }
    } else {
      this.publications = [...DEFAULT_PUBLICATIONS];
      this.savePublications();
    }

    const savedUser = localStorage.getItem('djournal_dark_user_v1');
    if (savedUser) {
      try {
        this.currentUser = JSON.parse(savedUser);
      } catch (e) {
        this.currentUser = null;
      }
    }
  }

  savePublications() {
    localStorage.setItem('djournal_dark_pubs_v1', JSON.stringify(this.publications));
  }

  saveActiveUser(user) {
    this.currentUser = user;
    if (user) {
      localStorage.setItem('djournal_dark_user_v1', JSON.stringify(user));
    } else {
      localStorage.removeItem('djournal_dark_user_v1');
    }
  }

  showLogin() {
    document.getElementById('login-view-wrapper').classList.remove('hidden');
    document.getElementById('dashboard-view-wrapper').classList.add('hidden');
  }

  showDashboard() {
    document.getElementById('login-view-wrapper').classList.add('hidden');
    document.getElementById('dashboard-view-wrapper').classList.remove('hidden');

    this.renderHeaderUserInfo();
    this.renderCategoryTabs();
    this.renderPublicationCards();
    this.renderMentorsWidget();
    this.renderLearningProcessWidget();
    this.updateRolePrivileges();
  }

  updateRolePrivileges() {
    const uploadBtn = document.getElementById('sidebar-btn-upload');
    const roleBanner = document.getElementById('role-privilege-banner');

    if (!this.currentUser) return;

    if (this.currentUser.role === 'umum') {
      if (uploadBtn) {
        uploadBtn.classList.add('opacity-40', 'cursor-not-allowed');
        uploadBtn.setAttribute('title', 'Fitur publikasi khusus untuk Dosen & Mahasiswa');
      }
      if (roleBanner) {
        roleBanner.classList.remove('hidden');
        roleBanner.innerHTML = `
          <div class="flex items-center justify-between p-3 rounded-2xl bg-blue-950/40 border border-blue-900/60 text-xs text-blue-200">
            <div class="flex items-center space-x-2">
              <span class="text-blue-400">ℹ️</span>
              <span><strong>Akses Umum:</strong> Anda dapat menjelajahi seluruh publikasi dosen/mahasiswa, membaca naskah, memutar H5P, serta <strong>memberikan review, rating & like</strong>.</span>
            </div>
            <button onclick="app.switchRoleDirect('dosen')" class="ml-2 px-3 py-1 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[11px] whitespace-nowrap">
              Ganti Akun Dosen/Mhs
            </button>
          </div>
        `;
      }
    } else {
      if (uploadBtn) {
        uploadBtn.classList.remove('opacity-40', 'cursor-not-allowed');
        uploadBtn.removeAttribute('title');
      }
      if (roleBanner) {
        roleBanner.classList.remove('hidden');
        const roleLabel = this.currentUser.role === 'dosen' ? 'Dosen' : 'Mahasiswa';
        roleBanner.innerHTML = `
          <div class="flex items-center justify-between p-3 rounded-2xl bg-emerald-950/40 border border-emerald-900/60 text-xs text-emerald-200">
            <div class="flex items-center space-x-2">
              <span class="text-emerald-400">✅</span>
              <span><strong>Dashboard ${roleLabel}:</strong> Selamat datang, <strong>${this.currentUser.name}</strong>. Anda dapat mempublikasikan karya baru dan mengelola riset pribadi.</span>
            </div>
            <button onclick="app.openUploadModal()" class="ml-2 px-3 py-1 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-[11px] whitespace-nowrap flex items-center gap-1">
              <span>+ Upload Karya</span>
            </button>
          </div>
        `;
      }
    }
  }

  renderHeaderUserInfo() {
    if (!this.currentUser) return;
    const nameEl = document.getElementById('topbar-user-name');
    const avatarEl = document.getElementById('topbar-user-avatar');
    const roleEl = document.getElementById('topbar-user-role');

    if (nameEl) nameEl.textContent = this.currentUser.name;
    if (avatarEl) avatarEl.src = this.currentUser.photo || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80';
    if (roleEl) {
      const rolesMap = {
        dosen: 'Dosen / Peneliti',
        mahasiswa: 'Mahasiswa',
        umum: 'Reviewer Umum'
      };
      roleEl.textContent = rolesMap[this.currentUser.role] || 'Pengguna';
    }
  }

  // --- KATEGORI HORIZONTAL TABS (Sesuai CourseConnect Navbar) ---
  renderCategoryTabs() {
    const container = document.getElementById('category-tabs-container');
    if (!container) return;

    let html = `
      <button onclick="app.setCategoryFilter('ALL')" 
        class="category-tab-item pb-2 text-xs font-medium whitespace-nowrap transition ${this.activeCategory === 'ALL' ? 'active text-white' : 'text-slate-400 hover:text-slate-200'}">
        All
      </button>
    `;

    CATEGORIES.forEach(cat => {
      const isActive = this.activeCategory === cat.code;
      html += `
        <button onclick="app.setCategoryFilter('${cat.code}')" 
          class="category-tab-item pb-2 text-xs font-medium whitespace-nowrap transition ${isActive ? 'active text-white' : 'text-slate-400 hover:text-slate-200'}">
          ${cat.name}
        </button>
      `;
    });

    container.innerHTML = html;
  }

  setCategoryFilter(code) {
    this.activeCategory = code;
    this.renderCategoryTabs();
    this.renderPublicationCards();
  }

  handleSearch(query) {
    this.searchQuery = query.toLowerCase().trim();
    this.renderPublicationCards();
  }

  // --- RENDER PUBLICATION CARDS (PERSIS COURSECONNECT LAYOUT) ---
  renderPublicationCards() {
    const container = document.getElementById('publication-cards-list');
    if (!container) return;

    let filtered = this.publications.filter(pub => {
      if (this.activeCategory !== 'ALL' && pub.code !== this.activeCategory) {
        return false;
      }
      if (this.searchQuery) {
        const q = this.searchQuery;
        const matchTitle = pub.title.toLowerCase().includes(q);
        const matchAuthor = pub.author.name.toLowerCase().includes(q);
        const matchProblem = pub.problem.toLowerCase().includes(q);
        const matchSolusi = pub.solusi.toLowerCase().includes(q);
        if (!matchTitle && !matchAuthor && !matchProblem && !matchSolusi) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="py-16 text-center text-slate-500 text-xs">
          Tidak ada publikasi ditemukan untuk kategori atau kata kunci ini.
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(pub => this.generateCardHTML(pub)).join('');
  }

  generateCardHTML(pub) {
    const indexObj = JOURNAL_INDEX_LEVELS.find(idx => idx.id === pub.indexLevel) || { short: pub.indexLevel, badgeClass: 'badge-nasional' };
    const avgRating = this.calcAvgRating(pub.reviews);
    const reviewCount = pub.reviews ? pub.reviews.length : 0;
    const isLiked = this.currentUser && pub.likedBy && pub.likedBy.includes(this.currentUser.id);

    return `
      <div class="dark-card rounded-[22px] p-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 transition duration-200">
        
        <!-- Left Thumbnail (Mirip CourseConnect dengan icon floating, indexation badge, & date) -->
        <div class="relative w-full sm:w-[220px] h-[145px] rounded-2xl overflow-hidden shrink-0 bg-slate-900 group cursor-pointer" onclick="app.openDetailModal('${pub.id}')">
          <img src="${pub.thumbnail}" alt="${pub.title}" 
               class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
               onerror="this.src='https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80'">
          
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          <!-- Top-Left Floating Icon Box -->
          <div class="absolute top-2.5 left-2.5 w-8 h-8 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-sm shadow-md">
            ${pub.iconSymbol || '📄'}
          </div>

          <!-- Top-Right Floating Indexation Badge (Mirip badge harga di screenshot) -->
          <div class="absolute top-2.5 right-2.5">
            <span class="px-2.5 py-1 rounded-xl text-[10px] font-bold ${indexObj.badgeClass} shadow-md tracking-wider">
              ${indexObj.short}
            </span>
          </div>

          <!-- Bottom-Left Floating Date Info -->
          <div class="absolute bottom-2.5 left-2.5 text-[11px] font-medium text-slate-300">
            <span class="text-slate-400 block text-[9px] uppercase tracking-wider">Dipublikasikan</span>
            ${pub.publishedDate || '15 Nov - 17 Jan'}
          </div>

          <!-- H5P Indicator Pill if available -->
          ${pub.hasH5p ? `
            <div class="absolute bottom-2.5 right-2.5">
              <span class="px-2 py-0.5 rounded-lg bg-amber-400 text-slate-950 font-bold text-[9px]">
                ⚡ H5P
              </span>
            </div>
          ` : ''}
        </div>

        <!-- Right Content Body -->
        <div class="flex-1 flex flex-col justify-between py-0.5 space-y-2">
          
          <!-- Top Row: Title & Star Rating (Star warna biru seperti screenshot) -->
          <div class="flex items-start justify-between gap-3">
            <div class="cursor-pointer" onclick="app.openDetailModal('${pub.id}')">
              <h3 class="text-base font-bold text-white hover:text-blue-400 transition leading-snug line-clamp-1">
                ${pub.title}
              </h3>
              <p class="text-xs text-slate-400 mt-0.5 font-medium flex items-center gap-1.5">
                <span>${pub.author.name}</span>
                <span class="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-300">
                  ${pub.author.role === 'dosen' ? 'Dosen' : 'Mahasiswa'}
                </span>
                <span class="text-slate-600">•</span>
                <span class="text-slate-500 text-[11px]">${pub.journalName || 'Djournal'}</span>
              </p>
            </div>

            <!-- Blue Star Rating (Identik CourseConnect: ★ 5.0) -->
            <div class="flex items-center space-x-1 shrink-0 bg-[#20212b] px-2.5 py-1 rounded-xl border border-white/5">
              <span class="text-blue-500 text-xs">★</span>
              <span class="text-xs font-bold text-slate-200">${avgRating > 0 ? avgRating : '5.0'}</span>
            </div>
          </div>

          <!-- Snippet Deskripsi 3 Pilar (Problem & Solusi) -->
          <div class="space-y-1 text-xs">
            <p class="text-slate-400 line-clamp-2 leading-relaxed">
              <span class="text-red-400 font-semibold">Problem:</span> ${pub.problem}
            </p>
          </div>

          <!-- Bottom Row: Tag Pills & Royal Blue Arrow Button [ → ] -->
          <div class="flex items-center justify-between pt-1">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="px-3 py-1 rounded-xl bg-[#21232d] text-slate-300 text-[11px] font-semibold border border-white/5">
                ${pub.code}
              </span>
              ${(pub.tags || ['Inovasi', 'Edukasi']).map(tag => `
                <span class="px-3 py-1 rounded-xl bg-[#21232d] text-slate-400 text-[11px] font-medium border border-white/5">
                  ${tag}
                </span>
              `).join('')}

              <!-- Like & Comments count mini stats -->
              <button onclick="app.toggleLike('${pub.id}')" class="ml-2 flex items-center space-x-1 text-xs text-slate-400 hover:text-red-400 transition">
                <span>${isLiked ? '❤️' : '🤍'}</span>
                <span class="text-[11px] font-semibold">${pub.likes || 0}</span>
              </button>
              <div class="flex items-center space-x-1 text-xs text-slate-400" title="${reviewCount} Ulasan">
                <span>💬</span>
                <span class="text-[11px] font-semibold">${reviewCount}</span>
              </div>
            </div>

            <!-- Blue Arrow Button (Persis CourseConnect) -->
            <button onclick="app.openDetailModal('${pub.id}')" 
              class="w-10 h-10 rounded-xl bg-[#3b82f6] hover:bg-[#2563eb] text-white flex items-center justify-center transition shadow-lg shadow-blue-500/25 shrink-0" 
              title="Baca Selengkapnya & Review">
              <svg class="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </button>
          </div>

        </div>

      </div>
    `;
  }

  // --- RIGHT WIDGETS (MENTORS & LEARNING PROCESS) ---
  renderMentorsWidget() {
    const container = document.getElementById('mentors-widget-container');
    if (!container) return;

    const mentors = [
      {
        name: 'Dr. Siti Nurhaliza',
        role: 'Pakar Media AR',
        badge: 'SINTA 1',
        photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
      },
      {
        name: 'Prof. Hendra Wijaya',
        role: 'AI & Data Riset',
        badge: 'Scopus Q1',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
      },
      {
        name: 'Delia Salsabila',
        role: 'Gamifikasi H5P',
        badge: 'Mhs Riset',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
      },
      {
        name: 'Kevin Sanjaya',
        role: 'PRISMA & SLR',
        badge: 'WoS',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
      }
    ];

    container.innerHTML = mentors.map(m => `
      <div class="flex items-center justify-between py-2">
        <div class="flex items-center space-x-3">
          <img src="${m.photo}" alt="${m.name}" class="w-9 h-9 rounded-full object-cover border border-white/10">
          <div>
            <h5 class="text-xs font-bold text-white">${m.name}</h5>
            <p class="text-[11px] text-slate-400">${m.role}</p>
          </div>
        </div>
        <span class="text-[10px] font-semibold text-slate-400 bg-[#21232d] px-2 py-0.5 rounded-lg border border-white/5">
          ${m.badge}
        </span>
      </div>
    `).join('');
  }

  renderLearningProcessWidget() {
    const container = document.getElementById('learning-process-widget-container');
    if (!container) return;

    container.innerHTML = `
      <!-- Item 1: Teal/Emerald striped progress bar -->
      <div class="space-y-1.5">
        <div class="flex items-center justify-between text-xs">
          <span class="font-semibold text-slate-200">PUB-03: Teknologi AI & LMS</span>
          <span class="font-bold text-emerald-400">80%</span>
        </div>
        <div class="w-full h-3 bg-[#20212b] rounded-full overflow-hidden p-0.5">
          <div class="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 bg-progress-striped" style="width: 80%"></div>
        </div>
      </div>

      <!-- Item 2: Purple/Indigo striped progress bar -->
      <div class="space-y-1.5 pt-2">
        <div class="flex items-center justify-between text-xs">
          <span class="font-semibold text-slate-200">PUB-06: Inovasi H5P & AR</span>
          <span class="font-bold text-purple-400">60%</span>
        </div>
        <div class="w-full h-3 bg-[#20212b] rounded-full overflow-hidden p-0.5">
          <div class="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 bg-progress-striped" style="width: 60%"></div>
        </div>
      </div>
    `;
  }

  // --- DETAIL PUBLIKASI & REVIEW MODAL ---
  openDetailModal(pubId) {
    const pub = this.publications.find(p => p.id === pubId);
    if (!pub) return;

    this.selectedPubId = pubId;
    const cat = CATEGORIES.find(c => c.code === pub.code) || { name: pub.code, full: pub.code };
    const indexObj = JOURNAL_INDEX_LEVELS.find(idx => idx.id === pub.indexLevel) || { short: pub.indexLevel, label: pub.indexLevel, badgeClass: 'badge-nasional' };
    const avgRating = this.calcAvgRating(pub.reviews);
    const reviewCount = pub.reviews ? pub.reviews.length : 0;
    const isLiked = this.currentUser && pub.likedBy && pub.likedBy.includes(this.currentUser.id);

    const modalBody = document.getElementById('detail-modal-body');
    if (!modalBody) return;

    modalBody.innerHTML = `
      <!-- Modal Header -->
      <div class="p-6 border-b border-[#232530] bg-[#121319]">
        <div class="flex items-center gap-2 flex-wrap mb-2">
          <span class="px-2.5 py-1 rounded-xl text-xs font-bold bg-blue-600 text-white shadow-sm">
            ${pub.code} • ${cat.full}
          </span>
          <span class="px-2.5 py-1 rounded-xl text-xs font-semibold ${indexObj.badgeClass} shadow-sm">
            ${indexObj.label}
          </span>
          ${pub.hasH5p ? `
            <span class="px-2 py-0.5 rounded-lg text-xs font-bold bg-amber-400 text-slate-950 flex items-center gap-1">
              ⚡ H5P Video Interaktif
            </span>
          ` : ''}
        </div>

        <h2 class="text-xl sm:text-2xl font-bold text-white leading-snug mb-2">
          ${pub.title}
        </h2>

        <div class="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
          <div class="flex items-center gap-2">
            <span class="text-slate-300 font-medium">🏛️ Jurnal:</span>
            <span>${pub.journalName || 'Djournal Publishing'}</span>
            ${pub.doi ? `• <a href="${pub.doi}" target="_blank" class="text-blue-400 hover:underline">Link DOI ↗</a>` : ''}
          </div>
          <div class="text-slate-400">
            ${pub.dateLabel || 'Terbit: 2026'}
          </div>
        </div>
      </div>

      <!-- Author Card & Stats Row -->
      <div class="p-6 border-b border-[#232530] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#15161e]">
        <div class="flex items-center space-x-4">
          <img src="${pub.author.photo || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80'}" 
               alt="${pub.author.name}" 
               class="w-12 h-12 rounded-2xl object-cover border border-white/10">
          <div>
            <div class="flex items-center gap-2">
              <h3 class="font-bold text-white text-sm sm:text-base">${pub.author.name}</h3>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-lg ${pub.author.role === 'dosen' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'}">
                ${pub.author.role === 'dosen' ? 'Dosen' : 'Mahasiswa'}
              </span>
            </div>
            <p class="text-xs text-slate-400">
              ${pub.author.role === 'dosen' ? 'NIP/NIDN: ' : 'NIM: '} ${pub.author.nimNip || '-'} • ${pub.author.prodi || ''}
            </p>
            <p class="text-xs text-slate-500">${pub.author.univ}</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <!-- Like Button -->
          <button onclick="app.toggleLike('${pub.id}', true)" 
            class="px-4 py-2 rounded-xl border flex items-center space-x-2 transition ${isLiked ? 'bg-red-500/10 border-red-500/40 text-red-400' : 'bg-[#20212b] border-white/5 text-slate-300 hover:bg-[#282a36]'}">
            <span>${isLiked ? '❤️' : '🤍'}</span>
            <span class="text-xs font-bold">${pub.likes || 0} Suka</span>
          </button>

          <!-- Average Rating -->
          <div class="px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center space-x-2 text-amber-300">
            <span>★</span>
            <div class="text-left">
              <span class="text-xs font-black">${avgRating > 0 ? avgRating : '5.0'}</span>
              <span class="text-[10px] text-amber-400/80 block">(${reviewCount} ulasan)</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Modal Content -->
      <div class="p-6 space-y-6">
        
        <!-- 3 Pilar Deskripsi Publikasi -->
        <div class="space-y-4">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <span>📋</span> 3 Pilar Wajib Deskripsi Karya
          </h4>

          <div class="dark-pilar-problem p-4 rounded-2xl">
            <h5 class="text-xs font-bold text-red-400 uppercase tracking-wide flex items-center gap-1.5 mb-1">
              <span>⚠️</span> Permasalahan yang Dihadapi (Problem)
            </h5>
            <p class="text-sm text-slate-200 leading-relaxed">${pub.problem}</p>
          </div>

          <div class="dark-pilar-isi p-4 rounded-2xl">
            <h5 class="text-xs font-bold text-emerald-400 uppercase tracking-wide flex items-center gap-1.5 mb-1">
              <span>📄</span> Isi Singkat Karya & Metodologi
            </h5>
            <p class="text-sm text-slate-200 leading-relaxed">${pub.isiSingkat}</p>
          </div>

          <div class="dark-pilar-solusi p-4 rounded-2xl">
            <h5 class="text-xs font-bold text-blue-400 uppercase tracking-wide flex items-center gap-1.5 mb-1">
              <span>💡</span> Solusi yang Ditawarkan & Dampak
            </h5>
            <p class="text-sm text-slate-200 leading-relaxed">${pub.solusi}</p>
          </div>
        </div>

        <!-- Section H5P Player (Jika ada) -->
        ${pub.hasH5p || pub.h5pLink ? `
          <div class="mt-6 pt-6 border-t border-[#232530]">
            <div class="flex items-center justify-between mb-3">
              <h4 class="text-sm font-bold text-white flex items-center gap-2">
                <span>⚡</span> Media Pembelajaran Interaktif (H5P / Video)
              </h4>
              ${pub.h5pLink ? `
                <a href="${pub.h5pLink}" target="_blank" class="text-xs text-blue-400 font-semibold hover:underline">
                  Buka di Tab Baru ↗
                </a>
              ` : ''}
            </div>

            <div class="rounded-2xl overflow-hidden border border-[#2d303e] bg-black aspect-video">
              <iframe src="${pub.h5pLink || 'https://h5p.org/h5p/embed/617'}" 
                      class="w-full h-full border-0" 
                      allowfullscreen="allowfullscreen" 
                      title="H5P Interactive Video"></iframe>
            </div>
            <p class="text-xs text-slate-400 mt-2">
              💡 Siswa & dosen dapat menguji simulasi interaktif H5P secara langsung di layar HP maupun laptop.
            </p>
          </div>
        ` : ''}

        <!-- Section File Attachment -->
        <div class="mt-6 pt-6 border-t border-[#232530]">
          <h4 class="text-sm font-bold text-white flex items-center gap-2 mb-3">
            <span>📎</span> Dokumen Naskah & File Terlampir
          </h4>

          <div class="flex items-center justify-between p-4 rounded-2xl border border-[#272935] bg-[#1a1b24]">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 font-bold flex items-center justify-center text-xs">
                PDF
              </div>
              <div>
                <p class="text-sm font-semibold text-white">${pub.fileAttachment ? pub.fileAttachment.name : pub.title + '.pdf'}</p>
                <p class="text-xs text-slate-400">${pub.fileAttachment ? pub.fileAttachment.size : '2.4 MB'} • Dokumen Lengkap</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="app.previewPdfViewer('${pub.id}')" class="px-3 py-1.5 rounded-xl bg-[#272935] hover:bg-[#323544] text-xs font-semibold text-slate-200 transition">
                Pratinjau
              </button>
              <button onclick="app.downloadFile('${pub.id}')" class="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition">
                Unduh
              </button>
            </div>
          </div>
        </div>

        <!-- Section Ulasan & Review Komunitas (Terbuka untuk Dosen, Mhs, & UMUM) -->
        <div class="mt-8 pt-6 border-t border-[#232530]">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h4 class="text-base font-bold text-white flex items-center gap-2">
                <span>💬</span> Ulasan & Review Ilmiah Komunitas
              </h4>
              <p class="text-xs text-slate-400">Dosen, Mahasiswa, dan Pengguna Umum dapat memberikan kritik dan evaluasi karya ini.</p>
            </div>
            <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#20212b] text-slate-300">
              ${reviewCount} Ulasan
            </span>
          </div>

          <!-- Form Beri Review Baru -->
          <div class="p-4 rounded-2xl bg-[#171821] border border-[#272935] mb-6">
            <h5 class="text-xs font-bold text-slate-300 uppercase tracking-wide mb-2 flex items-center gap-1.5">
              <span>✍️</span> Berikan Masukan & Rating Anda
            </h5>

            <div class="space-y-3">
              <div class="flex items-center space-x-2">
                <span class="text-xs text-slate-400">Rating:</span>
                <div class="flex items-center space-x-1" id="star-rating-selector">
                  ${[1, 2, 3, 4, 5].map(star => `
                    <button type="button" onclick="app.selectStarRating(${star})" 
                            class="star-btn text-lg text-blue-400 hover:scale-125 transition" 
                            data-star="${star}">
                      ★
                    </button>
                  `).join('')}
                </div>
                <input type="hidden" id="input-review-rating" value="5">
                <span class="text-xs font-bold text-blue-400 ml-1" id="star-rating-label">5 Bintang (Sangat Baik)</span>
              </div>

              <div>
                <textarea id="input-review-comment" rows="3" 
                  placeholder="Tuliskan ulasan konstruktif mengenai problem, metodologi, atau solusi karya ini..."
                  class="w-full text-xs p-3 rounded-xl border border-[#2d303e] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#0f1015] text-white"></textarea>
              </div>

              <div class="flex items-center justify-between">
                <div class="text-[11px] text-slate-400">
                  Reviewer: <strong class="text-slate-200">${this.currentUser ? this.currentUser.name : 'Tamu'}</strong> 
                  (${this.currentUser ? this.currentUser.role.toUpperCase() : 'UMUM'})
                </div>
                <button onclick="app.submitReview('${pub.id}')" 
                  class="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition shadow-md shadow-blue-500/20">
                  Kirim Ulasan 🚀
                </button>
              </div>
            </div>
          </div>

          <!-- Daftar Review yang Masuk -->
          <div class="space-y-3" id="reviews-list-container">
            ${reviewCount > 0 ? pub.reviews.map(rev => `
              <div class="p-4 rounded-2xl bg-[#171821] border border-[#232530] flex flex-col space-y-2">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <span class="w-7 h-7 rounded-full bg-blue-600/30 text-blue-300 flex items-center justify-center font-bold text-xs">
                      ${rev.reviewerName.charAt(0)}
                    </span>
                    <div>
                      <div class="flex items-center gap-1.5">
                        <h5 class="text-xs font-bold text-white">${rev.reviewerName}</h5>
                        <span class="text-[10px] font-bold px-1.5 py-0.2 rounded ${rev.reviewerRole === 'dosen' ? 'bg-blue-500/20 text-blue-400' : (rev.reviewerRole === 'mahasiswa' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-purple-500/20 text-purple-400')}">
                          ${(rev.reviewerRole || 'umum').toUpperCase()}
                        </span>
                      </div>
                      <p class="text-[10px] text-slate-400">${rev.reviewerUniv || 'Reviewer'}</p>
                    </div>
                  </div>

                  <div class="text-right">
                    <div class="text-blue-400 text-xs font-bold">
                      ${'★'.repeat(rev.rating || 5)}${'☆'.repeat(5 - (rev.rating || 5))}
                    </div>
                    <span class="text-[10px] text-slate-500">${rev.date}</span>
                  </div>
                </div>

                <p class="text-xs text-slate-300 leading-relaxed bg-[#111218] p-3 rounded-xl border border-white/5">
                  "${rev.comment}"
                </p>
              </div>
            `).join('') : `
              <div class="text-center py-6 text-slate-500 text-xs">
                Belum ada review untuk karya ini. Jadilah yang pertama memberikan masukan!
              </div>
            `}
          </div>

        </div>

      </div>
    `;

    document.getElementById('detail-modal').classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  closeDetailModal() {
    document.getElementById('detail-modal').classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    this.selectedPubId = null;
  }

  // --- PRATINJAU PDF MODAL ---
  previewPdfViewer(pubId) {
    const pub = this.publications.find(p => p.id === pubId);
    if (!pub) return;

    const viewer = document.getElementById('pdf-viewer-modal');
    const titleEl = document.getElementById('pdf-viewer-title');
    const contentEl = document.getElementById('pdf-viewer-content');

    if (titleEl) titleEl.textContent = pub.title;
    if (contentEl) {
      contentEl.innerHTML = `
        <div class="max-w-3xl mx-auto bg-white text-slate-900 p-8 sm:p-12 rounded-2xl shadow-2xl space-y-6">
          <div class="text-center pb-6 border-b border-slate-200">
            <span class="text-[10px] font-bold tracking-widest text-blue-800 uppercase bg-blue-50 px-2 py-1 rounded">${pub.journalName || 'Djournal Publication'}</span>
            <h1 class="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-3 mb-2">${pub.title}</h1>
            <p class="text-xs font-semibold text-slate-700">${pub.author.name} • ${pub.author.univ}</p>
            <p class="text-[11px] text-blue-600 mt-1">${pub.doi || 'https://djournal.edu/article/' + pub.id}</p>
          </div>

          <div>
            <h3 class="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-1.5">ABSTRAK</h3>
            <p class="text-xs leading-relaxed text-justify text-slate-700 italic bg-slate-50 p-4 rounded-xl border border-slate-200">
              Penelitian ini dilatarbelakangi oleh <strong>${pub.problem}</strong>. Untuk mengatasi permasalahan tersebut, dilakukan penelitian dan perancangan dengan <strong>${pub.isiSingkat}</strong>. Hasil implementasi menunjukkan bahwa <strong>${pub.solusi}</strong>.
            </p>
          </div>

          <div class="space-y-4 pt-3 border-t border-slate-100 text-xs leading-relaxed text-slate-800">
            <div>
              <h4 class="font-bold text-slate-900 mb-1">1. LATAR BELAKANG & PROBLEM</h4>
              <p class="text-justify">${pub.problem}</p>
            </div>
            <div>
              <h4 class="font-bold text-slate-900 mb-1">2. METODOLOGI & ISI KARYA</h4>
              <p class="text-justify">${pub.isiSingkat}</p>
            </div>
            <div>
              <h4 class="font-bold text-slate-900 mb-1">3. SOLUSI & KESIMPULAN</h4>
              <p class="text-justify">${pub.solusi}</p>
            </div>
          </div>
        </div>
      `;
    }

    if (viewer) viewer.classList.remove('hidden');
  }

  closePdfViewer() {
    const viewer = document.getElementById('pdf-viewer-modal');
    if (viewer) viewer.classList.add('hidden');
  }

  downloadFile(pubId) {
    const pub = this.publications.find(p => p.id === pubId);
    if (!pub) return;
    this.showToast(`Mengunduh berkas: ${pub.fileAttachment ? pub.fileAttachment.name : pub.title + '.pdf'}...`, 'info');
  }

  // --- REVIEW SUBMISSION & STARS ---
  selectStarRating(rating) {
    document.getElementById('input-review-rating').value = rating;
    const labelEl = document.getElementById('star-rating-label');
    const descriptions = {
      1: '1 Bintang (Kurang Sekali)',
      2: '2 Bintang (Perlu Peningkatan)',
      3: '3 Bintang (Cukup Baik)',
      4: '4 Bintang (Baik & Informatif)',
      5: '5 Bintang (Sangat Luar Biasa)'
    };
    if (labelEl) labelEl.textContent = descriptions[rating] || `${rating} Bintang`;

    const buttons = document.querySelectorAll('#star-rating-selector button');
    buttons.forEach((btn, idx) => {
      if (idx < rating) {
        btn.classList.add('text-blue-400');
        btn.classList.remove('text-slate-600');
      } else {
        btn.classList.remove('text-blue-400');
        btn.classList.add('text-slate-600');
      }
    });
  }

  submitReview(pubId) {
    if (!this.currentUser) {
      this.showToast('Silakan masuk terlebih dahulu untuk mereview.', 'error');
      return;
    }

    const rating = parseInt(document.getElementById('input-review-rating').value, 10) || 5;
    const commentInput = document.getElementById('input-review-comment');
    const comment = commentInput ? commentInput.value.trim() : '';

    if (!comment) {
      this.showToast('Harap tuliskan komentar atau ulasan Anda.', 'warning');
      return;
    }

    const pub = this.publications.find(p => p.id === pubId);
    if (!pub) return;

    if (!pub.reviews) pub.reviews = [];

    const newReview = {
      id: 'rev-' + Date.now(),
      reviewerName: this.currentUser.name,
      reviewerRole: this.currentUser.role,
      reviewerUniv: this.currentUser.univ || 'Reviewer Komunitas',
      rating: rating,
      date: 'Hari ini',
      comment: comment
    };

    pub.reviews.unshift(newReview);
    this.savePublications();

    this.showToast('Ulasan dan rating Anda berhasil dipublikasikan!', 'success');
    commentInput.value = '';

    this.openDetailModal(pubId);
    this.renderPublicationCards();
  }

  toggleLike(pubId, fromModal = false) {
    if (!this.currentUser) {
      this.showToast('Silakan masuk terlebih dahulu untuk menyukai karya.', 'error');
      return;
    }

    const pub = this.publications.find(p => p.id === pubId);
    if (!pub) return;

    if (!pub.likedBy) pub.likedBy = [];

    const userId = this.currentUser.id;
    const idx = pub.likedBy.indexOf(userId);

    if (idx >= 0) {
      pub.likedBy.splice(idx, 1);
      pub.likes = Math.max(0, (pub.likes || 1) - 1);
      this.showToast('Batal menyukai karya.', 'info');
    } else {
      pub.likedBy.push(userId);
      pub.likes = (pub.likes || 0) + 1;
      this.showToast('Menyukai karya ini! ❤️', 'success');
    }

    this.savePublications();
    this.renderPublicationCards();

    if (fromModal) {
      this.openDetailModal(pubId);
    }
  }

  // --- UPLOAD KARYA MODAL ---
  openUploadModal() {
    if (!this.currentUser) {
      this.showToast('Silakan login terlebih dahulu.', 'error');
      return;
    }

    if (this.currentUser.role === 'umum') {
      this.showToast('Akses Umum: Hanya Dosen dan Mahasiswa yang dapat mengupload publikasi.', 'warning');
      return;
    }

    const form = document.getElementById('form-upload-karya');
    if (form) form.reset();
    this.pendingFileAttachment = null;
    this.pendingThumbnail = null;

    document.getElementById('upload-modal').classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  closeUploadModal() {
    document.getElementById('upload-modal').classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  handleUploadSubmit(e) {
    e.preventDefault();

    if (!this.currentUser || this.currentUser.role === 'umum') {
      this.showToast('Anda tidak memiliki izin mempublikasikan karya.', 'error');
      return;
    }

    const title = document.getElementById('upload-title').value.trim();
    const code = document.getElementById('upload-category').value;
    const indexLevel = document.getElementById('upload-index-level').value;
    const journalName = document.getElementById('upload-journal-name').value.trim();
    const doi = document.getElementById('upload-doi').value.trim();
    const problem = document.getElementById('upload-problem').value.trim();
    const isiSingkat = document.getElementById('upload-isi').value.trim();
    const solusi = document.getElementById('upload-solusi').value.trim();
    const h5pLink = document.getElementById('upload-h5p-link').value.trim();

    if (!title || !code || !indexLevel || !problem || !isiSingkat || !solusi) {
      this.showToast('Harap lengkapi semua kolom wajib (Judul, Kategori, Indeksasi, Problem, Isi, Solusi).', 'warning');
      return;
    }

    const defaultThumbs = [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80'
    ];
    const chosenThumb = this.pendingThumbnail || defaultThumbs[Math.floor(Math.random() * defaultThumbs.length)];

    const catObj = CATEGORIES.find(c => c.code === code) || { icon: '📄', name: code };

    const newPub = {
      id: 'pub-' + Date.now(),
      code: code,
      title: title,
      indexLevel: indexLevel,
      journalName: journalName || 'Djournal Online Publishing',
      doi: doi || '',
      author: {
        id: this.currentUser.id,
        name: this.currentUser.name,
        role: this.currentUser.role,
        nimNip: this.currentUser.nimNip || '',
        prodi: this.currentUser.prodi || '',
        univ: this.currentUser.univ || '',
        photo: this.currentUser.photo || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80'
      },
      publishedDate: '15 Nov - 17 Jan',
      dateLabel: 'Terbit: Hari ini',
      thumbnail: chosenThumb,
      iconSymbol: catObj.icon || '📄',
      tags: [code, catObj.name],
      problem: problem,
      isiSingkat: isiSingkat,
      solusi: solusi,
      h5pLink: h5pLink,
      hasH5p: !!h5pLink,
      fileAttachment: this.pendingFileAttachment || {
        name: title.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 25) + '.pdf',
        size: '2.5 MB',
        type: 'pdf'
      },
      likes: 0,
      likedBy: [],
      views: 1,
      reviews: []
    };

    this.publications.unshift(newPub);
    this.savePublications();

    this.closeUploadModal();
    this.showToast('Karya ilmiah berhasil dipublikasikan di Djournal!', 'success');
    this.renderPublicationCards();
  }

  // --- PROFIL SAYA MODAL / VIEW ---
  openProfileView() {
    if (!this.currentUser) return;
    const authorPubs = this.publications.filter(p => p.author.id === this.currentUser.id || p.author.name === this.currentUser.name);

    const modalBody = document.getElementById('profile-modal-body');
    if (!modalBody) return;

    modalBody.innerHTML = `
      <div class="space-y-6">
        <div class="flex items-center space-x-5">
          <img src="${this.currentUser.photo || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80'}" 
               class="w-20 h-20 rounded-2xl object-cover border-2 border-blue-500 shadow-md">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <h3 class="text-xl font-bold text-white">${this.currentUser.name}</h3>
              <span class="text-xs font-bold px-2.5 py-0.5 rounded-full ${this.currentUser.role === 'dosen' ? 'bg-blue-500/20 text-blue-400' : (this.currentUser.role === 'mahasiswa' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-purple-500/20 text-purple-400')}">
                ${this.currentUser.role.toUpperCase()}
              </span>
            </div>
            <p class="text-xs text-slate-400">${this.currentUser.role === 'dosen' ? 'NIP/NIDN: ' : 'NIM: '} ${this.currentUser.nimNip || '-'}</p>
            <p class="text-xs text-slate-500">${this.currentUser.univ}</p>
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-[#171821] border border-[#272935] text-xs text-slate-300">
          "${this.currentUser.bio || 'Aktif melakukan penelitian dan publikasi karya ilmiah di bidang teknologi pendidikan.'}"
        </div>

        <div>
          <div class="flex items-center justify-between mb-3">
            <h4 class="text-sm font-bold text-white">Karya Publikasi Saya (${authorPubs.length})</h4>
            ${this.currentUser.role !== 'umum' ? `
              <button onclick="app.closeProfileModal(); app.openUploadModal();" class="text-xs font-bold text-blue-400 hover:text-blue-300">
                + Tambah Baru
              </button>
            ` : ''}
          </div>

          ${authorPubs.length > 0 ? `
            <div class="space-y-3">
              ${authorPubs.map(p => `
                <div class="p-3.5 rounded-xl bg-[#171821] border border-[#232530] flex items-center justify-between">
                  <div>
                    <h5 class="text-xs font-bold text-white hover:text-blue-400 cursor-pointer" onclick="app.closeProfileModal(); app.openDetailModal('${p.id}');">
                      ${p.title}
                    </h5>
                    <p class="text-[11px] text-slate-400 mt-0.5">${p.code} • ${p.indexLevel.toUpperCase()}</p>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class="text-xs text-slate-400">❤️ ${p.likes || 0}</span>
                    <button onclick="app.deletePublication('${p.id}')" class="text-xs text-red-400 hover:text-red-300 px-2 py-1 rounded bg-red-500/10">
                      Hapus
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          ` : `
            <p class="text-xs text-slate-500 text-center py-6">Belum ada publikasi yang diunggah.</p>
          `}
        </div>
      </div>
    `;

    document.getElementById('profile-modal').classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  closeProfileModal() {
    document.getElementById('profile-modal').classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  deletePublication(pubId) {
    if (!confirm('Apakah Anda yakin ingin menghapus publikasi ini?')) return;
    this.publications = this.publications.filter(p => p.id !== pubId);
    this.savePublications();
    this.showToast('Publikasi berhasil dihapus.', 'info');
    this.renderPublicationCards();
    this.openProfileView();
  }

  // --- AUTHENTICATION & LOGIN ---
  login(role, customData = {}) {
    let user = null;
    if (role === 'dosen') {
      user = {
        id: 'usr-' + Date.now(),
        name: customData.name || 'Dosen Pengampu',
        role: 'dosen',
        nimNip: customData.nimNip || '198405122008122003',
        univ: customData.univ || 'Universitas Negeri',
        bio: 'Dosen peneliti berfokus pada inovasi pendidikan dan kurikulum digital.',
        photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
      };
    } else if (role === 'mahasiswa') {
      user = {
        id: 'usr-' + Date.now(),
        name: customData.name || 'Mahasiswa Peneliti',
        role: 'mahasiswa',
        nimNip: customData.nimNip || '210103045',
        univ: customData.univ || 'Universitas Negeri',
        bio: 'Mahasiswa aktif meneliti media interaktif dan gamifikasi.',
        photo: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80'
      };
    } else {
      user = {
        id: 'usr-' + Date.now(),
        name: customData.name || 'Pengguna Umum',
        role: 'umum',
        nimNip: '-',
        univ: customData.univ || 'Praktisi Umum',
        bio: 'Reviewer umum dan pemerhati publikasi ilmiah.',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
      };
    }

    this.saveActiveUser(user);
    this.showToast(`Selamat datang, ${user.name}! Masuk sebagai ${user.role.toUpperCase()}`, 'success');
    this.showDashboard();
  }

  loginWithDemo(role) {
    const demo = PRELOADED_USERS[role];
    if (demo) {
      this.saveActiveUser({ ...demo });
      this.showToast(`Masuk akun demo ${role.toUpperCase()}: ${demo.name}`, 'success');
      this.showDashboard();
    }
  }

  switchRoleDirect(role) {
    this.loginWithDemo(role);
  }

  logout() {
    this.saveActiveUser(null);
    this.showToast('Anda telah keluar dari aplikasi.', 'info');
    this.showLogin();
  }

  // --- DEVICE SIMULATOR TOGGLE ---
  toggleDeviceSimulator(mode) {
    const wrapper = document.getElementById('app-main-canvas');
    const btnLaptop = document.getElementById('btn-view-laptop');
    const btnMobile = document.getElementById('btn-view-mobile');

    if (mode === 'mobile') {
      wrapper.classList.add('mobile-mode');
      if (btnMobile) {
        btnMobile.classList.add('bg-blue-600', 'text-white');
        btnMobile.classList.remove('bg-[#1a1b24]', 'text-slate-400');
      }
      if (btnLaptop) {
        btnLaptop.classList.remove('bg-blue-600', 'text-white');
        btnLaptop.classList.add('bg-[#1a1b24]', 'text-slate-400');
      }
      this.showToast('Beralih ke Simulasi Tampilan HP', 'info');
    } else {
      wrapper.classList.remove('mobile-mode');
      if (btnLaptop) {
        btnLaptop.classList.add('bg-blue-600', 'text-white');
        btnLaptop.classList.remove('bg-[#1a1b24]', 'text-slate-400');
      }
      if (btnMobile) {
        btnMobile.classList.remove('bg-blue-600', 'text-white');
        btnMobile.classList.add('bg-[#1a1b24]', 'text-slate-400');
      }
      this.showToast('Beralih ke Mode Laptop Penuh', 'info');
    }
  }

  // --- HELPER METHODS ---
  calcAvgRating(reviews) {
    if (!reviews || reviews.length === 0) return 5.0;
    const sum = reviews.reduce((acc, r) => acc + (r.rating || 5), 0);
    return (sum / reviews.length).toFixed(1);
  }

  showToast(message, type = 'info') {
    const toast = document.getElementById('toast-notification');
    const msgEl = document.getElementById('toast-message');
    const iconEl = document.getElementById('toast-icon');

    if (!toast || !msgEl) return;
    msgEl.textContent = message;

    const icons = { success: '✅', error: '❌', warning: '⚠️', info: '💡' };
    if (iconEl) iconEl.textContent = icons[type] || '🔔';

    toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
    toast.classList.add('opacity-100', 'translate-y-0');

    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      toast.classList.remove('opacity-100', 'translate-y-0');
      toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
    }, 3000);
  }

  bindEvents() {
    // Search input
    const searchInput = document.getElementById('topbar-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
    }

    // Login form
    const loginForm = document.getElementById('form-login-user');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const role = document.getElementById('login-role').value;
        const name = document.getElementById('login-name').value.trim();
        const nimNip = document.getElementById('login-nimnip').value.trim();
        const univ = document.getElementById('login-univ').value.trim();

        if (!name) {
          this.showToast('Harap masukkan nama lengkap Anda.', 'warning');
          return;
        }
        this.login(role, { name, nimNip, univ });
      });
    }

    // Upload form
    const uploadForm = document.getElementById('form-upload-karya');
    if (uploadForm) {
      uploadForm.addEventListener('submit', (e) => this.handleUploadSubmit(e));
    }

    // File input
    const fileInput = document.getElementById('upload-file-doc');
    if (fileInput) {
      fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          this.pendingFileAttachment = {
            name: file.name,
            size: (file.size / (1024 * 1024)).toFixed(1) + ' MB',
            type: file.name.split('.').pop() || 'pdf'
          };
          this.showToast(`Berkas dipilih: ${file.name}`, 'info');
        }
      });
    }

    // Thumbnail input
    const thumbInput = document.getElementById('upload-thumbnail-file');
    if (thumbInput) {
      thumbInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            this.pendingThumbnail = event.target.result;
            this.showToast('Sampul gambar berhasil dimuat!', 'info');
          };
          reader.readAsDataURL(file);
        }
      });
    }
  }
}

// Inisialisasi Aplikasi Saat Halaman Selesai Dimuat
let app;
window.addEventListener('DOMContentLoaded', () => {
  app = new DjournalDarkApp();
});
