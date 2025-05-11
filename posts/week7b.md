---
title: Week 7B Assembles
published_at: 2025-04-30
snippet: Response to zaniness
disable_html_sanitization: true
allow_math: true
---
# **<em>"Unlike the interesting, the zany really works against its constraint."</em>**

I think she's highlighting a fundamental aspect of zaniness as an aesthetic category. The "interesting" tends to operate within established frameworks while drawing attention to subtle variations or nuances and it respects its boundaries while creating intrigue through small innovations or unexpected juxtapositions.<br>
The zany could actively push against and test the limits of its container. It's characterized by an excessive energy that threatens to break the formal structure that contains it. Zaniness involves a frenetic quality that seems barely controlled, creating tension between form and content. While the interesting invites contemplation, the zany demands attention through its manic energy and the sense that it might collapse at any moment.

They could be similar when both can generate surpirse and unexpected outcomes, also create productive tensions within aesthetic works. However, zaniness's definition often provokes laughter or discomfort; chaos might evoke a wider range of responses. In some circumstances, zaniness has a performative and theatrical quality and purposes, but chaos may be purely random. 

Some of elements that could be considered to be zany are the particles that glitch and jump out of their pattern ,leading to moments of unpredictable behavior which work against the orderly system, the tension between the structured relationships and the visual noise. Also, between user control and system autonomy, we can influence the particles but cannot fully control them. 
 
Then to make my work to be more zany, I could think of adding dramatic accelearations and unpredictable trejectories to particles for creating a sense of frantic energy. Moreover, I would add some sound effects that respond to particle interactions with increasing tempos or pitches as activity intensifies.   

# Accompaniment to AT2

## Variables
```js
let time = 0;
let noiseLevel = 0.5;
let showRelations = true;
let glitchIntensity = 0.0;
let mouseX = 0, mouseY = 0;
```
THose variables create a dynamic system that evolves over time and store the current state of the information space. Also, the <em>time</em> variable could drive the continuous transformation of the scene, reflecting Serres' conception of information as something that exists in nature and flows continuously. 

## Iteration
```js
// Generate particles
for (let i = 0; i < 100; i++) {
    const particle = new THREE.Mesh(particleGeometry, particleMaterial.clone());
    // Configuration...
    particles.push(particle);
    scene.add(particle);
}

// Animation loop uses iteration to update each particle
particles.forEach((particle, index) => {
    const { basePosition, speed, phase, size } = particle.userData;
    // Update calculations...
});
```
The iteration above process based on Serres' idea that information exists in multiplicities and networks rather than as isolated enitites. In that, each particle is upadted every frame, creating an ongoing process of transformation.

## Functions 
```js
function triggerGlitch() {
    isGlitching = true;
    glitchIntensity = 1.0;
    // Addtional glitch behaviours,etc.
}

function animate() {
    requestAnimationFrame(animate);
    // Calculating animation...
}
```

The `animate()` function is strongly important because it creates the continuous loop that drives the entire experience, analogous to the author's view of information as something that stays in continuous flux and relation.


## Boolean logic
```js
// Toggle visibility of relation lines
if (showRelations && distance < 5) {
    relation.line.visible = true;
} else {
    relation.line.visible = false;
}
// Decay glitch intensity if not actively glitching
if (!isGlitching && glitchIntensity > 0) {
    glitchIntensity *= 0.95;
}
```
Those conditional structures create the decision-making apparatus of the whole system, it determines when the relations between information particles are visible and how the system responds to glitch events.

## Arrays
```js
let particles = [];
let relations = [];

// Arrays are populated and manipulated:
particles.push(particle);

// Arrays are traversed to update elements:
relations.forEach(relation => {
    const from = particles[relation.from].position;
    const to = particles[relation.to].position;
    // Update relation...
});
```
I'm using array to store and manage the information particles and their relationships directly to author's notion that "the world is not an object of knowledge but a tissue of relations."The arrays literally implement those `relations` in code.
## Recursion 
```js
function animate() {
    requestAnimationFrame(animate);
    time += 0.01;
    // Calculating animation...
}

// Start animation
animate();
```
THis structure generates the continuous temporal flow of the piece and reflects Serres' conception of information as something that exists in perpetual motion and transformation.
<hr>

# Why is it considered to be post-digital?
My idea embodies what theorist [Florian Cramer](http://floriancramer.nl/) calls the post-digital condition: "a state in which the disruption brought about by digital information technology has already occurred." It doesn't treat digital technology as novel or futuristic, but as an everyday material with its own quirks, glitches, and affordances that can be used to explore philosophical concepts.