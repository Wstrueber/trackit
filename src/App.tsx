import React from "react";
import { AppWrapper } from "./styles";
import { Header, Sidebar } from "./components";

const App: React.FC = () => {
  return (
    <AppWrapper>
      <Header />
      <div style={{ border: "1px solid black" }}>
        <h1>sidebar</h1>
      </div>
      <div style={{ border: "1px solid black" }}>
        <h1>content</h1>
      </div>
      <div style={{ backgroundColor: "#252727", gridColumn: "1 / -1" }}>
        footer
      </div>
      {/* <Sidebar /> */}
    </AppWrapper>
  );
};

export default App;
