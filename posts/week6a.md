---
title: Week 6A Assembles
published_at: 2025-04-11
snippet: Understanding some of js libraries.
disable_html_sanitization: true
allow_math: true
---
# [q5.js](https://q5js.org/home/) 
**NO**<br>
    *This is other custom version for p5.js (still a creative coding library).*<br>
<p>
        The original p5.js doesn't work well with JavaScript modules because it attaches itself directly to the browser's global scope.<br>
        We'd have to include q5.js as a regular script tag and access its functions through the global window object.
</p>

# [c2.js](https://c2js.org/)
**NO** <br>
*This is a less common or possibly custom library.* <br>
    <p>
        We can use this in the module depends on how it's written.<br>
        If q5.js behaves the same, then you can't just import it — you'd have to include it as a regular script tag and access its functions through the global window object.
    </p>   


# [svg.js](https://svgjs.dev/docs/3.2/) 
**YES**<br>
    *svg.js is built for being used directly in modules*
    <br>
    <p>
        This is a well-known library for working with SVG graphics.
        svg.js does supports modules, so we can directly import it using the import statement.<br>
        We can install it using a package manager (like npm) or load it from a CDN and use it inside a module.
    </p>

<iframe src="animation.html" width="500" height="500" frameborder="0"></iframe>

<hr>

# [esm.sh](https://esm.sh/)


<p>esm.sh is useful for importing npm packages directly into JavaScript modules, especially in browser environments or platforms like Deno that don’t use node_modules. It converts CommonJS or Node-style packages into browser-friendly ES modules via a CDN, allowing developers to skip bundling tools like Webpack or Vite.<br>This is great for quick prototyping, lightweight apps, or teaching. It simplifies development by letting you use modern import syntax with popular libraries right in the browser. However, it's best for small projects or demos, as relying on a third-party CDN may not be ideal for production.</p>

<hr>

# *Information & Thinking* by Michel Serres.
Serres explores how the rise of information technologies reshapes how we think and interact with knowledge. He argues that traditional, linear ways of reasoning are being challenged by networked, digital systems that favor multiplicity, connectivity, and decentralization. Thinking, for Serres, is no longer just a human-centered, rational process but one increasingly entangled with machines and mediated through digital flows.

# *What Is It Like to Be A Fungus?* by Merlin Sheldrake
Sheldrake challenges human-centric notions of consciousness and perception by asking us to consider the inner life of fungi. He explores how fungi communicate, adapt, and form symbiotic relationships, blurring the lines between individual and collective life. The essay invites us to expand our understanding of intelligence and agency beyond the animal kingdom, suggesting that fungi think and experience the world in radically different but no less meaningful ways.

# *Xenofemenism: A Politics for Alienation* by Laboria Cuboniks 
This manifesto calls for a future-oriented feminism that embraces technology, abstraction, and alienation as tools for liberation. The authors reject essentialist ideas of gender and nature, advocating instead for a politics that uses science and reason to dismantle oppressive structures. Xenofeminism proposes that rather than returning to a "natural" state, we should engineer better futures, embracing complexity, transformation, and the "alien" as sources of feminist power.