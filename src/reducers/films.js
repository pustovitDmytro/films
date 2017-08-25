/**
 * Created by pusti on 23.08.2017.
 */
const sortFilms = (films, {order=true,field}) =>
    films.sort((a,b)=>
        (order)?
            (a[field]>b[field])?1:-1
            :
            (a[field]<b[field])?1:-1
    );

const searchFilms = (films, {field,query}) =>
    films.filter(elem=>~(elem[field].toUpperCase()).search(query.toUpperCase()));

const films = (state = {}, action) => {
    switch (action.type) {
        case 'GET_FILMS':
            return {
                ...state,
                array: action.payload
            };
        case 'SORT_FILMS':
            return {
                ...state,
                array: sortFilms(state.array,action.payload)
            };
        case 'SEARCH_FILMS':
            return {
                ...state,
                array: searchFilms(state.array,action.payload)
            };
        case 'API_ERROR':
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};

export default films;