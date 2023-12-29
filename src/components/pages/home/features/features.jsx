/* eslint-disable arrow-body-style */
import React from 'react';

const items = [
  {
    title: '3x',
    text: 'Faster Analysis Cycles',
    description:
      'Stop the tedium of manual subscription data review. Quickly access essential information from all subscriptions.',
  },
  {
    title: '10%+',
    text: 'Savings on Costs',
    description:
      'Insights into both subscription data and expenditure lead to rapid, smart cost-cutting strategies.',
  },
  {
    title: '30',
    text: 'Day Setup',
    description:
      'Implement swiftly with straightforward, no-code processes and ready-to-use integrations.',
  },
];

const Features = () => {
  return (
    <section className="safe-paddings relative z-20">
      <ul className="container mb-12 flex sm:flex-col sm:items-center sm:gap-14">
        {items.map((item, index) => (
          <li
            className="mr-[11%] w-[23.2%] last:mr-0 lg:mr-[7.25%] lg:w-[27%] md:mr-[6.1%] md:w-[28.3%] sm:mr-0 sm:w-full sm:max-w-[30rem]"
            key={index}
          >
            <section className="flex flex-col">
              <div className="absolute -ml-4 h-[136px] w-[300px] rounded-full bg-primary-2 opacity-20 blur-[100px]" />
              <h2 className="lg:text-20 mb-8 flex flex-col items-start gap-1 border-b border-white border-opacity-10 pb-8 text-2xl font-normal leading-[27px] tracking-wider text-gray-98 lg:mb-6 lg:gap-1 lg:pb-6 md:mb-5 md:pb-5">
                <b
                  className="before:ellipse-primary bg-key-metrics-value before:opacity-15 relative bg-clip-text pr-1.5 text-left font-sans text-[136px] font-light leading-[136px] tracking-tighter text-transparent before:absolute before:left-1/3 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:scale-x-[20] before:scale-y-[30] before:blur-[2px] lg:text-[96px] lg:before:scale-x-[10] lg:before:scale-y-[20] md:text-[80px]"
                  style={{
                    backgroundImage:
                      'linear-gradient(132.93deg,#d383fc 21.78%,#cb6afb 39.25%,rgba(203,106,251,.2) 86.85%)',
                  }}
                >
                  {item.title}
                </b>
                {item.text}
              </h2>
              <p className="text-18 lg:text-16 text-lg font-light tracking-wider text-gray-94 md:leading-snug sm:leading-normal">
                {item.description}
              </p>
            </section>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Features;
