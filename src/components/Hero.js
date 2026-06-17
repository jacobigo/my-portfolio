export default function Hero() {
return (
<section id="home" className="hero">
<div className="hero-inner">
<img className="avatar" src={`${process.env.PUBLIC_URL}/IMG_5522.jpg`} alt="Profile" />
<div className="hero-text">
<h1>Hi — I'm Jacob.</h1>
<p>Software Engineer, Machine Learning Researcher, and Student.<br></br><br></br> Autonomous vehicles are amazing to me, and while my main interest is perception, I'm constantly curious about every part of the tech stack and am always digging deeper and applying my knowledge. <br></br><br></br>I like to build predictive models that can be used in end-to-end applications, or anything that I think is helpful/interesting.</p>
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