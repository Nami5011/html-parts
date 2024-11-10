

document.addEventListener("DOMContentLoaded", (event) => {
  // Get the modal
  var modal = document.getElementById("popup");
  // Get the <span> element that closes the modal
  var close = document.getElementsByClassName("close")[0];
  // When the user clicks on <span> (x), close the modal
  close.onclick = function() {
    closePopup();
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      closePopup();
    }
  }
});

function closePopup() {
  const modal = document.getElementById("popup");
  modal.style.display = "none";
  document.body.style.overflow = "visible";
}

function openPopup(elem) {
  setPopupContent(elem);
  // Set the clicked card's location
  const rect = elem.getBoundingClientRect();
  document.documentElement.style
    .setProperty('--popup-origin-top', (rect.top + (rect.height / 2)) + 'px');
  document.documentElement.style
    .setProperty('--popup-origin-left', (rect.left + (rect.width / 2)) + 'px');
  // Display the popup
  const modal = document.getElementById("popup");
  modal.style.display = "block";
  // Prevent to scroll under the popup
  document.body.style.overflow = "hidden";
}

function setPopupContent(elem) {
  // Set the variables
  const id = elem.dataset.id;
  const img = document.querySelector(`[data-id="${id}"] img`).getAttribute('src');
  const name = document.querySelector(`[data-id="${id}"] .card-header .title`).textContent;
  const rating = document.querySelector(`[data-id="${id}"] .card-header .rating`).textContent;
  const description = document.querySelector(`[data-id="${id}"] .card-body`).textContent;
  document.querySelector(`#popup img`).setAttribute('src', img);
  document.querySelector(`#popup .popup-content-left .room-name`).textContent = name;
  document.querySelector(`#popup .popup-content-left .award-rating`).textContent = rating;
  document.querySelector(`#popup .popup-content-left .description`).textContent = description;
}