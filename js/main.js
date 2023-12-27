form.addEventListener("submit", function (e) {
  e.preventDefault();
  personSpeed.textContent = e.target.km.value / 5
  bikeSpeed.textContent = e.target.km.value / 20
  carSpeed.textContent = e.target.km.value / 100
  airplaneSpeed.textContent = e.target.km.value / 800
});