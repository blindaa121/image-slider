import ImageSlider from './components/ImageSlider/ImageSlider'
import { sliderData } from './slider-data'
import './App.scss';

function App() {
  return (
    <div className="app-container">
      <h1 className='app-header'>Smile Bright Dentistry</h1>
      <span className='app-body'>
        Come on down to Smile Bright to get your smile right! We recognize that the right dental technology improves treatment, reduces pain, and speeds recovery. This is why we offer technology such as digital x-rays, digital intra-oral cameras, and free Wi-Fi internet access for our patients. Just another way we show we care about our patients!
        Check out some of our happy patients below :)
      </span>
      <ImageSlider slides={sliderData} />
    </div>
  );
}

export default App;
