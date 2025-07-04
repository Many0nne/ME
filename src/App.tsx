import Desktop from "./components/Desktop";
import BootScreen from "./components/BootScreen";
import { useState } from "react";

export default function App() {
  const [booted, setBooted] = useState(false)

  return (
    <>
      {!booted ? (
        <BootScreen onFinish={() => setBooted(true)} />
      ) : (
        <Desktop /> 
      )}
    </>
  )
}
