import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
    state = {
        isLightTheme: true,
        light: {syntax: '#555', ui: '#ddd', bg: '#eee'},
        dark: {syntax: '#ddd', ui: '#333', bg: '#555'}
    }
    render() { 
        return (
            <ThemeContext.Provider value={{...this.state}}>
                {thos.props.children}
            </ThemeContext.Provider>    
        );
    }
}
 
export default ThemeContextProvider;