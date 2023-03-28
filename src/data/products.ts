export const products: Iproduct[] = [
  {
    id: 0,
    name: 'Kia Rio X-Line',
    price: 2500,
    year: 2021,
    category: 'econom',
    img: 'https://carrent-kzn.ru/wp-content/uploads/2022/04/rio-x.jpg',
    people: 5,
  },
  {
    id: 1,
    name: 'Hyundai Creta',
    price: 2800,
    year: 2022,
    category: 'econom',
    img: 'https://carrent-kzn.ru/wp-content/uploads/2022/04/creta-1.jpg',
    people: 5,
  },
  {
    id: 2,
    name: 'Skoda Octavia',
    price: 2500,
    year: 2021,
    category: 'econom',
    img: 'https://carrent-kzn.ru/wp-content/uploads/2022/04/octavia.jpg',
    people: 5,
  },
  {
    id: 3,
    name: 'Toyota Corolla',
    price: 2600,
    year: 2023,
    category: 'econom',
    img: 'https://carrent-kzn.ru/wp-content/uploads/2016/10/toyota-corolla-2014.png',
    people: 5,
  },
  {
    id: 4,
    name: 'Toyota Camry',
    price: 3500,
    year: 2022,
    category: 'comfort',
    img: 'https://carrent-kzn.ru/wp-content/uploads/2018/06/auto-toyota-camry-2013-2-5.png',
    people: 5,
  },
  {
    id: 5,
    name: 'Honda CR-V',
    price: 3000,
    year: 2020,
    category: 'comfort',
    img: 'https://carrent-kzn.ru/wp-content/uploads/2015/03/honda-crv-2008.png',
    people: 5,
  },
  {
    id: 6,
    name: 'Lada Largus',
    price: 1800,
    year: 2021,
    category: 'econom',
    img: 'https://carrent-kzn.ru/wp-content/uploads/2018/06/largus.jpg',
    people: 7,
  },
  {
    id: 7,
    name: 'Reno Logan',
    price: 1700,
    year: 2019,
    category: 'econom',
    img: 'https://carrent-kzn.ru/wp-content/uploads/2015/03/Renault-Logan-2014.jpg',
    people: 5,
  },
  {
    id: 8,
    name: 'Ford Focus 3',
    price: 2500,
    year: 2022,
    category: 'econom',
    img: 'https://carrent-kzn.ru/wp-content/uploads/2016/10/ford-3-2014.png',
    people: 5,
  },
];

export interface Iproduct {
  id: number;
  name: string;
  price: number;
  year: number;
  category: string;
  img: string;
  people: number;
}
