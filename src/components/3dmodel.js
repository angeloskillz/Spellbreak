import React from "react"
import styled from "styled-components"
import ReactModal from "react-modal"
import Tables from 'react-bootstrap/Table';
import 'animate.css/animate.min.css'

const Class = styled.div`
  position: relative;
  width: 280px;
  height: 290px;
  border-radius: 26px;
  background: #1a2327;
  border: 2px solid #daa54e;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  margin-left: 16px;
  margin-top: 16px;
  cursor: pointer;
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
    &:hover{
transform: scale(1.1);
transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
box-shadow: 0px 10px 25px 1px rgba(218,165,78,0.3);
z-index: 1;
  }
`
const ImgModel = styled.img`
  width: 150px;
height: 390px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  bottom:0;
`
const Title = styled.h1`
  font-family: "QuadratSerial";
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
`
const Icon1 = styled.img`
  position: absolute;
  width: 54px;
  height: 54px;
  border-radius: 50px;
  border: 2px solid #daa54e;
  margin-left: 109px;
  margin-top: 66px;
`
const Icon2 = styled.img`
  position: absolute;
  width: 54px;
  height: 54px;
  border-radius: 50px;
  border: 2px solid #daa54e;
  margin-left: 109px;
  margin-top: 66px;
  filter: blur(6px);
`
const Icon3 = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 50px;
  border: 2px solid #daa54e;
  margin-top: 16px;
`

const Description = styled.h2`
  font-family: Roboto;
  font-weight: 800;
  font-size: 16px;
  text-align: center;
  color: #daa54e;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
`

const SubDescription = styled.h2`
  font-family: Roboto;
  font-weight: normal;
  font-style: italic;
  font-size: 14px;
  text-align: center;
  color: #fff;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
`
const Stats = styled.h3`
  font-family: Roboto;
  font-weight: normal;
  font-style: italic;
  font-size: 14px;
  text-align: center;
  color: #fff;
  margin-bottom: 6px;
  padding-left: 16px;
  padding-right: 16px;
`

const Model = props => (
        <div>
        <Class>
            <ImgModel src={require("../images/Keymaster.png")} />
            <Title>ABC</Title>
            <SubDescription>ABC</SubDescription>
        </Class>
        </div>
)

export default Model