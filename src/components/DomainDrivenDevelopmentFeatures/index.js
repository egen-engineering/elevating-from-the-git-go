import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import recall from './recall.png';
import precision from './precision.png';
import prediction from './prediction.png';

const featureList = [
  {
    title: 'Recall',
    imgSrc: recall,
    description: (
      <>
        Our domain knowledge enable us to evaluate requirements with a fine-toothed comb and recognize patterns that we've seen before.
      </>
    ),
  },
  {
    title: 'Precision',
    imgSrc: precision,
    description: (
      <>
        Our technical expertise allows us to know and use the right set of technologies in-order to build features.
      </>
    ),
  },
  {
    title: 'Prediction',
    imgSrc: prediction,
    description: (
      <>
        There's no substitute for experience! It allows us to anticipate what challenges lie ahead.
      </>
    ),
  },
];

function Feature({imgSrc, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function FeatureShowcase() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {featureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
