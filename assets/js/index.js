window.addEventListener("load", () => {
  const form = document.querySelector(".form");
  const email = document.querySelector("#email");
  const btn = document.querySelector(".btn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  btn.addEventListener("click", () => {
    if (!checkEmail(email.value)) {
      setErrorFor(form);
      email.placeholder = "email@example/com";
    } else {
      setSuccessFor(form);
      email.placeholder = "";
    }
  });

  email.addEventListener("keydown", () => {
    setRemoveFor(form);
  });
});

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function setErrorFor(input) {
  input.classList.add("invalid");
  input.classList.remove("valid");
}

function setSuccessFor(input) {
  input.classList.add("valid");
  input.classList.remove("invalid");
}

function setRemoveFor(input) {
  input.classList.remove("valid");
  input.classList.remove("invalid");
}
