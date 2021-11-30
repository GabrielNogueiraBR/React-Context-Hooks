import BookList from "./components/BookList";
import Navbar from "./components/NavBar";
import ThemeToggle from "./components/ThemeToogle";
import AuthContextProvider from "./contexts/AuthContext";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar></Navbar>
          <BookList></BookList>
          <ThemeToggle></ThemeToggle>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
