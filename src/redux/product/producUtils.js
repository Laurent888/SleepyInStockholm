export const filterRoomsType = (allRooms, filters) => {
  const typeRoomToKeep = Object.keys(filters).filter(filter => {
    return filters[filter] === true;
  });
  console.log(typeRoomToKeep);
  const filteredRooms = allRooms.filter(item => {
    return typeRoomToKeep.indexOf(item.typeRoomCamel) !== -1;
  });

  return filteredRooms;
};

export const filterRoomTypeSelected = filter => {
  console.log(filter);
  const filteredTypeRoom = Object.keys(filter).filter(item => {
    return filter[item] === true;
  });
  const tempFilteredTypeRoom = filteredTypeRoom.map(item => {
    if (item === "twoRooms") {
      return "Two Rooms";
    } else if (item === "threeRooms") {
      return "Three Rooms";
    } else {
      return "Studio";
    }
  });

  return tempFilteredTypeRoom;
};

export const filterRoomsPrice = (allRooms, maxPrice) => {
  const filteredRoom = allRooms.filter(item => {
    return item.price <= maxPrice;
  });

  return filteredRoom;
};
