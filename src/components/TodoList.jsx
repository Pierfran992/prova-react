// import
import TodoItem from "./TodoItem";

// dati
const todos = [
    {
        id: 1,
        done: false,
        text: "Prima Attività",
    },
    {
        id: 2,
        done: true,
        text: "Seconda Attività",
    },
    {
        id: 3,
        done: false,
        text: "Terza Attività",
    },
];

// componenti
export default function TodoList() {
    const todoItems = todos.map((t) => (<TodoItem key={t.id} done={t.done} text={t.text} />));
    return (
        <ul className="list-group pb-3">
            {todoItems}
        </ul>
    );
}