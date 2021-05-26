const initialState = {count: 0}

const countReducer = function (state=initialState, action: { type: any }) : {count: number} {
    switch (action.type) {
        case 'count/increment':
            return {
                ...state,
                count : state.count + 1
            }
        case 'count/decrement':
            if (state.count > 0) {
                return {
                    ...state, 
                    count : state.count - 1
                }
            } else {
                return state;
            }
        case 'count/reset':
            return {
                ...state,
                count : 0
            }
        default:
            return state
    }
}

export default countReducer;