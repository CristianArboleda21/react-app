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
    increaseBy: (value: number) => void;
    product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (Props: PropsTitle) => JSX.Element;
  Image: (Props: PropsImage) => JSX.Element;
  Buttons: (Props: PropsButtons) => JSX.Element;
}
