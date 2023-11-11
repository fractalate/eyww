import './WaveWord.css'

// children should really just be text.
export default function WaveWord({ children }: { children: string }) {
  if (children.length == 0) {
    return <></>
  }
  let step = 1 / children.length;
  const offset = Math.random();
  const duration = 4.0 + Math.random();
  const chars = children.split('').map((c, i) => <span key={i} className="swellAndEbb" style={{
    animationDelay: '' + (offset + step * i) % 1,
    animationDuration: '' + duration + 's',
  }}>{c}</span>)
  return <span>
    { chars }
  </span>
}
