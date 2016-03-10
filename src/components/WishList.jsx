import React, { PropTypes } from 'react'
import WishListItem from './WishListItem'

const WishList = ({ items, onTodoClick }) => (
    <ul>
        {items.map(item =>
            <WishListItem
                key={item.id}
                {...item}
                onClick={() => onItemClick(item.id)}
            />
        )}
    </ul>
);

WishList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        purchased: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onItemClick: PropTypes.func.isRequired
};

export default WishList
