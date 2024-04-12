import pngPicture from "./assets/bolt.png";

function Card() {
    return (
        <div className="card">
            {/* <img src="https://via.placeholder.com/150" alt="profile picture"></img> */}
            <img className="card-image" src={pngPicture} alt="profile picture"></img>
            <h2 className="card-title">Evert Code</h2>
            <p className="card-text" >I made FullStack training and I like to play videogames</p>
        </div>
    );
}

export default Card