import "./App.css";

export default function App() {
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
      <ul>
        {questions.map((question) => (
          <div>
            <h2>{question.question}</h2>
            <li>
              {question.options.map((opt) => <input type="radio"/>{opt})}
            </li>
          </div>
        ))}
      </ul>
    </main>
  );
}
