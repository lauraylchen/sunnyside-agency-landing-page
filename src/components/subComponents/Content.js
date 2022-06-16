const Content = (props) => {

  const contentClass = 'flex flex-col justify-center lg:mx-32 lg:text-left mx-16 my-20 text-center ';
  const linkClass = 'font-fraunces text-base font-black uppercase px-3 underline-link';
  const emptyDiv = 'absolute bottom-0.5 h-2 w-full lg:w-36 rounded z-0 ';
  const hiddenColor = 'hide '

  return (
    <div className={contentClass + props.featureClass}>
      <h2 className='font-fraunces font-black'>{props.featureTitle}</h2>
      <p className='text-darkGrayBlue py-10'>{props.featureContent}</p>
      <div className="pt-8 relative w-36 lg:w-full mx-auto revealed">
        <div className={emptyDiv + props.featureLink}></div>
        <div className={emptyDiv + hiddenColor + props.featureHover}></div>
        <div className="absolute bottom-0 w-full lg:left-0 z-100 lg:w-36">
          <a href="/" className={linkClass}>Learn More</a>
        </div>
      </div>
    </div>
  );
}

export default Content;
