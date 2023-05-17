import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as PropsTitle } from '../components/ProductTitle';
import { Props as PropsImage } from '../components/ProductImage';
import { Props as PropsButtons } from '../components/ProductButtons';


  
export interface Product {
    id: string;
    title: string,
    img?: string
}
  
  
export interface ProductContextProps {
    counter: number;
    product: Product;
    maxCount?: number
    increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (Props: PropsTitle) => JSX.Element;
  Image: (Props: PropsImage) => JSX.Element;
  Buttons: (Props: PropsButtons) => JSX.Element;
}


export interface onChangeArgs {
  product: Product;
  count: number
}


export interface ProductInCart extends Product {
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCartHnadlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;
  increaseBy: ( value: number ) => void;
  reset: () => void;
}