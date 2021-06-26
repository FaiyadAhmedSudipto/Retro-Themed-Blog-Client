import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import BlogsNavbar from '../Shared/Navbar/BlogsNavbar/BlogsNavbar';


const TechBlogsDetails = () => {
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [event, setEvent] = useState({});

    useEffect(() => {
        fetch(`https://peaceful-cove-62946.herokuapp.com/events/${id}`)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [id])

    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date()
    });

    const handleCheckInDate = (date) => {
        const newDates = { ...selectedDate }
        newDates.checkIn = date;
        setSelectedDate(newDates);
    };

    const handlePaymentSuccess = () => {
        const newBooking = { ...loggedInUser, ...selectedDate, ...event }
        fetch("https://peaceful-cove-62946.herokuapp.com/addBooking", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <section>
            <BlogsNavbar />
            <div style={{ textAlign: 'center' }}>
                <div class="card">
                    <h3 class="card-header">{event.type}BLog Page</h3>

                    <div class="card-body">
                        <h4 class="card-title">{event.blogsName}</h4>
                        <h5 className="card-title text-dark">Written By {event.writer}, From {event.from} In {event.date}</h5>
                    </div>
                </div>

                <div className="text-center pt-3 pb-3" >
                    <img class="rounded mx-auto d-block" src={event.imageURL} alt="..." />
                </ div>
            </div>
            <div class="lh-lg">
                <p className="text-start mx-5 px-5">{event.details}</p>
            </div>
        </ section>

        /* <button onClick={handleBooking} variant="contained" class="btn btn-outline-info" color="primary">Book Now</button> */
        /* <div className="mx-5"
                        <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                        <button onClick={handlePaymentSuccess} variant="contained" class="btn btn-outline-info" color="primary">Book Now</button>
                    </div> */
    );
};

export default TechBlogsDetails;