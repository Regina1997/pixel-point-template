import Features from 'components/pages/home/features';
import Hero from 'components/pages/home/hero';

const Home = () => (
  <div className="relative overflow-x-hidden">
    <div className="safe-paddings relative z-10 overflow-hidden  text-white xl:min-h-[1008px] lg:-mb-[31px] lg:min-h-[686px] md:-mb-[123px] md:mt-0 md:min-h-0 sm:-mb-[29px]">
      <Hero />
      <Features />
    </div>
  </div>
);

export default Home;
