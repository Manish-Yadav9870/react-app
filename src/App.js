
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import MainContant from './components/Main/Main';
import Footer from './components/Footer/Footer';
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
