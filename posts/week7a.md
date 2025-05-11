---
title: Week 7A Assembles
published_at: 2025-04-17
snippet: An example of a blog post.
disable_html_sanitization: true
allow_math: true
---
# SOUNDS

I'll create an interactive sound experiment that explores the transition between order and chaos using sinusoidal modulation. This will require user interaction to start (as required by Web Audio API's security policy) and will feature a cyclical pattern that moves from harmony to chaos and back every 24 seconds.<br>
The Web Audio API requires a user gesture before audio can play. I've implemented this through a "Start Experience" button that initializes the Tone.js context and begins playback.The key requirement of moving from order to chaos every 24 seconds is implemented using a sinusoidal function. The cycle position is calculated as a fraction of the 24-second cycle, and then fed into a sine function to create a smooth oscillation between minimum and maximum chaos.<br>
The visualization provides real-time feedback about the sound through a waveform display that shows the current audio output, color changes that reflect the level of chaos (blue for harmony, red for chaos) and glow effects that intensify during chaotic phases


<div class="container">
  <div class="controls">
    <button id="startButton">Start</button>
    <button id="stopButton" disabled>Stop</button>
  </div>
  <div class="visualizer">
    <canvas id="waveform"></canvas>
  </div>
  <div class="parameters">
    <div class="parameter">
      <label for="baseFrequency">Base Frequency</label>
      <input type="range" id="baseFrequency" min="100" max="500" value="220" step="10">
      <span id="baseFrequencyValue">220 Hz</span>
    </div>
    <div class="parameter">
      <label for="chaosIntensity">Chaos Intensity</label>
      <input type="range" id="chaosIntensity" min="0" max="100" value="70" step="5">
      <span id="chaosIntensityValue">70%</span>
    </div>
    <div class="parameter">
      <label for="harmonics">Harmonics</label>
      <input type="range" id="harmonics" min="1" max="8" value="3" step="1">
      <span id="harmonicsValue">3</span>
    </div>
  </div>
</div>

