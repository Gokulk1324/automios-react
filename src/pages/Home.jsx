import Card from "../components/Card.jsx";
const services = [
    {
        slug: "web-development",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        title: "Web Development",
        description: "We build responsive websites"
    },
    {
        slug: "app-development",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        title: "App Development",
        description: "Modern application development"
    },
    {
        slug: "digital-marketing",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        title: "Digital Marketing",
        description: "Grow your business online"
    }
];

function Home() {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "40px" }}>

            {services.map((service, index) => (
                <Card
                    key={index}
                    slug={service.slug}
                    image={service.image}
                    title={service.title}
                    description={service.description}
                />
            ))}
        </div>
    );
}

export default Home;