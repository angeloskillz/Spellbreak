import React from "react"
import styled from "styled-components"
import 'animate.css/animate.min.css'

const Class = styled.div`
  position: relative;
  width: 280px;
  height: 290px;
  border-radius: 26px;
  background: #1a2327;
  border: 2px solid transparent;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  margin-left: 16px;
  margin-top: 100px;
  outline: none;
  transition: .8s cubic-bezier(.2,.8,.2,1);
    box-sizing: border-box;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    
`
const ImgModel = styled.img`
  width: auto;
height: 350px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: -116px;
`
const Title = styled.h1`
  font-family: "QuadratSerial";
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: #daa54e;
  text-transform: uppercase;
  `

const Model = props => (
  <div tabIndex='0' style={{ userSelect: 'none', outline: 'none'}}>
        <Class style={{marginTop:'135px'}}>
            <ImgModel src={props.image}/>
            <Title>{props.title}</Title>
        </Class>
        </div>
)

export default Model