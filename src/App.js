import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App(){
  const [Questions, setQuestions] = useState(data);
  return <main>
    <div className='container'>
    <h3>Questions and answer about Login</h3>
    <section>
      {
        Questions.map((question) => {
            return <SingleQuestion key = {question.id} {...question}/>
        })
      }
    </section>
    </div>
  </main>
}















// function App() {
//   const [questions, setQuestions] = useState(data);
//   return <main>
//     <div className='container'>
//       <h3>Questions and answers about Login</h3>
//       <section className='info'>
//         {
//           questions.map((question)=>{
//             return <SingleQuestion key = {question.id} {...question} />
//           })
//         }
//       </section>
//     </div>
//   </main>;
// }

export default App;
