import { Cart } from './models';
import {CartActionTypes, ADD_PRODUCT, DELETE_PRODUCT, DELETE_CATEGORY, UPDATE_OLD_QUANTITY} from './actionTypes';

const initialState: Cart = {
    products: []
};

export function cartReducer(
    state = initialState,
    action: CartActionTypes,
): Cart {
    switch (action.type) {
        case ADD_PRODUCT:
            const productIndex = state.products.findIndex(product => product.name === action.payload.name);

            if (productIndex !== -1) {
                const updatedProducts = state.products.map((product, index) => {
                    if (index === productIndex) {
                        return { ...product, quantity: product.quantity + action.payload.quantity };
                    }
                    return product;
                });
                return {
                    ...state,
                    products: updatedProducts
                };
            } else {
                return {
                    ...state,
                    products: [...state.products, { ...action.payload }]
                };
            }
        case DELETE_PRODUCT:
            const productIndexToDelete = state.products.findIndex(product => product.name === action.payload.name);
            if (productIndexToDelete !== -1) {
                if (state.products[productIndexToDelete].quantity > action.payload.quantity) {
                    const updatedProducts = state.products.map((product, index) => {
                        if (index === productIndexToDelete) {
                            return { ...product, quantity: product.quantity - action.payload.quantity };
                        }
                        return product;
                    });
                    return {
                        ...state,
                        products: updatedProducts
                    };
                } else {
                    return {
                        ...state,
                        products: state.products.filter((_, index) => index !== productIndexToDelete)
                    };
                }
            }
        case DELETE_CATEGORY:
            return {
                ...state,
                products: state.products.filter(product => product.categoryID !== action.payload)
            };
        case UPDATE_OLD_QUANTITY:
            const productToUpdateIndex = state.products.findIndex(product => product.name === action.payload.name);
            if (productToUpdateIndex !== -1) {
                const updatedProducts = state.products.map((product, index) => {
                    if (index === productToUpdateIndex) {
                        return { ...product, oldQuantity: action.payload.oldQuantity };
                    }
                    return product;
                });
                return {
                    ...state,
                    products: updatedProducts
                };
            }
        default:
        return state;
  }
}