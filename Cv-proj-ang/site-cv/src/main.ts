import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  (function () {
    var scrollY = function () {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
        return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    }
    var elements = Array.from(document.querySelectorAll('[data-sticky]'));

    const makeSticky = function (element) {
        // Variables
        var rect = element.getBoundingClientRect();
        var offset = parseInt(element.getAttribute('data-offset') || 0, 10);
        console.log(element.getAttribute('data-constraint'))
        if (element.getAttribute('data-constraint')) {
            var constraint = document.querySelector(element.getAttribute('data-constraint'))
        } else {
            var constraint = document.body;
        }
        var constraintRect = constraint.getBoundingClientRect();
        var constraintBottom = constraintRect.top + scrollY() + constraintRect.height - offset - rect.height;

        var toP = rect.top + scrollY();
        var fake = document.createElement('div');
        fake.style.width = rect.width + 'px';
        fake.style.height = rect.height + 'px';

        // Fonctions
        var onScroll = function () {
            var hasScrollClass = element.classList.contains('fixed');
            if (scrollY() > constraintBottom && element.style.position != 'absolute') {
                element.classList.remove('fixed');
                element.style.position = 'absolute';
                element.style.bottom = '0';
                element.style.top = 'auto';
            } else if (scrollY() > toP - offset && scrollY() < constraintBottom && element.style.position != 'fixed') {
                console.log('add');
                element.classList.add('fixed');
                element.style.position = 'fixed'
                element.style.top = `${offset}px`;
                element.style.bottom = 'auto';
                element.style.width = `${rect.width}px`;
                element.parentNode.insertBefore(fake, element);
            } else if (scrollY() < toP - offset && element.style.position != 'static') {
                console.log('remove');
                element.classList.remove('fixed');
                element.style.position = 'static';
                if (element.parentNode.contains(fake)) {
                    element.parentNode.removeChild(fake);
                }

            }
        }
        var onResize = function () {
            element.style.width = 'auto';
            element.classList.remove('fixed');
            element.style.position = 'static';
            fake.style.display = 'none';
            rect = element.getBoundingClientRect();
            constraintRect = constraint.getBoundingClientRect();
            constraintBottom = constraintRect.top + scrollY() + constraintRect.height - offset - rect.height;
            toP = rect.top + scrollY();
            fake.style.width = rect.width + 'px';
            fake.style.height = rect.height + 'px';
            fake.style.display = 'block';
            onScroll()
        }

        // Listener
        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', onResize)
    }
    elements.map((element) => {
        makeSticky(element);

    })

})()