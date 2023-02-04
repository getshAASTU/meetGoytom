
import React from "react";
import {
  About,
  Header,
  Faqs,
  Footer,
  AllProjects,
  Services,
} from "./components";

function App() {
  return (
    <>
      <Header />
      <About img="about.jpg" />
      <Services img="serviceimg.jpg" />
      <AllProjects img="portofil2.jpg" />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;
