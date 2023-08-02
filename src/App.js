import './App.css';
import Counter from './component/Counter';
import AnkaxFIle from './component/AnkaxFIle';
import CreateNmae from './component/CreateName';
import ShowName from './component/ShowName';
import DisplayPosts from './component/DisplayPosts';

function App() {
  return (
    <div className="App">
      <DisplayPosts />
      {/* <ShowName />
      <CreateNmae />
      <Counter />
      <AnkaxFIle /> */}
    </div>
  );
}

export default App;
