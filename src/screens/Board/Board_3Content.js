import React from "react";
import styled from "styled-components/native";
import {useWindowDimensions} from "react-native";
import PropTypes from "prop-types";

const Container = styled.View`
  height: ${props => props.height}px;
  border-top-width: 1px;
  border-top-color: #000000;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  align-items: center;
`
const TitleContainer = styled.View`
  top: 15px;
  height: 22px;
  width: ${props => props.width - 46}px;
  border-bottom-width: 0.5px;
  border-bottom-color: #C4C4C4;
`
const Title = styled.Text`
  font-size: 15px;
  text-align: left;
  color: rgba(60, 60, 60, 0.50);
`
const Board_3Content = ({height}) => {
    const width = useWindowDimensions().width;
    return (
        <Container height={height}>
            <TitleContainer width={width}>
                <Title>• sssssssssss sssssssssss sssssssssss sssssssss</Title>
            </TitleContainer>
            <TitleContainer width={width}>
                <Title>• 게시물 제목</Title>
            </TitleContainer>
            <TitleContainer width={width}>
                <Title>• 게시물 제목</Title>
            </TitleContainer>
            <TitleContainer width={width}>
                <Title>• 게시물 제목</Title>
            </TitleContainer>
            <TitleContainer width={width}>
                <Title>• take out coffee is good</Title>
            </TitleContainer>
            <TitleContainer width={width}>
                <Title>• 제목 sample</Title>
            </TitleContainer>
        </Container>
    )
}
/*--------------------------------------------------------------------------------------*/
TitleContainer.propTypes = {
    width: PropTypes.number,
}
/*--------------------------------------------------------------------------------------*/

export default Board_3Content;


