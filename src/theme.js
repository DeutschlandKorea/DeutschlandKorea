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
export const PosterSample = {
    ContentSample: "  게시물 내용4\n" +
        "                        //Alert.alert(date + '-' + month + '-' + year);\n" +
        "                        // You can turn it in to your desired format\n" +
        "                        For more info https://reactnativecode.com/get-current-date-react-native-android-ios-example It works for ios as well.\n" +
        "                        answered May 5, 2020 at 21:29\n" +
        "                        user avatar\n" +
        "                        4144 bronze badges\n" +
        "                        That will return d-m-y, there is no padding. –\n" +
        "                        Jan 11, 2021 at 0:47\n" +
        "                        @RobG you can change it to your desired format and can design it as well. –\n" +
        "                        Jan 11, 2021 at 5:00\n" +
        "                        To clarify, the return statement returns d-m-y, your comment says it returns dd-mm-yyyy. It's your stated format. –\n" +
        "                        RobG\n" +
        "                        Jan 11, 2021 at 6:27\n" +
        "                        Add a comment\n" +
        "                        //Alert.alert(date + '-' + month + '-' + year);\n" +
        "                        // You can turn it in to your desired format\n" +
        "                        For more info https://reactnativecode.com/get-current-date-react-native-android-ios-example It works for ios as well.\n" +
        "                        Share\n" +
        "                        Follow\n" +
        "                        answered May 5, 2020 at 21:29\n" +
        "                        user avatar\n" +
        "                        Shamiq\n" +
        "                        4144 bronze badges\n" +
        "                        That will return d-m-y, there is no padding. –\n" +
        "                        RobG\n" +
        "                        Jan 11, 2021 at 0:47\n" +
        "                        @RobG you can change it to your desired format and can design it as well. –\n" +
        "                        Shamiq\n" +
        "                        Jan 11, 2021 at 5:00\n" +
        "                        1\n" +
        "                        To clarify, the return statement returns d-m-y, your comment says it returns dd-mm-yyyy. It's your stated format. –\n" +
        "                        RobG\n" +
        "                        Jan 11, 2021 at 6:27\n" +
        "                        Add a comment\n" +
        "                        3\n" +
        "                        I think this should work;\n" +
        "                        new Date().toLocaleString()\n" +
        "                        It will return date and time formatted in your local format (usually in the below format);\n" +
        "                        \"6/22/2021, 2:59:00 PM\"\n" +
        "                        Share\n" +
        "                        Follow\n" +
        "                        edited Jul 26, 2021 at 9:00\n" +
        "                        answered Jun 22, 2021 at 9:29\n" +
        "                        user avatar\n" +
        "                        Irfan wani\n" +
        "                        3,25422 gold badges1212 silver badges2424 bronze badges\n" +
        "                        Add a comment\n" +
        "                        0\n" +
        "                        if you get currentmilisec date use + new Date() and if get current use new Date() I hope Help to you GoodLuk\n" +
        "                        answered Jan 25, 2020 at 9:26\n" +
        "                        user11313461\n" +
        "                        Add a comment\n" +
        "                        Your Answer\n" +
        "                        I think this should work;\n" +
        "\n" +
        "                        new Date().toLocaleString()\n" +
        "                        It will return date and time formatted in your local format (usually in the below format);\n" +
        "                        \"6/22/2021, 2:59:00 PM\"\n" +
        "                        Share\n" +
        "                        Follow\n" +
        "                        edited Jul 26, 2021 at 9:00\n" +
        "                        answered Jun 22, 2021 at 9:29\n" +
        "                        user avatar\n" +
        "                        Irfan wani\n" +
        "                        3,25422 gold badges1212 silver badges2424 bronze badges\n" +
        "                        Add a comment\n" +
        "                        0\n" +
        "                        if you get currentmilisec date use + new Date() and if get current use new Date() I hope Help to you GoodLuk\n" +
        "                        answered Jan 25, 2020 at 9:26\n" +
        "                        user11313461\n" +
        "                        Add a comment\n" +
        "                        Your Answer\n" +
        "                        //Alert.alert(date + '-' + month + '-' + year);\n" +
        "                        // You can turn it in to your desired format\n" +
        "                        For more info https://reactnativecode.com/get-current-date-react-native-android-ios-example It works for ios as well.\n" +
        "\n" +
        "                        Share\n" +
        "                        Follow\n" +
        "                        answered May 5, 2020 at 21:29\n" +
        "                        user avatar\n" +
        "                        Shamiq\n" +
        "                        4144 bronze badges\n" +
        "                        That will return d-m-y, there is no padding. –\n" +
        "                        RobG\n" +
        "                        Jan 11, 2021 at 0:47\n" +
        "                        @RobG you can change it to your desired format and can design it as well. –\n" +
        "                        Shamiq\n" +
        "                        Jan 11, 2021 at 5:00\n" +
        "                        1\n" +
        "                        To clarify, the return statement returns d-m-y, your comment says it returns dd-mm-yyyy. It's your stated format. –\n" +
        "                        RobG\n" +
        "                        Jan 11, 2021 at 6:27\n" +
        "                        Add a comment\n" +
        "\n" +
        "                        3\n" +
        "\n" +
        "                        I think this should work;\n" +
        "\n" +
        "                        new Date().toLocaleString()\n" +
        "                        It will return date and time formatted in your local format (usually in the below format);\n" +
        "\n" +
        "                        \"6/22/2021, 2:59:00 PM\"\n" +
        "                        Share\n" +
        "                        Follow\n" +
        "                        edited Jul 26, 2021 at 9:00\n" +
        "                        answered Jun 22, 2021 at 9:29\n" +
        "                        user avatar\n" +
        "                        Irfan wani\n" +
        "                        3,25422 gold badges1212 silver badges2424 bronze badges\n" +
        "                        Add a comment\n" +
        "\n" +
        "                        0\n" +
        "                        if you get currentmilisec date use + new Date() and if get current use new Date() I hope Help to you GoodLuk\n" +
        "                        answered Jan 25, 2020 at 9:26\n" +
        "                        user11313461\n" +
        "                        Add a comment\n" +
        "                        Your Answer"
}