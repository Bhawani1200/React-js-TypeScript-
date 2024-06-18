type HeroType = { title: string; subTitle: string };

const Hero = ({ title, subTitle }: HeroType) => {
  return (
    <section className="py-10">
      <div className="container">
        <h1 className="text-4xl text-center">{title}</h1>
        <p className="text-center mt-5">{subTitle}</p>
      </div>
    </section>
  );
};

export default Hero;
