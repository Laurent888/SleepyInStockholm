import { uiTypes } from "./uiTypes";

const INITIAL_STATE = {
  menuTypeRoomOpen: false,
  menuPriceRoomOpen: false,
  mainMenuOpen: false
};

const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case uiTypes.TOGGLE_MENU_TYPE_ROOM:
      return {
        ...state,
        menuTypeRoomOpen: !state.menuTypeRoomOpen,
        menuPriceRoomOpen: false
      };
    case uiTypes.TOGGLE_MENU_PRICE_ROOM:
      return {
        ...state,
        menuPriceRoomOpen: !state.menuPriceRoomOpen,
        menuTypeRoomOpen: false
      };
    case uiTypes.TOGGLE_MAIN_MENU:
      return {
        ...state,
        mainMenuOpen: !state.mainMenuOpen
      };
    default:
      return state;
  }
};

export default uiReducer;
