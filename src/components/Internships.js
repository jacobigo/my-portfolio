import React from 'react';
import InternshipCard from './InternshipCard';

export default function Internships({ items = [] }) {
return (
<div className="internships-list">
{items.map((internship) => (
<InternshipCard key={internship.id} internship={internship} />
))}
<div className="internship-more-block">
<p>For more details on my experience, check out my LinkedIn.</p>
<a
className="link"
href="https://www.linkedin.com/in/jacob-igo/"
target="_blank"
rel="noreferrer"
>
View LinkedIn
</a>
</div>
</div>
);
}
