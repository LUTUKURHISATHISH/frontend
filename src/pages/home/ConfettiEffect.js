import React, { useEffect } from 'react';

const ConfettiEffect = () => {
  useEffect(() => {
    class Confetto {
      constructor(theme) {
        this.frame = 0;
        this.outer = document.createElement("div");
        this.inner = document.createElement("div");
        this.outer.appendChild(this.inner);

        const outerStyle = this.outer.style;
        const innerStyle = this.inner.style;

        outerStyle.position = "absolute";
        outerStyle.width = "10px";
        outerStyle.height = "10px";
        innerStyle.width = "100%";
        innerStyle.height = "100%";
        innerStyle.backgroundColor = theme();

        outerStyle.perspective = "50px";
        outerStyle.transform = `rotate(${360 * Math.random()}deg)`;
        this.axis = `rotate3D(${Math.cos(360 * Math.random())}, ${Math.cos(360 * Math.random())}, 0, `;
        this.theta = 360 * Math.random();
        this.dTheta = 0.4 + 0.3 * Math.random();
        innerStyle.transform = this.axis + this.theta + "deg)";

        this.x = window.innerWidth * Math.random();
        this.y = -100;
        this.dx = Math.sin(-0.1 + 0.2 * Math.random());
        this.dy = 0.13 + 0.05 * Math.random();
        outerStyle.left = `${this.x}px`;
        outerStyle.top = `${this.y}px`;

        this.update = function (height, delta) {
          this.frame += delta;
          this.x += this.dx * delta;
          this.y += this.dy * delta;
          this.theta += this.dTheta * delta;

          outerStyle.left = `${this.x}px`;
          outerStyle.top = `${this.y}px`;
          innerStyle.transform = this.axis + this.theta + "deg)";
          return this.y > height + 100;
        };
      }
    }

    const colorThemes = [
      () => `rgb(${(200 * Math.random()) | 0}, ${(200 * Math.random()) | 0}, ${(200 * Math.random()) | 0})`,
    ];

    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100%";
    container.style.height = "0";
    container.style.overflow = "visible";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    const confetti = [];
    let frame;
    let addConfettoTimer;
    let stopAdding = false;

    const addConfetto = () => {
      if (stopAdding) return;
      const theme = colorThemes[0];
      const confetto = new Confetto(theme);
      confetti.push(confetto);
      container.appendChild(confetto.outer);
      addConfettoTimer = setTimeout(addConfetto, 40 * Math.random());
    };

    addConfetto();

    // Stop adding confetti after 5 seconds
    const stopTimer = setTimeout(() => {
      stopAdding = true;
      clearTimeout(addConfettoTimer);
    }, 7000);

    const loop = (timestamp) => {
      const height = window.innerHeight;
      for (let i = confetti.length - 1; i >= 0; --i) {
        if (confetti[i].update(height, 16)) {
          container.removeChild(confetti[i].outer);
          confetti.splice(i, 1);
        }
      }
      if (!stopAdding || confetti.length) {
        frame = requestAnimationFrame(loop);
      } else {
        // Cleanup
        if (container.parentNode) container.parentNode.removeChild(container);
        frame = undefined;
      }
    };

    frame = requestAnimationFrame(loop);

    return () => {
      clearTimeout(stopTimer);
      clearTimeout(addConfettoTimer);
      cancelAnimationFrame(frame);
      if (container.parentNode) container.parentNode.removeChild(container);
    };
  }, []);

  return null;
};

export default ConfettiEffect;
