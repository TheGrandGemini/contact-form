"use strict";

//Selectors Varable
const btn = document.querySelector("button");
function validateInput() {
  const firstName = document.querySelector(".first-name").value;
  const lastName = document.querySelector(".last-name").value;
  const email = document.querySelector(".email").value;
  const message = document.querySelector(".message").value;
  const consent = document.querySelector(".consent");
  const radioBtns = document.querySelectorAll(".radio");

  const addError = function (selector) {
    return document.querySelector(`.${selector}`).classList.add("active");
  };

  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }
  //firstName validation
  if (firstName.trim() === "") {
    addError("first-name-error");
    return false;
  }

  // lastName validation
  if (lastName.trim() === "") {
    addError("last-name-error");
    return false;
  }

  //email validation
  if (validateEmail(email) && email.trim() !== "") {
    document.querySelector(".email-error").classList.remove("active");
  } else {
    addError("email-error");
    return false;
  }

  //radio validation
  let ischecked = false;
  radioBtns.forEach((radio) => {
    if (radio.checked) {
      ischecked = true;
      return ischecked;
    }
  });
  if (!ischecked) {
    addError("query-error");
    return false;
  }

  //message validation
  if (message.trim() === "") {
    addError("message-error");
    return false;
  }

  //consent checkbox validation
  if (consent.checked) {
    document.querySelector(".consent-error").classList.remove("active");
  } else {
    addError("consent-error");
    return false;
  }

  return true; // Assume it's valid unless proven otherwise
}

btn.addEventListener("click", function (e) {
  e.preventDefault();

  function validateForm() {
    let isValid = true;

    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      if (!validateInput(input)) {
        isValid = false;
      }
    });

    return isValid;
  }

  validateInput();

  //display modal for success
  if (validateForm()) {
    document.querySelector(".modal").classList.add("active");
    const form = document.querySelector("form");
    form.reset();
    form.style.display = "none";
    document.querySelector(".error").computedStyleMap.display = "none";
  }
});
