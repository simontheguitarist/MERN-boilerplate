import { useEffect, useState } from "react";

// components
import BoilerplateDetails from "../components/BoilerplateDetails";

const Home = () => {
    const [boilerplates, setBoilerplates] = useState(null);

    useEffect(() => {
        const fetchBoilerplates = async () => {
            try {
                const response = await fetch(
                    "http://localhost:4000/api/boilerplates"
                );
                const json = await response.json();
                setBoilerplates(json);
            } catch (error) {
                console.error("Error fetching boilerplates:", error);
            }
        };

        fetchBoilerplates();
    }, []);

    return (
        <div className="home">
            <div className="boilerplates">
                {boilerplates &&
                    boilerplates.map((boilerplate) => (
                        <BoilerplateDetails
                            boilerplate={boilerplate}
                            key={boilerplate._id}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Home;
