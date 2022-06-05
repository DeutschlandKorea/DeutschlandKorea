import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  height: 554px;
  border: 1px solid #000000;
`
const Ellipse= styled.View`
  height: 3px;
  width: 3px;
`
const Group51 = styled.View`
  height: 22px;
  width: 320px;
`
const Line = styled.View`
  height: 0;
  width: 320px;
  border: 1px solid rgba(60, 60, 60, 0.30);
`
const ContentTitle = styled.Text`
  max-width: 320px;
  text-align: left;
  vertical-align: top;
  font-size: 15px;
  color: rgba(60, 60, 60, 0.50);
`
const Group = styled.View`
  height: 22px;
  width: 329px;
`

const Board_Content = () => {
    return (
        <Container>
            <Group>
                <Ellipse/>
                <Group51>
                    <Line/>
                    <ContentTitle>• 게시물 제목</ContentTitle>
                </Group51>
            </Group>
            <Group>
                <Ellipse/>
                <Group51>
                    <Line/>
                    <ContentTitle>• 게시물 제목</ContentTitle>
                </Group51>
            </Group>
            <Group>
                <Ellipse/>
                <Group51>
                    <Line/>
                    <ContentTitle>• 게시물 제목</ContentTitle>
                </Group51>
            </Group>
            <Group>
                <Ellipse/>
                <Group51>
                    <Line/>
                    <ContentTitle>• 게시물 제목</ContentTitle>
                </Group51>
            </Group>
            <Group>
                <Ellipse/>
                <Group51>
                    <Line/>
                    <ContentTitle>• 게시물 제목</ContentTitle>
                </Group51>
            </Group>
            <Group>
                <Ellipse/>
                <Group51>
                    <Line/>
                    <ContentTitle>• 게시물 제목</ContentTitle>
                </Group51>
            </Group>
        </Container>
    )
}


export default Board_Content;









const RegisterComponent: React.VFC = () => {
    return (
        <Register>
            <게시판이름Text>벼룩시장 게시판</게시판이름Text>
        </Register>
    )
}

const Register = styled.View`
  height: 44px;
  width: 210px;
  background-color: #ffffff;
`
const 게시판이름Text = styled.Text`
  text-align: left;
  vertical-align: middle;
  font-family: Comfortaa;
  font-weight: regular;
  font-size: 36px;
  letter-spacing: -1.5%;
  line-height: auto;
  color: #000000;
`



