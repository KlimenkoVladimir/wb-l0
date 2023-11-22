document.addEventListener("DOMContentLoaded", function () {
  const infoIcons = document.querySelectorAll(".item-platform img");
  const discounts = document.querySelectorAll(".item-price-original");
  const greenTexts = document.querySelectorAll(".shipping-free");
  const freePopups = document.querySelectorAll(".popup-free");

  infoIcons.forEach((icon) => {
    icon.addEventListener("mouseover", function () {
      // Показываем попап при наведении
      const popupIcon = this.nextElementSibling;
      if (popupIcon) {
        popupIcon.style.display = "block";
      }
    });

    icon.addEventListener("mouseout", function () {
      // Скрываем попап при уходе мыши
      const popupIcon = this.nextElementSibling;
      if (popupIcon) {
        popupIcon.style.display = "none";
      }
    });
  });

  discounts.forEach((discount) => {
    discount.addEventListener("mouseover", function () {
      // Показываем попап при наведении
      const popupDiscount = this.nextElementSibling;
      if (popupDiscount) {
        popupDiscount.style.display = "flex";
      }
    });

    discount.addEventListener("mouseout", function () {
      // Скрываем попап при уходе мыши
      const popupDiscount = this.nextElementSibling;
      if (popupDiscount) {
        popupDiscount.style.display = "none";
      }
    });
  });
  console.log(greenTexts);
  greenTexts.forEach((text, index) => {
    text.addEventListener("mouseover", function () {
      // Показываем попап при наведении
      const popupGreen = freePopups[index];
      if (popupGreen) {
        popupGreen.style.display = "block";
        console.log("ok");
      }
    });

    text.addEventListener("mouseout", function () {
      // Скрываем попап при уходе мыши
      const popupGreen = freePopups[index];
      if (popupGreen) {
        popupGreen.style.display = "none";
      }
    });
  });
});
