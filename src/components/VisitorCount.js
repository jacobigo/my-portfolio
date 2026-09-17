import React, { useEffect, useState } from 'react';


// GoatCounter site code. Empty means the counter renders nothing. Reading the
// count also needs "allow using the visitor counter" enabled in the GoatCounter
// site settings, otherwise the endpoint returns 403 and nothing renders.
const SITE = 'jacobigo';
const PATH = '/my-portfolio/';
const SINCE = 'September 2026';
const MIN_VISITS = 50;   // stay hidden until the number is worth showing


export default function VisitorCount() {
const [visits, setVisits] = useState(null);


useEffect(() => {
if (!SITE) return;
let live = true;
fetch(`https://${SITE}.goatcounter.com/counter${PATH}.json`)
.then(r => (r.ok ? r.json() : Promise.reject(r.status)))
.then(d => {
const n = Number(String(d.count).replace(/\D/g, ''));
if (live && n >= MIN_VISITS) setVisits(n);
})
.catch(() => {});
return () => { live = false; };
}, []);


if (visits === null) return null;
return (
<p className="visitor-count">
{visits.toLocaleString()} visits{SINCE && ` since ${SINCE}`}
</p>
);
}
