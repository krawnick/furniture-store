import { Item } from '../Item/Item';
import products from '../../assets/data/products';

export const Items = () => {
  return (
    <main>
      {products.map((product) => {
        return <Item key={product.id} product={product}></Item>;
      })}
    </main>
  );
};
