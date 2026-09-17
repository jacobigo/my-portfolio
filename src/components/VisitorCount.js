import React, { useEffect, useState } from 'react';


// GoatCounter site code. Empty means the counter renders nothing, so this is
// safe to deploy before the account exists. Requires "Allow adding visitor
// counts on your website" in the GoatCounter site settings.
const SITE = '';
const PATH = '/my-portfolio/';
const SINCE = '';        // e.g. 'September 2026'
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
