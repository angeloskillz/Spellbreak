import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: 'vainglory, wiki, vaingloriwiki, vainglory wiki, vgwiki, vg, vaingloryheroes' },
            { property: 'og:image', content: 'https://i.imgur.com/qBMkj19.png' },
            { name: "viewport", content: "width=device-width, initial-scale=1.0, viewport-fit=cover" }
          ]}
        >
          <meta name="title" content="SBWIKI" />
          <meta name="description" content="A Spellbreak Wiki" />

          <meta name="keywords" content="spellbreak, wiki, spellbreakwiki, spellbreak wiki, sbwiki, sb" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="SBWIKI" />
          <meta property="og:description" content="A Spellbreak Wiki" />
          <meta property="og:image" content="https://i.imgur.com/qBMkj19.png" />
          <meta property="og:url" content="https://www.sbwiki.netlify.com" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://vgwiki.netlify.com/" />
          <meta property="twitter:title" content="SBWIKI" />
          <meta property="twitter:description" content="A Spellbreak Wiki" />
          <meta property="twitter:image" content="https://i.imgur.com/qBMkj19.png" />
          <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div

        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
