import { PropsWithChildren, useContext } from "react";
import { ColorSay } from "../Contexts";

export default function Say({ children }: PropsWithChildren) {
  const actorTextColor = useContext(ColorSay);

  return <span className={ actorTextColor }>
    { children }
  </span>
}
