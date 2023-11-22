function toggleSection(sectionClass) {
  const section = document.querySelector(`.${sectionClass}`);
  const toggleImage = document.querySelector(`.${sectionClass}-toggle-image`);
  const allCheckbox = document.querySelector(".all-checkbox input");
  const header = document.querySelector(".all-checkbox p");

  // Переключаем видимость секции
  if (section.style.display === "none") {
    section.style.display = "block";

    toggleImage.src = "./images/icons/hide.svg";
    if (sectionClass === "in-stock") {
      allCheckbox.style.display = "block";
      header.textContent = "Выбрать все";
    }
  } else {
    section.style.display = "none";

    toggleImage.src = "./images/icons/open.svg";
    if (sectionClass === "in-stock") {
      allCheckbox.style.display = "none";
      updateHeaderSum();
    }
  }
}

function updateHeaderSum() {
  const counters = document.querySelectorAll(".item-counter p");
  const sum = document.getElementById("total").textContent;

  let count = 0;

  counters.forEach((counter) => {
    count += parseInt(counter.textContent, 10);
  });

  const header = document.querySelector(".all-checkbox p");
  header.textContent = `266 ${count} товаров · ${sum} сом`;
}
