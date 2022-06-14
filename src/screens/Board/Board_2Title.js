import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Container = styled.View`
  justify-content: flex-end;
  height: ${props => props.height}px;
`
const TitleText = styled.Text`
  margin: 0 2px 0 18px;
  text-align: left;
  font-size: 36px;
  color: #000000;
`
const Board_2Title = ({height, title}) => {
    return (
        <Container height={height}>
                <TitleText>{title}</TitleText>
        </Container>
    )
}
export default Board_2Title;

Board_2Title.defaultProps = {
    height: 80,
    title: '벼룩시장 게시판 ',
}
Board_2Title.propTypes = {
    height: PropTypes.number,
    title: PropTypes.any,
}