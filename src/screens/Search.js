import React from "react";
import styled from "styled-components/native";
import {StatusBar, useWindowDimensions} from "react-native";

const Container = styled.SafeAreaView`
  flex: 1;
`
const Search_1Title = styled.Text`
  margin-top: 32px;
  padding-left: 16px;
  width: ${props=> props.width}px;
  height: 40px;
  font-size: 36px;
  align-items: center;
`
const SearchInput = styled.TextInput`
  margin-top: 32px;
  padding-left: 17px;
  width: ${props=> props.width}px;
  height: 52px;
  align-self: center;
  border: 2px solid #000000;
  color: rgba(0, 0, 0, 0.50);
`

const Search = () =>{
    const width = useWindowDimensions().width;

    return(
        <Container>
            <StatusBar/>
            <Search_1Title width={width}>Search</Search_1Title>
            <SearchInput  placeholder={"Search"} width={width-32}/>
        </Container>
    )
}
export default Search;