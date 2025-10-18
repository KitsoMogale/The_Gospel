import Section from '../components/Section';
// Import images/audio as needed, e.g., import img1 from '../assets/images/purpose1.jpg';

const subtopics = [
  { title: 'Subtopic 1', text: 'Sample text about purpose...', image: 'path/to/image.jpg', audio: 'path/to/audio.mp3' },
  // Add 2-3 more with actual Gospel content
];

function GoodAndEvil() {
  return <Section title="The Purpose of Life" subtopics={subtopics} />;
}

export default GoodAndEvil;