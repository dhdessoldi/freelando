import { Card } from "./components/Card";
import { Styles } from "./components/GlobalStyle/Styles";
import { Theme } from "./components/ThemeProvider";

function App() {
  return (
    <Theme>
      <Styles />
      <Card>
        <h1>Freelando</h1>
      </Card>
    </Theme>
  );
}

export default App;
