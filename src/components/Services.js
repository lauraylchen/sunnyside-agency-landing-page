import photographyDesktop from '../img/desktop/image-photography.jpg';
import photographyMobile from '../img/mobile/image-photography.jpg';
import graphicDesktop from '../img/desktop/image-graphic-design.jpg';
import graphicMobile from '../img/mobile/image-graphic-design.jpg';

const Services = () => {

  const services = [
    {
      title: 'Graphic design',
      content: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.",
      imgDesktop: graphicDesktop,
      imgMobile: graphicMobile,
      alt: 'A cherry on a green background.',
      imgClass: 'order-1',
      contentClass: 'text-darkDesatCyan'
    },
    {
      title: 'Photography',
      content: 'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.',
      imgDesktop: photographyDesktop,
      imgMobile: photographyMobile,
      alt: 'A clementine on a blue background.',
      imgClass: 'order-2',
      contentClass: 'text-darkBlue'
    },
  ];

  const defImgMobile = 'lg:hidden object-cover w-full ';
  const defImgDesktop = 'hidden lg:block object-cover w-full h-full ';
  const defH3 = 'font-fraunces capitalize font-black my-6 ';
  const defP = 'w-11/12 lg:w-8/12 mx-auto ';


  const mappedServices = services.map((service, index) => {
    const {title, content, imgDesktop, imgMobile, alt, imgClass, contentClass} = service;

    return (
      <div key={index} className='relative'>
        <img src={imgMobile} className={defImgMobile + imgClass} alt={alt} />
        <img src={imgDesktop} className={defImgDesktop + imgClass} alt={alt} />
        <div className='absolute bottom-0 text-center h-1/3 lg:h-1/2 xl:h-2/5'>
          <h3 className={defH3 + contentClass}>{title}</h3>
          <p className={defP + contentClass}>{content}</p>
        </div>
      </div>
    )
  });

  return (
    <div className='lg:grid lg:grid-cols-2'>
      {mappedServices}
    </div>
  );
}

export default Services;
