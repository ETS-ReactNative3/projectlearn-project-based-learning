import React, { Component } from "react";
import Head from "next/head";
import Navbar from "../src/components/Landing/Navbar";
import Splash from "../src/components/Landing/Splash";
import Categories from "../src/components/Landing/Categories";
import Newsletter from "../src/components/Landing/Newsletter";
import Footer from "../src/components/Landing/Footer";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <Head>
          <meta name="ProjectLearn" content="Learn to Code by Creating Projects" />
          <meta
            name="description"
            content="A project-based learning approach in web development, mobile development, game development, machine learning and artificial intelligence. Learn code the right way!"
          />
          <meta
            name="keywords"
            content="project, tutorial, learn code by doing, project based learning, learn code free, web development, app development, game development, machine learning, artificial intelligence"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
          {/* <!--Title--> */}
          <title>ProjectLearn - Learn to Code by Creating Projects</title>
        </Head>
        <div>
          <Navbar />
          <Splash />
          <Categories />
          <Newsletter />
          <Footer />
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
      </div>
    );
  }
}
