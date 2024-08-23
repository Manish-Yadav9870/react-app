
import './App.css';
import Navbar from './components/LayOut/Navbar/Navbar';
import Sidebar from './components/LayOut/Sidebar/Sidebar';
import MainContant from './components/LayOut/Main/Main';
import Footer from './components/LayOut/Footer/Footer';
function App() {
  return (
    <>
     <div id="main_container">
        <Navbar />
       <Sidebar />
       <MainContant />
      <Footer />
    </div>

    </>
  );
}

export default App;
