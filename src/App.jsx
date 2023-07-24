import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

const user = {
  id: 1,
  name: "Pierfrancesco",
  image: "https://github.com/lifeisfoo.png",
};

function App() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <Sidebar user={user} />
          <Main />
        </div>
      </div>
    </>
  )
}

export default App
