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
      alt: 'A cherry on a green background.'
    },
    {
      title: 'Photography',
      content: 'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.',
      imgDesktop: photographyDesktop,
      imgMobile: photographyMobile,
      alt: 'A clementine on a blue background.'
    },
  ];

  return (
    <div></div>
  );
}

export default Services;
