import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

// Example of the code — https://user-images.githubusercontent.com/20713191/144215307-35538500-b9f0-486d-abed-1a14825bb75c.png
const styles = {
  // TODO: Add base styles
  base: 'flex-shrink-0 inline-flex transition-colors duration-200 items-center justify-center leading-none rounded-[40px]  group relative  before:bg-white-button-gradient before:absolute before:opacity-0 before:transition-opacity hover:before:opacity-100 before:w-full before:h-full before:rounded-[40px]',
  // TODO: Add sizes. Better to write down all sizes and go from higher to lower, e.g. "xl", "lg", "md", "sm", "xs"
  //       The name of the size cannot be lower than the font size that being used, e.g. "sm" size cannot have font-size "xs"
  //       Check out an example by a link above for better understanding
  size: {
    md: 'font-semibold w-[126px] h-[35px] px-[18px] py-2.5 leading-[15px] text-sm',
    sm: 'h-12 w-[168px] font-medium px-4 py-2.5 text-base',
  },
  // TODO: Add themes. Better to name the theme using this pattern: "${color-name}-${theme-type}", e.g. "black-filled"
  //       If there is no dividing between theme types, then feel free to use just color names, e.g. "black"
  //       Check out an example by a link above for better understanding
  theme: {
    'primary-white': 'bg-gray-98 text-black',
    'secondary-purple':
      'bg-primary-1 text-black hover:bg-primary-3 leading-none transition-[background-color,filter] sm:flex sm:w-12 sm:items-center sm:justify-center sm:px-0"',
  },
};

const Button = ({ className: additionalClassName, to, size, theme, children, ...otherProps }) => {
  const className = clsx(styles.base, styles.size[size], styles.theme[theme], additionalClassName);

  const Tag = to ? Link : 'button';

  return (
    <Tag className={className} to={to} {...otherProps}>
      {children}
    </Tag>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)).isRequired,
  theme: PropTypes.oneOf(Object.keys(styles.theme)).isRequired,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: null,
  to: null,
};

export default Button;
