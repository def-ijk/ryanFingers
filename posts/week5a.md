---
title: Week 5A Assembles
published_at: 2025-04-04
snippet: An example of a blog post.
disable_html_sanitization: true
allow_math: true
---
# Rafael Rozendaal and "Into Time"
Rafael Rozendaal is a contemporary visual artist whose work exemplifies the post-digital aesthetic. One of his most well-known works, "Into Time" (2010–present), is a generative browser-based artwork that exists purely on the web. The piece features shifting gradients and layered color transitions that respond to user interaction in real time, forming an ever-evolving composition.

According to Florian Cramer's essay What is Post-Digital?, post-digital art is less about the novelty of digital technology and more about integrating it so deeply into our lives that it becomes mundane or invisible. Cramer defines post-digital practices as those which critically engage with digitality while embracing hybrid media, physicality, and a rejection of the "new media" spectacle.

## Rozendaal's "Into Time" fits into the post-digital framework for several reasons:
<ol>
<li>It exists on the web, but with painterly qualities which flattens the distinction between physical and digital art.</li>

<li>It is generative and interactive, rejecting fixed forms.</li>

<li>It de-emphasizes technology itself, the code becomes invisible to the viewer, as the work focuses on experience rather than technical display.</li>
</ol>

## Technology used:
Rozendaal typically uses HTML, CSS, and JavaScript to build his interactive pieces, hosting them as individual domains such as [intotime.com](https://www.intotime.com/). The technology is minimal and web-native, reinforcing Cramer's point that post-digital art isn't defined by cutting-edge tools, but by context and integration.

## Tech stack:

**Canvas API:** for low-level drawing of color shapes and gradients.

**p5.js:** for more expressive generative visuals.

**gsap:** for smooth animation timing.

**RiTa.js:** for generative language integration, which could add poetic captions or titles dynamically, turning visual abstraction into hybrid digital-literary art.

# A Post-Digital Poem in RiTa.js

<div id="poem-canvas"></div>
<button id="regenerate-btn" style="margin-top: 20px; padding: 10px 20px; font-family: Georgia; font-size: 16px; cursor: pointer; background-color: #00000000; border: 1px solid #ccc; border-radius: 4px; font-weight: bold; border-color: #ff1493">Generate New Poem</button>

<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/rita@2.8.31/dist/rita.min.js"></script>
<script>
let lines = [];
let canvas;
function setup() {
  canvas = createCanvas(600, 400);
  canvas.parent('poem-canvas');
  generatePoem();
  // Add click event listener to the button
  document.getElementById('regenerate-btn').addEventListener('click', generatePoem);
}
function generatePoem() {
  background('#ff1493');
  textFont('Georgia');
  textSize(18);
  fill('#002dfa');
  lines = [];
  for (let i = 0; i < 6; i++) {
    lines.push(generateLine());
  }
  for (let i = 0; i < lines.length; i++) {
    text(lines[i], 20, 50 + i * 40);
  }
}
function generateLine() {
  let structure = [
    "The " + RiTa.randomWord({ pos: "jj" }) + " " + RiTa.randomWord({ pos: "nn" }) + " shifts,",
    "colors " + RiTa.randomWord({ pos: "vbz" }) + " like memory,",
    "I touch the screen, it " + RiTa.randomWord({ pos: "vbz" }) + ",",
    "layers of time " + RiTa.randomWord({ pos: "vbp" }) + " open,",
    "a gradient dreams of " + RiTa.randomWord({ pos: "nn" }) + ",",
    "pixels forget the code."
  ];
  return random(structure);
}
</script>