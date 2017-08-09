/**
 * Created by pusti on 08.08.2017.
 */
const moveCardInner = (colId, source, target ) => ({
    type: 'MOVE_CARD_OUTER',
    data: {
        source,
        target,
        colId,
    },
});
const moveCardOuter = (colId, source, target ) => ({
    type: 'MOVE_CARD_INNER',
    data: {
        source,
        target,
        colId
    },
});

export default {moveCardInner,moveCardOuter};