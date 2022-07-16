// 1
// create 9 grids.
// each grid has an id.
// each grid has event listner.
// when click into grid, grid shows an image.

// 2
// remove image when select delete button

// find some images
const root = document.querySelector("#root");

const gridContainer = document.createElement("div");
gridContainer.className = "grid-container";

const rowsArr = [1, 2, 3];

rowsArr.forEach((row) => {
  const rowContainer = document.createElement("div");
  rowContainer.className = `row-container-${row}`;
  rowContainer.style.display = "flex";
  rowContainer.style.flexDirection = "row";
  rowContainer.style.width = "900px";
  rowContainer.style.border = "1px solid black";
  root.appendChild(rowContainer);
  for (let i = 1; i < 4; i++) {
    const column = document.createElement("div");
    column.id = `${row}-${i}`;
    column.textContent = `column-${row}-${i}`;
    column.style.border = "1px solid black";
    column.style.width = "300px";
    column.style.height = "300px";
    rowContainer.appendChild(column);
    column.addEventListener("click", (e, row, column) =>
      handleGrid(e, row, column)
    );
  }
});

function handleGrid(e, row, column) {
  console.log(`hello grid ${e}${row}${column}`);
}
