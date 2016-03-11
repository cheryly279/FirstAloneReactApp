import React, { PropTypes } from 'react'
import WishListItem from './WishListItem'

const WishList = ({ items, onItemClick }) => (
    <ul>
        {items.map((item, index) =>
            <WishListItem
                key={index}
                {...item}
                onClick={() => onItemClick(index)}
            />
        )}
    </ul>
);

WishList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        purchased: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onItemClick: PropTypes.func.isRequired
};

export default WishList
