import { actionTypes } from "../actions";

export default (state=null, action) => {
    switch (action.type) {
      case actionTypes.USER_ENTERING:
        return 'inProgress';
      case actionTypes.ENTER_OWN_SECRET_WORD:
        return 'done';
      case actionTypes.RESET_GAME:
        return null;
      default:
        return state;
    }
  }