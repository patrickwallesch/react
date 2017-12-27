import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { initialize, addTranslationForLanguage } from 'react-localize-redux';
import thunk from 'redux-thunk';

// reducers into store
export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

/**
 * ######## Translations
 * @see https://medium.com/@ryandrewjohnson/adding-multi-language-support-to-your-react-redux-app-cf6e64250050
 * @internal mind add "json-loader" to webpack
 * todo: Isolate this
 */
const enJson = require('./translations/en.json');
const frJson = require('./translations/fr.json');

store.dispatch(initialize(['en', 'fr'], { defaultLanguage: 'fr' }));

store.dispatch(addTranslationForLanguage(enJson, 'en'));
store.dispatch(addTranslationForLanguage(frJson, 'fr'));
/** ########## */

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);