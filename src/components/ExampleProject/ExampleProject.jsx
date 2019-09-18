import React from 'react';
import { Paragraph } from '../Paragraph';
import { project, title as titleClass } from './ExampleProject.module.scss';

export default function ExampleProject(props) {
  const { img, imgAlt, title, description, tier, tech } = props;

  return (
    <div className={project}>
      <img src={img} alt={imgAlt} />
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
