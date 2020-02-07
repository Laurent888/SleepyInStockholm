import data from "../../data";
import { productTypes } from "./productType";
import {
  filterRoomsType,
  filterRoomsPrice,
  filterRoomTypeSelected
} from "./producUtils";

const allData = [...data];

const allDataModif = allData.map(item => {
  switch (item.typeRoom) {
    case "1":
      return {
        ...item,
        typeRoom: "Studio",
        typeRoomCamel: "studio"
      };
    case "2":
      return {
        ...item,
        typeRoom: "Two rooms",
        typeRoomCamel: "twoRooms"
      };
    case "3":
      return {
        ...item,
        typeRoom: "Three rooms",
        typeRoomCamel: "threeRooms"
      };
    default:
      return item;
  }
});

const INITIAL_STATE = {
  products: allDataModif,
  filteredProducts: [...allDataModif],
  typeRoomSelected: [],
  maxPrice: ""
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productTypes.SET_FILTER_TYPE_ROOM:
      return {
        ...state,
        typeRoomSelected: filterRoomTypeSelected(action.payload),
        filteredProducts: filterRoomsType(state.products, action.payload)
      };
    case productTypes.SET_FILTER_PRICE_ROOM:
      return {
        ...state,
        maxPrice: action.payload,
        filteredProducts: filterRoomsPrice(
          state.filteredProducts,
          action.payload
        )
      };
    case productTypes.RESET_FILTER_TYPE_ROOM:
      return {
        ...state,
        maxPrice: "",
        typeRoomSelected: [],
        filteredProducts: [...allDataModif]
      };
    default:
      return state;
  }
};

export default productReducer;
