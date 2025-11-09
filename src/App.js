import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { projects, skills } from './data';


export default function App() {
return (
<div className="app-root">
<Navbar />
<main>
<Hero />
<section id="projects">
<h2 className="section-title">Projects</h2>
<Projects items={projects} />
</section>


<section id="skills">
<h2 className="section-title">Skills</h2>
<Skills items={skills} />
</section>
</main>
<Footer />
</div>
);
}
