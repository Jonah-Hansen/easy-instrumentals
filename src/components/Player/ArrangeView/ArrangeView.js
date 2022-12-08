import ArrangeEditor from "./ArrangeEditor/ArrangeEditor";
import ArrangeToolbar from "./ArrangeToolbar/ArrangeToolbar";

export default function ArrangeView({ tracksState, currentTracksState, setFiles, volumesState }) {
  return (
    <section>
      <ArrangeToolbar />
      <ArrangeEditor tracksState={tracksState} currentTracksState={currentTracksState} setFiles={setFiles} volumesState={volumesState} />
    </section>
  )
}