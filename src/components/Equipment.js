import React from "react"
import styled from "styled-components"

const Class = styled.div`
  position: relative;
  width: 280px;
  height: auto;
  border-radius: 26px;
  background: #1a2327;
  border: 2px solid #daa54e;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  margin-left: 16px;
  margin-top: 16px;
`
const Sun = styled.img`
  display: block;
  margin: 0 auto;
`
const Title = styled.h1`
  font-family: "Roboto";
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: #fff;
  text-shadow: 0px 3px 6px #000;
  margin-top: -30px;
  text-transform: uppercase;
`
const Icons = styled.div`
  text-align: center;
`
const Icon1 = styled.img`
  position: relative;
  width: 54px;
  height: 54px;
  border-radius: 20px;
`
const Icon2 = styled.img`
  position: absolute;
  width: 54px;
  height: 54px;
  border-radius: 20px;
  filter: blur(9px);
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
export default props => (
  <div>
    {typeof props.details.description === "string" && console.log(props)}
    <Class>
      <Sun src={require("../images/Sun.png")} />
      <Title>{props.details.name}</Title>
      <Icons>
        <Icon2 src={props.details.image} alt={props.details.name} />
        <Icon1 src={props.details.image} alt={props.details.name} />
      </Icons>
      <SubDescription>{props.details.description.join(`\n`)}</SubDescription>
      <SubDescription>{props.details.cooldown}</SubDescription>
      <SubDescription>{props.details.duration}</SubDescription>
    </Class>
  </div>
)
