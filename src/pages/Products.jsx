import { useEffect, useState } from 'react';

import PriceList from '../data/PriceList.js';

function Products() {
  const [list, setList] = useState( PriceList.all() );
  const [query, setQuery] = useState('');

  const displayedList = searchProduct(query, list);

  useEffect(() => {
    document.title = 'Daftar Produk | Transiscomp';
  }, []);

  return (
    <div className="p-5 max-w-5xl mx-auto">
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
    <div className="my-8">
      {pages.length !== 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.slice(...activeRange).map((product) => <ProductCard product={product} />)}
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

function ProductCard({ product }) {
  return (
    <li className="p-5 border rounded">
      <span className="block text-lg mb-1 font-light">{product.name}</span>
      <span className="block font-bold text-sm mb-2 italic text-gray-400">{product.category}</span>
      <div className="flex justify-between items-center mt-4">
        <span className="grow block text-green-700 font-bold">{formatCurrencyIDR(product.sale_price)}</span>
        <a href={`https://www.google.com/search?q=${encodeURIComponent(product.name)}&tbm=isch`} target="_blank" rel="noreferrer" className="block mx-4 px-4 py-2 text-blue-500 rounded-xl transition-colors hover:bg-blue-500 hover:text-white">Gambaran</a>
        <a href={'https://wa.me/+6288232400859?text=' + encodeURIComponent(`Halo, saya mau pesan *${product.name}* yaa`)} target="_blank" rel="noreferrer" className="inline-block px-4 py-2 font-normal rounded-xl bg-blue-500 text-white hover:bg-blue-600 focus:ring focus:ring-blue-200 transition-colors">
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
    const searchable = [product.name, product.category].join(' ').toLowerCase();
    return searchable.includes(query.toLowerCase());
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
