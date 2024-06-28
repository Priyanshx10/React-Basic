import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className='bg-black h-screen w-screen flex justify-center items-center'>
      <div className='w-[300px]  h-[320px] p-10 bg-white rounded-xl justify-between space-y-2'>
        <Header/>
        <TodoItem/> 
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <Button/>
    </div>
  </div>
  );
}

export default App;
