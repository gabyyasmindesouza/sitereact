import './style.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav'
import Home from './Components/Paginas/Home'
import CreateStyledGlobal, { ContainerMain, TelaInteira } from './styledGlobal';

function App() {

  function reproduzVideo(){
    alert("O védo está sendo reproduzido")
  }
  
  return (
    <>
    <CreateStyledGlobal/>
      <TelaInteira>
      <Header/>
      <ContainerMain>
        <Nav/>
        <Home reproduz={reproduzVideo}/>
      </ContainerMain>
      <Footer/>
      </TelaInteira>
    </>
  );
}

export default App;
