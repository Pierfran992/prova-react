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
        <ListNames />
      </LeftCol>

      {/* main */}
      <RightCol>
        <TodoList />
      </RightCol>
    </Layout>
  )
}

export default App
// ___________________________________________
