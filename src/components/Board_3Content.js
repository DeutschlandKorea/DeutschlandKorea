import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  height: ${props => props.height}px;
  border: 1px solid #000000;
  background-color: aliceblue;
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
  font-size: 15px;
  color: rgba(60, 60, 60, 0.50);
`
const Group = styled.View`
  height: 22px;
  width: 329px;
`

const Board_3Content = ({height}) => {
    return (
        <Container height={height}>
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

export default Board_3Content;


