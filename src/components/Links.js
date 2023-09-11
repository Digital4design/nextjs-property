import React from 'react';
import Link from 'next/link';

const Links = ({name, text, className, path}) => {
  return (
    <Link name={name} className={`${className}`} href={path}>{text}</Link>
  )
}

export default Links