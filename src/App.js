import Header from "./Pages/Header";
import Presentation from "./Pages/Presentation";
import Techstack from "./Pages/Techstack";
import Projects from "./Pages/Projects";
import Footer from "./Pages/Footer";

import UserProvider from "./contexts/user";

function App() {
  return (
    <UserProvider>
        <Header />
        <Presentation />
        <Techstack />
        <Projects />
        <Footer />
    </UserProvider>
  );
}

export default App;
