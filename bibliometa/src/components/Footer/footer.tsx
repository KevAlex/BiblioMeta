import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./footerstyle";
  
const Footer = () => {
  return (
    <div>
    <Box>
      <h1 style={{ color: "#93AD54", 
                   textAlign: "center", 
                   marginTop: "-30px" }}>
        BiblioMeta
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>A cerca de BiblioMeta</Heading>
            <FooterLink href="#">Misión</FooterLink>
            <FooterLink href="#">Visión</FooterLink>
          </Column>
          <Column>
            <Heading>Servicios</Heading>
            <FooterLink href="#">Compra</FooterLink>
            <FooterLink href="#">Alquiler</FooterLink>
            <FooterLink href="#">Promoción</FooterLink>
          </Column>
          <Column>
            <Heading>Contacto</Heading>
            <FooterLink href="#">Universidad Distrital</FooterLink>
          </Column>
          <Column>
            <Heading>Redes sociales</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
    </div>
  );
};
export default Footer;