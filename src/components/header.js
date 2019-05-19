import React from "react"
import "./header.css"
import { Link } from "gatsby"
import { withStyles } from "@material-ui/core/styles"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import Button from "@material-ui/core/Button"
import List from "@material-ui/core/List"
// import ListItem from "@material-ui/core/ListItem"
import { Divider } from "@material-ui/core"

class Header extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false,
      top: false,
      left: false,
      bottom: false,
      right: false,
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img src={require("./../images/Sun.png")} alt="LOGOVGWIKI" />
          </Link>
        </div>
      </div>
    )
  }
}

export default Header
