import BasicStage from "./stage/BasicStage"
import WaveWord from "./text/WaveWord"

function App() {
  return (
    <>
      <p className="m-10">
        You go out walking on a sunny afternoon in the fall. <WaveWord>Wind bends the branches</WaveWord> and <WaveWord>whooshes</WaveWord> as gentle gusts are met by the impeding treeline.
      </p>
      <BasicStage opt={true}>This is a stage!</BasicStage>
      <BasicStage opt={false}>This is second stage!</BasicStage>
    </>
  )
}

export default App
