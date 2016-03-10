import { ADD_ITEM, TOGGLE_ITEM_PURCHASED, REMOVE_ITEM, UPDATE_ITEM } from './actions'

const initialState = {
    entities: {
        items: []
    }
};

function items(state = initialState.entities.items, action) {
    switch (action.type) {
        case ADD_ITEM:
            return [...state.entities.items, action.item];
        case TOGGLE_ITEM_PURCHASED:
            return state.entities.items.map((item, index) => {
                if (index === action.index) {
                    return Object.assign({}, item, {
                        purchased: !item.purchased
                    })
                }
                return item;
            });
        case REMOVE_ITEM:
            return [...state.entities.items.slice(0, action.index),
                    ...state.entities.items.slice(action.index + 1)];
        case UPDATE_ITEM:
            return state.entities.items.map((item, index) => {
                if (index === action.index) {
                    return Object.assign({}, item, action.item);
                }
                return item;
            });
        default:
            return state;
    }
}

function entities(state = initialState.entities, action) {
    return {
        items: items(state.items, action)
    }
}

// TODO: Refactor to use combineReducers
function wishListApp(state = initialState, action) {
    return {
        entities: entities(state.entities, action)
    };
}

export default wishListApp
