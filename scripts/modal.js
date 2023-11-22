document.addEventListener("DOMContentLoaded", function () {
  const modalPayment = document.getElementById("modal-payment");
  const openPayment = document.querySelectorAll(".open-payment");
  const closePayment = document.getElementById("close-payment");
  const choosePayment = document.getElementById("choose-payment");

  const modalShipping = document.getElementById("modal-shipping");
  const openShipping = document.querySelectorAll(".open-shipping");
  const closeShipping = document.getElementById("close-shipping");
  const chooseAddress = document.getElementById("choose-shipping");

  // Открытие модального окна оплаты при клике на кнопку
  openPayment.forEach((button) => {
    button.addEventListener("click", function () {
      modalPayment.style.display = "block";
    });
  });

  // Закрытие модального окна оплаты
  closePayment.addEventListener("click", function () {
    modalPayment.style.display = "none";
  });
  choosePayment.addEventListener("click", function () {
    modalPayment.style.display = "none";
  });

  // Открытие модального окна доставки при клике на кнопку
  openShipping.forEach((button) => {
    button.addEventListener("click", function () {
      modalShipping.style.display = "block";
    });
  });

  // Закрытие модального окна доставки
  closeShipping.addEventListener("click", function () {
    modalShipping.style.display = "none";
  });
  chooseAddress.addEventListener("click", function () {
    modalShipping.style.display = "none";
  });
});
