/**
 * Created by pusti on 08.08.2017.
 */
const renameCard = (name, props) => ({
    type: 'RENAME_CARD',
    data: {
        name,
        colId: props.ColId,
        cardId: props.CardId,
    },
});

export default renameCard;