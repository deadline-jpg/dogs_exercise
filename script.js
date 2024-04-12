const showBtn = document.querySelector(".show-me");
const impBtn = document.getElementById("imp");
const metBtn = document.getElementById("met");
const dogs = document.querySelector(".dog-cards");

showBtn.addEventListener("click", () => {
  fetch("./dog.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      data.data.forEach((data) => {
        printCards(data);
      });
    });
});

function printCards(data) {
  dogs.innerHTML += `<div class="dog-card">
        <h3>${data.name}</h3>
        <p>Temperament: ${data.temperament}</p>
        <p>Life Span: ${data.life_span}</p>
        <p>Height: ${data.height.metric} cm</p>
        <p>Weight: ${data.weight.metric} kg</p>
    </div>`;
}

{
  /*   */
}
