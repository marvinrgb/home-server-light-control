let card = document.getElementById('card');

card.addEventListener('mousemove', (event) => {
  console.log("X: " + (event.clientX / 5) + "%")
  console.log("Y: " + (event.clientY / 5) + "%")
})