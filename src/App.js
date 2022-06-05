import React from "react";
import {ThemeProvider} from "@react-navigation/native";
import {theme} from "./theme";
import {Text} from "react-native";

const App = () => {
    return(
        <ThemeProvider theme={theme}>
        </ThemeProvider>
    );
}

export default App;