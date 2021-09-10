import ImageSlider from './components/ImageSlider/ImageSlider'
import { sliderData } from './slider-data'
import './App.scss';

function App() {
  return (
    <div className="app-container">
      <h1 className='app-header'>Page Header</h1>
      <ImageSlider slides={sliderData} />
    </div>
  );
}

export default App;
