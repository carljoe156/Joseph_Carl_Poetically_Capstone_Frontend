import React from "react";
import Layout from "../components/Layout/Layout";

// using tailwind css styling
const Discover = () => {
  return (
    <Layout>
      <section
        className="bg-white-400 white:bg-gray-900"
        aria-label="Blog section"
      >
        <div className="container px-6 py-10 mx-auto">
          <h1
            className="text-6xl font-semibold text-grey-800 capitalize lg:text-4xl text-red-700"
            aria-labelledby="discover-title"
          >
            Our BLOG Get Inspired, Let the Creativity Flow!
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            <div
              className="lg:flex"
              role="article"
              aria-labelledby="blog-post-1"
            >
              <img
                className="object-cover w-full h-60 rounded-lg lg:w-65"
                src="https://plus.unsplash.com/premium_vector-1682269987925-1949d7ecc68d?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80"
                alt="Where to Find Inspiration for Your Poems"
                aria-hidden="true"
              />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="/blog1"
                  className="text-xl font-semibold text-gray-800 hover:underline dark:text-dark"
                  id="blog-post-1"
                  aria-label="Read about how to use sticky notes for problem solving"
                >
                  Where to Find Inspiration for Your Poems
                </a>
                <span className="text-sm text-gray-800 dark:text-gray-300">
                  On: 28 December 2024
                </span>
              </div>
            </div>

            <div
              className="lg:flex"
              role="article"
              aria-labelledby="blog-post-2"
            >
              <img
                className="object-cover w-full h-60 rounded-lg lg:w-65"
                src="https://plus.unsplash.com/premium_vector-1682303497498-effd218aed59?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80"
                alt="This is How to Prepare the Perfect Space to Write"
                aria-hidden="true"
              />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="/blog2"
                  className="text-xl font-semibold text-gray-800 hover:underline dark:text-dark"
                  id="blog-post-2"
                  aria-label="This is How to Prepare the Perfect Space to Write"
                >
                  How to Prepare the Perfect Space to Write
                </a>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  On: 27 December 2024
                </span>
              </div>
            </div>

            <div
              className="lg:flex"
              role="article"
              aria-labelledby="blog-post-3"
            >
              <img
                className="object-cover w-full h-60 rounded-lg lg:w-65"
                src="https://plus.unsplash.com/premium_vector-1682301123418-edb39ebbf136?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80"
                alt="Setting your New Year’s resolutions as a poet"
                aria-hidden="true"
              />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="/blog3"
                  className="text-xl font-semibold text-gray-800 hover:underline dark:text-dark"
                  id="blog-post-3"
                  aria-label="Setting your New Year’s resolutions as a poet"
                >
                  Setting your New Year’s resolutions as a poet
                </a>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  On: 26 December 2024
                </span>
              </div>
            </div>

            <div
              className="lg:flex"
              role="article"
              aria-labelledby="blog-post-4"
            >
              <img
                className="object-cover w-full h-60 rounded-lg lg:w-65"
                src="https://plus.unsplash.com/premium_vector-1682304147114-136900e54e76?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80"
                alt="Overcoming Writer’s Block as a Poet"
                aria-hidden="true"
              />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="/blog4"
                  className="text-xl font-semibold text-gray-800 hover:underline dark:text-dark"
                  id="blog-post-4"
                  aria-label="Overcoming Writer’s Block as a Poet"
                >
                  Overcoming Writer’s Block as a Poet
                </a>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  On: 24 December 2024
                </span>
              </div>
            </div>

            <div
              className="lg:flex"
              role="article"
              aria-labelledby="blog-post-5"
            >
              <img
                className="object-cover w-full h-60 rounded-lg lg:w-65"
                src="https://plus.unsplash.com/premium_vector-1682304025974-969b50c7fe92?q=80&w=2046&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80"
                alt=" The Art of Writing Poetic Imagery"
                aria-hidden="true"
              />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="/blog5"
                  className="text-xl font-semibold text-gray-800 hover:underline dark:text-dark"
                  id="blog-post-5"
                  aria-label=" The Art of Writing Poetic Imagery"
                >
                  The Art of Writing Poetic Imagery
                </a>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  On: 21 December 2024
                </span>
              </div>
            </div>

            <div
              className="lg:flex"
              role="article"
              aria-labelledby="blog-post-6"
            >
              <img
                className="object-cover w-full h-60 rounded-lg lg:w-65"
                src="https://plus.unsplash.com/premium_vector-1682303320803-daf0d02721cb?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80"
                alt="Embrace the Blank Page"
                aria-hidden="true"
              />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="/blog6"
                  className="text-xl font-semibold text-gray-800 hover:underline dark:text-dark"
                  id="blog-post-6"
                  aria-label="Embrace the Blank Page"
                >
                  Embrace the Blank Page
                </a>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  On: 20 December 2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Discover;
