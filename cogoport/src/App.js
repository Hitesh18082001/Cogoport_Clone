import './App.css';
import PreNavbar from "./Components/PreNavbar";
import Navbar from "./Components/Navbar"
import Banner from "./Components/Banner"
import Info from "./Components/Info"
import Products from './Components/Products';
import Carousel from './Components/Carousel'
import Highlight from './Components/Highlight';
import Working from './Components/Working';
import Industries from './Components/Industries';
import Getstart from './Components/Getstart';
import ThumbnailImage from './Components/ThumbnailImage';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
    <PreNavbar/>
    <Navbar/>
    <Banner/>
    <Info/>
    <Products/>
    <Carousel/>
    <Highlight/>
    <Working/>
    <Industries/>
    <Getstart/>
    <ThumbnailImage/>
    <Blog/>
    <Footer/>
    </div>
  );
}

export default App;
