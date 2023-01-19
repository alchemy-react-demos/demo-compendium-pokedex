# Compendium Plan!

## Components

- Main.js
  -State:
  - [pokemon, setPokemon]
  - [types, setTypes]
  - [selectedType, setSelectedType]
  - [query, setQuery]
  - useEffect
    - calls pokemon API and sets the _INITIAL_ pokemon state
    - calls the types API and get the types
  - Controls.js
    - Select.js
    - Query.js
  - PokeCard.js

## Plan

1. Get Main component loading and showing the first 20 pokemon
1. Get the select dropdown displaying the different types
