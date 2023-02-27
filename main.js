const list_items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  "Item 11",
  "Item 12",
  "Item 13",
  "Item 14",
  "Item 15",
  "Item 16",
  "Item 17",
  "Item 18",
  "Item 19",
  "Item 20",
  "Item 21",
  "Item 22"
];

const list_element = document.querySelector("#list");
const pagination_element = document.querySelector("#pagination");

let current_page = 1; //first page
let rows = 5; //dividing the items in array into 5 parts


function DisplayList(items, wrapper, rows_per_page, page) {
  wrapper.innerHTML = ""; //making sure that there is nothing in the list container
  //For example, when clicking on page 2, this will erase the content of page 1

  page--; //current_page starting at 1 and array item starting at 0

  let loop_start = rows_per_page * page; //find starting point

  let loop_end = loop_start + rows_per_page; //find end point

  const paginatedItems = items.slice(loop_start, loop_end); //find the items to display

  for(let i = 0; i < paginatedItems.length; i++) {
    console.log(paginatedItems[i]);
  }


}

DisplayList(list_items, list_element, rows, 2)
