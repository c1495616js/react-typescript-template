import React from 'react';
import { Helmet } from 'react-helmet';

export default function App(): JSX.Element {
  return (
    <div className="card bordered sm:card-side h-screen px-8">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="React Website" />
        <title>React Typescript Template</title>
      </Helmet>
      <figure className="h-screen flex items-center">
        <img src="https://picsum.photos/id/1005/400/250" alt="" />
      </figure>
      <div className="card-body justify-center">
        <h2 className="card-title">React Typescript Template</h2>
        <p>I am Jerry. A React Developer.</p>
        <div className="card-actions">
          <button className="btn btn-primary" type="button">
            Get Started
          </button>
          <button className="btn btn-ghost" type="button">
            More info
          </button>
        </div>
      </div>
    </div>
  );
}
