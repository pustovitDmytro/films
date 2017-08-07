/**
 * Created by pusti on 06.08.2017.
 */
const addCard = (name,params) => ({
    type: 'ADD_CARD',
    card: {
        data: {
            name,
            id: Date.now(),
        },
        colId: params.colId,
    },
});

export default addCard;