/**
 * Created by pusti on 06.08.2017.
 */
const add = (state, action)=>{
    console.log("add",state,action);
    return state;
}


const cards = (state, action) => {
    switch (action.type) {
        case 'ADD_CARD':
            return {
                ...state,
                columns: add(state,action),
            };
        default:
            return state;
    }
};

export default cards;