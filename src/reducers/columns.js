/**
 * Created by pusti on 06.08.2017.
 */
const addCard = (columns, card, columnID)=>{
    let col = columns.find(x => x.id == columnID);
    col.cards.push(card);
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
    const col = columns.find(x => x.id == data.source);
    let newCols = columns.filter(item => item.id!==data.source);
    const target = columns.map(value => value.id).indexOf(data.target);
    newCols.splice(target,0,col);
    console.log(col,newCols,target);
    return newCols;
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