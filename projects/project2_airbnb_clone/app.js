
// import { get_airbnb_data } from "./airbnb_experiences"

const airbnb_experiences = [
    {
        id: 1,
        img: "katie_zaferes.jpeg",
        rating: "5.0",
        review_count: 6,
        location: "USA",
        title: "Life Lessons with Katie Zaferes",
        price: 136
    },
    {
        id: 2,
        img: "wedding_photography.jpg",
        rating: "4.3",
        review_count: 30,
        location: "USA",
        title: "Learn Wedding Photography",
        price: 59
    },
    {
        id: 3,
        img: "mountain_biking.jpg",
        rating: "3.9",
        review_count: 21,
        location: "USA",
        title: "Group Mountain Biking",
        price: 110
    },
    {
        id: 4,
        img: "rock_climbing.jpg",
        rating: "4.9",
        review_count: 3,
        location: "USA",
        title: "Group Rock Climbing",
        price: 250
    },
    {
        id: 5,
        img: "michael_phelps.jpg",
        rating: "4.8",
        review_count: 43,
        location: "USA",
        title: "Conquering the Pool with Michael Phelps",
        price: 75
    },
    {
        id: 6,
        img: "indian_food.jpg",
        rating: "3.8",
        review_count: 9,
        location: "USA",
        title: "Indian Cooking 101",
        price: 50
    },
    {
        id: 7,
        img: "sculpting_clay.jpg",
        rating: "4.1",
        review_count: 34,
        location: "USA",
        title: "Virtual Group Sculpting Class",
        price: 125
    }
]


function App() {
    
    const cards = airbnb_experiences.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <div id="app_container">
            <Navbar />
            <Hero />
            <section className="cards_list">
                {cards}
            </section>
        </div>
    )
}