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
};

export type CustomersParamList = {
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

export interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: ImageRequireSource;
  quantity?: number;
  rating?: number;
}

export interface OrderProps {
  id: number;
  name: string;
  amount: number;
  payment: string;
  products: ProductProps[];
}

// Others
export interface SvgProps {
  color?: string;
  width?: number;
  height?: number;
}
