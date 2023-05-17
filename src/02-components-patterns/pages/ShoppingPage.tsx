import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { products } from "../data/product";
import { useShoppingCart } from "../hooks/useShoppingCart";
import '../styles/custom-styles.css';


export const ShoppingPage = () => {

  const { onProductCountChange, shoopingCard } = useShoppingCart();


  return (
    <div>
        <h1>ShoppingPage</h1>

        <hr />

        <div style={{
          display:'flex',
          flexDirection:'row',
          flexWrap:'wrap'
        }}>

          {
              products.map( product => (
                <ProductCard 
                  key={ product.id }
                  product={ product }
                  className="bg-dark text-white"
                  onChange={ onProductCountChange }
                  value={ shoopingCard[product.id]?.count || 0 }
                >

                  <ProductImage className='custom-image' />
                  <ProductTitle className='text-bold' />
                  <ProductButtons className='custom-buttons'/>

                </ProductCard>
              ))
          }
        </div>

        <div className="shooping-card">

          {
             Object.entries( shoopingCard ).map( ([ key, product ]) => (
              <ProductCard 
                key={ key }
                product={ product }
                className="bg-dark text-white"
                style={{ width:'100px'}}
                onChange={ onProductCountChange }
                value={ product.count }
              >

                <ProductImage className='custom-image' />
                <ProductButtons className='custom-buttons'/>

              </ProductCard>
            ))
          }
        </div>

    </div>
  )
}
