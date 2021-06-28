import React from 'react';


class PokemonIndexItem extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <li>
                <span>{this.props.pokemon.id}</span>
                <span>{this.props.pokemon.name}</span>
                <img src={this.props.pokemon.imageUrl}/>
            </li>
        )
    }
}

export default PokemonIndexItem