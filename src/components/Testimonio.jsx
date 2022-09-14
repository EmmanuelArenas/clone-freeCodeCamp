import React from "react";

const Testimonio = () => {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require("../image/testimonio-emma.png")}
        alt="Foto de Emma"
      />
    </div>
  );
};

module.exports = { Testimonio };
