---
title: Week 11A Assembles
published_at: 2025-05-23
snippet: AT3 Planning
disable_html_sanitization: true
allow_math: true
---
# AT3 Plan: Mycelial Garden - Communities Growing Together

## Community Context

### Domain
The Mycelial Garden exists at the intersection of:
- **Creative Coding Community**: Artists and programmers who use code as their medium
- **Digital Ecology Movement**: Creators exploring natural systems through computational means
- **Collaborative Net Art**: Online spaces where multiple users create together
- **Live Coding Culture**: Real-time, transparent creative processes

### Repertoire
Our shared toolkit includes:
- **Technical Tools**: Three.js for 3D graphics, Web Audio API for generative sound, WebSockets for real-time communication
- **Visual Languages**: Particle systems, organic growth algorithms, network visualizations
- **Interaction Patterns**: Click-to-plant mechanics, hover states, presence indicators
- **Aesthetic Codes**: Kawaii design elements, bioluminescent color palettes, generative animations

### Values
The community embraces:
- **Radical Transparency**: All code visible, all processes shared
- **Collective Creativity**: Individual actions benefit everyone
- **Accessible Beauty**: No barriers to entry, runs in any browser
- **Ecological Thinking**: Systems over objects, connections over isolation
- **Playful Learning**: Serious concepts through joyful interaction

## Code Architecture

### Core Technologies
```javascript
// Three.js for 3D rendering
const scene = new THREE.Scene();
const plants = [];
const mycelialConnections = [];

// WebSocket for real-time collaboration
const ws = new WebSocket('wss://garden-server.example.com');

// Web Audio API for generative soundscape
const audioContext = new AudioContext();
```

### Key Systems

1. **Plant Generation System**
   - Procedural geometry using Three.js curves and meshes
   - 8 unique flower types with randomized characteristics
   - Growth animations using requestAnimationFrame

2. **Mycelial Network Visualization**
   - Dynamic line geometry connecting nearby plants
   - Pulsing energy nodes showing data flow
   - Underground root systems with golden glow effects

3. **Real-time Collaboration**
   - WebSocket messages for plant events
   - Synchronized garden state across all users
   - Presence system showing active gardeners

4. **Audio Ecosystem**
   - Generative background music using Web Audio oscillators
   - Reactive sound effects for planting and blooming
   - Spatial audio based on garden activity

## Practical Implementation

### How It Works

1. **User Arrives**: They see a circular garden with a cute fence, floating spores, and other gardeners' plants already growing

2. **Planting Interaction**: 
   - Click on the ground to plant
   - See immediate visual feedback (particles, growth animation)
   - Hear musical chimes

3. **Network Growth**:
   - Plants within range automatically connect underground
   - Connections strengthen the network (visible percentage)
   - International connections get special effects

4. **Collective Achievement**:
   - At 25 plants, the garden "blooms"
   - Celebratory animation and message
   - Garden resets for next cycle

5. **Continuous Engagement**:
   - See other users planting in real-time
   - Hover to learn about each plant's origin
   - Toggle mycelium view to see hidden connections

### User Journey
```
Enter Garden → See Others' Plants → Add Your Plant → 
Watch Connections Form → Contribute to Bloom → 
Celebrate Together → Begin New Cycle
```

The garden becomes a living visualization of how communities create together - each person's contribution literally connects to and strengthens others, creating emergent beauty that no individual could achieve alone.

---

# Haiku Iterations

## First Attempt (Technical Focus)
```
Three.js renders light
WebSockets connect our roots
Garden blooms as one
```

## Second Attempt (Community Focus)
```
Click to plant your seed
Underground we interweave  
Twenty-five, we bloom
```

## Final Version (Chosen)
```
Roots glow gold beneath
Each plant deepens our network
Together we bloom
```

This haiku captures:
- The visual element (glowing golden roots)
- The collaborative aspect (our network)
- The collective achievement (together we bloom)
- The mycelial metaphor in just 17 syllables

---

# Video Production Plan


## Video Structure
1. Slow zoom into empty garden  
2. First plant appears, roots spread underground
3. Multiple plants connecting, network glowing
4. Final bloom celebration

## Music Selection
Suggested copyright-free tracks:
- "Meditation Impromptu 03" by Kevin MacLeod
- "Ethereal Relaxation" by Borrtex
- "Garden Vibes" by Lukrembo


### 🌸 Mycelial Garden: A Haiku Journey



> Roots glow gold beneath  
> Each plant deepens our network  
> Together we bloom

