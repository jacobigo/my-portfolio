import React from 'react';


export default function ProjectCard({ project }) {
return (
<article className="card">
<div className="card-media">
<img src={project.image} alt={project.title} />
</div>
<div className="card-body">
<h3>{project.title}</h3>
<p className="muted">{project.description}</p>
<div className="card-actions">
<a className="link" href={project.github} target="_blank" rel="noreferrer">View on GitHub</a>
</div>
</div>
</article>
);
}