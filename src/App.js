import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Fragment, useEffect } from 'react';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/cart-actions';

let isInitial = true;

function App () {
    const dispatch = useDispatch();
    const showCart = useSelector((state) => state.ui.cartIsVisible);
    const cart = useSelector((state) => state.cart);
    const notifcation = useSelector((state) => state.ui.notifcation);

    useEffect(() => {
        dispatch(fetchCartData);
    }, [dispatch]);

    useEffect(() => {
        if(isInitial) {
            isInitial = false;
            return;
        }

        dispatch(sendCartData(cart));

    }, [cart, dispatch]);

    return (
        <Fragment>
            {notifcation && (
                <Notification 
                    status = {notifcation.status}
                    title = {notifcation.title}
                    message = {notifcation.message}
                />
            )}
            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </Fragment>
    );
};

export default App;