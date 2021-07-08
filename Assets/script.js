const currentTime = dayjs().format("DD/MM/YYYY");
const $formButtons = $("form");

$("#currentDay").text(`Today is ${currentTime}`);

let currentHour = dayjs().hour();
const $wrappers = $(".row");

//this changes every textarea, need fix
$wrappers.each((i, wrapper) => {
  const hour = parseInt($(wrapper).data("hour"));
  if (currentHour === hour) {
    $(wrapper).find("textarea").addClass("present");
    $(wrapper).find(".hour").text("Current Hour");
  } else if (currentHour < hour) {
    $(wrapper).find("textarea").addClass("future");
  } else {
    $(wrapper).find("textarea").prop("disabled", true);
    $(wrapper).find("textarea").addClass("past");
  }
});

$formButtons.on("submit", function (event) {
  event.preventDefault();
  const hour = $(event.currentTarget).data("hour");
  const textArea = $(event.currentTarget).find("textarea");
  localStorage.setItem(hour, textArea.val());
});

function loadData() {
  document.querySelector('[data-hour="9"] textarea').value =
    localStorage.getItem("9");
  document.querySelector('[data-hour="10"] textarea').value =
    localStorage.getItem("10");
  document.querySelector('[data-hour="11"] textarea').value =
    localStorage.getItem("11");
  document.querySelector('[data-hour="12"] textarea').value =
    localStorage.getItem("12");
  document.querySelector('[data-hour="13"] textarea').value =
    localStorage.getItem("13");
  document.querySelector('[data-hour="14"] textarea').value =
    localStorage.getItem("14");
  document.querySelector('[data-hour="15"] textarea').value =
    localStorage.getItem("15");
  document.querySelector('[data-hour="16"] textarea').value =
    localStorage.getItem("16");
  document.querySelector('[data-hour="17"] textarea').value =
    localStorage.getItem("17");
}

loadData();
