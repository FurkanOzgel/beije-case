import { render, fireEvent, screen } from '@testing-library/react-native';
import CartCategoryItem from './CartCategoryItem';
import {Cart} from '../../../../context/cart/models';

const cart: Cart = {
    'products': [
        {
        'name': 'product1',
        'quantity': 10,
        'categoryID': 2,
        'oldQuantity': 0
        }
    ]
}

const comp = <CartCategoryItem cart={cart} categoryID={2} onDeleteCategory={() => {}}/>;

test('should render correctly', () => {
    const container = render(comp);
    expect(container).toMatchSnapshot();
});

test('should render correctly category title', () => {
    render(comp);
    expect(screen.getByTestId('category-title').children[0]).toEqual('Günlük Ped Paketleri')
});