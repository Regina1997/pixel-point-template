import '../styles/main.css';
import LayoutMain from 'layouts/layout-main';

// eslint-disable-next-line react/prop-types
const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <LayoutMain>{children}</LayoutMain>
    </body>
  </html>
);

export default RootLayout;
