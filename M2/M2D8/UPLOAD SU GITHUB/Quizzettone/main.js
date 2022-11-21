let questions = [];
      let questionIndex;
      let score = 0;
      const currentQuestion = () => questions[questionIndex];

      const displayNextQuestion = async ()=> {
        if(questionIndex >= questions.length -1){
        alert(`FINITO! IL TUO PUNTEGGIO: ` + score); 
         await resetQuiz();
        }
        if(questionIndex !== undefined){
          questionIndex++;
        }else{
        questionIndex = 0;
        displayScore();
        }
      document.getElementById(`question`).innerHTML = currentQuestion().question;
         displayAnswers();
    
        }

   const displayAnswers = () => {
    const current = currentQuestion();
    const wrongAnswers = current.incorrect_answers;
    const rightAnswer = current.correct_answer;
    const allAnswers = [rightAnswer, ...wrongAnswers];

    const section = document.getElementById(`answers`);
    section.innerHTML = ``;
    for(const answer of allAnswers){
      const btn = document.createElement(`button`);
      btn.innerHTML = answer;
      btn.value = answer;
      btn.onclick = onAnswered;
      btn.value = answer;
      section.appendChild(btn);
    }
    };

    const onAnswered = async event => {
      console.log(event);
      const userAnswer = event.target.value;
      if(userAnswer === currentQuestion().correct_answer){
        score++;
          displayScore();
          displayNextQuestion();
    }
    displayScore();
        await  displayNextQuestion();

    };

  
const displayScore = () => {
  document.getElementById(`score`).innerHTML = score;
  };

  const resetQuiz = async () => {
    questionIndex = undefined;
    score = 0;
    await fetchQuestions();
  };

  const fetchQuestions = async () => {
        const response = await fetch(
          'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy'
        );
        const data = await response.json();
        questions = data.results;
      };

      window.onload = async () => {
        await fetchQuestions();
        displayNextQuestion();
      };
        