import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import MediaQuery from "react-responsive"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Classbox from "../components/Class"
import Gauntletbox from "../components/Gauntlet"
import fire from "../constants/gauntlets/fire"
import frost from "../constants/gauntlets/frost"
import lightning from "../constants/gauntlets/lightning"
import stone from "../constants/gauntlets/stone"
import toxic from "../constants/gauntlets/toxic"
import wind from "../constants/gauntlets/wind"
import bulwark from "../constants/classes/bulwark"
import conduit from "../constants/classes/conduit"
import crackshot from "../constants/classes/crackshot"
import frostborn from "../constants/classes/frostborn"
import pyromancer from "../constants/classes/pyromancer"
import scavenger from "../constants/classes/scavenger"
import scholar from "../constants/classes/scholar"
import scout from "../constants/classes/scout"
import stoneshaper from "../constants/classes/stoneshaper"
import tempest from "../constants/classes/tempest"
import toxicologist from "../constants/classes/toxicologist"
import zealot from "../constants/classes/zealot"
import amulets from "../constants/equipment/amulets"
import belts from "../constants/equipment/belts"
import boots from "../constants/equipment/boots"
import consumables from "../constants/equipment/consumables"
import runes from "../constants/equipment/runes"
import EquipmentBox from "../components/Equipment"
import Adsense2 from "./ad";

const StyledAppBar = withStyles({
  root: {
    background: "none",
    width: "max-content",
    margin: "0 auto",
    boxShadow: "none",
  },
})(AppBar)

const StyledTabs = withStyles({
  indicator: {
    backgroundColor: "#daa54e",
    color: "white",
  },
})(Tabs)

const StyledTab = withStyles({
  root: {
    color: "grey",
  },
  selected: {
    border: "2px solid #daa54e",
  },
  label: {
    color: "white",
  },
})(Tab)

const gauntlets = [fire, frost, lightning, stone, toxic, wind]
const classes = [
  bulwark,
  conduit,
  crackshot,
  frostborn,
  pyromancer,
  scavenger,
  scholar,
  scout,
  stoneshaper,
  tempest,
  toxicologist,
  zealot,
]

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3, background:'#141b1e' }}>
      {children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
}

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
})

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  render() {
    const { value } = this.state

    return (
      <MediaQuery query="(min-width: 721px)">
        <div className={classes.root}>
          <Adsense2></Adsense2>
          <StyledAppBar position="static" color="default">
            <StyledTabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <StyledTab label="CLASSES" className="button" />
              <StyledTab label="GAUNTLETS" className="button" />
              <StyledTab label="EQUIPMENT" className="button" />
            </StyledTabs>
          </StyledAppBar>
          {value === 0 && (
            <TabContainer>
              <div className="Selectan">
                <h1>Select a Class</h1>
                <img
                  src={require("../images/Divider2.png")}
                  style={{
                    width: "200px",
                    display: "block",
                    margin: "0 auto",
                    marginBottom: "24px",
                  }}
                  alt="divider"
                />
              </div>
              <div className="CardboxGroupScroll">
                <div className="CardboxGroup">
                  {classes.map((kind, index) => (
                    <Classbox
                      key={index}
                      name={kind.name}
                      image={require(`./../images/Classes/${kind.image}.jpg`)}
                      description={kind.description}
                      stats={kind.stats}
                    />
                  ))}
                </div>
              </div>
            </TabContainer>
          )}
          {value === 1 && (
            <TabContainer>
              <div className="Selectan">
                <h1>Select a Gauntlet</h1>
              </div>
              <img
                src={require("../images/Divider2.png")}
                style={{
                  width: "200px",
                  display: "block",
                  margin: "0 auto",
                  marginBottom: "24px",
                }}
                alt="divider"
              />
              <div className="CardboxGroupScroll">
                <div className="CardboxGroup">
                  {gauntlets.map((gauntlet, index) => (
                    <Gauntletbox
                      key={index}
                      title={gauntlet.title}
                      image={gauntlet.image}
                      description={gauntlet.description}
                      subdescription={gauntlet.subdescription}
                      stats={gauntlet.stats}
                      ultimate={gauntlet.ultimate}
                      name={gauntlet.name}
                      spellname={gauntlet.spellname}
                    />
                  ))}
                </div>
              </div>
            </TabContainer>
          )}
          {value === 2 && (
            <TabContainer>
              <div className="Selectan">
                <h1>Amulets</h1>
              </div>
              <img
                src={require("../images/Divider2.png")}
                style={{
                  width: "200px",
                  display: "block",
                  margin: "0 auto",
                  marginBottom: "24px",
                }}
                alt="divider"
              />
              <div className="CardboxGroupScroll">
                <div className="CardboxGroup">
                  {amulets.map((equipment, index) => (
                    <EquipmentBox key={index} details={equipment} />
                  ))}
                </div>
              </div>

              <div className="Selectan">
                <h1>Belts</h1>
              </div>
              <img
                src={require("../images/Divider2.png")}
                style={{
                  width: "200px",
                  display: "block",
                  margin: "0 auto",
                  marginBottom: "24px",
                }}
                alt="divider"
              />
              <div className="CardboxGroupScroll">
                <div className="CardboxGroup">
                  {belts.map((equipment, index) => (
                    <EquipmentBox key={index} details={equipment} />
                  ))}
                </div>
              </div>

              <div className="Selectan">
                <h1>Boots</h1>
              </div>
              <img
                src={require("../images/Divider2.png")}
                style={{
                  width: "200px",
                  display: "block",
                  margin: "0 auto",
                  marginBottom: "24px",
                }}
                alt="divider"
              />
              <div className="CardboxGroupScroll">
                <div className="CardboxGroup">
                  {boots.map((equipment, index) => (
                    <EquipmentBox key={index} details={equipment} />
                  ))}
                </div>
              </div>
              <div className="Selectan">
                <h1>Consumables</h1>
              </div>
              <img
                src={require("../images/Divider2.png")}
                style={{
                  width: "200px",
                  display: "block",
                  margin: "0 auto",
                  marginBottom: "24px",
                }}
                alt="divider"
              />
              <div className="CardboxGroupScroll">
                <div className="CardboxGroup">
                  {consumables.map((equipment, index) => (
                    <EquipmentBox key={index} details={equipment} />
                  ))}
                </div>
              </div>

              <div className="Selectan">
                <h1>Runes</h1>
              </div>
              <img
                src={require("../images/Divider2.png")}
                style={{
                  width: "200px",
                  display: "block",
                  margin: "0 auto",
                  marginBottom: "24px",
                }}
                alt="divider"
              />
              <div className="CardboxGroupScroll">
                <div className="CardboxGroup">
                  {runes.map((equipment, index) => (
                    <EquipmentBox key={index} details={equipment} />
                  ))}
                </div>
              </div>
            </TabContainer>
          )}
        </div>
      </MediaQuery>
    )
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(FullWidthTabs)
