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
            columns: addCard(state.columns,action.card),
          };
      case 'ADD_COLUMN':
          return {
              ...state,
              columns: addCard(state.columns,action.card),
          };
    default:
      return state;
  }
};

export default columns;