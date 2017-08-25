/**
 * Created by pusti on 23.08.2017.
 */
import IndexApi from '../api/IndexApi';

const Api = new IndexApi();

const load = (API) =>
    (method, type, params = '') =>
        (dispatch) =>
            API[method].call(API, params)
                .then(response => response.json())
                .then(payload =>
                    dispatch({
                        type,
                        payload
                    })
                )
                .catch(error => {
                    dispatch({
                        type,
                        payload: [],
                    });
                    dispatch({
                        type: "API_ERROR",
                        error,
                    });
                    console.log(error)
                });

export const getFilms = () => load(Api)('getFilms', 'GET_FILMS');