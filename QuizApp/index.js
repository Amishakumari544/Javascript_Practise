const data = [
  {
    question: "Which of the following is a disadvantage of using JavaScript?",
    a: " Client-side JavaScript does not allow the reading or writing of files.",
    b: "JavaScript can not be used for Networking applications because there is no such support available.",
    c: " JavaScript doesnt have any multithreading or multiprocess capabilities.",
    d: "All of the above.",
    answer: "d",
  },
  {
    question: "Which type of JavaScript language is ___",
    a: "Object-Oriented.",
    b: "JavaScript can not be used for Networking applications because there is no such support available.",
    c: " JavaScript doesnt have any multithreading or multiprocess capabilities.",
    d: "All of the above.",
    answer: "b",
  },
  {
    question:
      "When interpreter encounters an empty statements, what it will do:",
    a: "Shows a warning.",
    b: "Prompts to complete the statement",
    c: "Throws an error",
    d: "Ignores the statements",
    answer: "d",
  },
  {
    question: "The function and var are known as:",
    a: "Keywords",
    b: "Data types",
    c: "Declaration statements",
    d: "Prototypes",
    answer: "c",
  },
  {
    question:
      "Which of the following variables takes precedence over the others if the names are the same?        ",
    a: "Global variable",
    b: "The local element",
    c: "The two of the above",
    d: "None of the above",
    answer: "b",
  },
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("alabel_text");
const b_text = document.getElementById("blabel_text");
const c_text = document.getElementById("clabel_text");
const d_text = document.getElementById("dlabel_text");
const submitbtn = document.getElementById("btn");
const answerEls = document.getElementsByName("answer");
// it will be calling whenever we click on submit button
let currQuestion = 0;
let score = 0;
const quiz = document.getElementById("quiz");
loadQuiz();

function loadQuiz() {
  // deleselect would be called here
  deselect();
  // in currquestion all the data will come from the array and initailly it will start from = 0 ;
  const currdataquiz = data[currQuestion];
  // In this we are targetting the text inside the id question to the question data from json;
  questionEl.innerText = currdataquiz.question;
  // this will help us to get the option from the json using id inside input and label
  a_text.innerText = currdataquiz.a; //label and input
  b_text.innerText = currdataquiz.b; //label and input
  c_text.innerText = currdataquiz.c; //label and input
  d_text.innerText = currdataquiz.d; //label and input
}
function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    // checking in console whether working or not
    // console.log(answer.checked);
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

// by default answers are checked to deselect them

function deselect() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
submitbtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === data[currQuestion].answer) {
      score++; //score will increment
    }
    currQuestion++;
    // question will increment
    if (currQuestion < data.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${data.length} questions.</h2>
                
                <button id="demo" onclick="location.reload()">Reload</button>
                
            `;
      document.getElementById("demo").style = `backgroundColor:antiquewhite;
           border:0;
           padding:6px;
           display:block;
           width:100%;
           `;
    }
  }

  // this will tell that if currquestion is less than the data you should increment else show thee message to came end of the test.
});
