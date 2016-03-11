import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions'

let AddItem = ({ dispatch }) => {
    let input;

    return (
        <div>
            <input ref={node => {
                input = node;
            }} />
            <button onClick={() => {
                dispatch(addItem({ title: input.value }));
                input.value = '';
            }}>
                Add WishList Item
            </button>
        </div>
    );
};

const AddWishListItem = connect()(AddItem);

export default AddWishListItem;
