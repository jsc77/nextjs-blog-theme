import React from 'react';
import Link from 'next/link';
export const Header = () => {
  return (
    <div className="text-center text-2xl">
      <Link as="/" href="/">
        포트폴리오
      </Link>
    </div>
  );
};
