const Content = (props) => {

  const contentClass = 'flex flex-col justify-center lg:mx-32 lg:text-left mx-16 my-20 text-center ';
  const linkClass = 'font-fraunces text-base font-black uppercase underline decoration-8 ';

  return (
    <div className={contentClass + props.featureClass}>
      <h2 className='font-fraunces font-black'>{props.featureTitle}</h2>
      <p className='text-darkGrayBlue my-10'>{props.featureContent}</p>
      <a href="/" className={linkClass + props.featureLink}>Learn More</a>
    </div>
  );
}

export default Content;
