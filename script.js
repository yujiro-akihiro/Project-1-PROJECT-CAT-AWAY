function startGame() {
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('game-screen').style.display = 'block';


  const catArrayContainer = document.getElementById('cat-array');
  catArrayContainer.style.display = 'flex';
  catArrayContainer.style.justifyContent = 'center';

  const catsContainer = document.getElementById('cats-container');
  catsContainer.style.display = 'flex';
  catsContainer.style.justifyContent = 'center';


  const catNames = ['Vivilian', 'John pole G', 'Channering', 'GOTACHI'];

  // Display cats on the red carpet
  catNames.forEach(catName => {
    const catDiv = document.createElement('div');
    catDiv.className = 'cat';
    catDiv.style.backgroundColor = getRandomColor();
    catsContainer.appendChild(catDiv);
  });

  // Display questions after 1 second
  setTimeout(displayQuestions, 1000);
}

function displayQuestions() {
  const questionContainer = document.getElementById('question-container');
  questionContainer.style.display = 'block';

  const questions = [
    {
      question: "How to get name and seat number from Vivian's AirTag?",
      options: [
        "const { nameTag, seatsNum } = getAirTagData(vivian.airTag);",
        "const nameTag = getAirTagName(vivian.airTag);",
        "const seatsNum = getAirTagSeatNum(vivian.airTag);",
        "const airTagData = getAirTagData(vivian.airTag);"
      ],
      answer: 0
    },
    {
      question: "How to move John Paul G to the catArray from the stage?",
      options: [
        "catArray.push(johnPaulG);",
        "catArray.unshift(johnPaulG);",
        "catArray.splice(1, 1, johnPaulG);",
        "catArray.slice(0, johnPaulG.length - 1);"
      ],
      answer: 2
    },
    {
      question: "How to move Channeling to the catArray from the security's feet?",
      options: [
        "catArray.unshift(channeling);",
        "catArray.shift(channeling);",
        "catArray.splice(0, 0, channeling);",
        "catArray.slice(0, channeling.length - 1);"
      ],
      answer: 0
    },
    {
      question: "How to move Gotachi to the catArray from the dance floor?",
      options: [
        "catArray.push(gotachi);",
        "catArray.reverse();",
        "catArray.splice(gotachi.length - 1, 1, gotachi);",
        "catArray.sort();"
      ],
      answer: 2
    }
  ];

  questions.forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.innerHTML = `
      <p>${index + 1}. ${question.question}</p>
      <select id="answer${index}">
        ${question.options.map((option, i) => `<option value="${i}">${option}</option>`).join('')}
      </select>
    `;
    questionContainer.appendChild(questionDiv);
  });

  // Start the timer
  startTimer(20);
}

function startTimer(duration) {
  let timer = duration;
  const timerElement = document.getElementById('timer');
  const interval = setInterval(function () { /*setIntervalはJavaScriptに元々備わっているグローバル関数で1000 ミリ秒（1 秒）ごとに繰り返し関数を呼び出すために使用されます。。*/
    timerElement.textContent = `Time Left: ${timer}s`;

    if (--timer < 0) {
      clearInterval(interval);
      
      timerElement.textContent = "Game Over !!! This fashion show has been canceled due to the kittens' CAT WALK!!!";
    }
  }, 1000);
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
