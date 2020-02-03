import data from "../../data";

const allData = [...data];

const allDataModif = allData.map(item => {
  switch (item.typeRoom) {
    case "1":
      return {
        ...item,
        typeRoom: "Studio"
      };
    case "2":
      return {
        ...item,
        typeRoom: "Two rooms"
      };
    case "3":
      return {
        ...item,
        typeRoom: "Three rooms"
      };
    default:
      return item;
  }
});

const INITIAL_STATE = {
  products: allDataModif
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
