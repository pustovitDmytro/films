/**
 * Created by pusti on 06.08.2017.
 */
const addCard = (columns, card, columnID)=>{
    let col = columns.find(x => x.id == columnID);
    col.cards.push(card);
    return columns.filter(item=>true);
};
const deleteCard = (columns, {colId,cardId})=>{
    let col = columns.find(x => x.id == colId);
    col.cards = col.cards.filter(item=>item.id!==cardId);
    return columns.filter(item=>true);
};
const renameCard = (columns, {name,colId,cardId})=>{
    let col = columns.find(x => x.id == colId);
    let card = col.cards.find(x => x.id == cardId);
    card.name=name;
    return columns.filter(item=>true);
};
const moveCardInner = (columns, {colId, source,target})=>{
    let col = columns.find(x => x.id == colId);
    const sourceCard = col.cards.find(x => x.id == source);
    const targetCard = (target==0)?0:col.cards.map(value => value.id).indexOf(target) +1;
    col.cards.splice(targetCard,0,sourceCard);
    col.cards = col.cards.filter((item,i) => item.id!==source || i===targetCard);
    return columns.filter(item=>true);
};
const moveCardOuter = (columns, {colId,source,target})=>{
    let col = columns.find(x => x.id == colId);
    const sourceCard = col.cards.find(x => x.id === source);
    let targetColumn = columns.find(x => x.id === target);
    targetColumn.cards.push(sourceCard);
    col.cards = col.cards.filter((item) => item.id!==source);
    return columns.filter(item=>true);
};

const addColumn = (columns, column)=>{
    columns.push(column);
    return columns.filter(item=>true);
};
const deleteColumn = (columns, column)=> columns.filter(item => item.id!==column.id);

const renameColumn = (columns, column)=>{
    let col = columns.find(x => x.id == column.id);
    col.name=column.name;
    return columns.filter(item=>true);
};
const moveColumn = (columns, data)=>{
    const col = columns.find(x => x.id === data.source);
    const target = (data.target==0)?0:columns.map(value => value.id).indexOf(data.target) +1;
    columns.splice(target,0,col);
    return columns.filter((item,i) => item.id!==data.source||i===target);
};

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