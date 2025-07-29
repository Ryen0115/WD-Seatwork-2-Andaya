// Floating particles - minimal sand/dust effect
const numParticles = 20;
const body = document.body;

for (let i = 0; i < numParticles; i++) {
  const particle = document.createElement("div");
  particle.classList.add("particle");
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.animationDuration = `${5 + Math.random() * 10}s`;
  particle.style.opacity = `${0.1 + Math.random() * 0.3}`;
  body.appendChild(particle);
}
