

document.addEventListener("DOMContentLoaded", (event) => {
  // Get the modal
  var modal = document.getElementById("popup");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

});

function openPopup(event) {
  setPopupContent(event);
  var modal = document.getElementById("popup");
  modal.style.display = "block";
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