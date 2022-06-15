import coneDesktop from '../img/desktop/image-gallery-cone.jpg';
import coneMobile from '../img/mobile/image-gallery-cone.jpg';
import milkbottlesDesktop from '../img/desktop/image-gallery-milkbottles.jpg';
import milkbottlesMobile from '../img/mobile/image-gallery-milkbottles.jpg';
import sugarcubesDesktop from '../img/desktop/image-gallery-sugarcubes.jpg';
import sugarcubesMobile from '../img/mobile/image-gallery-sugar-cubes.jpg';
import orangeDesktop from '../img/desktop/image-gallery-orange.jpg';
import orangeMobile from '../img/mobile/image-gallery-orange.jpg';

const Photos = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-4'>
      <div>
        <img src={milkbottlesMobile} className="sm:hidden" alt="A line of milk bottles with a sky backgroung." />
        <img src={milkbottlesDesktop} className="hidden sm:block" alt="A line of milk bottles with a sky backgroung." />
      </div>
      <div>
        <img src={orangeMobile} className="sm:hidden" alt="Orange on a plate." />
        <img src={orangeDesktop} className="hidden sm:block" alt="Orange on a plate." />
      </div>
      <div>
        <img src={coneMobile} className="sm:hidden" alt="Cone in a blue background." />
        <img src={coneDesktop} className="hidden sm:block" alt="Cone in a blue background." />
      </div>
      <div>
        <img src={sugarcubesMobile} className="sm:hidden" alt="Multiple stack sugar cubes in a pink background." />
        <img src={sugarcubesDesktop} className="hidden sm:block" alt="Multiple stack sugar cubes in a pink background." />
      </div>
    </div>
  );
}

export default Photos;
