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

    const nextCard = () => {
      setCurrentIndex((currentIndex + 1) % flashcards.length);
      setFlipped(false);
    }

  return (
    <div className="App">
      <h1> 💰Financial Literacy 101 💰</h1>
      <h4>Lets test your knowledge and see how much you know about personal finance! </h4>
      <h5>Card {currentIndex + 1} of {flashcards.length}</h5>
      <div className={`card ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
        <div className="card-inner"> 
          <div className="front"> 
            {flashcards[currentIndex].question}
            
          </div>
          <div className="back">
            {flashcards[currentIndex].answer}
          </div>
        </div>
      </div>
      <button onClick={nextCard}>Next</button>
    </div>
  );
}

export default App;
