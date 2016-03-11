import { connect } from 'react-redux'
import { toggleItemPurchased } from '../actions'
import WishList from '../components/WishList'

const mapStateToProps = (state) => {
    return {
        items: state.entities.items
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onItemClick: (id) => {
            dispatch(toggleItemPurchased(id))
        }
    }
};

const WishListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(WishList);

export default WishListContainer
