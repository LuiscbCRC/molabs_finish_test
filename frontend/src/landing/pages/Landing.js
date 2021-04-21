import React, { Component } from "react";
import { Link } from "react-router-dom"; 

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Molabs</b> es una herramienta para visualizar y manejar dispositivos{" "}
              <span style={{ fontFamily: "monospace" }}>IoT</span> para el monitoreo continuo de aguas
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Maneja todos tus dispositivos remotos desde un solo lugar y visualiza datos en tiempo real
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "200px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Crear Cuenta
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "200px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect hoverable grey lighten-2 black-text"
              >
                Iniciar Sesión
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
} export default Landing;