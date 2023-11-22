document.addEventListener("DOMContentLoaded", function () {
  const paymentItems = document.querySelectorAll(
    ".modal-item input[name='paymentMethod']"
  );
  const paymentImg1 = document.getElementById("paymentImg1");
  const paymentImg2 = document.getElementById("paymentImg2");
  const choosePaymentButton = document.getElementById("choose-payment");

  choosePaymentButton.addEventListener("click", function () {
    const checkedRadio = document.querySelector(
      ".modal-item input[name='paymentMethod']:checked"
    );

    if (checkedRadio) {
      const imageName = checkedRadio.nextElementSibling.src;
      paymentImg1.src = imageName;
      paymentImg2.src = imageName;
    }
  });
});
