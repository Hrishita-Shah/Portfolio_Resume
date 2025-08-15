import './App.css';
import PortfolioContainer from './PortfolioContainer/PortfolioContainer';
import Footer from './PortfolioContainer/Footer/Footer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      
      <ToastContainer/>      
      <PortfolioContainer/>
      <Footer/>
    </div>
    

  );
}

export default App;
