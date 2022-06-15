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
    <div className='grid grid-cols-2 lg:grid-cols-4'>
      <div>
        <img src={milkbottlesMobile} className="lg:hidden" alt="A line of milk bottles with a sky backgroung." />
        <img src={milkbottlesDesktop} className="hidden lg:block" alt="A line of milk bottles with a sky backgroung." />
      </div>
      <div>
        <img src={orangeMobile} className="lg:hidden" alt="Orange on a plate." />
        <img src={orangeDesktop} className="hidden lg:block" alt="Orange on a plate." />
      </div>
      <div>
        <img src={coneMobile} className="lg:hidden" alt="Cone in a blue background." />
        <img src={coneDesktop} className="hidden lg:block" alt="Cone in a blue background." />
      </div>
      <div>
        <img src={sugarcubesMobile} className="lg:hidden" alt="Multiple stack sugar cubes in a pink background." />
        <img src={sugarcubesDesktop} className="hidden lg:block" alt="Multiple stack sugar cubes in a pink background." />
      </div>
    </div>
  );
}

export default Photos;
