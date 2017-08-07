/**
 * Created by pusti on 07.08.2017.
 */
const moveColumn = (source,target ) => ({
    type: 'MOVE_COLUMN',
    data: {
        source,
        target,
    },
});

export default moveColumn;