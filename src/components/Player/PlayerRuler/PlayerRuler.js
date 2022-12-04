import { height } from '@mui/system';
import { useEffect, useRef } from 'react';
import './PlayerRuler.scss';

export default function PlayerRuler() {

  const canvasRef = useRef()

  const draw = () => {
    const canvas = canvasRef.current;

    const height = 32 * window.devicePixelRatio

    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");

      ctx.strokeStyle = '#697085'
      ctx.lineWidth = 1

    }
  }

  useEffect(() => {
    draw()
  }, [])

  return (
    <canvas ref={canvasRef} className='player-ruler' />
  )
}