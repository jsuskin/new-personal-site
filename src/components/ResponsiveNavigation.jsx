import React, { useState } from 'react';
import { Link } from '@reach/router';

export default function ResponsiveNavigation({
  navLinks,
  background,
  hoverBackground,
  linkColor,
  logo
}) {
  const [ hoverIndex, setHoverIndex ] = useState(-1);
  const [ navOpen, setNavOpen ] = useState(false);

  return (
    <nav className={`responsive-toolbar${navOpen ? ' nav-open' : ''}`} style={{ background }}>
      <ul style={{ background }} className={navOpen ? 'active' : ''}>
        <div className="name-heading" onClick={() => setNavOpen(!navOpen)}>
          <span className='name-primary'>J</span>
          <span className='name-secondary'>oshua</span>
          &nbsp;
          <span className='name-primary'>S</span>
          <span className='name-secondary'>uskin</span>
        </div>
        <div className='nav-links'>
          {navLinks.map((link, index) => {
            return (
              <li
                key={index}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(-1)}
                style={{
                  background:
                    hoverIndex === index ? hoverBackground || "#999" : ""
                }}
              >
                {link.externalLink ? (
                  <a href={link.path} target="_blank" style={{ color: linkColor }}>
                    {link.text}
                    <i className={link.icon} />
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    style={{ color: linkColor }}
                    onClick={() => setNavOpen(false)}
                  >
                    {link.text}
                    <i className={link.icon} />
                  </Link>
                )}
              </li>
            );
          })}
        </div>
      </ul>
    </nav>
  );
}
