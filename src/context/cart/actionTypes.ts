import {Product} from './models';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const UPDATE_OLD_QUANTITY = 'UPDATE_OLD_QUANTITY';


interface AddProductAction {
    type: typeof ADD_PRODUCT;
    payload: Product;
}

interface DeleteProductAction {
    type: typeof DELETE_PRODUCT;
    payload: Product;
}


interface DeleteCategoryAction {
    type: typeof DELETE_CATEGORY;
    payload: number;
}

interface UpdateOldQuantityAction {
    type: typeof UPDATE_OLD_QUANTITY;
    payload: Product;
}

export type CartActionTypes = AddProductAction | DeleteProductAction | DeleteCategoryAction | UpdateOldQuantityAction;