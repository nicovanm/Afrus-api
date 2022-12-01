import {useState, useEffect} from "react"
import CharacterCard from "./components/CharacterCard";
import Paginate from "./components/Paginate";
import axios from "axios"
import "./style.css"

function StarWarsCharacters(){
    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(1)

    useEffect(
        function(){
            axios(
                {url:`https://swapi.dev/api/people/?page=${page}`}
            ).then(function(response){
                setCharacters(response.data.results)
                setTotal(response.data.count)
            })
        },
    [page])

    return(
        <section>
            <h1>Star Wars Characters</h1>
            <Paginate setPage={setPage} page={page} total={total}/>
            {
                characters.map(
                    function(character){
                        return <CharacterCard character={character}/>
                    }
                )
            }
        </section>
    )
}

export default StarWarsCharacters;