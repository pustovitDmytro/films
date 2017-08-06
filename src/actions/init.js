/**
 * Created by pusti on 06.08.2017.
 */
const initColumns = [
  {
    name: "Column A",
    id: Date.now(),
    cards: [
      {
        name: "card 1",
        id: Date.now(),
      }
    ]
  }
];

export default function setLocale() {
  return (dispatch) => {
    const columns = initColumns;
    dispatch({
      type: 'COLUMNS',
      payload: {
        columns,
      },
    });
  }
}
