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
      <img
        src={require("../images/Divider.png")}
        style={{
          width: "250px",
          display: "block",
          margin: "0 auto",
          marginBottom: "24px",
        }}
        alt="divider"
      />
      <div className="loreContent" dangerouslySetInnerHTML={{ __html: props.content }}></div>
    </div>
  </div>
)
