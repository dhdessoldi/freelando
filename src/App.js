import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Styles } from "./components/GlobalStyle/Styles";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Theme } from "./components/ThemeProvider";
import { Typography } from "./components/Typography";

function App() {
  return (
    <Theme>
      <Styles />
      <Header />
      <Card>
        <Typography type='h3' component='h1'>
          Freelando
        </Typography>
        <Typography type='body1' component='body'>
          Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
        </Typography>
        <Input label="Nome Completo" />
      </Card>
      <Footer />
    </Theme>
  );
}

export default App;
