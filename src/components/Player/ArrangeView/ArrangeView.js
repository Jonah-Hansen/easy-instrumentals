import ArrangeEditor from "./ArrangeEditor/ArrangeEditor";
import ArrangeToolbar from "./ArrangeToolbar/ArrangeToolbar";

export default function ArrangeView({ tracksState, currentTracksState }) {
  return (
    <section>
      <ArrangeToolbar />
      <ArrangeEditor tracksState={tracksState} currentTracksState={currentTracksState} />
    </section>
  )
}