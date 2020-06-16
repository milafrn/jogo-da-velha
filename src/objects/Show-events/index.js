import React from "react";
import "./styles.css";

const ShowEvents = () => (
  <>
    <input type="checkbox" className="checkbox" id="checkbox" />
    <label className="show-events" htmlFor="checkbox">
      Mostrar eventos
    </label>
  </>
);

export default ShowEvents;
