import BookList from "./components/BookList";
import Navbar from "./components/NavBar";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar></Navbar>
        <BookList></BookList>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
