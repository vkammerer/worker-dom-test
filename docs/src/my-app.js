import {upgradeElement} from '../worker-dom-dist/index.mjs';
upgradeElement(document.querySelector('#my-script'), '../worker-dom-dist/worker.mjs');
