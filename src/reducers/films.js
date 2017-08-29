/**
 * Created by pusti on 23.08.2017.
 */
const sortFilms = (films, {order=true,field}) => {
    films.sort((a, b)=>
        (order) ?
            (a[field].toUpperCase() > b[field].toUpperCase()) ? 1 : -1
            :
            (a[field].toUpperCase() < b[field].toUpperCase()) ? 1 : -1
    );
    return films.slice();
};

const searchFilms = (films, {field,query}) =>
    films.filter(elem=>~(elem[field].toUpperCase()).search(query.toUpperCase()));

const errorMessage = status => new String(`Some error occurred! Status: ${status}`);

const films = (state = {}, action) => {
    switch (action.type) {
        case 'GET_FILMS':
            return {
                ...state,
                array: action.payload,
                static: action.payload
            };
        case 'SORT_FILMS':
            return {
                ...state,
                array: sortFilms(state.array,action.payload)
            };
        case 'SEARCH_FILMS':
            return {
                ...state,
                array: searchFilms(state.static,action.payload)
            };
        case 'API_ERROR':
            return {
                ...state,
                error: action.error,
                message: errorMessage(action.error)
            };
        case 'SET_MESSAGE':
            return {
                ...state,
                message: action.message
            };
        default:
            return state;
    }
};

export default films;