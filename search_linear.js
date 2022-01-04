const linearSearch = ({items = [], value}) => {
  if (items.length === 0) return -1;

  for (let i = 0; i < items.length; i++) {
    if (items[i] === value) return i;
  }

  return -1;
}

const res = linearSearch({ items: [1, 2, 3, 4, 6], value: 20 });
// console.log(res)
