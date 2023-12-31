/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

// Example of the code — https://user-images.githubusercontent.com/20713191/144221096-1939c382-4ab8-4d28-b0e6-7bbe3a8f8556.png
const styles = {
  // TODO: Add base styles
  base: 'inline-flex inline-flex items-center whitespace-nowrap text-15 leading-none tracking-wider',
  // TODO: Add sizes. Better to write down all sizes and go from higher to lower, e.g. "xl", "lg", "md", "sm", "xs"
  //       The name of the size cannot be lower than the font size that being used, e.g. "sm" size cannot have font-size "xs"
  //       Check out an example by a link above for better understanding
  size: {
    xl: 'text-xl',
    lg: 'text-lg',
    md: 'text-base',
    sm: 'text-sm',
    xs: 'text-xs',
  },
  // TODO: Add themes. Better to name the theme using this pattern: "${color-name}-${theme-type}", e.g. "black-filled"
  //       If there is no dividing between theme types, then feel free to use just color names, e.g. "black"
  //       Check out an example by a link above for better understanding
  theme: {
    'primary-white':
      'text-gray-98 opacity-90 transition-colors duration-200 hover:cursor-pointer hover:text-gray-94',
    'secondary-black':
      'text-secondary-blue hover:text-secondary-pink-hover group-hover: text-secondary-pink-hover',
  },
};
// inline-flex transition-colors duration-200 inline-flex items-center justify-center font-medium leading-none transition-colors duration-200 rounded-[40px] text-15 px-4 py-2.5 group relative text-black bg-gray-98 before:bg-white-button-gradient before:absolute before:opacity-0 before:transition-opacity hover:before:opacity-100 before:w-full before:h-full before:rounded-[40px]
const Link = ({ className: additionalClassName, size, theme, to, children, ...props }) => {
  const className = clsx(
    size && theme && styles.base,
    styles.size[size],
    styles.theme[theme],
    additionalClassName
  );

  if (to.startsWith('/')) {
    return (
      <NextLink className={className} href={to} {...props}>
        {children}
      </NextLink>
    );
  }

  return (
    <a className={className} href={to} {...props}>
      {children}
    </a>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  theme: PropTypes.oneOf(Object.keys(styles.theme)),
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  className: null,
  to: null,
  size: null,
  theme: null,
};

export default Link;
