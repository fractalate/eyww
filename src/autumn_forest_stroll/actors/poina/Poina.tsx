import { PropsWithChildren } from "react";
import { ColorSay, ColorDo } from "../../../Contexts";

export default function Poina({ children }: PropsWithChildren) {
  return <ColorSay.Provider value="text-[#007]">
    <ColorDo.Provider value="text-[#007]">
      { children }
    </ColorDo.Provider>
  </ColorSay.Provider>
}
