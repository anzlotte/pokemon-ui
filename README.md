# Bienvenido al repositorio de Andres Lote

## Descripción

**Poke-Evolucion**  es una proyecto desarrollada con Cells y LitElement que permite interactuar con la API pública de Pokémon (PokeAPI) para obtener información sobre Pokémon y sus cadenas de evolución. Esta clase facilita la recuperación de detalles como nombres, imágenes, tipos y descripciones de los Pokémon, así como la estructura de sus evoluciones.

## Funcionalidades

- **Obtener Pokémons**: Recupera una lista de cadenas de evolución de Pokémon, junto con sus detalles específicos.
- **Detalles de Pokémon**: Obtiene información detallada sobre un Pokémon, incluyendo su imagen, tipos y descripciones.
- **Evoluciones de Pokémon**: Permite acceder a la cadena de evolución de un Pokémon dado, incluyendo sus evoluciones y sub-evoluciones.

## Métodos

### `obtenerPokemones()`

- **Descripción**: Llama a la API para obtener las cadenas de evolución y recoge los detalles de cada Pokémon.
- **Retorno**: Un array con objetos que contienen información detallada de los Pokémon.

### `obtenerDetallePokemon(pokemonName, id)`

- **Descripción**: Obtiene los detalles de un Pokémon específico, incluyendo su imagen y descripción.
- **Parámetros**:
 - **pokemonName**: Nombre del Pokémon a buscar.
  - ** id**`: ID del Pokémon.
- **Retorno**: Un objeto con los detalles del Pokémon.

### `obtenerEvoluciones(id)`

- **Descripción**: Recupera la cadena de evolución de un Pokémon específico utilizando su ID.
- **Parámetros**:
  - ** id**: ID de la cadena de evolución a consultar.
- **Retorno**: Un array que contiene el Pokémon base y sus evoluciones.

## Instalación

Para utilizar este proyecto, asegúrate de tener instalado un entorno de desarrollo de Cells junto con LitElement. Una vez que hayas clonado el proyecto, ejecuta el siguiente comando en la terminal:
```bash
cells lit-component:serve