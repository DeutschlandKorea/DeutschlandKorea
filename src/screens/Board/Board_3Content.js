import React, {useState} from "react";
import styled from "styled-components/native";
import {useWindowDimensions} from "react-native";
import PropTypes from "prop-types";

const Container = styled.View`
  align-items: center;
  height: ${props => props.height}px;
  border-top-width: 1px;
  border-top-color: #000000;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
const TitleButton = styled.TouchableOpacity`
  flex-direction: row;
  top: 15px;
  width: ${props => props.width - 46}px;
  border-bottom-width: 0.5px;
  border-bottom-color: #C4C4C4;
`;
const Title = styled.Text`
  flex: 1;
  font-size: 15px;
  text-align: left;
  color: rgba(60, 60, 60, 0.50);
`
/* console.log(new Date().toLocaleString()) -> 2022. 6. 14. 오후 5:23:49 */
const Board_3Content = ({height, navigation}) => {
    const width = useWindowDimensions().width;
    const _onHandleTitleButton = props => {
        navigation.navigate("Poster",{id:props.id, title:props.title, postInfo: props.postInfo, user_name: props.user_name, uploadTime: props.uploadTime});}
    const [titles, setTitles] = useState({
        '1': {id: '1', title: 'If you\'re already familiar with JavaScript, React and React Native, then you\'ll be able to get moving with React Navigation quickly!', postInfo:"#구인구직 #IT #Berlin #start-up", user_name:"KunYoung", uploadTime:"2022. 6. 14. 오후 5:23:49"},
        '2': {id: '2', title: 'highly recommend you to gain', postInfo:"#구인구직 #IT #Berlin #start-up", user_name:"Dong woo", uploadTime:"2022. 6. 14. 오후 5:23:49"},
        '3': {id: '3', title: 'Here are some resources to help you out', postInfo:"#구인구직 #IT #Berlin #start-up", user_name:"Min woo", uploadTime:"2022. 6. 14. 오후 5:23:49"},
        '4': {id: '4', title: 'Edit TODO Item', user_name:"Min G eun", postInfo:"#구인구직 #IT #Berlin #start-up", uploadTime:"2022. 6. 14. 오후 5:23:49"},
        '5': {id: '5', title: 'Edit TODO Item', user_name:"KunYoung", postInfo:"#구인구직 #IT #Berlin #start-up", uploadTime:"2022. 6. 14. 오후 5:23:49"},
    });
    return (
        <Container height={height}>
            {Object.values(titles).map(props => (
                <TitleButton key={props.id} width={width} onPress={()=> _onHandleTitleButton(props)}>
                    <Title width={width}>• {props.title}</Title>
                </TitleButton>
            ))}
        </Container>
    )
}
/*--------------------------------------------------------------------------------------*/
TitleButton.propTypes = {
    width: PropTypes.number,
}
/*--------------------------------------------------------------------------------------*/
export default Board_3Content;


