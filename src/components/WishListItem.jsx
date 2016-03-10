import React, { PropTypes } from 'react'

const WishListItem = ({ onClick, purchased, title }) => (
    <li
        onClick={onClick}
        style={{
      textDecoration: purchased ? 'line-through' : 'none'
    }}
    >
        {title}
    </li>
);

WishListItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    purchased: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
};

export default WishListItem
