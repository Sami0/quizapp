// pages/index.tsx
import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

type Question = {
  question: string;
  answer: boolean;
};

const Home: React.FC = () => {
  const questions: Question[] = [
    { question: ' #1 An E.E.G is one of the main tests to help diagnose heart failure', answer: false },
    {question:'#2 TMS or transcranial magnetic stimulation  manipulates brain activity by inducing electrical activity in a specific brain areas', answer: true},
    {question:'#3 The biosignals detected by EEG have been shown to represent the postsynaptic potentials of pyramidal neurons in the monocortex ', answer: false},
    {question:'#4 Postsynaptic potentials are changes in membrane potential that move the cell away from its resting state.',answer :true},
    {question:'#5 The neocortex is a set of layers of the mammalian cerebral cortex involved in higher-order brain functions such as sensory perception, cognition', answer:true},
    {question :'#6 the percentage allocortex.takes in the brain is 27% ',answer: false},
    {question :'#7 postsynaptic potentials : it is the difference between electric potential between the interior and exterior of biological cells' , answer:true},
    {question:'#8 An action potential occurs when the membrane potential of a specific cell rapidly rises and falls', answer:true},
    {question :'#9 mitochondria organelle found in the cytoplasm of almost all prokaryotic cells ,the primary function of which is to generate large quantities of energy in the form of ATP',answer: false},
    {question :'#10 Stem cells are found in almost all tissues of the body. And they are needed for the maintenance of tissue as well as for repair after injury.',  answer:true}
 
  ];

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);

  const handleAnswer = (isTrue: boolean) => {
    if (isTrue === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Braincells Quiz</title>
        <meta name="description" content="A simple true or false quiz app built with Next.js and TypeScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       
        <h1 className={styles.title}>Braincells quiz </h1>

        {showScore ? (
          <div className={styles.scoreSection}>
            <h2>
              You scored {score} out of {questions.length}
            </h2>
          </div>
        ) : (
          <div className={styles.questionSection}>
            <h2>Question {currentQuestion + 1}/{questions.length}</h2>
            <div className={styles.questionBox}>
            <p>{questions[currentQuestion].question}</p>
            </div>
            <button onClick={() => handleAnswer(true)} className={styles.Greenbutton}>True</button>
            <button onClick={() => handleAnswer(false)} className={styles.Redbutton}>False</button>
            <button className={styles.button}> <a href="https://brainquestions.netlify.app/info/page">find more info </a></button>
          </div>
        )}
      </main>
     
    </div>
  );
};

export default Home;
