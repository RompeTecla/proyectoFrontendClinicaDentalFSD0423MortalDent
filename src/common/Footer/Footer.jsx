import React from "react";
import "./Footer.css";
// import { Button, Col, Container, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <div className="mortaldentFooter">
      <div className="privacyAll">
        <div className="privacyContainer">
          <p className="privacy">Términos legales</p>
          <p className="privacy">Pólitica de privacidad</p>
          <p className="privacy">Pólitica de cookies</p>
          <p className="privacy">Mapa web</p>
          <p className="privacy">Accesibilidad</p>
        </div>
        <div className="reservedContainer">
          <p className="reserved">
            © Mortaldent. Todos los derechos reservados
          </p>
        </div>
      </div>
      <div className="contentAdvisor">
        <p className="advisor">
          El contenido sobre salud bucodental de la web y blog de Mortaldent
          está revisado por nuestra junta de revisión médica y nuestro equipo de
          expertos para que esté actualizado y en consonancia con la información
          médica basada en la evidencia más reciente y las pautas de salud
          bucodental aceptadas. Este contenido educativo no es un consejo médico
          o de diagnóstico. El uso de este sitio está sujeto a nuestros términos
          legales y política de privacidad. En caso de duda o cualquier
          comentario sobre los contenidos publicados en este sitio, por favor,
          póngase en contacto con nosotros. © 2023 Mortaldent todos los derechos
          reservados.
        </p>
      </div>
    </div>
  );
};
