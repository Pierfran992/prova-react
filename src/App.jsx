// IMPORT__________________________________
import './App.css';
import Layout, { LeftCol, RightCol } from './components/Layout';
import User from './components/User';
import ListNames from './components/ListNames';
import TodoList from './components/TodoList';
// _________________________________________


// DATI_____________________________________
const user = {
  id: 1,
  name: "Pierfrancesco",
  image: "https://github.com/lifeisfoo.png",
};

const lists = [
  { id: 1, name: "Importante", undone_count: 0 },
  { id: 2, name: "Filma da vedere", undone_count: 2 },
  { id: 3, name: "Libri da leggere", undone_count: 0 },
];

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

const customStyle = {
  boxShadow: "inset -1px 0 0 rgba(0, 0, 0, 0.1)",
};
// ______________________________________________


// COMPONENTI__________________________________
function App() {
  return (
    <Layout>
      {/* sidebar */}
      <LeftCol>
        <User name={user.name} image={user.image} />
        <hr />
        <ListNames lists={lists} selectedListIdx={1} />
      </LeftCol>

      {/* main */}
      <RightCol>
        <TodoList todos={todos} />
      </RightCol>
    </Layout>
  )
}

export default App
// ___________________________________________
