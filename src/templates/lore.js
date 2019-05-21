import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const insertHTML = html => <div>{html}</div>
export const BlogPostTemplate = ({
  description,
  title,
  content,
  date,
  helmet,
}) => {
  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>Published: {date}</p>
            <p>{description}</p>
            {insertHTML(content)}
          </div>
        </div>
      </div>
    </section>
  )
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(post)
  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        description={post.frontmatter.description}
        date={post.frontmatter.date}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`
