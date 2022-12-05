import ArrangeEditor from "./ArrangeEditor/ArrangeEditor";
import ArrangeToolbar from "./ArrangeToolbar/ArrangeToolbar";

export default function ArrangeView() {
  return (
    <section>
      <ArrangeToolbar />
      <ArrangeEditor />
    </section>
  )
}