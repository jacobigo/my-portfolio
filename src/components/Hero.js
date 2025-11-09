export default function Hero() {
return (
<section id="home" className="hero">
<div className="hero-inner">
<img className="avatar" src="/profile_pic.jpg" alt="Profile" />
<div className="hero-text">
<h1>Hi — I'm Jacob.</h1>
<p>Software engineer &amp; machine learning researcher. I like to build predictive models that can be used in end-to-end applications, or anything that I think is helpful/interesting.</p>
<div className="cta-row">
<a className="btn" href="https://github.com/jacobigo" target="_blank" rel="noreferrer">View GitHub</a>
<a className="btn" href="https://linkedin.com/in/jacob-igo/" target="_blank" rel="noreferrer">View LinkedIn</a>
<a className="btn btn-outline" href="#projects">See Projects</a>
</div>
</div>
</div>
</section>
);
}