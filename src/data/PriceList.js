import priceListRaw from './PRICES.txt?raw';

const priceRegex = /(.*)\s([\d.]+)\s([\d.]+)/;

const PriceList = {
  all() {
    const priceList = priceListRaw.split('\n').map((priceNote) => {
      const match = priceNote.match(priceRegex);
      if (!match) return;
      return {
        name: match[1],
        sale_price: Number(match[3].replaceAll(/\./g, '')),
      };
    }).filter(priceNote => priceNote);

    return priceList;
  },
}

export default PriceList;
