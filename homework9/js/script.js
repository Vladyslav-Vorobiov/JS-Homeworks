// Homework 9. Условное ветвление V2

// При загрузке страницы нужно показать пользователю окно, в котором спросить его год рождения. Когда он введет его и нажмет ОК,
// спросить у него, в каком городе он живет. При удачном раскладе показать ему еще одно окно, где спросить его любимый вид спорта.
// При нажатии на ОК показываем ему окно, где должна быть отображена следующая информация:

// 1. Его возраст.
// 2. Если пользователь введет Киев, Москва или Минск, то показать ему сообщение – “Ты живешь в столице …” и на место точек подставляем страну, столицу которой он ввел.
// Иначе показываем ему “ты живешь в городе …” и на место точек – введенный город.
// 3. Выбираем сами три вида спорта и три чемпиона в этих видах. Соответственно, если пользователь введет один из этих видов спорта,
// то показываем ему сообщение “Круто! Хочешь стать …” и подставляем на место точек имя и фамилию чемпиона.
// Всё это должно быть отображено в одном окне.

// Если в каком-то из случаев он не захочет вводить информацию и нажмет Отмена, показать ему сообщение –
// “Жаль, что Вы не захотели ввести свой(ю) …” и указываем, что он не захотел вводить – дату рождения, город или вид спорта.

const yearOfBirth = +prompt("What year were you born?");
let userAge;

if (isNaN(yearOfBirth)) {
  alert("You should enter a number!");
  userAge = 2021 - +prompt("Be attentive! Input a number:");
} else if (yearOfBirth === 0) {
  alert("It's a pity you didn't want to enter your age");
  userAge = "No info about age";
} else {
  userAge = "You are" + " " + (2021 - yearOfBirth) + " " + "years old";
}

//==============

const userCity = prompt("What city do you live in?");
let chosenCity;

switch (userCity) {
  case "":
    chosenCity = `No info about place of living`;
  case null:
    alert("It's a pity you didn't want to enter your city");
    chosenCity = `No info about place of living`;
    break;
  case "Kyiv":
    chosenCity = `You live in capital of Ukraine`;
    break;
  case "Moscow":
    chosenCity = `You live in capital of Russia`;
    break;
  case "Minsk":
    chosenCity = `You live in capital of Minsk`;
    break;
  default:
    chosenCity = `You live in ${userCity}`;
}

//==============

const userSports = prompt("What is your fav sports?");
let chosenSports;
const champs = {
  mma: "Khabib",
  football: "Messi",
  racing: "Schumacher",
};

switch (userSports) {
  case null:
    alert("It's a pity you didn't want to enter your fav sports");
    chosenSports = "No info about sports";
    break;
  case "":
    chosenSports = `No info about place of living`;
    break;
  case "MMA":
    chosenSports = `${userSports} is nice choise, wanna be like ${champs.mma}?`;
    break;
  case "Football":
    chosenSports = `${userSports} is nice choise, wanna be like ${champs.football}?`;
    break;
  case "Racing":
    chosenSports = `${userSports} is nice choise, wanna be like ${champs.racing}?`;
    break;
  default:
    chosenSports = `${userSports} is good choise`;
}

alert(`${userAge}, \n${chosenCity}, \n${chosenSports}`);
