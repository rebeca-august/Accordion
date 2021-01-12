import React, { useState } from 'react'
import questions from './data'
import data from './data'
import SingleQuestion from './Question'
function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => (
            <SingleQuestion
              id={question.id}
              title={question.title}
              info={question.info}
            />
          ))}
        </section>
      </div>
    </main>
  )
}

export default App
