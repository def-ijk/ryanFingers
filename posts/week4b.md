---
title: Week 4B Assembles
published_at: 2025-04-01
snippet: An example of a blog post.
disable_html_sanitization: true
allow_math: true
---

# Glitchhhhh!
<iframe src="/selfGlitch.html" width="800" height="1000" frameborder="0"></iframe>

## How's the thing established
```js
const dropZone = document.getElementById('drop-zone');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    let originalImage = null;
    let glitchInterval = null;

    // Handles drag-over effect
    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', () => {
      dropZone.classList.remove('dragover');
    });

    // Handles file drop
    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('dragover');

      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) {
        loadImageFromFile(file);
      }
    });

    function loadImageFromFile(file) {
      const img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        originalImage = ctx.getImageData(0, 0, canvas.width, canvas.height);

        if (glitchInterval) clearInterval(glitchInterval);
        glitchInterval = setInterval(() => {
          ctx.putImageData(glitchFrame(originalImage), 0, 0);
        }, 100);
      };
      img.src = URL.createObjectURL(file);
    }

    function glitchFrame(imageData) {
      const data = new Uint8ClampedArray(imageData.data);
      const width = canvas.width;
      const height = canvas.height;

      for (let i = 0; i < 25; i++) {
        const y = Math.floor(Math.random() * height);
        const offset = Math.floor((Math.random() - 0.5) * 80); // more shift

        const start = y * width * 4;
        const end = start + width * 4;
        const line = data.slice(start, end);
        const glitchedLine = new Uint8ClampedArray(width * 4);

        for (let x = 0; x < width; x++) {
          const srcIndex = x * 4;
          const destIndex = ((x + offset + width) % width) * 4;

          // Swap between RGB
          glitchedLine[destIndex] = line[srcIndex + 2];     // R <- B
          glitchedLine[destIndex + 1] = line[srcIndex];     // G <- R
          glitchedLine[destIndex + 2] = line[srcIndex + 1]; // B <- G
          glitchedLine[destIndex + 3] = 255;
        }

        data.set(glitchedLine, start);
      }

      return new ImageData(data, width, height);
    }
```

# "Glitch is Skin" by Russell, 2020.
Legacy Russell's Glitch Feminism (2020) frames glitch not as a failure but as a productive break, like a way to escape normative modes of visibility and embodiment. In the rendering of likeness, a glitch aesthetic doesn't just alter visual form, it enacts a rupture in representational continuity, offering a refusal of the coherent self. Rendering becomes not mimicry, but mutation. 
Therefore, the aesthetic register shifts toward the `zany` of Sianne Ngai’s term for overstimulated, performative, and emotionally erratic forms. The `zany` is characterized by affective labor and frenetic energy, resonating with the glitch's destabilization. A rendered likeness processed through glitch aesthetics feels performatively overloaded, fraying under the pressure of digital presence.

# "Reflections on Art & Posthumanism" by Wofle, 2021.
Wolfe suggests posthuman art “interrogates the boundaries of the human,” pushing us to recognize how our images and selves are co-constructed with nonhuman agents. Rendering your likeness becomes a gesture of de-centering: the “self” is filtered through code, algorithm, and interface, which is no longer purely yours, no longer strictly human.

This aligns with Ngai’s interesting aesthetic register, which she defines as the mode of knowledge production and reflection. The rendered likeness, especially when shaped through posthuman or machinic processes, invites intellectual engagement. It is not beautiful or sublime, it is "interesting" in its critical distance and its provocation of thought, often hovering between categories.

# Rendering the likeness through glitch or posthuman aesthetics repositions the image across Ngai’s registers:
It becomes **zany** in its performative overload, **interesting** in its intellectual provocation, and potentially **cute** in its fragile artifice. Russell's glitch reclaims brokenness as agency, Wolfe's posthumanism dislodges the human as sovereign, and effective complexity frames the aesthetic ambiguity of the image. Together, they argue that such rendering is not merely representational—but revolutionary.