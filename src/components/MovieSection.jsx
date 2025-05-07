import { dataCard } from "../data/landing"
import MovieCard from "./MovieCard"
const MovieSection = () => {
    return (
        <div>
            <h4>Win or lose</h4>
            <h4>Careers at Pixar</h4>
            <h4>Meet the pickles</h4>
            <div>
                {dataCard.map((data) => (
                    <MovieCard key={data.id}{...data} />
                ))}
            </div>
        </div>
    )
}
export default MovieSection