/**
 * Created by pusti on 08.08.2017.
 */
const renameCard = (name, props) => ({
    type: 'RENAME_CARD',
    data: {
        name,
        colId: props.colId,
        cardId: props.cardId,
    },
});

export default renameCard;