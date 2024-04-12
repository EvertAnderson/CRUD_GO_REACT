import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Button from "../Button/Button";
import Student from "./Student.jsx"

function App() {
  return(
    <>
      {/* <Card />
      <Card /> */}
      {/* <Header />
      <Food />
      <Footer /> */}
      {/* <Button /> */}
      <Student name="SpongeBob" age={30} isStudent={true} />
      <Student name="Patrik" age={42} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={24} isStudent={true} />
      <Student name="Larry" />
    </>
  );
}

export default App