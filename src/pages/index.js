import React from "react"
import { graphql } from "gatsby"
import ImgHero from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Classbox from "../components/Class"
import Gauntletbox from "../components/Gauntlet"
import fire from "../constants/gauntlets/fire"
import frost from "../constants/gauntlets/frost"
import lightning from "../constants/gauntlets/lightning"
import stone from "../constants/gauntlets/stone"
import toxic from "../constants/gauntlets/toxic"
import wind from "../constants/gauntlets/wind"

import { kinds } from "../constants/kinds"

const gauntlets = [fire, frost, lightning, stone, toxic, wind]

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroContainer">
        <ImgHero
          imgStyle={{ objectPosition: "center top" }}
          className="Img"
          fluid={props.data.imageOne.childImageSharp.fluid}
        />
        <div className="gradient" />
      </div>
      <div className="HeroGroup">
        <h1>SPELLBREAK WIKI</h1>
        <p>UPDATE 4.3</p>
      </div>
    </div>
    <div className="Selectan">
      <h1>Select a Class</h1>
    </div>
    <div className="CardboxGroupScroll">
      <div className="CardboxGroup">
        {kinds.map((kind, index) => (
          <Classbox
            key={index}
            title={kind.title}
            image={require(`./../images/Classes/${kind.title}.jpg`)}
            description={kind.description}
            subdescription={kind.subdescription}
          />
        ))}
      </div>
    </div>

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
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  {
    imageOne: file(relativePath: { eq: "Background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2560) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
