import './App.css';
import PreNavbar from "./Components/PreNavbar";
import Navbar from "./Components/Navbar"
import Banner from "./Components/Banner"
import Info from "./Components/Info"
import Products from './Components/Products';
import Carousel from './Components/Carousel'
function App() {
  return (
    <div className="App">
    <PreNavbar/>
    <Navbar/>
    <Banner/>
    <Info/>
    <Products/>
    <Carousel/>
    </div>
  );
}

export default App;
