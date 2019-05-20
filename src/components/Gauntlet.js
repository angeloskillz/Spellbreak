import React from "react"
import styled from "styled-components"
import ReactModal from "react-modal"
import Tables from 'react-bootstrap/Table';

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
  cursor: pointer;
  outline: none;

    box-sizing: border-box;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
`
const Glyph = styled.img`
  position: relative;
  margin-top: 16px;
  display: block;
  margin-left: auto;
  margin-right: auto;
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
    const rows = []
    for (const stat of this.props.stats) {
      for (const [detailIndex, detail] of stat.details.entries()) {
        if (!rows[detailIndex]) rows[detailIndex] = [detail.name]
        if (rows[detailIndex]) rows[detailIndex].push(detail.value)
      }
    }
    return (
      <div tabIndex="0">
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
          <div className='scrollableg'>
          <Description>{this.props.spellname}</Description>
          <SubDescription>{this.props.description}</SubDescription>
          <Tables striped bordered hover className="Tableclass">
            <thead>
              <tr>
                <th>Rarity</th>
                {this.props.stats.map((stat, index) => (
                  <th key={index}>{stat.type}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'striped' : ''}>
                  {row.map((item, itemIndex) => (
                    <td key={itemIndex}>{item}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Tables>
          <Description>{this.props.ultimate.name}</Description>
          <SubDescription>{this.props.ultimate.description}</SubDescription>
          {this.props.ultimate.details.map((detail, index) => (
            <Stats key={index}>
              {detail.name}: {detail.value}
            </Stats>
          ))}
            <div className='gradientmodalg'></div>
          </div>
            <button onClick={this.handleCloseModal}>CLOSE</button>
          
        </ReactModal>
      </div>
    )
  }
}

export default Gauntletbox

/*<Tables striped bordered hover className="Tableclass">
  <thead>
    <tr>
      <th>Rarity</th>
      {this.props.stats.map((stat, index) => (
      <th key={index}>{stat.type}</th>
      ))}
    </tr>
  </thead>
  <tbody>
  {rows.map((row, index) => (
    <tr key={index} className={index % 2 === 0 ? 'striped' : ''}>
    {row.map((item, itemIndex) => (
      <td key={itemIndex}>{item}</td>
      ))}
    </tr>
    ))}
  </tbody>
</Tables>

<Paper className="container">
            <Table>
              <TableHead style={{maxWidth: '125px', minWidth:'125px', padding: '0 !important', overflowX: 'auto', whiteSpace:'nowrap'}}>
                <TableRow style={{}}>
                  <StyledTableCell align="right">Rarities</StyledTableCell>
                  {this.props.stats.map((stat, index) => (
                    <StyledTableCell align="right" key={index}>
                      {stat.type}
                    </StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    {row.map((item, itemIndex) => (
                      <StyledTableCell key={itemIndex}>{item}</StyledTableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>

          <SubDescription>Ultimate: {this.props.ultimate.name}</SubDescription>
          <SubDescription>{this.props.ultimate.description}</SubDescription>
          {this.props.ultimate.details.map((detail, index) => (
            <SubDescription key={index}>
              {detail.name}: {detail.value}
            </SubDescription>
          ))}
          */
