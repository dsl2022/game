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
    column.style.border = "1px solid black";
    column.style.width = "300px";
    column.style.height = "300px";
    rowContainer.appendChild(column);

    column.addEventListener(
      "click",
      function () {
        handleGrid(column);
      },

      false
    );
  }
});
function handleGrid(column) {
  const crossImg = document.createElement("img");
  crossImg.src = "./cross.png";
  crossImg.style.width = "300px";
  crossImg.style.height = "300px";
  column.appendChild(crossImg);
}
// document
//   .getElementById("someid")
//   .addEventListener(
//     "click",
//     someEventHander.bind(event, "param1", "param2"),
//     false
//   );
