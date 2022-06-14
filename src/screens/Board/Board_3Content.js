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
const TitleContainer = styled.View`
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
const Board_3Content = ({height}) => {
    const width = useWindowDimensions().width;

    const [title, setTitles] = useState({
        '1': {id: '1', text: 'If you\'re already familiar with JavaScript, React and React Native, then you\'ll be able to get moving with React Navigation quickly!'},
        '2': {id: '2', text: 'highly recommend you to gain'},
        '3': {id: '3', text: 'Here are some resources to help you out'},
        '4': {id: '4', text: 'Edit TODO Item'},
        '5': {id: '5', text: 'Edit TODO Item'},
    });

    return (
        <Container height={height}>
            {Object.values(title).map(props => (
                <TitleContainer key={props.id} width={width}>
                    <Title width={width}>• {props.text}</Title>
                </TitleContainer>
            ))}
        </Container>
    )
}
/*--------------------------------------------------------------------------------------*/
TitleContainer.propTypes = {
    width: PropTypes.number,
}
/*--------------------------------------------------------------------------------------*/
export default Board_3Content;


