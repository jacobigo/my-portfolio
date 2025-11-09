import React from 'react';


export default function Skills({ items = [] }) {
return (
<div className="skills-wrap">
{items.map((s, i) => (
<span key={i} className="skill-pill">{s}</span>
))}
</div>
);
}