<style>
  .container {
    background-color: deeppink;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 0 auto 40px auto;
  }
  .controls {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin-bottom: 30px;
  }
  button {
    background-color: #002dfa;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  button:hover {
    background-color: #2980b9;
  }
  button:disabled {
    background-color: #95a5a6;
    cursor: not-allowed;
  }
  .visualizer {
    width: 100%;
    height: 150px;
    background-color: #f0f0f0;
    border-radius: 8px;
    margin-bottom: 20px;
    overflow: hidden;
  }
  canvas {
    display: block;
    width: 100%;
    height: 100%;
  }
  .parameters {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
    margin-bottom: 20px;
    color: #002dfa;
  }
  .parameter {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .parameter label {
    margin-bottom: 5px;
    font-weight: bold;
    color: #002dfa;
  }
</style>

<script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.js"></script>
<script>
class SinusoidalChaosExperiment {
  constructor() {
    this.initialized = false;
    this.isPlaying = false;
    this.cycleTime = 24; // 24 second cycle
    this.elapsedTime = 0;
    this.startButton = document.getElementById('startButton');
    this.stopButton = document.getElementById('stopButton');
    this.canvas = document.getElementById('waveform');
    this.canvasCtx = this.canvas.getContext('2d');
    this.baseFrequencySlider = document.getElementById('baseFrequency');
    this.baseFrequencyValue = document.getElementById('baseFrequencyValue');
    this.chaosIntensitySlider = document.getElementById('chaosIntensity');
    this.chaosIntensityValue = document.getElementById('chaosIntensityValue');
    this.harmonicsSlider = document.getElementById('harmonics');
    this.harmonicsValue = document.getElementById('harmonicsValue');
    this.setupEventListeners();
    this.setupCanvas();
  }
  setupEventListeners() {
    this.startButton.addEventListener('click', () => this.start());
    this.stopButton.addEventListener('click', () => this.stop());
    this.baseFrequencySlider.addEventListener('input', () => {
      const value = this.baseFrequencySlider.value;
      this.baseFrequencyValue.textContent = `${value} Hz`;
      if (this.synths) {
        this.updateSynthParameters();
      }
    });
    this.chaosIntensitySlider.addEventListener('input', () => {
      const value = this.chaosIntensitySlider.value;
      this.chaosIntensityValue.textContent = `${value}%`;
    });
    this.harmonicsSlider.addEventListener('input', () => {
      const value = this.harmonicsSlider.value;
      this.harmonicsValue.textContent = value;
      if (this.isPlaying) {
        this.recreateSynths();
      }
    });
  }
  setupCanvas() {
    this.canvas = document.getElementById('waveform');
    this.canvasCtx = this.canvas.getContext('2d');
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());
  }
  resizeCanvas() {
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
  }
  async start() {
    if (!this.initialized) {
      await Tone.start();
      this.initialized = true;
      this.analyzer = new Tone.Analyser('waveform', 1024);
      this.masterReverb = new Tone.Reverb({ decay: 3, wet: 0.3 }).toDestination();
      this.masterLimiter = new Tone.Limiter(-3).connect(this.masterReverb);
      this.masterAnalyzer = this.analyzer.connect(this.masterLimiter);
      this.animate();
    }
    this.createSynths();
    this.setupTimer();
    this.startButton.disabled = true;
    this.stopButton.disabled = false;
    this.isPlaying = true;
  }
  createSynths() {
    if (this.synths) {
      this.synths.forEach(synth => synth.dispose());
    }
    const numHarmonics = parseInt(this.harmonicsSlider.value);
    this.synths = [];
    for (let i = 0; i < numHarmonics; i++) {
      const synth = new Tone.Synth({
        oscillator: { type: 'sine' },
        envelope: { attack: 0.1 + (i * 0.05), decay: 0.2, sustain: 0.8, release: 1.0 + (i * 0.1) }
      }).connect(this.masterAnalyzer);
      synth.detune.value = i * 2;
      this.synths.push(synth);
    }
    this.updateSynthParameters();
    this.synths.forEach(synth => {
      synth.triggerAttack('+0.05');
    });
  }
  recreateSynths() {
    const wasPlaying = this.isPlaying;
    if (wasPlaying) {
      this.synths.forEach(synth => synth.triggerRelease('+0.05'));
      setTimeout(() => {
        this.createSynths();
      }, 100);
    }
  }
  updateSynthParameters() {
    if (!this.synths) return;
    const baseFreq = parseFloat(this.baseFrequencySlider.value);
    this.synths.forEach((synth, i) => {
      const freq = baseFreq * (i === 0 ? 1 : (i + 1) / i);
      synth.frequency.value = freq;
    });
  }
  setupTimer() {
    this.elapsedTime = 0;
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
    this.timerInterval = setInterval(() => {
      this.elapsedTime += 0.1;
      this.updateChaos();
    }, 100);
  }
  updateChaos() {
    if (!this.synths) return;
    const cyclePosition = (this.elapsedTime % this.cycleTime) / this.cycleTime;
    const chaosLevel = Math.abs(Math.sin(Math.PI * cyclePosition * 2));
    const intensity = parseFloat(this.chaosIntensitySlider.value) / 100;
    const scaledChaos = chaosLevel * intensity;
    this.applyChaosFactor(scaledChaos);
  }
  applyChaosFactor(chaosLevel) {
    if (!this.synths) return;
    this.synths.forEach((synth, i) => {
      const baseFreq = parseFloat(this.baseFrequencySlider.value);
      const harmonicFreq = baseFreq * (i === 0 ? 1 : (i + 1) / i);
      const freqDeviation = harmonicFreq * 0.2 * chaosLevel;
      if (chaosLevel > 0.1) {
        const jitter = (Math.random() * 2 - 1) * freqDeviation;
        synth.frequency.value = harmonicFreq + jitter;
      } else {
        synth.frequency.value = harmonicFreq;
      }
      if (chaosLevel > 0.5) {
        synth.envelope.attack = 0.1 + (Math.random() * chaosLevel * 0.5);
        synth.envelope.release = 0.5 + (Math.random() * chaosLevel * 1.5);
      } else {
        synth.envelope.attack = 0.1 + (i * 0.05);
        synth.envelope.release = 1.0 + (i * 0.1);
      }
    });
    if (this.masterReverb) {
      this.masterReverb.wet.value = 0.2 + (chaosLevel * 0.5);
    }
  }
  animate() {
    requestAnimationFrame(() => this.animate());
    if (this.analyzer) {
      const data = this.analyzer.getValue();
      this.drawWaveform(data);
    }
  }
  drawWaveform(values) {
    const width = this.canvas.width;
    const height = this.canvas.height;
    const ctx = this.canvasCtx;
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#3498db';
    ctx.beginPath();
    const sliceWidth = width / values.length;
    let x = 0;
    for (let i = 0; i < values.length; i++) {
      const v = values[i];
      const y = (v * 0.5 + 0.5) * height;
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
      x += sliceWidth;
    }
    ctx.stroke();
  }
  stop() {
    if (!this.isPlaying) return;
    if (this.synths) {
      this.synths.forEach(synth => {
        synth.triggerRelease('+0.05');
      });
      setTimeout(() => {
        this.synths.forEach(synth => synth.dispose());
        this.synths = null;
      }, 2000);
    }
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.startButton.disabled = false;
    this.stopButton.disabled = true;
    this.isPlaying = false;
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const experiment = new SinusoidalChaosExperiment();
});
</script>

```js
    // Main sound experiment class
    class SinusoidalChaosExperiment {
      constructor() {
        // Initialize Tone.js context
        this.initialized = false;
        this.isPlaying = false;
        this.cycleTime = 24; // 24 second cycle
        this.elapsedTime = 0;
        
        // UI elements
        this.startButton = document.getElementById('startButton');
        this.stopButton = document.getElementById('stopButton');
        this.statusElement = document.getElementById('status');
        this.timerElement = document.getElementById('timer');
        this.canvasElement = document.getElementById('waveform');
        
        // Parameters
        this.baseFrequencySlider = document.getElementById('baseFrequency');
        this.baseFrequencyValue = document.getElementById('baseFrequencyValue');
        this.chaosIntensitySlider = document.getElementById('chaosIntensity');
        this.chaosIntensityValue = document.getElementById('chaosIntensityValue');
        this.harmonicsSlider = document.getElementById('harmonics');
        this.harmonicsValue = document.getElementById('harmonicsValue');
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Setup canvas for visualization
        this.setupCanvas();
      }
    }
```
