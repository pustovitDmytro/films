/**
 * Created by pusti on 06.08.2017.
 */
const columns = [
  {
    name: "Column A",
    id: Date.now(),
    cards: [
      {
        name: "card 1",
        id: Date.now()+1,
      },
      {
        name: "card 2",
        id: Date.now()+2,
      }
    ]
  }
];

const init = () => ({
  type: 'INIT_COLUMNS',
  columns,
});

export default init;