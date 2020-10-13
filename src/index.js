const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = parseInt(movieSelect.value);

// * Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = ticketPrice * selectedSeatsCount;
}

// * Movie select event
movieSelect.addEventListener('change', ({ target }) => {
  ticketPrice = +target.value;
  updateSelectedCount();
});

// * Seat click event
container.addEventListener('click', ({ target }) => {
  if (
    target.classList.contains('seat') &&
    !target.classList.contains('occupied')
  ) {
    target.classList.toggle('selected');
    updateSelectedCount();
  }
});
