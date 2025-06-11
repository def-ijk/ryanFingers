---
title: Week 9A Assembles
published_at: 2025-05-09
snippet: Playing around with Ollama, LM Studio and Processing
disable_html_sanitization: true
allow_math: true
---
# Create GIF using Processing

<img src="/processing_101.gif" alt="Testing on Processing.org" />

```js

int numFrames = 120; 
float t = 0;
ArrayList<Particle> particles;
int numParticles = 150;
float noiseScale = 0.01;
float timeScale = 0.02;

color[] palette = {
  color(255, 100, 120),
  color(100, 200, 255), 
  color(255, 200, 100), 
  color(150, 255, 150), 
  color(200, 150, 255)  
};

void setup() {
  size(600, 600);
  background(20);
  
  particles = new ArrayList<Particle>();
  
  for (int i = 0; i < numParticles; i++) {
    float angle = TWO_PI * i / numParticles;
    float radius = 150 + 50 * sin(angle * 3);
    float x = width/2 + radius * cos(angle);
    float y = height/2 + radius * sin(angle);
    
    particles.add(new Particle(x, y, i));
  }
}

void draw() {
  fill(20, 15);
  noStroke();
  rect(0, 0, width, height);
  
  t = (frameCount % numFrames) / float(numFrames);
  for (Particle p : particles) {
    p.update();
    p.display();
  }
  
  if (frameCount <= numFrames) {
     saveFrame("frame-####.png");
   } else {
     exit();
   }
}

class Particle {
  float x, y;
  float px, py; 
  int id;
  color c;
  ArrayList<PVector> trail;
  int trailLength = 20;
  
  Particle(float x_, float y_, int id_) {
    x = x_;
    y = y_;
    px = x;
    py = y;
    id = id_;
    c = palette[id % palette.length];
    trail = new ArrayList<PVector>();
  }
  
  void update() {
    px = x;
    py = y;
    
    float angle = noise(x * noiseScale, y * noiseScale, t * TWO_PI) * TWO_PI * 2;
    
    float distFromCenter = dist(x, y, width/2, height/2);
    float geometricInfluence = sin(distFromCenter * 0.02 + t * TWO_PI) * 0.5;
    angle += geometricInfluence;
    
    float speed = 2 + sin(t * TWO_PI + id * 0.1) * 0.5;
    x += cos(angle) * speed;
    y += sin(angle) * speed;
    
    if (x < 0) x = width;
    if (x > width) x = 0;
    if (y < 0) y = height;
    if (y > height) y = 0;
    
    trail.add(new PVector(x, y));
    if (trail.size() > trailLength) {
      trail.remove(0);
    }
  }
  
  void display() {
    noFill();
    for (int i = 0; i < trail.size() - 1; i++) {
      PVector p1 = trail.get(i);
      PVector p2 = trail.get(i + 1);
      
      float alpha = map(i, 0, trail.size(), 0, 255);
      stroke(red(c), green(c), blue(c), alpha * 0.5);
      strokeWeight(map(i, 0, trail.size(), 0.5, 2));
      line(p1.x, p1.y, p2.x, p2.y);
    }

    pushMatrix();
    translate(x, y);
    
    noStroke();
    for (int i = 3; i > 0; i--) {
      fill(red(c), green(c), blue(c), 30);
      ellipse(0, 0, i * 6, i * 6);
    }
    
    fill(c);
    ellipse(0, 0, 6, 6);
    popMatrix();
  }
}
```

# 