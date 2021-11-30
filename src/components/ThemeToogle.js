import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
    return(
        <ThemeContext.Consumer>
            {(context)=>{
                return(
                    <button onClick={context.toggleTheme}>Toggle the theme</button>
                );
            }}
        </ThemeContext.Consumer>
    );
}

export default ThemeToggle;