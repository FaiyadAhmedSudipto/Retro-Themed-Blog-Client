import React, { useEffect, useState } from 'react';
import { css } from "@emotion/core";
import TechBlogsMap from '../TechBlogsMap/TechBlogsMap';

const TechBlogs = () => {
    
    const [events, setEvents] = useState([]);

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

    useEffect(() => {
        fetch('https://peaceful-cove-62946.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h2 className="fw-bold">Tech Blogs</h2>
                <h5 className="text-muted">Latest Tech world news and blogs are here.</h5>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-3 pt-3">
                    {
                        events.map(event => <TechBlogsMap event={event}></TechBlogsMap>)
                        // serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
                </div>
            </div>
        </section >
    );
};

export default TechBlogs;