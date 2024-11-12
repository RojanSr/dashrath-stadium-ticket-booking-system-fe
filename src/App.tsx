import GroundSVG from "./assets/Miscellaneous/Ground.svg";
import BlockA from "./assets/Blocks/BlockA.svg";
import BlockB from "./assets/Blocks/BlockB.svg";
import BlockC from "./assets/Blocks/BlockC.svg";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import BlockContainer from "./components/BlockContainer/BlockContainer";

function App() {
  return (
    <TransformWrapper>
      <TransformComponent>
        <div className="min-h-[100dvh] min-w-[100dvw] bg-slate-800 flex justify-center items-center overflow-x-auto">
          <div className="relative inline-block w-[400px]">
            <img src={GroundSVG} alt="ground" width="100%" height="100%" />
            <BlockContainer blockType="A" className="-left-40 top-[120px]">
              <img src={BlockA} alt="block-a" />
            </BlockContainer>
            <BlockContainer
              blockType="B"
              className="-left-[162px] -top-6"
              // isSoldOut
            >
              <img src={BlockB} alt="block-b" />
            </BlockContainer>
            <BlockContainer
              blockType="C"
              className="-left-[140px] -top-[110px]"
              // isSoldOut
            >
              <img src={BlockC} alt="block-c" />
            </BlockContainer>
          </div>
        </div>
      </TransformComponent>
    </TransformWrapper>
  );
}

export default App;
