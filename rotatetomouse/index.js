let card = document.getElementById('card');

card.addEventListener('mousemove', (event) => {
  let x = 0 - ((event.clientY - 250) / 10)
  let y = ((event.clientX - 250) / 10)
  event.target.style.transform = `perspective(800px) rotateX(${x}deg) rotatey(${y}deg)`
})