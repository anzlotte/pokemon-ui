import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import '@bbva-web-components/bbva-foundations-grid-tools-layout/bbva-foundations-grid-tools-layout.js';
import '@bbva-web-components/bbva-button-default/bbva-button-default.js';
import '@bbva-web-components/bbva-core-collapse/bbva-core-collapse.js';
import styles from './pokemon-ui.css.js';
import '@pokeEvolution/pokevolution-dm/pokevolution-dm.js';

export class PokemonUi extends LitElement {
  static get properties() {
    return {
      pokemones: { type: Array },
      mostrarEvoluciones: { type: Boolean },
      idEvolucion: { type: Number },
    };
  }

  constructor() {
    super();
    this.pokemones = [];
    this.mostrarEvoluciones = false;
    this.idEvolucion = 0;
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('pokemon-ui-shared-styles'),
    ];
  }

  async firstUpdated() {
    const pokemonDM = this.shadowRoot.querySelector('pokevolution-dm');
    this.pokemones = await pokemonDM.obtenerPokemones(); // Obtiene la lista de Pokémon
  }

  async fetchEvolution(id) {
    const pokemonDM = this.shadowRoot.querySelector('pokevolution-dm');
    this.pokemones = await pokemonDM.obtenerEvoluciones(id); // Obtiene evoluciones del Pokémon
  }

  render() {
    return html`
      <bbva-foundations-grid-tools-layout layout='[{"slot":"single","cols":{"sm":12,"md":12,"lg":12}}]'> 
        <div slot="single">
          <h1>Pokemones</h1>         
          <div class="pokemon-list">
            ${this.pokemones.map((pokemon, index) => html`
              <div class="pokemon">
                <img src="${pokemon.image}" alt="${pokemon.name}" />
                <h3>${pokemon.name}</h3>
                
                <div>
                  <h1>${pokemon.id}</h1>
                  <h4>Type: ${pokemon.types}</h4>
                  
                  <button @click="${() => this.toggle(index)}">Ver Descripción</button>
                  <bbva-core-collapse ?opened="${pokemon.showDescription}">
                    <div class="collapse-content"><p>${pokemon.descripcion}</p></div>
                  </bbva-core-collapse>
                </div>

                ${!this.mostrarEvoluciones ? html`
                  <bbva-button-default size="1" @click="${() => this.mostrarEvolucionesPokemon(pokemon.id)}" tabindex="0">
                    Ver Evolución
                  </bbva-button-default>
                ` : ''}
              </div>
            `)}
          </div>
          ${this.mostrarEvoluciones ? html`
            <bbva-button-default size="1" @click="${() => this.volverAlListado()}" tabindex="0">
              Volver
            </bbva-button-default>
          ` : ''}
        </div>
        <pokevolution-dm></pokevolution-dm>
      </bbva-foundations-grid-tools-layout>
    `;
  }

  toggle(index) {
    this.pokemones[index].showDescription = !this.pokemones[index].showDescription; // Alterna la visibilidad de la descripción
    this.requestUpdate();
  }

  async mostrarEvolucionesPokemon(id) {
    this.mostrarEvoluciones = true;
    this.pokemones = []; // Reinicia la lista de Pokémon
    await this.fetchEvolution(id); // Obtiene las evoluciones
  }

  async volverAlListado() {
    this.mostrarEvoluciones = false; // Vuelve a mostrar la lista de Pokémon
    this.pokemones = []; // Reinicia la lista de Pokémon
    await this.firstUpdated(); // Vuelve a cargar la lista de Pokémon
  }
}
