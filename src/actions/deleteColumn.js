/**
 * Created by pusti on 07.08.2017.
 */
const deleteColumn = (id) => ({
    type: 'DELETE_COLUMN',
    data: {
        id,
    },
});

export default deleteColumn;