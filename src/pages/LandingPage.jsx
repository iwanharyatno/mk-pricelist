import { Link } from 'react-router-dom';

import { useEffect } from 'react';

function LandingPage() {
  useEffect(() => {
    document.title = 'Mitra Komputer Sokaraja - Unofficial Website';
  }, []);

  return (
    <div className="leading-loose">
      <Hero>
        <h1 className="animate-slide-right-fade md:text-center text-4xl mb-6">Semua aksesoris Komputer yang pernah anda pikirkan.</h1>
        <p className="animate-slide-right-fade font-light">Produk MITRA KOMPUTER SOKARAJA dapat memenuhi semua kebutuhan untuk komputer, laptop atau bahkan smartphone anda.</p>
      </Hero>
      <Section>
        <h2 className="text-2xl text-blue-500 mb-6 text-center">Kerja sama dengan SMK Negeri 1 Purwokerto</h2>
        <p>MITRA KOMPUTER SOKARAJA Bekerja sama dengan unit usaha mandiri SMECONE CORNER di SMK Negeri 1 Purwokerto dan para siswanya, khususnya siswa X PPLG, X TJKT, XII RPL dan XII TKJ agar dapat memasarkan produk dengan lebih cepat.</p>
      </Section>
      <Hero>
        <h2 className="text-3xl mb-5 mt-8">Banyak pilihan produk... <i>Beneran!</i></h2>
        <p className="mb-5 font-light">Ada 200+ produk dengan berbagai macam kategori. Mulai dari Flashdisk, Headset, Charger bahkan Harddisk, RAM atau Motherboard.</p>
        <Link to="/products" className="inline-block mb-5 border border-white p-4 rounded-xl hover:bg-white hover:text-blue-500 transition-colors">
          Lihat semua produk
        </Link>
      </Hero>
      <Section>
        <h2 className="text-2xl text-blue-500 mb-6 text-center">Waktu terbatas!</h2>
        <p>Siswa hanya dapat menerima pesanan sampai tanggal <strong>31 Desember 2022</strong>. Setelah itu mereka akan mulai mengantarkan pesanan anda. Jadi ayo putuskan apa yang ingin anda beli sekarang!</p>
      </Section>
      <Section>
        <h2 className="text-2xl text-blue-500 mb-6 text-center">Sudah menentukan pilihan anda?</h2>
        <p className="mb-5">Perkenalkan saya Iwan Haryatno. Siswa XII RPL 1 di SMK Negeri 1 Purwokerto. Saya merupakan salah satu <em>reseller</em> produk MITRA KOMPUTER SOKARAJA lewat SMK Negeri 1 Purwokerto. Jika anda ingin membeli produk mereka, anda bisa menghubungi saya melalui whatsapp <strong>+6288232400859</strong>, Atau klik saja link dibawah ini.</p>
        <p className="mb-8">Melalui saya, pesanan anda akan diantarkan ke tempat yang anda inginkan mulai tanggal 2 Januari 2023, tanpa tambahan biaya.</p>
        <a href="https://wa.me/+6288232400859" target="_blank" rel="noreferrer" className="inline-block p-4 font-normal rounded-xl bg-blue-500 text-white hover:bg-blue-600 focus:ring focus:ring-blue-200 transition-colors">
          Hubungi Iwan Haryatno
        </a>
        <p className="text-gray-500 italic text-sm mt-5">*) Anda juga bisa memesan ke salah satu kenalan anda di kelas X PPLG, X TJKT, XII RPL atau XII TKJ lhoo!</p>
      </Section>
    </div>
  );
}

function Hero({ children }) {
  return (
    <div className="bg-blue-500 pt-5 px-9 pb-9 text-white">
      <div className="max-w-xl mx-auto pr-4">
        {children}
      </div>
    </div>
  );
 }

function Section({ children, color }) {
  return (
    <div className={'my-5 p-8 max-w-xl mx-auto font-light ' + color}>
      {children}
    </div>
  );
}

export default LandingPage;
