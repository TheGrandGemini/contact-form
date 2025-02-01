"use strict";

//Selectors Varable
const btn = document.querySelector("button");
function validateInput() {
  const firstName = document.querySelector(".first-name");
  const lastName = document.querySelector(".last-name");
  const email = document.querySelector(".email");
  const message = document.querySelector(".message");
  const consent = document.querySelector(".consent");
  const radio = document.querySelector(".radio");
  const radioBtns = document.querySelectorAll(".radio");

  const addError = function (selector) {
    return document.querySelector(`.${selector}`).classList.add("active");
  };

  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }
  //firstName validation
  if (firstName.value.trim() === "" && firstName.required === true) {
    addError("first-name-error");
    return false;
  }

  // lastName validation
  if (lastName.value.trim() === "" && lastName.required === true) {
    addError("last-name-error");
    return false;
  }

  //email validation
  if (
    validateEmail(email.value) &&
    email.value.trim() !== "" &&
    email.required === true
  ) {
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
  if (!ischecked && radio.required === true) {
    addError("query-error");
    return false;
  }

  //message validation
  if (message.value.trim() === "" && message.required === true) {
    addError("message-error");
    console.log(message);
    return false;
  }

  //consent checkbox validation
  if (consent.checked && consent.required === true) {
    document.querySelector(".consent-error").classList.remove("active");
  } else {
    addError("consent-error");
    return false;
  }

  return true; // Assume it's valid unless proven otherwise
}

document.querySelector("form").addEventListener("submit", function (e) {
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
