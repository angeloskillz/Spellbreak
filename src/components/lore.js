import React from "react"
import "./lore.css"

export default props => (
  <div>
    <br />
    {props.helmet || ""}
    <div className="lore">
      <h1 className="loreTitle" style={{ marginTop: "2%" }}>
        {props.title}
      </h1>
      <p className="loreDate">Published: {props.date}</p>
      <p className="loreDescription">{props.description}</p>
      <div className="loreContent">{props.content}</div>
    </div>
  </div>
)
