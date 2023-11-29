const btn = document.getElementById("btn");
const email = document.getElementById("email");
const container = document.querySelector(".container");
const error = document.querySelector(".error-message");
const modalContainer = document.querySelector(".modal-container");

function errorHandling() {
  error.innerHTML = `<p>Valid email required!</p>`;
  email.style.color = "hsl(4, 100%, 67%)";
  error.style.color = "hsl(4, 100%, 67%)";
  email.style.borderColor = "hsl(4, 100%, 67%)";
  email.style.backgroundColor = "hsl(4, 100%, 97%)";
}

setTimeout(() => {
  email.style.color = "#000";
  email.style.borderColor = "hsl(231, 7%, 60%)";
  email.style.backgroundColor = "transparent";
}, 8000);

function openModal() {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.value === "" || !email.value.match(validRegex)) {
    errorHandling();
  } else {
    error.remove();
    container.style.display = "none";

    const modalDiv = document.createElement("div");
    modalDiv.innerHTML = `
    <div class="popup" id="popup">
          <img src="assets/images/icon-success.svg" />
          <h1>Thanks for <br />subscribing!</h1>
          <p>
            A confirmation email has been sent
            to <strong>${email.value}</strong>. Please open it and click 
            the button inside to confirm your subscription.
          </p>
          <button type="button" id="button">Dismiss message</button>
      </div>
    
    `;

    modalContainer.appendChild(modalDiv);
    modalContainer.classList.add("open-popup");

    const modalButton = document.querySelector(".popup button");
    modalButton.addEventListener("click", () => {
      modalContainer.classList.remove("open-popup");
      container.style.display = "flex";
      email.value = "";
      // error.remove();
    });
  }
}

btn.addEventListener("click", (e) => {
  openModal();
  e.preventDefault();
});
