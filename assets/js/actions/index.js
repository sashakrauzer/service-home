export const selectOption = id => ({
    type: 'SELECT_OPTION',
    id
});

export const changeDistance = meter => ({
    type: 'CHANGE_DISTANCE',
    meter
});

export const chooseConnection = id => ({
    type: 'CHOOSE_CONNECTION',
    id
});