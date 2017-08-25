/**
 * Created by pusti on 06.08.2017.
 */
const columns = (state = [], action) => {
    switch (action.type) {
        case 'INIT_COLUMNS':
            return {
                ...state,
                columns: action.columns
            };
        case 'ADD_CARD':
            return {
                ...state,
                columns: addCard(state.columns,action.card.data,action.card.colId),
            };
        case 'DELETE_CARD':
            return {
                ...state,
                columns: deleteCard(state.columns,action.data),
            };
        case 'RENAME_CARD':
            return {
                ...state,
                columns: renameCard(state.columns,action.data),
            };
        case 'MOVE_CARD_OUTER':
            return {
                ...state,
                columns: moveCardOuter(state.columns,action.data),
            };
        case 'MOVE_CARD_INNER':
            return {
                ...state,
                columns: moveCardInner(state.columns,action.data),
            };
        case 'ADD_COLUMN':
            return {
                ...state,
                columns: addColumn(state.columns,action.data),
            };
        case 'DELETE_COLUMN':
            return {
                ...state,
                columns: deleteColumn(state.columns,action.data),
            };
        case 'RENAME_COLUMN':
            return {
                ...state,
                columns: renameColumn(state.columns,action.data),
            };
        case 'MOVE_COLUMN':
            return {
                ...state,
                columns: moveColumn(state.columns,action.data),
            };
        default:
            return state;
    }
};

export default columns;