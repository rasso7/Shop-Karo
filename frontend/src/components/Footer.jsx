import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-primary text-white">
    <Container>
      <Row className="justify-content-between align-items-center py-1">
        <Col md={4} className="text-center text-md-left">
          <p>&copy; {currentYear} ShopKaro | Rashid</p>
        </Col>
        <Col md={4} className="text-center">
          <a href="/terms" className="text-white">Terms & Privacy</a>
        </Col>
        <Col md={4} className="text-center text-md-right">
          
          <a href="https://www.linkedin.com/in/md-rashid-/" className="text-white mx-2">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/rasso7" className="text-white mx-2">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://facebook.com" className="text-white mx-2">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://youtube.com" className="text-white mx-2">
            <i className="fab fa-youtube"></i>
          </a>
        </Col>
      </Row>
      <Row className="justify-content-center ">
        <Col md={4} className="text-center">
        <a href="https://play.google.com" className="mx-2">
            <img src="/images/playstore.png" alt="Google Play" width="120" />
          </a>
          <a href="https://apps.apple.com" className="mx-2">
            <img src="/images/apple.png" alt="App Store" width="120" />
          </a>
          
        </Col>
      </Row>
    </Container>
  </footer>
  
  );
};
export default Footer;
