import './App.css';
import { useState } from 'react'; 
const App = () => {
  const flashcards = [
    { question: "What is a credit score?" , answer: " A credit score is a number that represents your creditworthyness."}, 
    { question: "What is the difference between a need and a want?" , answer: " A need is something essential for living (food, housing, utilities), while a want is something nice to have but not necessary (entertainment, luxury items). "},
    { question: "What is an emergency fund?" , answer : "Money saved specifically for unexpected expenses like medical bills, car repairs, or job loss. Financial experts often recommend saving 3-6 months of living expenses. "},
    { question: "What is intrest? " , answer : "The cost of borrowing money or the reward you earn for saving money. For example, banks pay interest on savings accounts, while loans charge interest. "},
    { question: "What is the differnece between a debit and credit card?" , answer : "Debit card: Uses money directly from your bank account. Credit card: Borrows money from a lender that you must pay back later, often with interest."},
    { question: "What is income?" , answer : "The money you earn from a job, business, or other sources. "},
    { question: "Why is it important to have a saving account?" , answer : "Saving money helps you prepare for emergencies and future goals. "},
    { question: "What is Debt?" , answer : "Money borrowed from a lender that must be paid back later, often with interest. "},
    { question: "What does living within your means mean?" , answer : "Living within your means means spending less money than you earn so you can save, invest, and avoid debt. "},
    { question: "What is investing?" , answer : "Putting money into assets (like stocks, bonds, or real estate) with the expectation that they will increase in value over time. "},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [guess, setGuess] = useState(''); 
  const [hasGuessed, setHasGuessed] = useState(false);
  const [error, setError] = useState('');

  const resetCardState = () => {
    setFlipped(false);
    setGuess('');
    setHasGuessed(false);
    setError('');
  };

  const prevCard = () => {
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
    resetCardState();
  };

  const nextCard = () => {
    if (currentIndex === flashcards.length - 1) return;
    setCurrentIndex(currentIndex + 1);
    resetCardState();
  };

  const tryFlip = () => {
    if (!hasGuessed) return;
    setFlipped(!flipped);
  };

  const submitGuess = () => {
    if (guess.trim() === '') return;
    setHasGuessed(true);
    if (guess.trim().toLowerCase() !== flashcards[currentIndex].answer.trim().toLowerCase()) {
      setError('Incorrect! Tap the card to see the answer.');
    } else {
      setError('');
    }
  };

  return (
    <div className="App">
      <h1> 💰Financial Literacy 101 💰</h1>
      <h4>Lets test your knowledge and see how much you know about personal finance! </h4>
      <h5>Card {currentIndex + 1} of {flashcards.length}</h5>

      <div className="card-wrapper">
        <div className={`card ${flipped ? 'flipped' : ''}`} onClick={tryFlip}>
          <div className="card-inner">
            <div className="front">
              <p>{flashcards[currentIndex].question}</p>
              {hasGuessed && <p className="hint">Tap the card to see the answer</p>}
            </div>
            <div className="back">
              {flashcards[currentIndex].answer}
            </div>
          </div>
        </div>

        <div className="card-nav">
          <button onClick={prevCard} disabled={currentIndex === 0}>
            ◀️ Back
          </button>
          {!hasGuessed && (
            <>
              <input
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder="Type your guess here"
              />
              <button onClick={submitGuess} type="button">
                Submit guess
              </button>
            </>
          )}
          {error && <p className="error">{error}</p>}
          <button onClick={nextCard} disabled={currentIndex === flashcards.length - 1}>
            Next ▶️
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
