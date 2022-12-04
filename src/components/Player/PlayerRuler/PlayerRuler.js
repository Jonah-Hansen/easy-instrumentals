import { useRef } from 'react';
import './PlayerRuler.scss';

export default function PlayerRuler() {

  const canvasRef = useRef()

  return (
    <canvas ref={canvasRef} className='player-ruler' height='32' />
  )
}