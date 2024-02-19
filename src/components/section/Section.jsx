import tree from "../../assets/6.png";
import "./Section.css"

function Section () {
  return (
    <section>
      <div className="image-tree">
        <img src={tree} alt="tree" />
      </div>
    </section>
  )
}

export default Section;