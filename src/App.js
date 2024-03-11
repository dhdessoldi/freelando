import { Col, Container, Row } from "react-grid-system";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Styles } from "./components/GlobalStyle/Styles";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Theme } from "./components/ThemeProvider";
import { Typography } from "./components/Typography";
import { Button } from "./components/Button";

function App() {
  return (
    <Theme>
      <Styles />
      <Header />
      <Container style={{ margin: '80px auto' }}>
        <Row justify="center">
          <Col lg={6} md={8} sm={12}>
            <Card>
              <Typography type='h3' component='h1'>
                Freelando
              </Typography>
              <Typography type='body1' component='body'>
                Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
              </Typography>
              <Row>
                <Col>
                  <Input label="Nome Completo" />
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={4}>
                  <Input label="Estado" />
                </Col>
                <Col lg={8} md={8} sm={8}>
                  <Input label="Cidade" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Input label="E-mail" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <Input label="Senha" />
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <Input label="Repita a senha" />
                </Col>
              </Row>
              <Row justify="between">
                <Col lg={6} md={6} sm={6}>
                  <Button type="secondary">Anterior</Button>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <div style={{ textAlign: 'right' }}>
                    <Button type="primary">Próximo</Button>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Theme>
  );
}

export default App;
