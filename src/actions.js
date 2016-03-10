/*
 * action types
 */

export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_ITEM_PURCHASED = 'TOGGLE_ITEM_PURCHASED';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';

/*
 * action creators
 */

export function addItem(item) {
    return {
        type: ADD_ITEM,
        item: Object.assign({
            url: '',
            purchased: false
        }, item)
    };
}

export function toggleItemPurchased(index) {
    return {
        type: TOGGLE_ITEM_PURCHASED,
        index
    };
}

export function removeItem(index) {
    return {
        type: REMOVE_ITEM,
        index
    };
}

export function updateItem(item) {
    return {
        type: UPDATE_ITEM,
        item: Object.assign({
            url: '',
            purchased: false
        }, item)
    };
}
