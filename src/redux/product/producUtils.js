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
