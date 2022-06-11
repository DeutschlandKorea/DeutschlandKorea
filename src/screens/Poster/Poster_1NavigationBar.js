import React from "react";
import styled from "styled-components/native";
import {Images} from "../../utils/Images";
import {Dimensions} from "react-native";
/*--------------------------------------------------------------------------------------*/
const Container = styled.View`
  justify-content: center;
  height: ${props => props.height}px;
`
/*--------------------------------------------------------------------------------------*/
const BackButton = styled.TouchableOpacity`
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 55px;
  width: 55px;
`
const Icon = styled.Image`
  width: 29.54px;
`
/*--------------------------------------------------------------------------------------*/
const TitleContainer = styled.View`
  position: absolute;
  justify-content: center;
  align-self: center;
  height: ${props=>props.height}px;
`
const Title = styled.Text`
  text-align: center;
  font-size: 32px;
  color: #000000;
`
/*--------------------------------------------------------------------------------------*/
const Poster_1Navigation = ({height}) => {
    const width = Dimensions.get('window').width;
    return (
        <Container height={height}>
            <TitleContainer height={height} width={width}>
                <Title>게시판 제목</Title>
            </TitleContainer>
            <BackButton>
                <Icon source={Images.BackIcon} resizeMode="contain"/>
            </BackButton>
        </Container>
    )
}
export default Poster_1Navigation;