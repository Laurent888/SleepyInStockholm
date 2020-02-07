import { productTypes } from "./productType";

export const setFilterTypeRoom = item => ({
  type: productTypes.SET_FILTER_TYPE_ROOM,
  payload: item
});

export const setFilterPriceRoom = item => ({
  type: productTypes.SET_FILTER_PRICE_ROOM,
  payload: item
});

export const resetFilterTypeRoom = {
  type: productTypes.RESET_FILTER_TYPE_ROOM
};
