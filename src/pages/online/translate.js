import React, { useRef, useState } from 'react';

const App = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(true);

    // Delay so the element exists in the DOM before Google tries to inject
    setTimeout(() => {
      // Check if script is already loaded
      if (!document.getElementById('google-translate-script')) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.src =
          '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.body.appendChild(script);
      } else {
        // Reinitialize in case it's already there
        if (window.google && window.google.translate) {
          window.googleTranslateElementInit();
        }
      }

      // Set global callback
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            layout: window.google.translate.TranslateElement.InlineLayout.VERTICAL,
          },
          'google_translate_element'
        );
      };
    }, 100); // wait 100ms for element to mount
  };

  return (
   
    <div style={{ position: 'relative', display: 'inline-block' }} ref={dropdownRef}>
        <span
          onClick={toggleDropdown}
          style={{ fontSize: '24px', cursor: 'pointer', userSelect: 'none' }}
          title="Translate Page"
        >
          🌐
        </span>

        {/* Show dropdown only after icon click */}
        {showDropdown && (
          <div
            id="google_translate_element"
            style={{
              marginTop: '10px',
            //   position: 'absolute',
              top: '30px',
              right: 0,
             
              border: '1px solid #ccc',
              padding: '10px',
              width: '200px',
              zIndex: 9999,
            }}
          ></div>
        )}
      </div>
   
  );
};

export default App;
