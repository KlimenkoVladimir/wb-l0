document.addEventListener("DOMContentLoaded", function () {
  // Получаем элементы DOM
  const allCheckbox = document.querySelector(".all-checkbox input");
  const checkboxes = document.querySelectorAll(".checkbox");
  const debitCheckbox = document.getElementById("debitCheckbox");
  const debitLater = document.querySelectorAll(".debit-later");
  const counters = document.querySelectorAll(".item-counter p");
  const originalPrices = document.querySelectorAll(".item-price-original");
  const discountedPrices = document.querySelectorAll(".item-price-discount");
  const originalPricesMobile = document.querySelectorAll(
    ".item-price-original-mobile"
  );
  const discountedPricesMobile = document.querySelectorAll(
    ".item-price-discount-mobile"
  );
  const totalDiscountPriceElement = document.getElementById(
    "total-discount-price"
  );
  const totalQuantityElement = document.getElementById("total-quantity");
  const basketLabel = document.querySelector(".basket-label");
  const productLabels = document.querySelectorAll(".product-label");
  const data2Label = document.getElementById("data-2-label");
  const shippingProducts = document.querySelectorAll(".shipping-product");
  const data2 = document.getElementById("date-2");
  const totalOriginalPriceElement = document.getElementById(
    "total-original-price"
  );

  const totalDiscountElement = document.getElementById("total-discount");
  const deleteButtons = document.querySelectorAll(".delete-button");
  const orderButton = document.getElementById("orderButton");

  // Обработчики для счетчиков
  function updateTotal() {
    let totalDiscount = 0;
    let totalOriginal = 0;
    let totalQuantity = 0;
    let totalProducts = 0;

    checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked) {
        const priceOriginal = parseInt(originalPrices[index].dataset.price);
        const quantity = parseInt(counters[index].textContent, 10);
        totalOriginal += priceOriginal * quantity;

        const priceDiscount = parseInt(discountedPrices[index].textContent);
        console.log(priceDiscount);
        totalDiscount += priceDiscount;

        totalQuantity += quantity;
        totalProducts++;

        if (quantity > 184) {
          console.log(data2);

          shippingProducts[index].style.display = "block";
          productLabels[index].textContent = 184;
          data2.style.display = "block";
          data2Label.textContent = quantity - 184;
        } else {
          console.log(quantity);
          if (quantity === 1) {
            productLabels[index].style.display = "none";
          } else {
            productLabels[index].style.display = "inline-flex";
          }
          shippingProducts[index].style.display = "block";
          productLabels[index].textContent = quantity;
        }
      } else {
        // Скрываем элемент при снятом чекбоксе
        shippingProducts[index].style.display = "none";
      }
    });

    console.log(totalProducts);
    if (totalProducts === 0) {
      basketLabel.style.display = "none"; // Скрыть элемент, если корзина пуста
    } else {
      basketLabel.style.display = "inline-flex"; // Показать элемент, если корзина не пуста
    }

    totalDiscountPriceElement.textContent = `${totalDiscount} сом`;
    totalQuantityElement.textContent = `${totalQuantity} товара`;
    basketLabel.textContent = totalProducts;
    totalOriginalPriceElement.textContent = `${totalOriginal} сом`;
    totalDiscountElement.textContent = `${totalDiscount - totalOriginal} сом`;

    // Проверка, все ли обычные чекбоксы отмечены
    const allChecked = Array.from(checkboxes).every(
      (checkbox) => checkbox.checked
    );
    if (allCheckbox) {
      allCheckbox.checked = allChecked;
    }

    if (debitCheckbox.checked) {
      orderButton.textContent = `Оплатить ${totalDiscountPriceElement.textContent}`;
    }
  }

  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("change", function () {
      updateTotal();
    });
  });

  allCheckbox.addEventListener("change", function () {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = allCheckbox.checked;
    });

    updateTotal();
  });

  // Обработчики для счетчиков
  counters.forEach((counter, index) => {
    const minusButton = counter.previousElementSibling;
    const plusButton = counter.nextElementSibling;

    minusButton.addEventListener("click", function () {
      let valueCount = parseInt(counter.textContent, 10);
      let originalPrice = parseInt(originalPrices[index].dataset.price, 10);

      if (valueCount > 1) {
        valueCount--;
        counter.textContent = valueCount;
        originalPrices[index].textContent = `${originalPrice * valueCount} сом`;
        originalPricesMobile[index].textContent = `${
          originalPrice * valueCount
        } сом`;

        discountedPrices[index].textContent = `${Math.round(
          originalPrice * valueCount - originalPrice * valueCount * 0.1
        )} com`;
        discountedPricesMobile[index].textContent = `${Math.round(
          originalPrice * valueCount - originalPrice * valueCount * 0.1
        )} com`;
        updateTotal();
      }
    });

    plusButton.addEventListener("click", function () {
      let valueCount = parseInt(counter.textContent, 10);
      let originalPrice = parseInt(originalPrices[index].dataset.price, 10);
      valueCount++;
      counter.textContent = valueCount;
      originalPrices[index].textContent = `${originalPrice * valueCount} сом`;
      originalPricesMobile[index].textContent = `${
        originalPrice * valueCount
      } сом`;
      discountedPrices[index].textContent = `${Math.round(
        originalPrice * valueCount - originalPrice * valueCount * 0.1
      )} сом`;
      discountedPricesMobile[index].textContent = `${Math.round(
        originalPrice * valueCount - originalPrice * valueCount * 0.1
      )} сом`;
      updateTotal();
    });
  });

  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const item = this.closest(".item");
      if (item) {
        const checkbox = item.querySelector(".checkbox");
        if (checkbox) {
          checkbox.checked = false;
          updateTotal();
        }
        item.remove();
      }
    });
  });

  debitCheckbox.addEventListener("change", function () {
    // При нажатии на чекбокс меняем текст кнопки
    if (debitCheckbox.checked) {
      orderButton.textContent = `Оплатить ${totalDiscountPriceElement.textContent}`;
      debitLater.forEach((p) => {
        p.style.display = "none";
      });
    } else {
      orderButton.textContent = "Заказать";
      debitLater.forEach((p) => {
        p.style.display = "block";
      });
    }
  });
});
