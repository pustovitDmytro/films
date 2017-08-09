/**
 * Created by pusti on 08.08.2017.
 */
const deleteCard = (colId,cardId) => ({
    type: 'DELETE_CARD',
    data: {
        colId,
        cardId,
    },
});

export default deleteCard;