import products from '../data/products.js';

export const Items = () => {
  return (
    <main>
      {products.map((product) => {
        return <h1 key={product.id}>{product.title}</h1>;
      })}
    </main>
  );
};
