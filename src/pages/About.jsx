import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  // using tailwind for styling
  return (
    <Layout>
      <div className="text-center py-8 bg-gray-50">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">
          About Poetically
        </h1>
      </div>

      <main className="mt-8 max-w-3xl mx-auto px-6 text-gray-700 space-y-6">
        <section>
          <p className="text-base leading-relaxed">
            Welcome to <strong>Poetically</strong> – A Place for Words to
            Flourish. At Poetically, we believe that words hold immense power.
            From fleeting thoughts to deep emotions, poetry provides an outlet
            to express, reflect, and connect. Whether you’re a seasoned writer
            or someone just starting to explore the art, Poetically is a space
            for creativity to blossom.
          </p>

          <br />

          <p className="text-base leading-relaxed">
            <strong>Our Vision and Future Offering :</strong>
          </p>

          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>
              <strong>Personalized Dashboards:</strong> Manage your writings,
              drafts, and saved works all in one place.
            </li>
            <li>
              <strong>Collaborative Community:</strong> Engage with others,
              comment on your favorite works, and be inspired by diverse writing
              styles styles.
            </li>
            <li>
              <strong>Seamless Experience:</strong> Easily share your work with
              the world, or keep it private in your drafts – the choice is
              yours.
            </li>
            <li>
              <strong>Inspiring Themes:</strong> Explore composition that
              resonate with your emotions, thoughts, and aspirations.
            </li>
          </ul>

          <br />

          <p className="text-base leading-relaxed">
            Whether you're here to showcase your art or simply to enjoy the
            creativity of others, Poetically is more than just a website – it's
            a home for your creative journey.
          </p>
        </section>

        <section className="bg-white py-12">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <img
              src="/public/earth-error.png"
              alt="Poetry Earth"
              className="w-full max-w-md mx-auto mb-8"
            />
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default About;
