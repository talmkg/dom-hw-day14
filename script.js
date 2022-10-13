function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const allcells = 76;
const createCells = function () {
  const bingotable = document.getElementById("bingotable");

  for (let i = 0; i < 76; i++) {
    const bingoCellNode = document.createElement("div"); // this will create an empty cell
    bingoCellNode.className = "cell_class"; // assigning the CSS class

    const h3 = document.createElement("h3"); // label for day's number
    // adding the number as innerText of the day's <h3> we've created
    h3.innerText = getRandomInt(77); // the for loop gives a 0 based index, let's increase it by 1 to count days properly

    bingoCellNode.appendChild(h3); // <div class="day"><h3 /></div>
    bingotable.appendChild(bingoCellNode); // <div id="calendar"> <div class="day"><h3 /></div> </div>
    function findduplicates() {
      if (allcells == allcells) {
        bingoCellNode.style.color = "yellow";
        bingoCellNode.style.color = "background-color: black";
      }
    }
  }
  findduplicates();
};
window.onload = function () {
  createCells(76);
};

findduplicates();
function reload() {
  location.reload();
}
