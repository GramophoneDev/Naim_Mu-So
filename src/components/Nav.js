import React from 'react';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuToggle();
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
          <div id="menu">
            <ul>
              <li>
                <a href="https://skybygramophone.com/products/naim-mu-so-wireless-speaker-system?_pos=2&_sid=0c10bbce1&_ss=r" target="_blank" rel="noopener noreferrer">Shop Mu-So V1</a>
              </li>
              <li>
                <a href="https://skybygramophone.com/products/naim-mu-so-qb-compact-wireless-music-system?_pos=3&_sid=0c10bbce1&_ss=r" target="_blank" rel="noopener noreferrer">Shop Mu-So QB</a>
              </li>
              <li>
                <a href="https://skybygramophone.com/products/naim-mu-so-2nd-generation?_pos=4&_sid=0c10bbce1&_ss=r" target="_blank" rel="noopener noreferrer">Shop Mu-So V2</a>
              </li>
            </ul>
            <a
              className="close"
              onClick={e => {
                e.preventDefault();
                onMenuToggle();
              }}
              href="#menu"
            >
              {''}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
