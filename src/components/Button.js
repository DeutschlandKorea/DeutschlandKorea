import styled from "styled-components/native";
import PropTypes from "prop-types";
/*--------------------------------------------------------------------------------------*/
export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-content: center;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  border-radius: 6px;
  border: 2px solid #000000;
  background-color: #000000;
`
export const ButtonTitle = styled.Text`
  text-align: center;
  font-family: serif;
  font-size: ${props => props.fontSize}px;
  color: #ffffff;
`
/*--------------------------------------------------------------------------------------*/
Button.defaultProps = {
    height: 54,
    width: 90,
}
ButtonTitle.defaultProps = {
    fontSize: 20,
}
/*--------------------------------------------------------------------------------------*/
Button.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
}
ButtonTitle.propTypes = {
    fontSize: PropTypes.number,
}

/*--------------------------------------------------------------------------------------*/
export const IconButton = styled.TouchableOpacity`
  position: absolute;
  justify-content: center;
  align-items: center;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`
export const Icon = styled.Image`
  height: 22px;
  width: 41px;
`
/*--------------------------------------------------------------------------------------*/
IconButton.defaultProps = {
    height: 55,
    width: 81,
}
/*--------------------------------------------------------------------------------------*/
IconButton.propTypes = {
    height: PropTypes.number,
    width:  PropTypes.number,
}
/*--------------------------------------------------------------------------------------*/