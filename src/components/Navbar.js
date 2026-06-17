import React from 'react';


export default function Navbar() {
return (
<header className="nav">
<div className="nav-inner">
<a className="brand" href="#home">Jacob Igo</a>
<nav className="nav-links">
<a href="#projects">Projects</a>
<a href="#skills">Skills</a>
</nav>
</div>
</header>
);
}