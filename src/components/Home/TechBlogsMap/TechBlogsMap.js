import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router';
import "./TechBlogsMap.css"

const TechBlogsMap = ({ event }) => {
    // const deleteEvent = id => {}
    const history = useHistory()
    const handleBook = (_id) => {
        history.push(`/book/${_id}`);
    }
    return (
        // <div className="justify-content-center">
        //     <div className="col-md-4  pb-5">
        //         <div className="card" style={{ width: '18rem' }}>
        //             <img class="card-img-top" src={event.imageURL} alt="" />
        //             <div class="card-body">
        //                 <h5 className="card-title mt-3 mb-3">{event.blogsName}</h5>
        //                 <p className="card-text">{event.details}</p>
        //                 <button className="col btn btn-dark-blue" onClick={() => handleBook(event._id)}>Order It</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <section className="col-md-6 d-flex justify-content-center">
            <div class="card mb-3" style={{ maxWidth: '650px' }}>
                <div class="row g-0">
                    <div class="col-md-5">
                        <img src={event.imageURL} class="img-fluid rounded-start" alt="..." />
                    </div>

                    <div class="col-md-7">
                        <div class="card-body">
                            <h4 class="card-title">{event.blogsName}</h4>
                            <p class="card-text">{event.shortDescription}</p>
                            {/* <h5 className="card-text text-dark">{review.name}</h5> */}
                            <p className="card-text text-dark fst-italic">{event.writer}, {event.from} / {event.date}</p>
                            {/* <p className="card-text text-muted">{review.date}, {review.from}</p> */}
                            <p className="card-text text-muted"></p>
                            <button className="btn btn-outline-dark" onClick={() => handleBook(event._id)}>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechBlogsMap;