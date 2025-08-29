// app/page.tsx
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white flex flex-col items-center p-4">
      {/* Hero dengan background carousel di belakang header */}
      <section className="w-full max-w-5xl relative mb-6" data-aos="zoom-in">
        <div className="hero-carousel h-64 sm:h-80 md:h-96 ring-1 ring-pink-100 dark:ring-gray-800">
          <img src="/photo/Selebrasi.jpeg" alt="Carousel 1" className="slide" />
          <img src="/photo/Selebrasi (2).jpeg" alt="Carousel 2" className="slide" />
          <img src="/photo/Selebrasi Sempro.jpeg" alt="Carousel 3" className="slide" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <header className="text-center px-4">
            <span className="inline-block rounded-full bg-pink-100 text-pink-700 px-3 py-1 text-sm font-medium">Undangan Wisuda</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 tracking-tight drop-shadow">Nilam Noerhalisa, S.Akun</h2>
            <p className="text-sm sm:text-base text-gray-100 mt-3">Program Studi Akuntansi Syariah</p>
            <p className="text-sm sm:text-base text-gray-100">Fakultas Ekonomi dan Bisnis Islam</p>
            <p className="text-sm sm:text-base text-gray-100">UIN Imam Bonjol Padang</p>
            <p className="text-lg text-white mt-4 font-semibold drop-shadow">Selasa, 28 Oktober 2025</p>
          </header>
        </div>
      </section>

      {/* Detail Acara + Lokasi dalam satu frame */}
      <section className="w-full max-w-5xl bg-pink-50 p-6 rounded-2xl shadow my-8 ring-1 ring-pink-100" data-aos="fade-up">
        <h3 className="text-2xl font-semibold text-center mb-6 text-pink-900">Detail Acara & Lokasi</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl p-5 bg-pink-50 border border-pink-100">
            <h4 className="font-bold text-lg text-pink-800">Wisuda</h4>
            <p className="mt-2 text-pink-900">Selasa, 28 Oktober 2025</p>
            <p className="text-pink-900">14.00 WIB - Selesai</p>
            <p className="text-pink-900 mt-2">Gedung Kuliah Bersama, Kampus 3 UIN Imam Bonjol Padang</p>
          </div>
          <div className="rounded-xl overflow-hidden ring-1 ring-pink-100 bg-white">
            <div className="aspect-video w-full">
              <iframe
                title="Peta Lokasi Wisuda"
                src="https://www.google.com/maps?q=59QC%2BWV%20Balai%20Gadang%2C%20Kota%20Padang%2C%20Sumatera%20Barat&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-4 border-t border-pink-100 bg-pink-50/60 flex justify-center">
              <a
                href="https://www.google.com/maps?q=59QC%2BWV%20Balai%20Gadang%2C%20Kota%20Padang%2C%20Sumatera%20Barat"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-pink-600 text-white px-4 py-2 text-sm font-medium hover:bg-pink-700 transition"
              >
                Buka di Peta
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Galeri */}
      <section className="max-w-5xl w-full my-10" data-aos="fade-up">
        <h3 className="text-2xl font-semibold text-center mb-6 text-pink-900">Galeri</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            "/photo/photo (1).jpeg",
            "/photo/photo (2).jpeg",
            "/photo/photo (3).jpeg",
            "/photo/photo (4).jpeg",
            "/photo/photo (5).jpeg",
            "/photo/photo (6).jpeg",
            "/photo/photo (1).jpg",
            "/photo/Selebrasi.jpeg",
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Galeri ${index + 1}`}
              className="aspect-square w-full object-contain bg-white rounded-xl ring-1 ring-pink-100 hover:scale-[1.02] transition-transform"
              loading="lazy"
            />
          ))}
        </div>
      </section>

      {/* Timeline Perjalanan dengan frame selang-seling */}
      <section className="w-full max-w-5xl mt-10 bg-pink-50 rounded-2xl shadow p-6 ring-1 ring-pink-100" data-aos="fade-up">
        <h3 className="text-2xl font-semibold text-pink-900 mb-8 text-center">Timeline Perjalanan</h3>
        <div className="flex flex-col gap-10">
          {[
            { title: 'Pengajuan Judul', desc: 'Mengusulkan topik penelitian dan mengumpulkan berkas.', date: '13 September 2024', img: '/photo/pengajuan judul.jpeg' },
            { title: 'ACC Judul', desc: 'Judul disetujui oleh pembimbing/kaprodi.', date: '3 Oktober 2024', img: '/photo/ACC judul.jpeg' },
            { title: 'Bimbingan Pertama', desc: 'Memulai bimbingan dan penajaman metodologi.', date: '24 Oktober 2024', img: '/photo/Bimbingan pertama.jpeg' },
            { title: 'Seminar Proposal', desc: 'Mempresentasikan rencana penelitian di hadapan penguji.', date: '18 Maret 2025', img: '/photo/Seminar Proposal.jpeg' },
            { title: 'Sidang Munaqasyah', desc: 'Pertanggungjawaban hasil penelitian dan revisi akhir.', date: '11 Agustus 2025', img: '/photo/Sidang Munaqasyah.jpeg' },
            { title: 'Wisuda', desc: 'Perayaan kelulusan dan penetapan gelar.', date: '28 Oktober 2025', img: '/photo/Selebrasi.jpeg' },
          ].map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-center bg-white rounded-xl ring-1 ring-pink-100 overflow-hidden shadow-sm ${
                  isEven ? '' : 'md:flex-row-reverse'
                }`}
              >
                <div className="w-full md:w-1/2 h-56 sm:h-64 flex items-center justify-center bg-pink-50">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-contain h-full w-full"
                    loading="lazy"
                  />
                </div>
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                  <h4 className="text-pink-900 font-semibold text-xl">{item.title}</h4>
                  <p className="text-pink-600 font-medium text-sm mt-1">{item.date}</p>
                  <p className="text-pink-900/80 mt-3 text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <footer className="mt-12 mb-6 text-center text-sm text-gray-500">
        Terima kasih atas doa dan kehadirannya.
      </footer>
    </div>
  );
}