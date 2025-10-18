import Subtopic from './Subtopic';
import { theme } from '../styles/Theme';

function Section({ title, subtopics, intro }) {
  return (
    <section className="section">
      <div className="section-header">
        <h1 className="section-title">{title}</h1>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
      
      <div>
        {subtopics.map((sub, index) => (
          <Subtopic key={index} {...sub} />
        ))}
      </div>
    </section>
  );
}

export default Section;