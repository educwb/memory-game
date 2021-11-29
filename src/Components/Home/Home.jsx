import './style.css'

// import duvida from '../../Assets/duvida.jpg'
import battlefield from '../../Assets/battlefield.jpg'
import farcry from '../../Assets/farcry.jpg'
import fortnite from '../../Assets/fortnite.jpg'
import freefire from '../../Assets/freefire.jpg'
import gta from '../../Assets/gta.jpg'

import Card from '../Card/Card.jsx'


const Home = () => { 
  // create object with all images
  const images = [
    {
      src: battlefield,
    },
    {
      src: farcry,
    },
    {
      src: fortnite,
    },
    {
      src: freefire,
    },
    {
      src: gta,
    },
    {
      src: battlefield,
    },
    {
      src: farcry,
    },
    {
      src: fortnite,
    },
    {
      src: freefire,
    },
    {
      src: gta,
    },
  ]
  
  const shuffle = (images) => {
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }
    return images
  }
  
  return (
    <div className="Container">
      <div className="alignCards"> {
        images.length > 0 && 
          shuffle(images).map((image, index) => (
            <Card 
              image={image.src}
              key={index}
            />
          ))
      }

      </div>
    </div>
  );
}

export default Home;