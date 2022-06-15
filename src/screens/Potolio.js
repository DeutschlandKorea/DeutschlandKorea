import React from "react";
import styled from "styled-components/native";
import {StatusBar} from "react-native";
import {Button, ButtonTitle} from "../components/Button";

const Container = styled.SafeAreaView`
  flex:1;
  align-self: center;
  margin-top: 23px;
`
const Port_TextInput = styled.TextInput`
  width: ${props => props.width}px;
  height: ${props => props.height}px;

  padding-left: 5px;
  background-color: rgba(0, 0, 0, 0.10);
  border: 1px solid #000000;
`
const Potolio_2UpperContainer = styled.View`
  flex-direction: row;
  margin-bottom: 3px;
`
const Potolio_3DetailContainer = styled.View`
  margin-left: 16px;
`
const Potolio_4DetailTailContainer = styled.View`
  flex-direction: row;
  width: 196px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 13px;
`
const DetailText = styled.Text`
  width: 47px;
`
const Potolio_5ButtonContainer = styled.View`
  width: ${props => props.width}px;
  flex-direction: row;
  margin-top: 19px;
  justify-content: space-between;
`
const ContentContainer = styled.View`
  margin-top: 3px;
`
const Potolio = () => {
    return(
        <Container>
            <StatusBar/>
            <Potolio_2UpperContainer>

                <Port_TextInput width={135} height={156}  placeholder={"사진"}/>

                <Potolio_3DetailContainer>
                    <Potolio_4DetailTailContainer>
                        <DetailText>이름</DetailText>
                        <Port_TextInput width={149} height={35} placeholder={"내용"}/>
                    </Potolio_4DetailTailContainer>

                    <Potolio_4DetailTailContainer>
                        <DetailText>이름</DetailText>
                        <Port_TextInput width={149} height={35} placeholder={"내용"}/>
                    </Potolio_4DetailTailContainer>

                    <Potolio_4DetailTailContainer>
                        <DetailText>이름</DetailText>
                        <Port_TextInput width={149} height={35} placeholder={"내용"}/>
                    </Potolio_4DetailTailContainer>
                </Potolio_3DetailContainer>

            </Potolio_2UpperContainer>

            <Button height={29} width={86}>
                <ButtonTitle fontSize={13}>이미지 업로드</ButtonTitle>
            </Button>

            <ContentContainer>
                <Port_TextInput width={347} height={213} placeholder={"내용"}/>
            </ContentContainer>

            <Potolio_5ButtonContainer width={183}>
                <Button height={29} width={86}>
                    <ButtonTitle fontSize={13}>등록하기</ButtonTitle>
                </Button>

                <Button height={29} width={86}>
                    <ButtonTitle fontSize={13}>취소하기</ButtonTitle>
                </Button>
            </Potolio_5ButtonContainer>
        </Container>
    )
}

export default Potolio;



