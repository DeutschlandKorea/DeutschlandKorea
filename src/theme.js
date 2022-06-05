import {Dimensions, StatusBar} from "react-native";
/*--------------------------------------------------------------------------------------*/
const colors = {
    white: '#D9D9D9',
}
const displays = {
    Board_1NavigationBar: '51',
    Board_2Title: '80',
    Board_3Content: Dimensions.get('window').height-StatusBar.currentHeight-51-80-83,
    Board_4UnderBarComponent: '83',

    Poster_1Navigation: '51',
    Poster_2Title: '41',
    Poster_3Information: '76',
    Poster_4Content: Dimensions.get('window').height-StatusBar.currentHeight-51-41-76-175,
    Poster_5Comment: '175',
}
/*--------------------------------------------------------------------------------------*/
export const theme = {
    background: colors.white,
}
export const display = {
    Board_1NavigationBar: displays.Board_1NavigationBar,
    Board_2Title: displays.Board_2Title,
    Board_3Content: displays.Board_3Content,
    Board_4UnderBarComponent: displays.Board_4UnderBarComponent,

    Poster_1Navigation: displays.Poster_1Navigation,
    Poster_2Title: displays.Poster_2Title,
    Poster_3Information: displays.Poster_3Information,
    Poster_4Content: displays.Poster_4Content,
    Poster_5Comment: displays.Poster_5Comment,
}

