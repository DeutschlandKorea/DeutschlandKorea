import React, {useEffect, useState} from "react";
import styled from "styled-components/native";
import {useWindowDimensions} from "react-native";
import PropTypes from "prop-types";
import {PosterSample} from "../../theme";

const Container = styled.ScrollView`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  border-top-width: 1px;
  border-top-color: #000000;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
const TitleButton = styled.TouchableOpacity`
  align-self: center;

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
const Board_3List = ({height, navigation, route}) => {
    const width = useWindowDimensions().width;
    const _onHandleTitleButton = props => {
        navigation.navigate("Poster", {
            id: props.id,
            title: props.title,
            postInfo: props.postInfo,
            user_name: props.user_name,
            content: props.content,
            uploadTime: props.uploadTime
        });
    }
    const [titles, setTitles] = useState({
        '1': {
            id: '1',
            title: 'If you\'re already familiar with JavaScript, React and React Native, then you\'ll be able to get moving with React Navigation quickly!',
            postInfo: "#구인구직 #IT #Berlin #start-up",
            user_name: "KunYoung",
            content: PosterSample.ContentSample,
            uploadTime: "2022. 6. 14. 오후 5:23:49"
        },
        '2': {
            id: '2',
            title: 'highly recommend you to gain',
            postInfo: "#구인구직 #IT #Berlin #start-up",
            user_name: "Dong woo",
            content: PosterSample.ContentSample2,
            uploadTime: "2022. 6. 14. 오후 5:23:49"
        },
        '3': {
            id: '3',
            title: 'Here are some resources to help you out',
            postInfo: "#구인구직 #IT #Berlin #start-up",
            user_name: "Min woo",
            content: PosterSample.ContentSample3,
            uploadTime: "2022. 6. 14. 오후 5:23:49"
        },
        '4': {
            id: '4',
            title: 'Edit TODO Item',
            user_name: "Min G eun",
            postInfo: "#구인구직 #IT #Berlin #start-up",
            content: PosterSample.ContentSample4,
            uploadTime: "2022. 6. 14. 오후 5:23:49"
        },
        '5': {
            id: '5',
            title: 'Edit TODO Item',
            user_name: "KunYoung",
            postInfo: "#구인구직 #IT #Berlin #start-up",
            content: PosterSample.ContentSample5,
            uploadTime: "2022. 6. 14. 오후 5:23:49"
        },
    });
    useEffect(() => {
        if (route.params != null) {
            const ID = route.params.props.id;
            const newTaskObject = {
                [ID]: {
                    id: ID,
                    title: route.params.props.title,
                    postInfo: route.params.props.postInfo,
                    user_name: route.params.props.user_name,
                    content: route.params.props.content,
                    uploadTime: route.params.props.uploadTime,
                }
            }
            setTitles({...titles, ...newTaskObject});
        }

    }, [route.params])
    return (
        <Container height={height} width={width} contentContainerStyle={{ flexGrow: 1 }}>
            {Object.values(titles).map(props => (
                <TitleButton key={props.id} width={width} onPress={() => _onHandleTitleButton(props)}>
                    <Title width={width}>• {props.title}</Title>
                </TitleButton>
            ))}
        </Container>
    )
}
export default Board_3List;
/*--------------------------------------------------------------------------------------*/
TitleButton.propTypes = {
    width: PropTypes.number,
}