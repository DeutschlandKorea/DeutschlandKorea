import {Dimensions, Platform, StatusBar} from "react-native";
import {getStatusBarHeight} from "react-native-status-bar-height";

const colors = {
    white: '#FFFFFF',
    black: '#000000',
    white_1: '#E5E5E5',

}
const findOS = () => {
    if(Platform.OS === 'web') return 0;
    else if(Platform.OS === 'android') return StatusBar.currentHeight;
    else if(Platform.OS === 'ios') return getStatusBarHeight(true);
    else return 0;
}
const panelHeights = {
    Board_1NavigationBar: 51, Board_2Title: 80,
    Board_3Content: Dimensions.get('window').height-findOS()-51-80-83,
    Board_4UnderBarComponent: 83,

    Poster_1Navigation: 51, Poster_2Title: 41, Poster_3Information: 76,
    Poster_4Content: Dimensions.get('window').height-findOS()-41-76-175-31-81, /*------issue--useHeaderHeight -------*/
    Poster_5Comment: 175, Poster_6Comment_Input: 31, Poster_7UnderBar: 81,

    Posting_1Navigation: '51', Posting_2TextInput: '41',
}
/*--------------------------------------------------------------------------------------*/
export const theme = {
    background: colors.white,

    // Board
    Board_1NavigationBarBackground: colors.white,


}
export const panelHeight = {
    Board_1NavigationBar: panelHeights.Board_1NavigationBar,
    Board_2Title: panelHeights.Board_2Title,
    Board_3Content: panelHeights.Board_3Content,
    Board_4UnderBarComponent: panelHeights.Board_4UnderBarComponent,

    Poster_1Navigation: panelHeights.Poster_1Navigation,
    Poster_2Title: panelHeights.Poster_2Title,
    Poster_3Information: panelHeights.Poster_3Information,
    Poster_4Content: panelHeights.Poster_4Content,
    Poster_5Comment: panelHeights.Poster_5Comment,
    Poster_6Comment_Input: panelHeights.Poster_6Comment_Input,
    Poster_7UnderBar: panelHeights.Poster_7UnderBar,

    Posting_1Navigation: panelHeights.Posting_1Navigation,
    Posting_2TextInput: panelHeights.Posting_2TextInput,
}
export const buttonBoxModel = {
    Board_1NavigationBar: panelHeights.Board_1NavigationBar,

    Poster_1Navigation: panelHeights.Poster_1Navigation,

    Posting_1Navigation: panelHeights.Posting_1Navigation,
}