import React from 'react';


export default function ProjectCard({ project }) {
return (
<article className="card">
<div className="card-media">
<img src={project.image} alt={project.title} />
</div>
<div className="card-body">
{project.tag && <span className="card-tag">{project.tag}</span>}
<h3>{project.title}</h3>
<p className="muted">{project.description}</p>
<div className="card-actions">
{project.site && (
<a className="link" href={project.site} target="_blank" rel="noreferrer">View project page</a>
)}
{project.github && (
<a className="link" href={project.github} target="_blank" rel="noreferrer">View on GitHub</a>
)}
</div>
</div>
</article>
);
}