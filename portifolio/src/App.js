import './App.css';
import Article from './components/article';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import Section from './components/section';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Section/>
      <Article/>
    </div>
  );
}

export default App;
