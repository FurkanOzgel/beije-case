import React from "react";
import { View, Text } from "react-native";

import { generateProductInfo, getCategoryNameById } from "../../../../utils/helpers";
import { Cart } from "../../../../context/cart/models";

import icons from "../../../../assets/svg";
import styles from "./CartCategoryItem.style";

import IconButton from "../../../../components/IconButton";

interface CartCategoryItemProps {
    cart: Cart;
    categoryID: number;
    onDeleteCategory: (categoryID: number) => void;
}

function CartCategoryItem(props: CartCategoryItemProps): React.JSX.Element {
    const { cart, categoryID, onDeleteCategory } = props;
    
    return(
        <View style={[styles.categoryInfo, !generateProductInfo(cart, categoryID) ? {display:'none'}:{}]}>
            <View>
                <Text testID="category-title" style={styles.productCategory}>{getCategoryNameById(categoryID)}</Text>
                <Text style={styles.qunatityInfo}>{generateProductInfo(cart, categoryID)}</Text>
            </View>
            <IconButton svg={icons.bin} onPress={() => onDeleteCategory(categoryID)} />
        </View>
    )
}

export default CartCategoryItem;