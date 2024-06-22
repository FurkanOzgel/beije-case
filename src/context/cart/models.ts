export interface Product {
    name: string;
    quantity: number;
    categoryID: number;
    oldQuantity: number;
}
export interface Cart {
    products: Product[];
}