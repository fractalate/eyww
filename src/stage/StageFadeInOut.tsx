import { PropsWithChildren } from "react";

export default function StageFadeInOut({ children, opt }: PropsWithChildren & { opt: boolean }) {
  const color = opt ? 'bg-red-100' : 'bg-green-200'
  const toColor = opt ? 'to-red-100' : 'to-green-200'
  const fromColor = opt ? 'from-red-100' : 'from-green-200'

  return <div className={`
    block -my-20
  `}>
    <div className={`
      lg:px-[calc(50%-500px)] px-2
      block py-10
      bg-gradient-to-b from-transparent ${ toColor }
    `}></div>
    <div className={`
      lg:px-[calc(50%-500px)] px-2
      block
      ${ color }
    `}>
      { children }
    </div>
    <div className={`
      lg:px-[calc(50%-500px)] px-2
      block py-10
      bg-gradient-to-b ${ fromColor } to-transparent
    `}></div>
  </div>
}
