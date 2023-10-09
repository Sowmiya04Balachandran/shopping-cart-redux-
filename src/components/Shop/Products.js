import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS=[{
  id:1,
  title:'My first book',
  price:7,
  description:'very first book',
},
{
  id:2,
  title:'My second book',
  price:8,
  description:'book for children',
},
{
  id:3,
  title:'My third book',
  price:3,
  description:'fantastic book',
},]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((items)=>(<ProductItem
        key={items.id}
          title={items.title}
          id={items.id}
          price={items.price}
          description={items.description}
        />))}
        
      </ul>
    </section>
  );
};

export default Products;
