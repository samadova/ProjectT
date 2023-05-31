import React from 'react';
const ReadyForQuiz = () => {
    return (
      <div>
        <h2>Ready for the Quiz?</h2>
        <button>Start Quiz</button>
      </div>
    );
  };
  
  export default ReadyForQuiz;

  import React from 'react';
  import ReadyForQuiz from './ReadyForQuiz';
  
  const App = () => {
    return (
      <div>
        <h1>Welcome to the Quiz App</h1>
        <ReadyForQuiz />
      </div>
    );
  };
  
  export default App;
  