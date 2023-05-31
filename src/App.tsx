import React from "react";
import SliderPage from "./containers/slider-page";
import Body from "./layout/Body";
import Header from "./layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // Ideally this section will contain the private and public routes.
  // For now just importing the component direvtly.
  return (
    <>
      <Header />
      <Body>
        <SliderPage />
      </Body>
    </>
  );
}

export default App;
