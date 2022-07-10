import AboutAuthor from "./components/AboutAuthor";
import Footer from "./components/Footer";
import GetBook from "./components/GetBook/GetBook";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Section>Text</Section>
      <Section bgColor='light'>
          <AboutAuthor />
      </Section>
      <Section>Text</Section>
      <Section bgColor='deep'>
					<GetBook />
			</Section>
      <Footer />
    </div>
  );
}

export default App;
