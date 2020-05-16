const distance = (state = 22, action) => {
    switch (action.type) {
        case 'CHANGE_DISTANCE':
            return action.meter
        default:
            return state
    }
}

export default distance;