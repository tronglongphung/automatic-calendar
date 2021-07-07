const currentTime = dayjs().format("DD/MM/YYYY");

const formButtons = document.getElementsByTagName("form");
const hour = document.querySelector(".hour").textContent;
const currentHour = parseInt(hour);
console.log(typeof currentHour); //check if its a number

$("#currentDay").text(`Today is ${currentTime}`);

let time = dayjs().hour();
const textArea = $("textarea");
if (time == currentHour) {
  textArea.addClass("present");
} else if (time < currentHour) {
  textArea.addClass("future");
} else {
  textArea.addClass("past");
}

for (let i = 0; i < formButtons.length; i++) {
  formButtons[i].addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(event);
    const storeText = {
      texts: textArea.textContent,
    };
    localStorage.setItem("texts", JSON.stringify(storeText));

    renderText();
  });
}

const renderText = () => {
  const textID = $("#text");

  var texts = JSON.parse(localStorage.getItem("texts"));

  textID.textContent = texts;
};
