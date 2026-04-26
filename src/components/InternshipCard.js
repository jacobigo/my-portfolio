import React from 'react';

export default function InternshipCard({ internship }) {
return (
<article className="card internship-card">
<div className="card-body">
<h3>{internship.role}</h3>
<p className="internship-meta">{internship.company} | {internship.period}</p>
<p className="muted">{internship.description}</p>
{internship.link && (
<div className="card-actions">
<a className="link" href={internship.link} target="_blank" rel="noreferrer">Learn More</a>
</div>
)}
</div>
</article>
);
}
