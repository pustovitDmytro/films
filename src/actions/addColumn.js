/**
 * Created by pusti on 07.08.2017.
 */
const addColumn = (name) => ({
    type: 'ADD_COLUMN',
    data: {
        name,
        id: Date.now(),
        cards:[]
    },
});

export default addColumn;