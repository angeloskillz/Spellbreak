// import React from "react"
// import styled from "styled-components"

// const Class = styled.div`
//   position: relative;
//   width: 280px;
//   height: auto;
//   border-radius: 26px;
//   background: #1a2327;
//   border: 2px solid #daa54e;
//   box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
//   margin-left: 16px;
//   margin-top: 16px;
// `
// const Sun = styled.img`
//   display: block;
//   margin: 0 auto;
// `
// const Title = styled.h1`
//   font-family: "Roboto";
//   font-weight: bold;
//   font-size: 18px;
//   text-align: center;
//   color: #fff;
//   text-shadow: 0px 3px 6px #000;
//   margin-top: -30px;
//   text-transform: uppercase;
// `
// const Icons = styled.div`
//   text-align: center;
// `
// const Icon1 = styled.img`
//   position: relative;
//   width: 54px;
//   height: 54px;
//   border-radius: 20px;
// `
// const Icon2 = styled.img`
//   position: absolute;
//   width: 54px;
//   height: 54px;
//   border-radius: 20px;
//   filter: blur(9px);
// `
// const SubDescription = styled.h2`
//   font-family: Roboto;
//   font-weight: normal;
//   font-style: italic;
//   font-size: 14px;
//   text-align: center;
//   color: #fff;
//   margin-bottom: 16px;
//   padding-left: 16px;
//   padding-right: 16px;
// `

// const Classbox = props => (
//   <Class>
//     <Sun src={require("../images/Sun.png")} />
//     <Title>{props.title}</Title>
//     <Icons>
//       <Icon2 src={props.image} alt={props.title} />
//       <Icon1 src={props.image} alt={props.title} />
//     </Icons>
//     <SubDescription>{props.subdescription}</SubDescription>
//   </Class>
// )

// export default Classbox

import React from "react"
import styled from "styled-components"
import ReactModal from "react-modal"

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

class Classbox extends React.Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal() {
    console.log("opening")
    this.setState({ showModal: true })
  }

  handleCloseModal() {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <div>
        <Class>
          <Sun src={require("../images/Sun.png")} />
          <Title>{this.props.name}</Title>
          <Icons>
            <Icon2 src={this.props.image} alt={this.props.title} />
            <Icon1 src={this.props.image} alt={this.props.title} />
          </Icons>
          <SubDescription>{this.props.description}</SubDescription>
        </Class>

        <ReactModal
          isOpen={this.state.showModal}
          className="Modal"
          overlayClassName="Overlay"
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
        >
          <Sun src={require("../images/Sun.png")} />
          <Title>{this.props.name}</Title>
          <Icons>
            <Icon2 src={this.props.image} alt={this.props.title} />
            <Icon1 src={this.props.image} alt={this.props.title} />
          </Icons>
          <SubDescription>{this.props.description}</SubDescription>
          {this.props.stats.map((stat, index) => (
            <div key={index}>
              <SubDescription>{stat.name}</SubDescription>
              <SubDescription>{stat.type}</SubDescription>
              <SubDescription>{stat.description}</SubDescription>
              <SubDescription>{stat.image}</SubDescription>
            </div>
          ))}
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    )
  }
}

export default Classbox
