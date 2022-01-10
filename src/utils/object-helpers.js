// додаткова ф-ція для уніфікації в users-reducer.js для case FOLLOW (UNFOLLOW)
export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(u => {
        // u[objPropName] аналогічна u.objPropName
        if (u[objPropName] === itemId) {
            return { ...u, ...newObjProps }
        }
        return u;
    })
};
