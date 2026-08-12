import { Route, Routes } from "react-router-dom";
import { Header, Footer, Home, Contact, About, User } from "./components";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:userid" element={<User />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
