// const canvas = document.getElementById('drawing-board');
// const toolbar = document.getElementById('toolbar');
// const ctx = canvas.getContext('2d');

// const canvasOffsetX = canvas.offsetLeft;
// const canvasOffsetY = canvas.offsetTop;

// canvas.width = window.innerWidth - canvasOffsetX;
// canvas.height = window.innerHeight - canvasOffsetY;

// let isPainting = false;
// let lineWidth = 5;
// let startX;
// let startY;

// toolbar.addEventListener('click', e => {
//     if (e.target.id === 'clear') {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//     }
// });

// toolbar.addEventListener('change', e => {
//     if(e.target.id === 'stroke') {
//         ctx.strokeStyle = e.target.value;
//     }

//     if(e.target.id === 'lineWidth') {
//         lineWidth = e.target.value;
//     }
    
// });

// const draw = (e) => {
//     if(!isPainting) {
//         return;
//     }

//     ctx.lineWidth = lineWidth;
//     ctx.lineCap = 'round';

//     ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
//     ctx.stroke();
// }

// canvas.addEventListener('mousedown', (e) => {
//     isPainting = true;
//     startX = e.clientX;
//     startY = e.clientY;
// });

// canvas.addEventListener('mouseup', e => {
//     isPainting = false;
//     ctx.stroke();
//     ctx.beginPath();
// });

// canvas.addEventListener('mousemove', draw);

// function save() {
// 	var anchor = document.createElement("a");
// 	anchor.href = canvas.toDataURL("image/png");

//set variables for each image clicked
//each question has a variable, variable element 
//if clicked iamge 1, set variable to 1 and store the variables for each page to a number
//generate image based on number
//if variable is 1 then generate image 1 
//maybe code everything in 1 page

/* ------------------QUESTIONs & lOGIC: ------------------------------ */

const questions = [
    {
        "question": "Let's start with an easy question. What's one word that describes your mood right now?",
        "answer1": "Happy :)",
        "answer1Total": "1",
        "answer2": "At peace",
        "answer2Total": "2",
        "answer3": "Neutral",
        "answer3Total": "3",
        "answer4": "Meh :/",
        "answer4Total": "4"
      },
      {
        "question": "You're at a French restaurant. Choose an entree dish:",
        "answer1": "Salmon en papillote",
        "answer1Total": "1",
        "answer2": "Ratatouille",
        "answer2Total": "6",
        "answer3": "Veal French Onion Burger",
        "answer3Total": "2",
        "answer4": "Boeuf bourguignon",
        "answer4Total": "3"
      },
      {
        "question": "Choose a dessert:",
        "answer1": "Cherry Clafoutis",
        "answer1Total": "3",
        "answer2": "Chocolate Croissant",
        "answer2Total": "2",
        "answer3": "Crème Brûlée",
        "answer3Total": "1",
        "answer4": "Hazelnut dacquoise",
        "answer4Total": "4"
      },
      {
        "question": "Who do you trust the most?",
        "answer1": "Family",
        "answer1Total": "1",
        "answer2": "Myself",
        "answer2Total": "3",
        "answer3": "No one.",
        "answer3Total": "4",
        "answer4": "Friends",
        "answer4Total": "2"
      },
      {
        "question": "FAVORITE MOVIE GENRE?",
        "answer1": "Thriller & horror",
        "answer1Total": "6",
        "answer2": "Fantasy & sci-fi",
        "answer2Total": "3",
        "answer3": "Comedy",
        "answer3Total": "1",
        "answer4": "Action",
        "answer4Total": "2"
      },
      {
        "question": "What's a word that describes your personality?",
        "answer1": "Calm",
        "answer1Total": "1",
        "answer2": "Dynamic",
        "answer2Total": "2",
        "answer3": "Chaotic",
        "answer3Total": "6",
        "answer4": "Shy",
        "answer4Total": "4"
    }
]

let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions =questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');
// const image = document.querySelector('#image');

