export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="about-subtext">Little Lemon sprang to life in 2010, thanks to two charismatic Italian brothers,
                     Adrian and Mario. Despite Chicago's melting pot of cultures, the brothers noticed a glaring absence of
                      Mediterranean cuisine and decided to sprinkle a bit of Italy into the Windy City. Fast forward over a 
                      decade, and these two culinary wizards are still whipping up magic at Little Lemon, making Chicago a tastier 
                      place, one lemon at a time!.</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('../../../assets/food/food3.jpeg')} alt="Little Lemon restaurant cuisine 1"></img>
                <img className="about-2" src={require('../../../assets/food/food2.jpeg')} alt="Little Lemon restaurant cuisine 2"></img>
            </section>
    </article>
    );
}