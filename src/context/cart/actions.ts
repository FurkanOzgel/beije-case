import {Product} from './models';
import {CartActionTypes, ADD_PRODUCT, DELETE_PRODUCT, DELETE_CATEGORY, UPDATE_OLD_QUANTITY} from './actionTypes';

export function addProduct(newProduct: Product): CartActionTypes {
    return {
        type: ADD_PRODUCT,
        payload: newProduct
    };
}

export function deleteProduct(product: Product): CartActionTypes {
    return {
        type: DELETE_PRODUCT,
        payload: product
    };
}

export function deleteCategory(categoryID: number): CartActionTypes {
    return {
        type: DELETE_CATEGORY,
        payload: categoryID
    };
}

export function updateOldQuantity(product: Product): CartActionTypes {
    return {
        type: UPDATE_OLD_QUANTITY,
        payload: product
    };
}