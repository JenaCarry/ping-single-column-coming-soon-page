window.addEventListener("load", () => {
  const form = document.querySelector(".form");
  const email = document.querySelector("#email");
  const clear = document.querySelector(".clear");
  const btn = document.querySelector(".btn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  btn.addEventListener("click", () => {
    if (!checkEmail(email.value)) {
      form.classList.add("invalid");
      email.placeholder = "exemplo-email@gmail.com";
    } else {
      form.classList.remove("invalid");
      email.placeholder = "";
    }
  });

  email.addEventListener("input", () => {
    if (email.value.length >= 3) {
      clear.style.display = "block";
    }
  });

  clear.addEventListener("click", () => {
    email.value = "";
    clear.style.display = "none";
  });
});

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
