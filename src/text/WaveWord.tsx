import './WaveWord.css'

const DURATION = 4.0;

// children should really just be text.
export default function WaveWord({ children }: { children: string }) {
  if (children.length == 0) {
    return <></>
  }
  let step = DURATION * (1 / children.length);
  const duration = DURATION + Math.random();
  const offset = duration * Math.random();
  const chars = children.split('').map((c, i) => <span key={i} className="swellAndEbb" style={{
    animationDelay: '' + (offset + step / 4 * i) % DURATION + 's',
    animationDuration: '' + duration + 's',
  }}>{c}</span>)
  return <span>
    { chars }
  </span>
}
