import React from "react";

import Section from "./components/Section";
import sections from "./data/sections";
import BottomBtns from "./components/BottomBtns";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <AppBar />
      {sections.map((section, index) => (
        <Section
          key={section.id}
          title={section.title}
          items={section.items}
          isLast={index === sections.length - 1}
        />
      ))}
      <BottomBtns />
      <Footer />
    </div>
  );
}

export default App;
