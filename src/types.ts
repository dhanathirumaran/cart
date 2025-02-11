export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  orders: Order[];
}

export interface Order {
  id: string;
  customerId: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: string;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface CartItem {
  productId: string;
  quantity: number;
}