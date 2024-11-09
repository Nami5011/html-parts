

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

function openPopup(event) {
  setPopupContent(event);
  const modal = document.getElementById("popup");
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function setPopupContent(elm) {
 const id = elm.dataset.id;
 const img = document.querySelector(`[data-id="${id}"] img`).getAttribute('src');
 const name = document.querySelector(`[data-id="${id}"] .card-header .title`).textContent;
 const rating = document.querySelector(`[data-id="${id}"] .card-header .rating`).textContent;
 const description = document.querySelector(`[data-id="${id}"] .card-body`).textContent;
 document.querySelector(`#popup img`).setAttribute('src', img);
 document.querySelector(`#popup .popup-content-left .room-name`).textContent = name;
 document.querySelector(`#popup .popup-content-left .award-rating`).textContent = rating;
 document.querySelector(`#popup .popup-content-left .description`).textContent = description;
}