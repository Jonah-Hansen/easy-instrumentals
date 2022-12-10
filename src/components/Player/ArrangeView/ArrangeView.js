import ArrangeEditor from "./ArrangeEditor/ArrangeEditor";
import ArrangeToolbar from "./ArrangeToolbar/ArrangeToolbar";
import './ArrangeView.scss';

export default function ArrangeView({ tracksState, currentTracksState, setFiles, volumesState }) {
  return (
    <section className="arrange-view">
      <ArrangeToolbar />
      <ArrangeEditor tracksState={tracksState} currentTracksState={currentTracksState} setFiles={setFiles} volumesState={volumesState} />
    </section>
  )
}