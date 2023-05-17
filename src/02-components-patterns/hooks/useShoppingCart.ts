import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {

    const [ shoopingCard, setShoopingCard ] = useState<{ [key:string]:  ProductInCart }>({});

    const onProductCountChange = ( { count, product }: {count: number, product: Product}) => {
        // console.log( count, product)

        setShoopingCard( oldShoopingCart => {        
        
            if( count === 0 ){
                
                // delete oldShoopingCart[ product.id ]
                // return { ...oldShoopingCart }

                const { [ product.id ]: toDelete, ...rest } = oldShoopingCart;
                
                return rest;
            }

            return {
            ...oldShoopingCart,
            [ product.id ] : { ...product, count } 
            }
        })
    }

    return {
        shoopingCard,
        onProductCountChange
    }
}