document.addEventListener('DOMContentLoaded', function() {
    const centeredBox = document.querySelector('.centered-box');
    const h1 = document.querySelector('h1');
    const paragraphsAndLinks = document.querySelectorAll('p, a');

    const animateCenteredBox = () => {
        setTimeout(function() {
            centeredBox.style.transform = "translateY(0)";
            centeredBox.style.opacity = "1";
        }, 500);
    };

    const animateH1 = () => {
        setTimeout(function() {
            h1.style.transform = "translateX(0)";
            h1.style.opacity = "1";
        }, 1000);
    };

    const animateParagraphsAndLinks = () => {
        paragraphsAndLinks.forEach((element, index) => {
            setTimeout(function() {
                element.style.transform = "translateX(0)";
                element.style.opacity = "1";
            }, 1500 + (index * 300));
        });
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCenteredBox();
                animateH1();
                animateParagraphsAndLinks();
                observer.unobserve(centeredBox);  // Stop observing once animation is triggered
            }
        });
    }, {
        threshold: 0.1  // Trigger when at least 10% of the element is visible
    });

    observer.observe(centeredBox);
});
