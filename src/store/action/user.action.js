
import {
      FETCH_USER
} from "./actionType"


export const fetchUser = () => dispatch => {

      dispatch({
            type: FETCH_USER
      });
}