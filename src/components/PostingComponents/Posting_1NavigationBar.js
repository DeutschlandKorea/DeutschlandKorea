import React from "react";
import styled from "styled-components/native";
import {Images} from "../../utils/Images";
import {Dimensions} from "react-native";


const Container = styled.View`
  height: ${props => props.height}px;
  justify-content: center;
  background-color: powderblue;
`
const BackButton = styled.TouchableOpacity`
  /* Positioning */
  position: absolute;
  /* Display & Box Model */
  height: 55px;
  width: 55px;
  justify-content: center;
  align-items: center;
  /* Color */
  background-color: aliceblue;
  /* Text */
  /* Other */
`
const Icon = styled.Image`
  width: 29.54px;
`
const Title = styled.View`
  position: absolute;
  height: ${props=>props.height}px;
  justify-content: center;
  align-self: center;
`
const TitleText = styled.Text`
  text-align: center;
  font-family: serif;
  font-size: 32px;
  color: #000000;
`

const Posting_1Navigation = ({height}) => {
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


export default Posting_1Navigation;