import React from 'react'
import { connect } from 'react-redux'
import { requestSinglePokemon } from '../../actions/pokemon_actions'
import { selectPokemonMovesNames } from '../../reducers/selectors'
import PokemonDetail from './pokemon_detail'


const mapStateToProps = (state, ownProps) => {
    return ({
        pokemon: state.entities.pokemon[ownProps.match.params.pokemonId],
        items: state.entities.items,
        moves: selectPokemonMovesNames(state)
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        requestSinglePokemon: (pokemon) => dispatch(requestSinglePokemon(pokemon))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)