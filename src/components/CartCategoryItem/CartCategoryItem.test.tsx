import { render, fireEvent, screen } from '@testing-library/react-native';
import CartCategoryItem from './CartCategoryItem';
import {Cart} from '../../context/cart/models';

const cart: Cart = {
    "products": [
        {
        "name": "product1",
        "quantity": 10,
        "categoryID": 2,
        "oldQuantity": 0
        }
    ]
}

test('should render correctly', () => {
    const container = render(<CartCategoryItem cart={cart} categoryID={2} onDeleteCategory={() => {}}/>);
    expect(container).toMatchSnapshot();
});
