import { useState } from "react";
import "./App.css";

export default function App() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [formData, setFormData] = useState(false);

  const handleChangeEvent = (event, questionId) => {
    const value = event.target.value;
    setSelectedOptions((prevValue) => {
      //here it is filtering the objects which doesn't matches with the questionId.
      // Remove any previous selection for the current questionId.
      const updatedObj = prevValue.filter((option) => option.id !== questionId);
      // Add the new selection, with the previous values, ensuring only one selection per question.
      return [...updatedObj, { id: questionId, value: value }];
    });
    console.log(selectedOptions);
  };

  const handleSubmitEvent = () => {
    if (selectedOptions.length >= questions.length) {
      setFormData(true);
    }
  };

  const questions = [
    {
      id: 1,
      question: "Favorite Color?",
      options: ["Red", "Blue", "Green", "Yellow"],
    },
    {
      id: 2,
      question: "Favorite Animal?",
      options: ["Dog", "Cat", "Bird", "Fish"],
    },
    {
      id: 3,
      question: "Favorite Food?",
      options: ["Pizza", "Burger", "Pasta", "Salad"],
    },
  ];
  return (
    <main>
      <h1>Polling App</h1>
     {!formData && <div>
        <form onSubmit={handleSubmitEvent}>
          <ul>
            {questions.map((question) => (
              <div key={question.id}>
                <h2>{question.question}</h2>

                {question.options.map((option, index) => (
                  <li key={index}>
                    <label>
                      <input
                        type="radio"
                        onChange={(event) =>
                          handleChangeEvent(event, question.id)
                        }
                        name={`question_${question.id}`}
                        value={option}
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </div>
            ))}
          </ul>
          <button type="submit">Submit</button>
        </form>
      </div>}
      {formData && <h2>Thank You for Participating!</h2>}
    </main>
  );
}
