import React from "react"
import styled from "styled-components"
import ReactModal from "react-modal"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


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
    super()
    this.state = {
      showModal: false,
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal() {
    this.setState({ showModal: true })
  }

  handleCloseModal() {
    this.setState({ showModal: false })
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
          <SubDescription>{this.props.spellname}</SubDescription>
          <SubDescription>{this.props.description}</SubDescription>
          <Paper>
            <Table style={{width: '300px' }}>
              <TableHead>
                <TableRow style={{}}>
                  {this.props.stats.map((stat, index) => (
                      <TableCell align="right" key={index}>{stat.type}</TableCell>
          ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  {this.props.stats.map((detail, detailIndex) => (
                    <TableCell component="th" scope="row" key={detailIndex}>{detail.name}
                    </TableCell>
                  ))}
                  {this.props.stats.map((stat, index) => (
                    <div key={index}>
                  {stat.details.map((detail, detailIndex) => (
                    <TableCell align="right" key={detailIndex}>{detail.value}</TableCell>
              ))}
                    </div>
                  ))}
                  </TableRow>
              </TableBody>
            </Table>
          </Paper>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    )
  }
}

export default Gauntletbox


/*

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
          ))} */