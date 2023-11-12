import { PropsWithChildren } from 'react';

// TODO: Do I really need the ability to pass the className here?
export default function StageBasic({
  children,
  className,
}: PropsWithChildren & {
  className?: string,
}) {
  return <p className={`
    block m-2
    px-[calc(50%-50ch)]
    ${ className }
  `}>
    { children }
  </p>
}
