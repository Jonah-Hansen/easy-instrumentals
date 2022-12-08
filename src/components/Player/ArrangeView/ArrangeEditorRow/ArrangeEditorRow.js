import { Clear, VolumeDown, VolumeUp } from '@mui/icons-material'
import { Slider } from '@mui/material'
import { useDrop } from 'react-dnd'
import './ArrangeEditorRow.scss'

export default function ArrangeEditorRow({ title, tracksState, currentTracksState, setFile, volumesState }) {
  const { trackVolumes, setTrackVolumes } = volumesState

  const { tracks, setTracks } = tracksState
  const { currentTracks, setCurrentTracks } = currentTracksState

  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: title.toLowerCase(),
    drop: ({ track }) => {
      const newCurrentTracks = { ...currentTracks }
      newCurrentTracks[title] = track
      setCurrentTracks(newCurrentTracks)
      const allTracks = [...tracks]
      Object.values(currentTracks).forEach(track => {
        if (track.id) allTracks.push(track)
      })
      const newTracks = allTracks.filter(track => track.id !== newCurrentTracks[track.type].id)
      setTracks(newTracks)

    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver()
    })
  })

  const handleDelete = () => {
    const newCurrentTracks = { ...currentTracks }
    newCurrentTracks[title] = {}
    setCurrentTracks(newCurrentTracks)
    const allTracks = [...tracks]
    allTracks.push(currentTracks[title])
    setTracks(allTracks)
    setFile(null)
  }

  const handleVolume = (e) => {
    const newVolumes = { ...trackVolumes }
    newVolumes[title] = e.target.value / 100
    setTrackVolumes(newVolumes)
  }

  return (
    <li className='arrange-editor-row'>
      <div className='arrange-editor-row__label'>
        {title}
      </div>
      <div className='arrange-editor-row__track' ref={dropRef}
        style={isOver ? { filter: 'brightness(2)' } : canDrop ? { filter: 'brightness(1.5)' } : {}}
      >
        {currentTracks[title] && <span>{currentTracks[title].title}</span>}
        {currentTracks[title].id &&
          <div className='arrange-editor-row__controls'>
            <button
              className='arrange-editor-row__remove' onClick={handleDelete}>
              <Clear />
            </button>
            <div className='arrange-editor-row__volume'>
              <VolumeDown />
              <Slider aria-label='volume' value={trackVolumes[title] * 100} onChange={handleVolume} />
              <VolumeUp />
            </div>
          </div>
        }
      </div>
    </li>
  )
}