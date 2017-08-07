/**
 * Created by pusti on 06.08.2017.
 */
const addCard = (name,colId) => ({
    type: 'ADD_CARD',
    card: {
        data: {
            name,
            id: Date.now(),
        },
        colId,
    },
});

export default addCard;