import { cartActions } from "./cart-slice";
import { uiActions } from "./UI-slice";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(
        "https://redux-shoppingcart-23600-default-rtdb.firebaseio.com/cartItems.json"
      );
      const data = await res.json();
      return data;
    };
    try {
      const cartData = await fetchHandler();
      dispatch(cartActions.replaceData(cartData));
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          message: "Data fetching failed!",
          open: true,
          type: "warning",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        message: "Sending request...",
        open: true,
        type: "warning",
      })
    );
    const sendRequest = async () => {
      //sending request...
      const res = await fetch(
        "https://redux-shoppingcart-23600-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
      //request sent successfully
      dispatch(
        uiActions.showNotification({
          message: "Request sent successfully!",
          open: true,
          type: "success",
        })
      );
    };
    try {
      await sendRequest();
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          message: "Sending request failed!",
          open: true,
          type: "warning",
        })
      );
    }
  };
};
