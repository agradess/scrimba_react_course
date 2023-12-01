
// seems like the React interpreter is converting numbers to strings automatically
// so I guess I don't need to use something like toString() ? 


// Quick practice with .map() function, can remove later:
// const names = ["alice"]
// const names_lst = names.map((name) => name[0].toUpperCase + name.slice(1) )

// function MappedColors() {
//     const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

//     return (
//         <div>
//             { colors.map((color) => `<p>${color}</p>`) }
//         </div>
//     )
// }


function Card(props) {
    
    // let full_img_path = 
    /* <span className="card_status">SOLD OUT</span> */

    return (
        <div className="card_container">
            
            <div className="photo_container">
                <img src={`./../images/${props.img}`} className="card_img"></img>
            </div>

            <div className="card_desc">
                <p className="card_stats">
                    <img src="../images/star_rating.png" className="card_rating_star"></img>
                    <span className="card_rating">{props.rating}</span>
                    <span className="card_num_ratings gray">({props.review_count})</span>
                    <span className="card_natl gray">{props.location}</span>
                </p>
                <p>{props.title}</p>
                <p><span className="card_price bold">From ${props.price}</span> / person</p>
            </div>
            
        </div>
    )
}