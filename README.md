# Compendium Plan!

## Components

- Main.js
  - Controls.js
    - Select.js
      - onChange - handleTypeChange
    - Query.js
  - PokeCard.js

## usePokemon hook

-State:

- [x] [pokemon, setPokemon]
- [x] [types, setTypes]
- [selectedType, setSelectedType]
- [query, setQuery]
- useEffect
  - [x] calls pokemon API and sets the _INITIAL_ pokemon state
  - [x] calls the types API and get the types
- functions
  - handleTypeChange
    - sets the selectedType state
    - call the API with the selected Type
    - update the pokemon state with the API response data

## Plan

- [x] Get Main component loading and showing the first 20 pokemon
- [x] Get the select dropdown displaying the different types
- [ ] Get the select dropdown working
