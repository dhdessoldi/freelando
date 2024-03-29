import { Col, Container, Row } from "react-grid-system";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Styles } from "./components/GlobalStyle/Styles";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Theme } from "./components/ThemeProvider";
import { Typography } from "./components/Typography";
import { Button } from "./components/Button";
import { Dropdown } from "./components/Dropdown";

const states = [
  { "text": "Acre", "value": "AC" },
  { "text": "Alagoas", "value": "AL" },
  { "text": "Amapá", "value": "AP" },
  { "text": "Amazonas", "value": "AM" },
  { "text": "Bahia", "value": "BA" },
  { "text": "Ceará", "value": "CE" },
  { "text": "Distrito Federal", "value": "DF" },
  { "text": "Espírito Santo", "value": "ES" },
  { "text": "Goiás", "value": "GO" },
  { "text": "Maranhão", "value": "MA" },
  { "text": "Mato Grosso", "value": "MT" },
  { "text": "Mato Grosso do Sul", "value": "MS" },
  { "text": "Minas Gerais", "value": "MG" },
  { "text": "Pará", "value": "PA" },
  { "text": "Paraíba", "value": "PB" },
  { "text": "Paraná", "value": "PR" },
  { "text": "Pernambuco", "value": "PE" },
  { "text": "Piauí", "value": "PI" },
  { "text": "Rio de Janeiro", "value": "RJ" },
  { "text": "Rio Grande do Norte", "value": "RN" },
  { "text": "Rio Grande do Sul", "value": "RS" },
  { "text": "Rondônia", "value": "RO" },
  { "text": "Roraima", "value": "RR" },
  { "text": "Santa Catarina", "value": "SC" },
  { "text": "São Paulo", "value": "SP" },
  { "text": "Sergipe", "value": "SE" },
  { "text": "Tocantins", "value": "TO" }
]

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
                  <Dropdown label="Estado" options={states} />
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
