import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
/*--------------------------------------------------------------------------------------*/
const Container = styled.View`
  justify-content: center;
  height: ${props => props.height}px;
`
/*--------------------------------------------------------------------------------------*/
const TitleContainer = styled.View`
  height: 23px;
  margin-left: 10px;
`
const Title = styled.Text`
  text-align: left;
  font-size: 20px;
  color: #000000;
`
/*--------------------------------------------------------------------------------------*/
const Poster_2Title = ({height}) => {
    return (
        <Container height={height}>
            <TitleContainer>
                <Title>게시물 제목</Title>
            </TitleContainer>
        </Container>
    )
}
export default Poster_2Title;
/*--------------------------------------------------------------------------------------*/
Poster_2Title.defaultProps = {
    height: 41,
}
Poster_2Title.propTypes = {
    height: PropTypes.number,
}
