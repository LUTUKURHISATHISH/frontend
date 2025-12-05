// components/FlipbookViewer.jsx
import { useEffect } from 'react';

const FlipbookViewer = () => {
  useEffect(() => {
    // Dynamically load scripts in correct order
    const loadScript = (src) =>
      new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.onload = resolve;
        document.body.appendChild(script);
      });

    const loadFlipbook = async () => {
      await loadScript('/flipbook/extras/jquery.min.1.7.js');
      await loadScript('/flipbook/extras/jquery-ui-1.8.20.full.min.js');
      await loadScript('/flipbook/extras/modernizr.2.5.3.min.js');
      await loadScript('/flipbook/lib/hash.js');

      window.flipbookcfg = {
        url: '/ananya2/',
        cover: 0,
        numPages: 33,
        textTip: 'Press ESC to exit. Use the keyboard arrows to change the page.',
        background: '/flipbook/files/backgrounds/aditya_new.svg',
        showSlider: 'null',
        showSocial: 'null',
        showformat: '1',
        companyLogo: 'https://www.flipbookpdf.net/web/site/img/logonet.png',
        showDownload: 'null',
        backlink: 'https://www.flipbookpdf.net',
        opacity: '0.4',
        name: '51986fd7b0cd25baa096e3ca89bff4864ee98cd5202406.pdf',
        direction: 'ltr',
        flipsound: 'null',
        widthimg: '1489',
        heightimg: '2106',
      };

      await loadScript('/flipbook/js/core.js');

      window.yepnope({
        test: window.Modernizr.csstransforms,
        yep: ['/flipbook/lib/turn.min.js'],
        nope: [
          '/flipbook/lib/turn.html4.min.js',
          '/flipbook/css/jquery.ui.html4.css',
        ],
        both: [
          '/flipbook/lib/zoom.min.js',
          '/flipbook/css/jquery.ui.css',
          '/flipbook/js/magazineoff.js',
          '/flipbook/css/magazine.css',
        ],
        complete: () => {
          if (typeof window.loadApp === 'function') {
            window.loadApp();
          }
        },
      });
    };

    loadFlipbook();
  }, []);

  const openFullscreen = () => {
    const elem = document.getElementById('flipfull');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.webkitEnterFullscreen) {
      elem.webkitEnterFullscreen(); // for iPhone
    }
  };

  return (
    <div>
      <div className="logo-backs" style={{ opacity: 0.4 }}></div>
      <audio id="audio" src="/flipbook/pics/page-flip.mp3" />

      <div id="canvas">
        <div className="controls-pdf">
          <div className="controlzoom" style={{ display: 'none' }}>
            <a href="#" id="zoomin">
              <img src="/flipbook/pics/zoomin.png" alt="Zoom In" />
            </a>
            <a href="#" id="zoomout">
              <img src="/flipbook/pics/zoomout.png" alt="Zoom Out" />
            </a>
          </div>
          <a
            href="/PDF/51986fd7b0cd25baa096e3ca89bff4864ee98cd5202406.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{ display: 'none' }}
              src="/flipbook/pics/down-pdf.png"
              alt="Download PDF"
            />
          </a>
          <div className="zoom-icon zoom-icon-in"></div>
          <input
            type="image"
            className="fs"
            src="/flipbook/pics/fs.png"
            alt="Fullscreen"
            onClick={openFullscreen}
          />
          <a href="#" id="prev"></a>
          <a href="#" id="next"></a>
        </div>

        <div className="magazine-viewport" id="flipfull">
          <div className="container">
            <div className="magazine">
              <div ignore="1" className="next-button"></div>
              <div ignore="1" className="previous-button"></div>
            </div>
          </div>
          <div className="bottom">
            <div id="slider-bar" className="turnjs-slider">
              <div id="slider"></div>
            </div>
          </div>
        </div>
      </div>

      {/* External AddToAny share buttons */}
      <script defer async src="https://static.addtoany.com/menu/page.js"></script>
    </div>
  );
};

export default FlipbookViewer;
