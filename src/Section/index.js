import "./style.css"

const Section = ({title, body, extraSectionButtons}) => (
  <section className="section">
    <header className="section__header">
            <h2 className="section__title">{title}</h2>
            {extraSectionButtons}
          </header>
          <div className="section__content">
            {body}
          </div>
  </section>
)

export default Section;