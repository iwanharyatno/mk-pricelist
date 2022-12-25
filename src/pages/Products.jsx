import { useEffect, useState } from 'react';

import PriceList from '../data/PriceList.js';

function Products() {
  const [list, setList] = useState( PriceList.all() );
  const [query, setQuery] = useState('');

  const displayedList = searchProduct(query, list);

  useEffect(() => {
    document.title = 'Daftar Produk';
  }, []);

  return (
    <div className="p-5 max-w-xl mx-auto">
      <h2 className="font-light text-blue-500 text-3xl">Daftar Produk</h2>
      <FilterProduct onSearch={(text) => setQuery(text)} />
      <PaginatedProductList products={displayedList} />
    </div>
  );
}

function PaginatedProductList({ products }) {
  const [activePage, setActivePage] = useState(1);

  const pages = generatePages(products.length);
  const activeRange = pages[activePage - 1] || pages[0];

  return (
    <div>
      {pages.length !== 0 ? (
        <ul>
          {products.slice(...activeRange).map((product) => <ProductCard name={product.name} price={product.sale_price} />)}
        </ul>
      ) : (
        <p className="my-8 text-center font-light italic text-gray-400">Tidak ditemukan barang</p>
      )}
      <PaginateLinks pageCount={pages.length} active={activePage} onChange={(active) => setActivePage(active)} />
    </div>
  );
}

function PaginateLinks({ pageCount, active, onChange }) {
  const links = [];

  for (let i = 1; i <= pageCount; i++) {
    links.push(
      <button className={'mx-2 w-8 h-8 rounded ' + ((active === i) ? 'bg-blue-500 text-white hover:bg-blue-600' : 'hover:bg-blue-500 hover:text-white text-blue-500')} onClick={() => onChange(i)}>{i}</button>
    );
  }

  const nextPage = () => {
    const next = active + 1;
    if (next > pageCount) return;
    onChange(next);
  }

  const prevPage = () => {
    const next = active - 1;
    if (next < 1) return;
    onChange(next);
  }

  return (
    <div className="flex p-4 justify-between items-center">
      <button className={'mx-2 w-8 h-8 focus:ring focus:ring-blue-200 rounded bg-blue-500 text-white hover:bg-blue-600'} onClick={prevPage}>&lt;</button>
      <div className="grow text-center">
      {...links}
      </div>
      <button className={'mx-2 w-8 h-8 focus:ring focus:ring-blue-200 rounded bg-blue-500 text-white hover:bg-blue-600'} onClick={nextPage}>&gt;</button>
    </div>
  );
}

function ProductCard({ name, price }) {
  return (
    <li className="p-5 border rounded my-5">
      <span className="block mb-2 text-lg font-light">{name}</span>
      <span className="block text-green-700">{formatCurrencyIDR(price)}</span>
      <div className="flex justify-end">
        <a href={'https://wa.me/+6288232400859?text=' + encodeURIComponent(`Halo, saya mau pesan *${name}* yaa`)} target="_blank" rel="noreferrer" className="mt-4 inline-block px-4 py-2 font-normal rounded-xl bg-blue-500 text-white hover:bg-blue-600 focus:ring focus:ring-blue-200 transition-colors">
          Pesan ini
        </a>
      </div>
    </li>
  );
}

function FilterProduct({ onSearch }) {
  return (
    <div className="flex mt-5 border">
      <input type="search" className="grow px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200" placeholder="Cari Produk. cth: usb, charger, dvd." onChange={(event) => onSearch(event.target.value)} />
      <button type="button" className="px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring focus:ring-blue-200 transition-all">
        CARI
      </button>
    </div>
  );
}

function formatCurrencyIDR(value) {
  const formatter = Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  });

  return formatter.format(value);
}

function searchProduct(query, products) {
  return products.filter((product) => {
    return product.name.toLowerCase().includes(query.toLowerCase());
  });
}

function generatePages(total, count = 25) {
  const pageCount = Math.floor(total / count);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push([
      i*count,
      i*count + count
    ]);
  }

  if (total % count !== 0) pages.push([
    pageCount*count,
    total,
  ]);

  return pages;
}

export default Products;
