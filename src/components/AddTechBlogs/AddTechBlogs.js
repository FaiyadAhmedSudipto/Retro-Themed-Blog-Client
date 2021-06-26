import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import "../Home/Header/HeaderControl/Header.css";
import addBlogsBg from '../../images/addBlogsBg.png'
import RealAdminNavbar from '../Shared/Navbar/AdminNavbar/RealAdminNavbar';

const AddTechBlogs = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setIMageURL] = useState(null);


  const onSubmit = data => {
    const eventData = {
      type: data.blogType,
      blogsName: data.name,
      shortDescription: data.shortDescription,
      details: data.details,
      writer: data.writer,
      date: data.date,
      from: data.from,
      imageURL: imageURL
    };
    const url = `https://peaceful-cove-62946.herokuapp.com/addProduct`;
    console.log(eventData);

    fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(eventData)
    })
      .then(res => console.log('server side response', res))
  };

  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '9096ab08782293a3c1d93a0ab3b3dc63');
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        setIMageURL(response.data.data.display_url);
        console.log(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  return (
    <div>
      <RealAdminNavbar />
      <div className="row align-items-center emailCard  mt-0">
        <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src={addBlogsBg} alt="" />
        </div>
        <div className="col-md-6 shadow p-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="col-sm-15">
              <h3 htmlFor="" className="text-center">Add Blogs</h3>
              <input name="name" type="text" placeholder="Type Of Blog" class="form-control" id="inputPassword" {...register("blogType")} />
            </div>
            <br />

            {/* Blog Name */}
            <div id="align" className="col-sm-15">
              <input name="Details" placeholder="Blog Name" class="form-control" id="inputPassword" {...register("name")} />
            </div>
            <br />

            {/* Short Description */}
            <div id="align" className="col-sm-15">
              <input name="Details" placeholder="Shortly About This Blog" class="form-control" id="inputPassword" {...register("shortDescription")} />
            </div>
            <br />

            {/* Details */}
            <div id="align" className="col-sm-15">
              <input name="Details" placeholder="Describe The Blog" class="form-control" id="inputPassword" {...register("details")} />
            </div>
            <br />

            {/* Writer */}
            <div className="col-sm-15">
              <input name="Price" type="text" placeholder="Writer Name" class="form-control" id="inputPassword" {...register("writer")} />
            </div>
            <br />

            {/* Date */}
            <div className="col-sm-15">
              <input name="Date" type="date" placeholder={new Date()} class="form-control" id="inputPassword" {...register("date")} />
            </div>
            <br />

            {/* From */}
            <div className="col-sm-15">
              <input name="Quantity" type="text" placeholder="Writer Form" class="form-control" id="inputPassword" {...register("from")} />
            </div>
            <br />

            {/* Image */}
            <div className="col-sm-15">
              <input name="exampleRequired" type="file" class="btn btn-outline-light" onChange={handleImageUpload} />
            </div>
            <br />
            <input class=" btn btn-primary" type="submit" value="Submit"></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTechBlogs;