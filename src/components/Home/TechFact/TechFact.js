import React, { useEffect, useState } from 'react';
import TechFactMap from '../TechFactMap/TechFactMap';
import './TechFact.css';


const TechFact = () => {
    const [reviews, setReviews] = useState([]);

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

    useEffect(() => {
        fetch('https://peaceful-cove-62946.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="fw-bold">One Minute Tech Fact</h2>
                    <h5 className="text-muted">1 Minute to learn today's tech world!</h5>
                </div>
                <div className="card-deck mt-5 row">
                    {
                        reviews.map(review => <TechFactMap review={review} key={review.name} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default TechFact;