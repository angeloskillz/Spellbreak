import React from "react"
import styled from "styled-components"
import ReactModal from 'react-modal'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

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
const Icon2 = styled.img`
  position: absolute;
  width: 54px;
  height: 54px;
  border-radius: 50px;
  border: 2px solid #daa54e;
  margin-left: 111.5px;
  margin-top: 66px;
  filter: blur(6px);
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

class Gauntletbox extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <Class onClick={this.handleOpenModal}>
          <Icon2
            src={require(`../images/Gauntlets/${this.props.image}.png`)}
            alt={this.props.title}
          />
          <Icon1
            src={require(`../images/Gauntlets/${this.props.image}.png`)}
            alt={this.props.title}
          />
          
          <Glyph src={require("../images/Glyph.png")} />
          <Title>{this.props.name}</Title>
          </Class>
        <ReactModal
          isOpen={this.state.showModal}
          className="Modal"
          overlayClassName="Overlay"
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
        >
          <SubDescription>{this.props.description}</SubDescription>
          <SubDescription>{this.props.spellname}</SubDescription>
          {this.props.stats.map((stat, index) => (
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
          <SubDescription>Ultimate: {this.props.ultimate.name}</SubDescription>
          <SubDescription>{this.props.ultimate.description}</SubDescription>
          {this.props.ultimate.details.map((detail, index) => (
            <SubDescription key={index}>
              {detail.name}: {detail.value}
            </SubDescription>
          ))}
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}


export default Gauntletbox;

