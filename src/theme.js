import {Dimensions, Platform, StatusBar} from "react-native";
import {getStatusBarHeight} from "react-native-status-bar-height";

const colors = {
    white: '#FFFFFF',
    black: '#000000',
    white_1: '#E5E5E5',

}
const findOS = () => {
    if(Platform.OS === 'web') return 0;
    else if(Platform.OS === 'android') return (StatusBar.currentHeight);
    else if(Platform.OS === 'ios') return getStatusBarHeight(true);
    else return 0;
}
const panelHeights = {
    Board_1NavigationBar: 51, Board_2Title: 80,
    Board_3Content: Dimensions.get('window').height-findOS()-51-80-83,
    Board_4UnderBarComponent: 83,

    Poster_1Navigation: 51, Poster_2Title: 41, Poster_3Information: 76,
    Poster_4Content: Dimensions.get('window').height-findOS()-41-76-175-31-81,
    Poster_5Comment: 175, Poster_6Comment_Input: 31, Poster_7UnderBar: 81,

    Posting_2TextInput: 45, Posting_3ContentTextInput: 313, Posting_4Button: '29', Posting_5ImageInput: 71,

    HomeScreen_1Main: 200, HomeScreen_2ButtonContainer:206, HomeScreen_4Texting:150,
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
    Posting_3ContentTextInput: panelHeights.Posting_3ContentTextInput,
    Posting_4Button: panelHeights.Posting_4Button,
    Posting_5ImageInput: panelHeights.Posting_5ImageInput,

    HomeScreen_1Main: panelHeights.HomeScreen_1Main,
    HomeScreen_2ButtonContainer: panelHeights.HomeScreen_2ButtonContainer,
    HomeScreen_3Content: panelHeights.HomeScreen_3Content,
    HomeScreen_4Texting: panelHeights.HomeScreen_4Texting,
}
export const buttonBoxModel = {
    Board_1NavigationBar: panelHeights.Board_1NavigationBar,

    Poster_1Navigation: panelHeights.Poster_1Navigation,

    Posting_1Navigation: panelHeights.Posting_1Navigation,
}
export const PosterSample = {
    ContentSample: "나는 수 십년 동안 남의 책을 읽기만 해왔다. 한 때는 소설을 써보고도 싶었지만, 이야기를 꾸며내는 재주가 없어서 포기했다. 새로운 이야기를 만들어낸다는 것은 나의 재주로서는 역부족이었다. 꾸며내지를 못하겠다. 그러나 수필은 자기가 느낀 것을 사실 그대로 쓰면 된다는 생각에, 남의 얘기를 꾸미지는 못하지만 내 얘기야 옮길 수 있겠지, 이런 생각이 들었다. 이건 결코 소설가를 거짓 꾸밈 쟁이로, 수필가를 별 재주도 없이 자기 사생활이나 쓰는 사람으로 비하하여 정의내림은 아니다. 다만, 수필이 뭔지도 모르고 덤볐다는 것시인이 호수에 돌을 던지면, 그 돌은 바로 시가 된다. 돌은 시이다. 시를 감상하는 것은 돌이 만들어내는 물결을 바라보는 것이리라. 시인이 그 물결까지 그려주면 시를 읽는 독자는 너무 재미없다. 계모에게 천대받던 콩쥐가 시집가서 아들 딸 낳고 이제 돌멩이가 첨벙 빠져서 물결이 일어나는 호수. 그 물결의 모양을 그려내는 것이 수필이 아닐까? 제일 가장자리의 희미한 물결에서부터 안으로 안으로 자세히 섬세하게 그려 그림 그리기를 좋아하는 나내가 수필을 쓰그림 그리기를 좋아하는 나는 수필에 매력을 느낀다.시인이 호수에 돌을 던지면, 그 돌은 바로 시가 된다. 돌은 시이다. 시를 감상하는 것은 돌이 만들어내는 물결을 바라보는 것이리라. 시인이 그 물결까지 그려주면 시를 읽는 독자는 너무 재미없다. 계모에게 천대받던 콩쥐가 시집가서 아들 딸 낳고 잘 살았다그러나, 요즈음수필이 뭔지도 모르고 덤볐다는 것을 깨닫는 데는 그리긴 시간이 필요하지 않았다. 글 몇 토막 완성도 채 못하고 수필 쓰기의 어려움에 부딪혔다. 평소에 이것 저것 생각나는 대로 글을 한 토막 쓰고는 그것이 수필인 줄 알고 있었다.  여러 매체를 통하여 많은 사람들의 수필을 읽고 계속 달라붙는 의문부호를 떨쳐버릴 수가 없다. 이제 나는 수필이 무엇인지를 새롭게 배워야 할 것 같다. 로 끝나는 이야기가 아니라, 시집을 갔는데 이러고 저러고 한참 시집살이의 이야기로 또 이어지는형상이 되고 만다. 그래서 시인은 그냥 돌멩이 하나 호수에 던지는 것으로 시를 쓰면 될 것이다.  유화보다는 투명 수채화를 더 좋아하는 나는 수채화 같은 수필을 좋아한다. 밑그림의 흔적을 숨길 수 없는 수채화처럼 수필에도 쓰는 이의 숨김없는 삶과 생각들이 그대로 드러난다. 는 까 다만, 내가 말할 수 있는 것은 나의 수필에 대한 것 뿐이다. 가슴 속에 담겨있던 내 생각들을 그대로 글자로 엮어놓은 것이 나의 수필이다. 닭은 내 자신의 일이니 설명할 수 있으나, 정작 누가 내게 수필이 무엇이냐고 묻는다면 나는 순간 말더듬이처럼 더듬거릴 수 밖에 없다. \"수필 은 붓 가 는 대로 쓰 는 게 수 필…\"   빠진 돌멩이는 어떻게 됐을까? 용왕님의 머리에 맞아서 용왕님이 진노를 했던지, 열애중인 물고기를 습격했던지, 그건 소설가의 몫이다. 소설가는 여기서 별의별 얘기를 다 꾸며대는 것이리라. 는 수필에 매력을 느낀다. 유화보다는 투명 수채화를 더 좋아하는 나는 수채화 같은 수필을 좋아한다. 밑그림의 흔적을 숨길 수 없는 수채화처럼 수필에도 쓰는 이의 숨김없는 삶과 생각들이 그대로 드러난다. 내는 것이 수필의 몫이다. 물결을 좁혀가다보면 가장 가운데 돌멩이 하나 빠진 흔적까지 다다를 것이고 맑은 물 속에서 그 돌멩이를 들여다 볼 수 있도록 그리는 것이 바로 수필이리라.  잘 살았다로 끝나는 이야기가 아니라, 시집을 갔는데 이러고 저러고 한참 시집살이의 이야기로 또 이어지는형상이 되고 만다. 그래서 시인은 그냥 돌멩이 하나 호수에 던지는 것으로 시를 쓰면 될 것이다.  을 깨닫는 데는 그리긴  그러나, 요즈음 여러 매체를 통하여 많은 사람들의 수필을 읽고 계속 달라붙는 의문부호를 떨쳐버릴 수가 없다. 이제 나는 수필이 무엇인지를 새롭게 배워야 할 것 같다.  시간이 필요하지 않았다. 글 몇 토막 완성도 채 못하고 수필 쓰기의 어려움에 부딪혔다. 평소에 이것 저것 생각나는 대로 글을 한 토막 쓰고는 그것이 수필인 줄 알고 있었다.  나의 생각들을 전혀 꾸밈없이 진실되게 그려내는 일이 내게더 적합하다는 뜻이다. 그림 그리기를 좋아하는 내가, 나의 생각들을 그대로 그림처럼 그려놓는 일은 할 수 있겠다는 나 개인의 생각이다. ",
    ContentSample2: "수필이 뭔지도 모르고 덤볐다는 것을 깨닫는 데는 그리긴 시간이 필요하지 않았다. 글 몇 토막 완성도 채 못하고 수필 쓰기의 어려움에 부딪혔다. 평소에 이것 저것 생각나는 대로 글을 한 토막 쓰고는 그것이 수필인 줄 알고 있었다. ",
    ContentSample3: "데이터를 위해서 두칸씩 건너 뛸 필요가 있었다. 그 당시에는 백엔드 쪽에서 객체 하나로 합치는 것이 불가능하다고 그런 줄 알았는데 나중에 수정했다. 그리고 아래에",
    ContentSample4: "빠진 돌멩이는 어떻게 됐을까? 용왕님의 머리에 맞아서 용왕님이 진노를 했던지, 열애중인 물고기를 습격했던지, 그건 소설가의 몫이다. 소설가는 여기서 별의별 얘기를 다 꾸며대는 것이리라. ",
    ContentSample5: "'남의 글읽기'의 오랜 시간들을 '나의 이야기 하기'로 바꾼 과정이 나의 수필 쓰기이다. 나이 만큼의 이야기가 내 안에 쌓여있는 것일까. 이제는 수필을 써도 될만한 나이가 된 것일까… ",

}