import React from 'react';
import { Paragraph } from '../Paragraph';
import { project, title as titleClass } from './ExampleProject.module.scss';

export default function ExampleProject(props) {
  const { imgs, imgAlt, title, description, tier, tech } = props;

  let sources = [];
  for (let i = 0; i < imgs.length; i++) {
    sources.push(<source key={i} srcSet={imgs[i][0]} type={imgs[i][1]} />);
  }

  return (
    <div className={project}>
      <picture>
        {sources}
        <img src={imgs[imgs.length - 1]} alt={imgAlt} />
      </picture>
      <Paragraph className={titleClass} bold size="large">
        {title}
      </Paragraph>
      <Paragraph>
        {description}
        <br />
        <br />
        <b>{tier}</b>
        <br />
        {tech}
      </Paragraph>
    </div>
  );
}
