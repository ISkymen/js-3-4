//Конструктор
function QUESTION (question, answers) {
  var self = this;
  self.question = question;
  self.answers = answers;
}

// Объект DOM
var page = {
  Title: function (title) {
    var blockTitle = document.createElement("h1");
    blockTitle.innerHTML = title;
    blockTitle.className = "page-title";
    document.body.appendChild(blockTitle);
  },

  Question: function (questions) {
    var questionList = document.createElement("ol");
    questionList.className = "question";
    document.body.appendChild(questionList);

    var questionLenght = questions.length;
    for (i = 0; i < questionLenght; i++) {

      var questionItem = document.createElement("li");
      questionList.appendChild(questionItem);

      var blockQuestion = document.createElement("h2");
      blockQuestion.innerHTML = questions[i].question;
      blockQuestion.className = "question";
      questionItem.appendChild(blockQuestion);

      var list = document.createElement("ul");
      list.className = "answer__list";
      questionItem.appendChild(list);

      var answerLenght = questions[i].answers.length;
      for (j = 0; j < answerLenght; j++) {
        var listItem = document.createElement("li");
        var listInput = document.createElement("input");
        var listLabel = document.createElement("label");
        listInput.setAttribute("type", "checkbox");
        listItem.className = "answer__item";

        listLabel.innerHTML = questions[i].answers[j];

        list.appendChild(listItem);
        listItem.appendChild(listLabel);
        listLabel.insertBefore(listInput, listLabel.firstChild);
      }
    }
  },

  Button: function (button) {
    var blockButton = document.createElement("button");
    blockButton.innerHTML = button;
    blockButton.className = "button";
    document.body.appendChild(blockButton);
  }
};

var pageQuestions = [];

// Блок переменных страницы
var pageTitle = "Тест по программированию";
var pageButton = "Проверить мои результаты";

pageQuestions.push(new QUESTION("Вопрос №1", ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"]));
pageQuestions.push(new QUESTION("Вопрос №2", ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"]));
pageQuestions.push(new QUESTION("Вопрос №3", ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"]));

// Вывод DOM
page.Title(pageTitle);
page.Question(pageQuestions);
page.Button(pageButton);