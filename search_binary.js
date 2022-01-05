const binary_search = ({ items = [], value }) => {
  let start = 0;
  let end = items.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (items[middle] !== value && start <= end) {
    if (value < items[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (items[middle] === value) {
    return middle;
  }
  return -1;
}

const res = binary_search({ items: [1, 2, 3, 4, 5, 6, 7], value: 8 })
console.log(res)