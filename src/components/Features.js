import transformDesktop from '../img/desktop/image-transform.jpg';
import transformMobile from '../img/mobile/image-transform.jpg';
import standoutDesktop from '../img/desktop/image-stand-out.jpg';
import standoutMobile from '../img/mobile/image-stand-out.jpg';

const Features = () => {

  const features = [
    {
      title: 'Transform your brand',
      content: 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
      imgDesktop: transformDesktop,
      imgMobile: transformMobile,
      alt:'An egg on a yellow background',
      imgClass: 'order-2',
      contentClass: 'order-1'
    },
    {
      title: 'Stand out to the right audience',
      content: 'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.',
      imgDesktop: standoutDesktop,
      imgMobile: standoutMobile,
      alt:'A pink cup on a pink background',
      imgClass: 'order-1',
      contentClass: 'order-2'
    },
  ];

  return (
    <div></div>
  );
}

export default Features;
