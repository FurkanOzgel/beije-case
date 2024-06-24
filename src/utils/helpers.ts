import { Cart } from "../context/cart/models";
import priceList from '../data/priceList.json';

function formatNumber(number: number) {
    if (Number.isInteger(number)) {
        return number.toString();
    } else {
        const integerPart = number.toString().split('.')[0];
        const decimalPart = number.toString().split('.')[1].substring(0, 2);
        if (decimalPart.length === 1) {
            return `${integerPart}.${decimalPart}0`;
        }
        else {
            return `${integerPart}.${decimalPart}`;
        }
    }
}

function getTotalPrice(cart: Cart) { 
    
    let totalPrice = 0;

    for (const product of cart.products) {
        let item = priceList.priceList.find(item => item.name === product.name);
        if (item) {
            totalPrice += product.quantity * item.price;
        } else {
            console.error(`Product not found: ${product.name}`);
        }
    }

    return formatNumber(totalPrice);
}

const generateProductInfo = (cart: Cart, categoryID: number) => {
    const matchingProducts = cart.products.filter(product => product.categoryID === categoryID);

    switch (matchingProducts.length) {
        case 1:
            return `${matchingProducts[0].quantity} ${matchingProducts[0].name}`;
        case 2:
            return `${matchingProducts[0].quantity} ${matchingProducts[0].name} ve ${matchingProducts[1].quantity} ${matchingProducts[1].name}`;
        case 3:
            return `${matchingProducts[0].quantity} ${matchingProducts[0].name}, ${matchingProducts[1].quantity} ${matchingProducts[1].name} ve ${matchingProducts[2].quantity} ${matchingProducts[2].name}`;
        default:
            return false;
    }
};

const getCategoryNameById = (categoryID: number) => {
    switch (categoryID) {
        case 1:
            return "Ped Paketleri";
        case 2:
            return "Günlük Ped Paketleri";
        case 3:
            return "Tampon Paketleri";
        default:
            return "Diğer";
    }
}

export {getTotalPrice, generateProductInfo, getCategoryNameById};