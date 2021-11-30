import BookList from "./components/BookList";
import Navbar from "./components/NavBar";
import ThemeToggle from "./components/ThemeToogle";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar></Navbar>
        <BookList></BookList>
        <ThemeToggle></ThemeToggle>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
