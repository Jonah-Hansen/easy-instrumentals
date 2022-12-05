import ArrangeEditor from "./ArrangeEditor/ArrangeEditor";
import ArrangeToolbar from "./ArrangeToolbar/ArrangeToolbar";

export default function ArrangeView({ tracksState }) {
  return (
    <section>
      <ArrangeToolbar />
      <ArrangeEditor tracksState={tracksState} />
    </section>
  )
}