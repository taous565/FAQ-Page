import './App.css';
import Header from './components/Header'
import Faqpage from './components/Faqpage'


function App() {
  return (
    <div className="App">
      {/* je recupere le contenue de mon header ici je fais appelle au header dans mon app */}
    <Header /> 
    {/* je fais appelle a ma fonction  faqpage dana mon app pour afficher ma foire de question  */}
    <Faqpage />
    </div>
)}

   
      
  


export default App;
