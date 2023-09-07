import { useEffect } from 'react';

const Button = () => {

    useEffect(() => {
        const scrollButtons = document.querySelectorAll('.buttonScroll');
    
        scrollButtons.forEach((button) => {
          button.addEventListener('click', smoothScroll);
        });
    
        function smoothScroll(e) {
          e.preventDefault();
    
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
    
          if (targetElement) {
            const offset = targetElement.getBoundingClientRect().top;
            const startPosition = window.pageYOffset;
            const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
    
            // eslint-disable-next-line no-inner-declarations
            function scrollAnimation(currentTime) {
              const timeElapsed = currentTime - startTime;
              const scrollProgress = Math.min(timeElapsed / 1000, 1);
              const easeInOutCubic = scrollProgress < 0.5 ? 4 * scrollProgress ** 3 : 1 - (-2 * scrollProgress + 2) ** 3;
    
              window.scrollTo(0, startPosition + offset * easeInOutCubic);
    
              if (scrollProgress < 1) {
                requestAnimationFrame(scrollAnimation);
              }
            }
    
            requestAnimationFrame(scrollAnimation);
          }
        }
      }, []);
    return(
        <div>
            <a href="#Contacto" className="buttonScroll">
                <button>Comprar</button>
            </a>  
        </div>
    )
};

export default Button;
