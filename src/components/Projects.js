import React from 'react';
import ProjectCard from './ProjectCard';


export default function Projects({ items = [] }) {
return (
<div className="projects-grid">
{items.map(p => (
<ProjectCard key={p.id} project={p} />
))}
</div>
);
}