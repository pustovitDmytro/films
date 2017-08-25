/**
 * Created by pusti on 23.08.2017.
 */
const films = (state = {}, action) => {
    switch (action.type) {
        case 'GET_FILMS':
            return {
                ...state,
                films: action.payload
            };
        default:
            return state;
    }
};

export default films;