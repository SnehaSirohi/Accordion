import React, { useState } from "react";
import data from './data';
// import datanew from './datanew';
import SingleQuestion from './Question';
// import SingleQuest from './Question';

function App()
{
    const [questions, setQuestions] = useState(data);
    // const [questionsnew, setQuestionsnew] = useState(datanew);
    return <main>
        <div className="container">
            <h3>Frequently asked Questions</h3>
            <section className="info">
                {
                    questions.map((question)=>{
                       
                        return (
                            <div>
                                <SingleQuestion key={question.id} {...question} />
                            </div>
                            
                        );
                    })
                }
            </section>
        </div>
    </main>
}

export default App;