//Function to generate question 
function generateQuestions (index) {
    //Select each question by passing it a particular index
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    const option4Total = questions[index].answer4Total;
    //Populate html elements 
    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option4.setAttribute('data-total', `${option4Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
    option4.innerHTML = `${question.answer4}`

    function css(element, style) {
        for (const property in style) {
            element.style[property] = style[property];
    }
}

    if (index == 0) {
        const container = document.querySelector(".quiz-container");
        const body = document.querySelector("body");
        const confetti = document.querySelector(".confetti");
        const option = document.querySelectorAll(".option");
        const previous = document.querySelector(".previous");
        const next = document.querySelector(".next");
        css(body, {
            'min-height': '100%',
            'background-image': 'url("q1(2).png")',
            'background-size': 'cover',
            'display': 'flex',
            'background-repeat': 'no-repeat',
            'background-position': 'center, center',
            'background-color': 'rgb(144, 188, 255)'
        });
        css(confetti, {
            'display': 'none'
        });
        for (let i=0; i<option.length; i++) {
            css(option[i], {
                'font-size': '1.2em',
                'font-weight': '400',
                'color': 'white'
            });
        }
        
        css(container, {
            'font-family': "'Almarai', sans-serif",
            'font-weight': '700',
            'color': 'white'
        });
        css(previous, {
            'color': 'white',
            'outline': '1px solid white',
            'background': 'none'
        });
        css(next, {
            'color': 'white',
            'outline': '1px solid white',
            'background': 'none'
        });
        
    }

    if (index == 1) {
        const body = document.querySelector("body");
        const progressBar = document.querySelector(".progress-bar");
        const confetti = document.querySelector(".confetti");
        const option = document.querySelectorAll(".option");
        const previous = document.querySelector(".previous");
        const next = document.querySelector(".next");
        css(body, {
            'min-height': '100%',
            'background-image': 'url("q2(1).png")',
            'background-size': 'cover',
            'display': 'flex',
            'background-repeat': 'no-repeat',
            'background-position': 'center, center',
            'background-color': 'rgb(247, 245, 232)',
        });
        css(confetti, {
            'display': 'none'
        });
        css(previous, {
            'color': 'black',
            'outline': '1px solid black',
        });
        css(next, {
            'color': 'black',
            'outline': '1px solid black'
        });
        css(container, {
            'font-family': "hwt-konop-6-line, sans-serif",
            'color': 'black',
        });
        for (let i=0; i<option.length; i++) {
            css(option[i], {
                'color': 'black',
                'font-family': "miller-banner, serif",
                'font-size': '1.2em',
            });
        }
        progressBar.classList.add("w-1");
        css(clouds, {
            'display': 'none'
        });
        
    }
    

    if (index == 2) {
        const body = document.querySelector("body");
        const option = document.querySelectorAll(".option");
        const progressBar = document.querySelector(".progress-bar");
        css(body, {
            'min-height': '100%',
            'background-image': 'url("q3(1).png")',
            'background-size': 'cover',
            'display': 'flex',
            'background-repeat': 'no-repeat',
            'background-position': 'center, center',
            'background-color': 'rgb(247, 228, 241)'
            // 'background': 'radial-gradient(circle at 5.3% 17.2%, rgb(255, 208, 253) 0%, rgb(255, 237, 216) 90%)',
        });
        css(container, {
            'color': 'black',
        });
        for (let i=0; i<option.length; i++) {
            css(option[i], {
                'color': 'black',
            });
        }
        progressBar.classList.add("w-2");
    }

    if (index == 3) {
        const body = document.querySelector("body");
        const confetti = document.querySelector(".confetti");
        const progressBar = document.querySelector(".progress-bar");
        const option = document.querySelectorAll(".option");
        const previous = document.querySelector(".previous");
        const next = document.querySelector(".next");
        css(body, {
            'min-height': '100%',
            'background-image': 'url("q4.png")',
            'background-size': 'cover',
            'display': 'flex',
            'background-repeat': 'no-repeat',
            'background-position': 'center, center'
        });
        css(confetti, {
            'display': 'none'
        });
        css(container, {
            'color': 'white',
            'font-family': "parity-sans-mono, monospace",
        });
        for (let i=0; i<option.length; i++) {
            css(option[i], {
                'color': 'white',
                'font-family': "parity-sans-mono, monospace",
            });
        }
        css(previous, {
            'color': 'white',
            'outline': '1px solid white'
        });
        css(next, {
            'color': 'white',
            'outline': '1px solid white'
        });

        progressBar.classList.add("w-3");
    }

    if (index == 4) {
        const container = document.querySelector(".quiz-container");
        const body = document.querySelector("body");
        const option = document.querySelectorAll(".option");
        const confetti = document.querySelector(".confetti");
        const progressBar = document.querySelector(".progress-bar");
        const buttons = document.querySelector("button");

        css(body, {
            'min-height': '100%',
            'background-image': 'url("q6.png")',
        });
    
        css(container, {
            'font-family': "hwt-konop-6-line, sans-serif",
            'color': 'black'
        });
        css(question, {
            'font-family': 'casablanca-urw, sans-serif',
        });
        // for (let i=0; i<option.length; i++) {
        //     css(option[i], {
        //         'font-family': 'forma-djr-banner, sans-serif',
        //     });
        // }
        css(confetti, {
            'display': 'none'
        });
        css(buttons, {
            'background-color': 'none'
        });
        
        progressBar.classList.add("w-4");

    }

    if (index == 5) {
        const container = document.querySelector(".quiz-container");
        const body = document.querySelector("body");
        const option = document.querySelectorAll(".option");
        const confetti = document.querySelector(".confetti");
        const progressBar = document.querySelector(".progress-bar");
        const question = document.querySelector(".question");
        css(body, {
            'min-height': '100%',
            'background-size': 'cover',
            'display': 'flex',
            'background-repeat': 'no-repeat',
            'background-position': 'center, center',
            'background-image': 'url(https://i.pinimg.com/originals/92/e6/d6/92e6d62b9cbb5d275463ad286218fbdf.jpg)'
        });
        css(confetti, {
            'display': 'none'
        });
        css(container, {
            'font-family': "parity-sans-mono, monospace",
            'color': 'white'
        });
        css(question, {
            'font-family': 'afronaut, sans-serif',
        });
        for (let i=0; i<option.length; i++) {
            css(option[i], {
                'font-family': 'parity-sans-mono, monospace',
                'color': 'white'
            });
        }
        progressBar.classList.add("w-5");
    }
    

}

function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    //Check if there is a radio input checked
    if(!selectedOption) {
        alert('Select an option to move on!');
        return;
    }

    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    score.push(answerScore);

    selectedAnswersData.push();

    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    currentQuestion++;

        selectedOption.checked = false;

        //quiz done
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }

    if(currentQuestion == totalQuestions) {

        container.style.display = 'none';
        const confetti = document.querySelector(".confetti");
        confetti.style.display = 'flex';
        
    
        if (totalScore<10) {
            result.innerHTML = 
            `<div style="display:flex; align-items: center; justify-content: center;">
            <h1 class="resultText" style="font-size:1.0em; font-family: hwt-konop-6-line, sans-serif;">Congrats! You are DJ Dog.</h1>
            <img style="height:13em; padding-left: -1em;" src="djdog.png"></img>
            <p style="line-height: 1.0; font-size: 0.75em;"class="resultDescription">
            You are definitely coolest out of all your friends. You have great taste 
            in pretty much everything. People think you're very outgoing, however
            you're secretly an introvert.</p>
            </div>
            <button class="restart">Restart Quiz</button>
            `
        }
        else if (totalScore<15) {
            result.innerHTML = 
            `<div style="display:flex; align-items: center; justify-content: center;">
            <h1 class="resultText" style="font-size:1.0em; font-family: hwt-konop-6-line, sans-serif;">
            Congrats! You are Bohemian Bunny.</h1>
            <img style="height:13em; padding-left: -1em;" 
            src="bohemianbunny.png"></img>
            <p style="line-height: 1.0; font-size: 0.75em;"class="resultDescription">
            You have an old soul and give the best advice. Maybe too carefree sometimes,
            but somehow everything works out for you.
            </p>
            </div>
            <button class="restart">Restart Quiz</button>
            `
        }
        else if (totalScore<20) {
            result.innerHTML = 
            `<div style="display:flex; align-items: center; justify-content: center;">
            <h1 class="resultText" style="font-size:1.0em; font-family: hwt-konop-6-line, sans-serif;">
            Congrats! You are Feral Frog.</h1>
            <img style="height:13em; padding-left: -1em;" 
            src="feralfrog.png"></img>
            <p style="line-height: 1.0; font-size: 0.75em;"class="resultDescription">
            You look intimidating but you're actually a softie. You're always the center of
            attention, whether you like it or not. Amazing sense of humor. 
            </p>
            </div>
            <button class="restart">Restart Quiz</button>
            `
        }
        else if (totalScore<25) {
            result.innerHTML = 
            `<div style="display:flex; align-items: center; justify-content: center;">
            <h1 class="resultText" style="font-size:1.0em; font-family: hwt-konop-6-line, sans-serif;">
            Congrats! You are Conjuring Cat.</h1>
            <img style="height:13em; padding-left: -1em;" 
            src="conjuringcat.png"></img>
            <p style="line-height: 1.0; font-size: 0.75em;"class="resultDescription">
            You're reserved, innovative, and somewhat sassy. Most likely introverted and 
            unpredictable. You likely have a high IQ and are a prodigy of some sort.
            </p>
            </div>
            <button class="restart">Restart Quiz</button>
            `
        }
        else if (totalScore<31) {
            result.innerHTML = 
            `<div style="display:flex; align-items: center; justify-content: center;">
            <h1 class="resultText" style="font-size:1.0em; font-family: hwt-konop-6-line, sans-serif;">
            Congrats! You are Rowdy Rat.</h1>
            <img style="height:13em; padding-left: -1em;" 
            src="rowdyrat.png"></img>
            <p style="line-height: 1.0; font-size: 0.75em;"class="resultDescription">
            Pure chaos. However, you're the most self-aware out of everyone.
            You always know how to have a good time, regardless of situation. 
            Also, you're an extremely resourceful being. 
            </p>
            </div>
            <button class="restart">Restart Quiz</button>
            `
        }
        // result.innerHTML = 
        //  `<h1 class="final-score">Your score: ${totalScore}</h1>
        //  <div class="summary">
        //     <h1>Summary</h1>
        // <button class="restart">Restart Quiz</button>
        //  `;
        return;
    }
    generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
    //Decrement quentions index
    currentQuestion--;
    //remove last array value;
    score.pop();
    //Generate the question
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if(e.target.matches('button')) {
    currentQuestion = 0;
    score = [];
    location.reload();
    }

}

generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);