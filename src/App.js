import React, { Component } from "react";
import Wine from "./Wine";

class App extends Component {
  render() {
    return (
      <>
        <Wine title="Chery" description="French, White, 1l" rating="4.8" />
        <Wine title="Granate" description="Italian, Red, 0.7l" rating="4.2" like="false" />
      </>
    );
  }
}
export default App;
