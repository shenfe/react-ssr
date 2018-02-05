import React  from 'react';

import { withRouter } from 'next/router';

import Link from 'next/link'

const classUnion = className => {
  if (typeof className === 'string') return className;
  let type = Object.prototype.toString.call(className).toLowerCase();
  type = type.substring(8, type.length - 1);
  if (type === 'array') return className.map(classUnion).join(' ');
  if (type === 'object')
    return Object.keys(className)
      .map(p => !!className[p] && p)
      .filter(v => !!v)
      .join(' ');
  return '';
};

function Header({ links, router }) {
  const navs = links;
  const list = navs.map(item =>
    <li key={item.alias} className={classUnion([{ active: router.pathname === item.alias }, 'cell'])}>
      <Link href={item.alias}>{item.text}</Link>
    </li>
  );
  return (
    <div>
      <ul className="nav global-flex">
        {list}
      </ul>

      <style jsx>{`
        ul.nav {
          height: 64px;
        }
        
        ul.nav :global(li.cell) {
          line-height: 32px;
          padding: 16px 0 !important;
        }
        
        ul.nav :global(li a) {
          display: block;
          color: #666;
          border-right: 1px solid #ccc;
        }
        
        ul.nav :global(li.active a) {
          color: lightseagreen;
        }
        
        ul.nav :global(li:last-of-type a) {
          border-right: none;
        }
      `}</style>
    </div>
  );
}

export default withRouter(Header);
