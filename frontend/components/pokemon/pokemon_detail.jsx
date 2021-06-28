import React from 'react';


class PokemonDetail extends React.Component{
    
    componentDidMount(){
        this.props.requestSinglePokemon(this.props.match.params.pokemonId)
    }

    componentDidUpdate(prevProps){
        if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId){
            this.props.requestSinglePokemon(this.props.match.params.pokemonId)
        } 
    }

    render(){
        debugger
        return(
            <div>
                {this.props.moves.map(move => {
                    return <li key={move.id}> {move.name} </li>
                })}
            </div>
        )
    }
}

export default PokemonDetail