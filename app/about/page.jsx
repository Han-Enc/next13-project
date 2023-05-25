import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <h1>About Next.js 13</h1>

      <h2>The React Framework for the Web</h2>

      <p>
        Used by some of the world's largest companies, Next.js enables you to
        create full-stack Web applications by extending the latest React
        features, and integrating powerful Rust-based JavaScript tooling for the
        fastest builds.
      </p>
      <br />

      <Link className="card" href="https://nextjs.org">
        Next.js
      </Link>
    </div>
  );
};

export default AboutPage;
