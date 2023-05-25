import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <h1>Next.js 13.4.3 Crash Course</h1>
      <p>File-based routing</p>
      <p>Catch-all routing</p>
      <p>Global CSS</p>
      <p>Backend API service - course information</p>
      <p>Fetch API - Github repositories</p>
      <br />
      <h2>Github API</h2>
      <p className="links">
        <a href="https://docs.github.com/ko/rest/overview/endpoints-available-for-github-apps?apiVersion=2022-11-28">
          Github Docs REST API
        </a>
      </p>
      <p className="links">
        <a href="https://api.github.com/users/Han-Enc">
          https://api.github.com/users/Han-Enc
        </a>
      </p>
      <p className="links">
        <a href="https://api.github.com/users/Han-Enc/repos">
          https://api.github.com/users/Han-Enc/repos
        </a>
      </p>
      <p className="links">
        <a href="https://api.github.com/users/Han-Enc/NAME">
          https://api.github.com/users/Han-Enc/NAME
        </a>
      </p>
      <p className="links">
        <a href="https://api.github.com/users/Han-Enc/NAME/contents/ - not an array">
          https://api.github.com/users/Han-Enc/NAME/contents/ - not an array
        </a>
      </p>
    </main>
  );
}
