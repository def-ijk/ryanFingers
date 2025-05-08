---
title: Week 4A Assembles
published_at: 2025-03-25
snippet: An example of a blog post.
disable_html_sanitization: true
allow_math: true
---
# High Compressability

<canvas id="myCanvas" width="800" height="600"></canvas>

<script type="module">
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  // Fill background with a single solid color
  ctx.fillStyle = '#00008B';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw a repeated grid pattern (repetition aids compression)
  ctx.strokeStyle = '#FF8C00';
  for (let x = 0; x < canvas.width; x += 50) {
    for (let y = 0; y < canvas.height; y += 50) {
      ctx.strokeRect(x, y, 50, 50);
    }
  }
</script>

# Low Compressability
<canvas id="abstractCanvas" width="800" height="600"></canvas>

  <script type="module">
    const canvas = document.getElementById('abstractCanvas');
    const ctx = canvas.getContext('2d');

    // Fill background with a solid color (e.g., white)
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Function to get random vibrant color
    function randomColor() {
      const color = `hsl(${Math.random() * 360}, ${60 + Math.random() * 40}%, ${40 + Math.random() * 40}%)`;
      console.log(color); // Log the generated color
      return color;
    }

    // Draw many small, detailed arcs
    for (let i = 0; i < 2000; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 5 + 1;
      const startAngle = Math.random() * Math.PI * 2;
      const endAngle = startAngle + Math.random() * Math.PI;

      ctx.beginPath();
      ctx.arc(x, y, radius, startAngle, endAngle);
      ctx.strokeStyle = randomColor(); // Apply random color
      ctx.lineWidth = Math.random() * 1.5 + 0.5;
      ctx.stroke();
    }
  </script>

# High Effective Complexity

<canvas id="canvas" width="800" height="600"></canvas>
<script type="module">
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const numRings = 30;
const baseRadiusStep = 10;
const distortionAmplitude = 8;
const pointsPerCircle = 200;
function drawDistortedRing(radius, noiseAmount) {
  ctx.beginPath();
  for (let i = 0; i <= pointsPerCircle; i++) {
    const angle = (i / pointsPerCircle) * Math.PI * 2;
    const distortion = Math.random() * noiseAmount - noiseAmount / 2;
    const r = radius + distortion;
    const x = centerX + r * Math.cos(angle);
    const y = centerY + r * Math.sin(angle);
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.closePath();
  ctx.stroke();
}
ctx.strokeStyle = "#00ffcc";
ctx.lineWidth = 1.5;
for (let i = 1; i <= numRings; i++) {
  drawDistortedRing(i * baseRadiusStep, distortionAmplitude);
}
</script>


# The Flood by Yoshi Sodeoka 

<p>
  <video src="/theFlood.mp4" playsinline autoplay muted loop></video>
</p>
<p>
  This work esxpressed simulation that justapose the organic behavioural patterns of spiders with inorganic nature of algorithmic animation. It seems like each generative spider is customized with unique parameters. Also, the generated videos fluctuate between ballets and battles.
</p>


