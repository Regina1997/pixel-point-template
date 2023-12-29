import Header from 'components/shared/header';

import Head from './head';

import '../styles/main.css';

// eslint-disable-next-line react/prop-types
const RootLayout = ({ children }) => (
  <html lang="en">
    <Head />
    <body>
      <div className="absolute left-[224px] top-[-128px] h-[630px] w-[630px] rounded-full bg-primary-2 opacity-20 blur-[400px]" />
      <Header />
      {children}
    </body>
  </html>
);

export default RootLayout;
