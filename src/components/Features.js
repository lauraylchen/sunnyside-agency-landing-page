import transformDesktop from '../img/desktop/image-transform.jpg';
import transformMobile from '../img/mobile/image-transform.jpg';
import standoutDesktop from '../img/desktop/image-stand-out.jpg';
import standoutMobile from '../img/mobile/image-stand-out.jpg';
import Content from './subComponents/Content';

const Features = () => {

  const features = [
    {
      title: 'Transform your brand',
      content: 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
      imgDesktop: transformDesktop,
      imgMobile: transformMobile,
      alt:'An egg on a yellow background',
      imgClass: 'order-2',
      contentClass: 'order-1',
      linkClass: 'underline-link-yellow',
      hoverColor: 'bg-yellow'
    },
    {
      title: 'Stand out to the right audience',
      content: 'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.',
      imgDesktop: standoutDesktop,
      imgMobile: standoutMobile,
      alt:'A pink cup on a pink background',
      imgClass: 'order-1',
      contentClass: 'order-2',
      linkClass: 'underline-link-red',
      hoverColor: 'bg-softRed'
    },
  ];

  const defImgMobile = 'lg:hidden object-cover w-full '
  const defImgDesktop = 'hidden lg:block object-cover w-full h-full '

  const mappedFeatures = features.map((feature) => {
    const {title, content, imgDesktop, imgMobile, alt, imgClass, contentClass, linkClass, hoverColor} = feature
    return (
      <div className='lg:grid lg:grid-cols-2'>
        <img src={imgMobile} className={defImgMobile + imgClass} alt={alt} />
        <img src={imgDesktop} className={defImgDesktop + imgClass} alt={alt} />
        <Content
          featureTitle={title}
          featureContent={content}
          featureClass={contentClass}
          featureLink={linkClass}
          featureHover={hoverColor}
        />
      </div>
    )
  })

  return (
    <div>
      {mappedFeatures}
    </div>
  );
}

export default Features;
