import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Explore
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main class="container">
        <p>
        Hello there, reader! 👋
        </p>
        <p>
        You've seen our pitch, and now you want a headstart on your game. However, your intuition tells you that pursuing
business value isn't so easy! Naturally, a train of thoughts enter your head, all of which can be condensed to:
        </p>
        <blockquote>
        <b>How do we start building right from the word "go!"?</b>
        </blockquote>
        <p>
        In that burning question lies a complex set of challenges, that we at Egen recognized early on as we grew our team
amidst an ever-expanding portfolio of enthralled customers. Our principle has always been unequivocally the same -
"delight our partners". It is that principle upon which our strong foundation of knowledge and processes have been
polished and refined over time.
        </p>
        <p>
          Whether you're a founder, CTO, project manager or a developer - these principles and patterns will help you understand
          how we identify and tackle business-problems and help our customers <b>win the first-to-market race</b>.
        </p>
      </main>
    </Layout>
  );
}
