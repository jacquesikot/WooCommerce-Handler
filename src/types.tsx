import { ImageRequireSource } from 'react-native';

// Navigation
export type AuthNavParamList = {
  Onboarding: undefined;
  Welcome: undefined;
};

export type AppNavParamList = {
  Home: undefined;
  Orders: undefined;
  Customers: undefined;
  Products: undefined;
};

export type HomeNavParamList = {
  Home: undefined;
  AddProduct: undefined;
};

export type OrderNavParamList = {
  Orders: undefined;
  OrderDetail: { order: OrderProps };
};

export type ProductNavParamList = {
  Products: undefined;
  ProductDetail: { product: ProductProps };
  AddProduct: undefined;
};

export type CustomerNavParamList = {
  Customers: undefined;
  CustomerDetail: undefined;
};

// Data
export interface OnboardingBannerProps {
  id: number;
  image: ImageRequireSource;
  title: string;
  subtitle: string;
}

export interface Images {
  id: number;
  src: string;
}

export interface ProductProps {
  id: number;
  name: string;
  type: string;
  categories: CategoriesProps[];
  regular_price: string;
  description: string;
  images: Images[];
  rating_count?: number;
}

export interface OrderProps {
  id: number;
  name: string;
  amount: number;
  payment: string;
  status: 'completed' | 'pending' | 'processing';
  products: ProductProps[];
}

export interface CustomerProps {
  id: number;
  firstName: string;
  lastName: string;
  value: number;
}

export interface CategoriesProps {
  id: number;
  name: string;
}

export interface OrderStatusProps {
  id: number;
  status: string;
}

// Others
export interface SvgProps {
  color?: string;
  width?: number;
  height?: number;
}
