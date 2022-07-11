import AboutAuthor from "./components/AboutAuthor";
import AboutBook from "./components/AboutBook";
import AboutBookContainer from "./components/AboutBookContainer/AboutBookContainer";
import Footer from "./components/Footer";
import GetBook from "./components/GetBook/GetBook";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Section from "./components/Section";
import CenterLine from "./UI/CenterLine";
import { Provider } from 'react-redux';
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Nav />
        <Main />
        <Section>
            <CenterLine>The Author’s Book</CenterLine>
            <AboutBookContainer />
        </Section>
        <Section bgColor='light'>
            <AboutAuthor />
        </Section>
        <Section>Text</Section>
        <Section bgColor='deep'>
            <GetBook />
        </Section>
        <Section>Text</Section>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
