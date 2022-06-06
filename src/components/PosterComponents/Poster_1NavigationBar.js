import React from "react";
import styled from "styled-components/native";
import {Images} from "../../utils/Images";
import {Dimensions} from "react-native";
/*--------------------------------------------------------------------------------------*/
const Container = styled.View`
  justify-content: center;
  height: ${props => props.height}px;
  background-color: powderblue;
`
/*--------------------------------------------------------------------------------------*/
const BackButton = styled.TouchableOpacity`
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 55px;
  width: 55px;
  background-color: aliceblue;
`
const Icon = styled.Image`
  width: 29.54px;
`
/*--------------------------------------------------------------------------------------*/
const Title = styled.View`
  position: absolute;
  justify-content: center;
  align-self: center;
  height: ${props=>props.height}px;
`
const TitleText = styled.Text`
  text-align: center;
  font-family: serif;
  font-size: 32px;
  color: #000000;
`
/*--------------------------------------------------------------------------------------*/
const Poster_1Navigation = ({height}) => {
    const width = Dimensions.get('window').width;
    return (
        <Container height={height}>
            <Title height={height} width={width}>
                <TitleText>게시판 제목</TitleText>
            </Title>
            <BackButton>
                <Icon source={Images.BackIcon} resizeMode="contain"/>
            </BackButton>
        </Container>
    )
}
export default Poster_1Navigation;