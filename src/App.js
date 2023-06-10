import logo from './logo.svg';
import './App.css';
import Restaurant from './components/Restaurant';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      {/* <h1 style={{color: "red" , fontSize: "30px" , fontFamily: "monospace" , width: "100vw" , height: "10vh" , backgroundColor:"aqua" , marginLeft: "30vw"}}>The Great Indian Restaurant</h1> */}
      <Restaurant/>
    </div>
  );
}

export default App;
