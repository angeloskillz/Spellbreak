import React from "react"
import "./lore.css"

export default props => (
  <div>
    <br />
    {props.helmet || ""}
    <div className="lore">
      <p className="loreDate">{props.date}</p>
      <h1 className="loreTitle">
        {props.title}
      </h1>
      <p className="loreDescription">{props.description}</p>
      <div className="loreContent">{props.content}</div>
    </div>
  </div>
)
