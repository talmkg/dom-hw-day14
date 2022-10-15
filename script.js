const createCells = function () {
  const bingotable = document.getElementById("bingotable");

  for (let i = 0; i < 76; i++) {
    const bingoCellNodes = document.createElement("div"); // this will create an empty cell
    bingoCellNodes.className = "cell_class"; // assigning the CSS class

    const h3 = document.createElement("h3"); // label for day's number
    // adding the number as innerText of the day's <h3> we've created
    h3.innerText = i + 1; // the for loop gives a 0 based index, let's increase it by 1 to count days properly

    bingoCellNodes.appendChild(h3); // <div class="day"><h3 /></div>
    bingotable.appendChild(bingoCellNodes); // <div id="calendar"> <div class="day"><h3 /></div> </div>
  }
};
window.onload = function () {
  createCells(76);
};

const giveRandomNumber = () => {
  return Math.floor(Math.random() * 76);
};

function compareNumbers() {
  const num = giveRandomNumber();

  for (bingoCellNode of bingoCellNodes) {
    if (bingoCellNode.innerText == num) {
      //apply style
      bingoCellNode.style.backgroundColor = "green";
    }
  }
}
const buttoncall = document
  .getElementById("button")
  .addEventListener("click", compareNumbers);
