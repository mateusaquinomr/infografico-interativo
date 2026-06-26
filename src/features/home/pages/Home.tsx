import Hero from "../components/hero/Hero";
import ExpressionForms from "@/features/registry-books/pages/ExpressionForms";
import Concepts from "../components/concepts/Concepts";
import About from "../components/about/About";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Concepts />
            <ExpressionForms />
        </>
    );
};

export default Home;