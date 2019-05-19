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
const Glyph = styled.img`
  position: relative;
  margin-top: 16px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`
const Title = styled.h1`
  font-family: "Roboto";
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: #fff;
  text-shadow: 0px 3px 6px #000;
  text-transform: uppercase;
`
const Icon1 = styled.img`
  position: absolute;
  width: 54px;
  height: 54px;
  border-radius: 50px;
  border: 2px solid #daa54e;
  margin-left: 111.5px;
  margin-top: 66px;
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

const Gauntletbox = props => (
  <Class>
    <Icon1
      src={require(`../images/Gauntlets/${props.image}.png`)}
      alt={props.title}
    />
    <Glyph src={require("../images/Glyph.png")} />
    <Title>{props.name}</Title>
    <SubDescription>{props.description}</SubDescription>
    <SubDescription>{props.spellname}</SubDescription>
    {props.stats.map((stat, index) => (
      <div key={index}>
        <SubDescription>Type: {stat.type}</SubDescription>
        <SubDescription>Details:</SubDescription>
        {stat.details.map((detail, detailIndex) => (
          <SubDescription key={detailIndex}>
            {detail.name}: {detail.value}
          </SubDescription>
        ))}
      </div>
    ))}

    <SubDescription>Ultimate: {props.ultimate.name}</SubDescription>
    <SubDescription>{props.ultimate.description}</SubDescription>
    {props.ultimate.details.map((detail, index) => (
      <SubDescription key={index}>
        {detail.name}: {detail.value}
      </SubDescription>
    ))}
  </Class>
)

export default Gauntletbox
