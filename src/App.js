import React from "react";
import Navigation from "./navigations/Navigation";
import {ThemeProvider} from "styled-components";
import {theme} from "./theme";
import {AuthStackNavigator} from "./navigations/AuthStackNavigator";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
           {/*<Navigation/>*/}
           <AuthStackNavigator/>
        </ThemeProvider>
    )
}

export default App;