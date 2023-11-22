document.addEventListener("DOMContentLoaded", function () {
  const shippingItems = document.querySelectorAll(
    ".modal-item input[name='shippingAddress']"
  );
  const shippingAddress1 = document.getElementById("shipping-address-1");
  const shippingAddress2 = document.getElementById("shipping-address-2");
  const chooseAddress = document.getElementById("choose-shipping");

  chooseAddress.addEventListener("click", function () {
    const checkedRadio = document.querySelector(
      ".modal-item input[name='shippingAddress']:checked"
    );

    if (checkedRadio) {
      const address = checkedRadio.nextElementSibling.textContent;
      shippingAddress1.textContent = address;
      shippingAddress2.textContent = address;
    }
  });

  const deleteButtons = document.querySelectorAll(".delete-address");

  deleteButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const item = this.closest(".modal-item");
      if (item) {
        item.remove();
      }
    });
  });
});
