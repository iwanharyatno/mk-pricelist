import { Link, Outlet } from 'react-router-dom';

function Root() {
  const navUrls = [
    {
      path: '/products',
      text: 'Produk',
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col overflow-y-scroll">
      <Navbar title="Mitra Komputer Sokaraja" urls={navUrls} />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function Navbar({ title, urls }) {
  return (
    <nav className="flex justify-between items-center bg-blue-500 text-white">
      <Link to="/" className="p-4 grow text-xl">{title}</Link>
      {urls.map((url) => <Link className="p-4 text-white/70 hover:text-white focus:underline" to={url.path}>{url.text}</Link>)}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="p-4 bg-blue-500 text-white text-center">
      <h2 className="text-left text-xl text-center p-5">Tautan Eksternal</h2>
      <div className="flex flex-col md:flex-row justify-evenly text-left font-light px-8 my-5">
        <div className="mb-5">
          <p className="text-lg border-b border-white/50 mb-2 py-2">SMK Negeri 1 Purwokerto</p>
          <ul className="text-white/70">
            <li><a className="block p-4 hover:text-white focus:underline" target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/SMK+Negeri+1+Purwokerto/@-7.4216156,109.2544097,13z/data=!4m2!3m1!1s0x0:0x6d79bcd9709b4b6!11m1!4b1?entry=s&sa=X">Lokasi</a></li>
            <li><a className="block p-4 hover:text-white focus:underline" target="_blank" rel="noreferrer" href="tel:(0281) 637132">Telepon</a></li>
          </ul>
        </div>
        <div className="mb-5">
          <p className="text-lg border-b border-white/50 mb-2 py-2">Mitra Komputer Sokaraja</p>
          <ul className="text-white/70">
            <li><a className="block p-4 hover:text-white focus:underline" target="_blank" rel="noreferrer" href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x2e655b9bcd58919d:0xb2b38b8f578caeb8!11m1!4b1?entry=s&sa=X">Lokasi</a></li>
            <li><a className="block p-4 hover:text-white focus:underline" target="_blank" rel="noreferrer" href="tel:(0281) 6441396">Telepon</a></li>
            <li><a className="block p-4 hover:text-white focus:underline" target="_blank" rel="noreferrer" href="https://wa.me/+6289687372224">Whatsapp (LINA)</a></li>
            <li><a className="block p-4 hover:text-white focus:underline" target="_blank" rel="noreferrer" href="https://wa.me/+6285647906188">Whatsapp (UTHIYA)</a></li>
          </ul>
        </div>
      </div>
      <p className="mb-4 font-light">Web designed by <a href="https://wa.me/+6288232400859" className="underline" target="_blank" rel="noreferrer">Iwan Haryatno</a></p>
    </footer>
  );
}

export default Root;
