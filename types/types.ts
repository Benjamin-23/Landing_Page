export interface CartList {
  product: {
    name: string;
    amount: string;
    quantity: string;
  };
  amount: string;
  transcation: string;
  paymentMethods: {
    mpesa: string;
    visa: string;
  };
}
export interface Product {
  name: string;
  image: string;
  categories: string;
  color: string;
}
