/**
 * Created by pusti on 07.08.2017.
 */
const renameColumn = (name, props) => ({
    type: 'RENAME_COLUMN',
    data: {
        name,
        id: props.id,
    },
});

export default renameColumn;