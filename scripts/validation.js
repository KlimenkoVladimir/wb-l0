document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("orderForm");

  const inputs = form.querySelectorAll("input");
  const errorElements = form.querySelectorAll(".error-message");

  inputs.forEach((input) => {
    const label = input.previousElementSibling;
    // Добавляем обработчик события для отслеживания ввода в поле
    input.addEventListener("input", function () {
      toggleLabelVisibility(input, label);
    });
  });

  // Добавляем обработчики событий для каждого поля
  inputs.forEach((input, index) => {
    input.addEventListener("input", function () {
      if (form.classList.contains("submitted")) {
        validateInput(input, errorElements[index]);
        switch (index) {
          case 2:
            validateEmail();
            break;
          case 3:
            validatePhone();
            break;
          case 4:
            validateInn();
            break;
        }
      }
    });
  });

  // Добавляем обработчик для кнопки "Оформить заказ"
  document.getElementById("orderButton").addEventListener("click", function () {
    form.classList.add("submitted");
    validateForm();
  });
});

function toggleLabelVisibility(input, label) {
  if (input.value.trim() === "") {
    // Если поле пустое, показываем лэйбл
    label.style.display = "none";
  } else {
    // Если в поле есть значение, скрываем лэйбл
    label.style.display = "block";
  }
}

function validateInput(input, errorElement) {
  const inputLine = input.nextElementSibling;
  const innUnder = document.getElementById("innUnder");
  const errorMessage = getErrorMessage(input);
  if (input.value.trim() === "") {
    input.classList.add("error");
    inputLine.style.backgroundColor = "#f55123";
    innUnder.style.display = "none";
    errorElement.textContent = errorMessage;
    errorElement.style.display = "block";
    return false;
  } else {
    input.classList.remove("error");
    inputLine.style.backgroundColor = "#000";
    errorElement.textContent = "";
    errorElement.style.display = "none";
    return true;
  }
}

function validateEmail() {
  const emailValue = document.getElementById("email");
  const emailLine = emailValue.nextElementSibling;
  const emailError = document.getElementById("emailError");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue.value.trim())) {
    emailValue.classList.add("error");
    emailValue.style.color = "#f55123";
    emailLine.style.backgroundColor = "#f55123";
    emailError.textContent = "Проверьте адрес почты";
    emailError.style.display = "block";
    return false;
  } else {
    emailValue.classList.remove("error");
    emailValue.style.color = "#000";
    emailLine.style.backgroundColor = "#000";
    emailError.textContent = "";
    emailError.style.display = "none";
    return true;
  }
}

function validatePhone() {
  const phoneValue = document.getElementById("phone");
  const phoneLine = phoneValue.nextElementSibling;
  const phoneError = document.getElementById("phoneError");
  const phoneRegex = /^\+\d{1,3} \d{1,3} \d{1,3} \d{2,3} \d{2,3}$/;

  if (!phoneRegex.test(phoneValue.value.trim())) {
    phoneValue.classList.add("error");
    phoneValue.style.color = "#f55123";
    phoneLine.style.backgroundColor = "#f55123";
    phoneError.textContent = "Формат: +9 999 999 99 99";
    phoneError.style.display = "block";
    return false;
  } else {
    phoneValue.classList.remove("error");
    phoneValue.style.color = "#000";
    phoneLine.style.backgroundColor = "#000";
    phoneError.textContent = "";
    phoneError.style.display = "none";
    return true;
  }
}

function validateInn(input, errorElement) {
  const innValue = document.getElementById("inn");
  const innLine = innValue.nextElementSibling;
  const innError = document.getElementById("innError");
  const innUnder = document.getElementById("innUnder");
  const innRegex = /^\d{14}$/;

  if (!innRegex.test(innValue.value.trim())) {
    innValue.classList.add("error");
    innValue.style.color = "#f55123";
    innLine.style.backgroundColor = "#f55123";
    innUnder.style.display = "none";
    innError.textContent = "Проверьте ИНН";
    innError.style.display = "block";
    return false;
  } else {
    innValue.classList.remove("error");
    innValue.style.color = "#000";
    innLine.style.backgroundColor = "#000";
    innUnder.style.display = "block";
    innError.textContent = "";
    innError.style.display = "none";
    return true;
  }
}

function validateForm() {
  const form = document.getElementById("orderForm");
  const inputs = form.querySelectorAll("input");
  const errorElements = form.querySelectorAll(".error-message");
  let firstErrorInput = null;
  let isValid = true;

  inputs.forEach((input, index) => {
    const isEmptyValid = validateInput(input, errorElements[index]);

    if (isEmptyValid) {
      switch (index) {
        case 2:
          isValid = validateEmail();
          break;
        case 3:
          isValid = validatePhone();
          break;
        case 4:
          isValid = validateInn();
          break;
      }
    }
    if ((!isValid || !isEmptyValid) && !firstErrorInput) {
      firstErrorInput = input;
    }
  });

  if (firstErrorInput) {
    firstErrorInput.scrollIntoView({ behavior: "smooth" });
  }
}

function getErrorMessage(input) {
  switch (input.id) {
    case "firstName":
      return "Укажите имя";
    case "lastName":
      return "Введите фамилию";
    case "email":
      return "Укажите электронную почту";
    case "phone":
      return "Укажите номер телефона";
    case "inn":
      return "Укажите ИНН";
    default:
      return "";
  }
}
