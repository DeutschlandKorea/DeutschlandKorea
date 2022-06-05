import {Dimensions} from "react-native";

const colors = {
    white: '#D9D9D9',
}

const displays = {
    Board_1NavigationBar: '51',
    Board_2Title: '44',
    Board_3Content: Dimensions.get('window').height-51-44-83,
    Board_4UnderBarComponent: '83',
}

export const theme = {
    background: colors.white,
}

export const display = {
    Board_1NavigationBar: displays.Board_1NavigationBar,
    Board_2Title: displays.Board_2Title,
    Board_3Content: displays.Board_3Content,
    Board_4UnderBarComponent: displays.Board_4UnderBarComponent,
}