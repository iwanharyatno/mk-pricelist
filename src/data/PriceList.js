import priceListRaw from './PRICES.txt?raw';

const priceRegex = /(.*)\s([\d.]+)\s([\d.]+)/;

const PriceList = {
  all() {
    let category = '';
    const priceList = priceListRaw.split('\n').map((priceNote) => {
      const match = priceNote.match(priceRegex);
      if (!match) {
        category = priceNote;
        return;
      }
      return {
        name: match[1],
        sale_price: Number(match[3].replaceAll(/\./g, '')),
        category,
      };
    }).filter(priceNote => priceNote);

    return priceList;
  },
}

export default PriceList;
