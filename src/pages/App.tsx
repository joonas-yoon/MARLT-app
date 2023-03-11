import React from "react"
import Map from "./Map"
import Aside from "../components/Aside"
import Controls from "./Controls"
import Status from "./Status"
import { ControlProvider } from "../providers/ControlProvider"

function App() {
  return (
    <div className="App">
      <ControlProvider>
        <Map />
        <div className="hud-overlay">
          <Aside>
            <Controls />
            <Status />
          </Aside>
        </div>
      </ControlProvider>
    </div>
  )
}

export default App
