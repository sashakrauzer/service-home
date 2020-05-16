import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'

const store = createStore(
    rootReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)

// Scroll page to top
let backToTopElem = document.querySelector('.back-to-top');
let pageHeight = document.documentElement.scrollHeight;

function scrollTo(element) {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: 0
    });
}

window.addEventListener('scroll', function() {
    if (window.scrollY >= pageHeight / 4) {
        backToTopElem.classList.add('visible');
    } else {
        backToTopElem.classList.remove('visible');
    }
});

backToTopElem.addEventListener('click', function() {
    scrollTo();
});

