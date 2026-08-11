const questions = [
{
    question: "Which algorithmic strategy solves problems by breaking them into overlapping subproblems?",
    options: ["Greedy Method", "Dynamic Programming", "Backtracking", "Divide and Conquer"],
    answer: "Dynamic Programming"
},
{
    question: "Which sorting algorithm has an average time complexity of O(n log n)?",
    options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"],
    answer: "Merge Sort"
},
{
    question: "Which algorithm is used to find the shortest path in a graph with non-negative edge weights?",
    options: ["Prim's Algorithm", "Kruskal's Algorithm", "Dijkstra's Algorithm", "DFS"],
    answer: "Dijkstra's Algorithm"
},
{
    question: "Which technique is mainly used in Merge Sort?",
    options: ["Greedy", "Divide and Conquer", "Dynamic Programming", "Backtracking"],
    answer: "Divide and Conquer"
},
{
    question: "The time complexity of Binary Search is:",
    options: ["O(n)", "O(log n)", "O(n²)", "O(n log n)"],
    answer: "O(log n)"
}
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let timer;

const question = document.getElementById("question");
const options = document.getElementById("options");
const scoreText = document.getElementById("score");
const timerText = document.getElementById("timer");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    clearInterval(timer);
    timeLeft = 15;
    timerText.innerHTML = "Time Left: " + timeLeft;

    timer = setInterval(function () {
        timeLeft--;
        timerText.innerHTML = "Time Left: " + timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);

    const q = questions[currentQuestion];
    question.innerHTML = q.question;
    options.innerHTML = "";

    q.options.forEach(function (option) {
        const button = document.createElement("button");
        button.innerHTML = option;
        button.classList.add("option");

        button.onclick = function () {
            if (option === q.answer) {
                score++;
                scoreText.innerHTML = "Score: " + score;
            }

            nextQuestion();
        };

        options.appendChild(button);
    });
}

function nextQuestion() {
    clearInterval(timer);
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        question.innerHTML = "🎉 Quiz Completed!";
        options.innerHTML = "<h2>Your Score: " + score + " / " + questions.length + "</h2>";
        nextBtn.style.display = "none";
        timerText.style.display = "none";
    }
}

nextBtn.onclick = function () {
    nextQuestion();
};

loadQuestion();