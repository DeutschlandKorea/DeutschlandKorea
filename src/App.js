import React from "react";
import Navigation from "./navigations/Navigation";
import {ThemeProvider} from "styled-components";
import {theme} from "./theme";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
           <Navigation/>
        </ThemeProvider>
    )
}

export default App;