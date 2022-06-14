import emily from '../img/image-emily.jpg';
import jennie from '../img/image-jennie.jpg';
import thomas from '../img/image-thomas.jpg';

const Testimonials = () => {

  const clients = [
    {
      name: 'Emily R.',
      position: 'Marketing director',
      avatar: emily,
      content: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
      alt: 'Portrait of Emily.'
    },
    {
      name: 'Thomas S.',
      position: 'Chief operating officer',
      avatar: thomas,
      content: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
      alt: 'Portrait of Thomas'
    },
    {
      name: 'Jennie F.',
      position: 'Business owner',
      avatar: jennie,
      content: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
      alt: 'Portrait of Jennie'
    }
  ];

  const mappedClients = clients.map((client) => {
    const {name, position, avatar, content, alt} = client;

    return (
      <div>
        <img src={avatar} alt={alt} />
        <p>{content}</p>
        <h5>{name}</h5>
        <h6>{position}</h6>
      </div>
    )
  });

  return (
    <div className='w-screen lg:h-screen'>
      <div>
        <h4 className='font-fraunces uppercase text-grayBlue text-center'>Client testimonials</h4>
        <div className='lg:flex lg:justify-center'>
          {mappedClients}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
