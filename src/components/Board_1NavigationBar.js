import React from "react";
import styled from "styled-components/native";
import {Images} from "../utils/Images";

const Container = styled.View`
  /* Display & Box Model */
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  height: ${props => props.height}px;
  /* Color */
  background-color: gray;
`
const ListIcon = styled.TouchableOpacity`
  height: 51px;
  justify-content: center;
`
const Icon = styled.Image`
  height: 22px;
  width: 41px;
  margin: 10px;
`
const Title = styled.View`
  justify-self: center;
  flex: 1;
  align-self: center;
`
const TitleText = styled.Text`
  text-align: center;
  font-size: 32px;
  letter-spacing: -0.41px;
  color: #000000;
`

const Board_1NavigationBar = ({height}) => {
    return(
        <Container height={height}>
            <ListIcon>
                <Icon source={Images.NavigationBarIcon}/>
            </ListIcon>
            <Title>
                <TitleText>앱 이름</TitleText>
            </Title>
        </Container>
    )
}
export default Board_1NavigationBar;