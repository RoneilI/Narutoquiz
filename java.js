// Questions that will be asked
const Questions = [{
    q: "Who is Naruto's father?",
    a: [{ text: "Kakashi Hatake", isCorrect: false },
        { text: "Minato Namikaze", isCorrect: true },
        { text: "Jiraiya", isCorrect: false },
        { text: "Sasuke Uchiha", isCorrect: false }]
    },
    {
    q: "What is the highest ninja rank in the Naruto universe?",
    a: [{ text: "Chunin", isCorrect: false },
        { text: "Genin", isCorrect: false },
        { text: "Hokage", isCorrect: true },
        { text: "Jonin", isCorrect: false }]
    },
    {
    q: "Which character has the Sharingan eye?",
    a: [{ text: "Naruto Uzumaki", isCorrect: false },
        { text: "Sakura Haruno", isCorrect: false },
        { text: "Hinata Hyuga", isCorrect: false },
        { text: "Sasuke Uchiha", isCorrect: true }]
    }
    // ... add more questions as needed
];

let currQuestion = 0;
let score = 0;

// Function to load a question to the page
function loadQues() {
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");

    // Set the question text
    question.textContent = Questions[currQuestion].q;

    // Clear previous options
    opt.innerHTML = "";

    // Load the answer choices
    Questions[currQuestion].a.forEach((answer, index) => {
        const choicesDiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.id = "choice" + index;
        choice.value = index;

        choiceLabel.textContent = answer.text;
        choiceLabel.htmlFor = "choice" + index;

        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        opt.appendChild(choicesDiv);
    });
}

// Call loadQues to initialize the first question
loadQues();

// Function to load the score
function loadScore() {
    const totalScore = document.getElementById("score");
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`;
}

// Function to proceed to the next question or end the quiz
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        // Remove quiz elements and show the score
        document.getElementById("opt").innerHTML = '';
        document.getElementById("ques").textContent = '';
        document.getElementById("btn").style.display = 'none';
        loadScore();
    }
}

// Function to check the answer and proceed to the next question
function checkAns() {
    // Check if an answer is selected
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert('Please select an answer!');
        return;
    }

    const selectedAns = parseInt(selectedOption.value);

    // Check if the selected answer is correct
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
    }
    
    // Proceed to the next question
    nextQuestion();
}

// Attach the checkAns function to the button
document.getElementById("btn").onclick = checkAns;