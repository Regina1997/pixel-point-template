import PropTypes from 'prop-types';
import React from 'react';

import Button from '../button';
import Link from '../link';

const links = [
  { to: '/integration', text: 'Integrations' },
  { to: '/platform', text: 'Core Platform' },
  { to: '/company', text: 'Company' },
  { to: '/resources', text: 'Resources' },
];
// TODO: Implement mobile menu functionality and delete eslint comment below, example — https://user-images.githubusercontent.com/20713191/144221747-70dc933e-a5bd-4586-9019-08117afc13e0.png
// eslint-disable-next-line no-unused-vars
const Header = ({ isMobileMenuOpen, onBurgerClick }) => (
  <header className="safe-paddings relative z-50 text-white">
    <div className="py-4">
      <nav className="container flex items-center justify-center" aria-label="Global">
        <ul className="md-lg:hidden relative flex basis-3/4 items-center justify-center gap-x-11 xl:gap-x-10 xl:pl-16 lg:gap-x-6  lg:pl-10">
          {links.map((link, index) => (
            <li key={index} className="group relative flex items-center">
              <Link to={link.to} theme="primary-white" size="md">
                {link.text}
              </Link>
              {index > 0 && (
                <svg
                  className="hover:cursor-pointer"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.5 6L6 9L9.5 6" stroke="#FAF9FA" />
                </svg>
              )}
            </li>
          ))}
        </ul>
        <div className="md-lg:hidden flex gap-x-4 lg:gap-x-1">
          <Link to="/" theme="primary-white" size="md" className="px-4 py-2.5 font-semibold">
            Contact Sales
          </Link>
          <Button theme="primary-white" size="md">
            Book a Demo
          </Button>
        </div>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  onBurgerClick: PropTypes.func.isRequired,
};

Header.defaultProps = {
  isMobileMenuOpen: false,
};

export default Header;
