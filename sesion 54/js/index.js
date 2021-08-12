/**
 * Components
 */
import Img from "./js/components/Image.js";
import Card from "./js/components/Card.js";
import Component from "./js/components/component.js";

/**
 * Personas
 */
import cris from './js/modules/cris.js';
import niko from "./js/modules/niko.js"
import david from './js/modules/david.js';
import alejo from './js/modules/alejo.js';
import andres from './js/modules/andres.js';
import jimena from './js/modules/jimena.js';
import Abdul from "./js/modules/abdul.js";
import natalia from './js/modules/natalia.js';
import mario from "./js/modules/mario.js";
import JuanDiego from "./js/modules/JuanDiego.js";

const app = document.getElementById("root");

const people = [cris, andres, alejo, david, Abdul, niko, natalia,JuanDiego,alejo,mario,jimena];

const container = Component('section');
container.classList.add('container-people');

people.forEach(persona => {
    container.appendChild(
        Card({
            name: persona.name,
            desc: persona.description,
            topic: `<strong>mi tema favorito es</strong>: ${persona.topic}`,
            children: Img({ src: persona.photo }),
        })
    )
});


app.appendChild(container);
