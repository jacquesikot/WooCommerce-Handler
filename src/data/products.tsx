import { ProductProps } from '../types';

const products: ProductProps[] = [
  {
    id: 145564635,
    name: 'The first Product on the master producst DB',
    images: [
      {
        id: 12423454,
        src:
          'http://astrosboutique.com/wp-content/uploads/2020/10/astros-boutique-cognac-large-bag.jpg',
      },
      {
        id: 245452,
        src:
          'http://astrosboutique.com/wp-content/uploads/2020/10/astros-boutique-cognac-large-bag.jpg',
      },
    ],
    price: '36000',
    rating: 6,
  },
  {
    id: 1455635,
    name: 'The second Product on the master producst DB',
    images: [
      {
        id: 12423454,
        src:
          'http://astrosboutique.com/wp-content/uploads/2020/10/astros-boutique-cognac-large-bag.jpg',
      },
      {
        id: 245452,
        src:
          'http://astrosboutique.com/wp-content/uploads/2020/10/astros-boutique-cognac-large-bag.jpg',
      },
    ],
    price: '36000',
    rating: 6,
  },
];

export default products;
