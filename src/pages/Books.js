// import { Link } from "react-router-dom";

function Books() {
  const books = [
    { id: 1, title: "Profils-Card", lien: "https://profils-react.vercel.app/" },
    {
      id: 2,
      title: "Calculator ",
      lien: "https://react-calculator-dusky-two.vercel.app/",
    },
    { id: 3, title: "Formulaire", lien: "https://tp-ref.vercel.app/" },
    { id: 4, title: "Api-Flags", lien: " https://drapaux-api.vercel.app/ " },
    { id: 5, title: "Todo-List", lien: "https://todolist-168a20.gitlab.io/" },
  ];

  return (
    <div>
      <h1>Liste des travaux</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <a href={book.lien} target="_blank" rel="noreferrer">
              {book.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
