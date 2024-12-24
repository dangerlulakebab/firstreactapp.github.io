import pfp from "./assets/pfp.webp"

function Card() {
    return(
        <div className="card">
            <img className="image" src={pfp} alt="profile picture" />
            <h2>Kebab</h2>
            <p>I am student, i like to play video games.</p>
        </div>
    )
}

export default Card