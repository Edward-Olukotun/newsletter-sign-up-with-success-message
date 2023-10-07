import React, { useState } from "react";
import Desktop from "../component/assets/images/illustration-sign-up-desktop.svg";
import Mobile from "../component/assets/images/illustration-sign-up-mobile.svg";
import Check from "../component/assets/images/icon-list.svg";

function Home() {
  const [page, setPage] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };

  const dismiss = (event) => {
    event.preventDefault();
    setEmail("");
    setMessage("");
    setPage(!page);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("");
    const isValidEmail = validateEmail(email);

    if (isValidEmail) {
      console.log("Form submitted!");
      setPage(true);
    } else {
      console.log("wahala");
      setMessage("Valid email required");
    }
  };

  return (
    <div className=" md:bg-Charcoal pb-[235px] flex justify-center h-fit text-DarkSlateGrey text-sm ">
      {page ? (
        <div className="bg-Charcoal h-[800px]">
          <div className="bg-white w-[80%] mx-auto mt-[35%] md:mt-[150px] md:w-[40%] p-8 rounded-2xl bg-White  ">
            <img src={Check} alt="check" className="mr-2 w-[35px] my-2 " />
            <p className="text-4xl w-50% text-start text-DarkSlateGrey font-bold">
              Thanks for subscribing!
            </p>
            <p className="my-4">
              A confirmation email has been sent to{" "}
              <span className="font-bold">{email}</span> Please open it and
              click the button inside to confirm your subscription.
            </p>
            <button
              onClick={dismiss}
              className="w-full bg-DarkSlateGrey hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-White hover:bg-gradient-to-b from-Tomato to-Tomato/50"
            >
              Dismiss message
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-White md:w-[80%] lg:w-[60%] md:mx-auto  md:rounded-xl md:mt-[70px] lg:mt-[105px] bg-white md:flex-row-reverse md:flex md:items-center md:h-[100%]  font-medium">
          <div className="md:w-[50%] mx-auto  h-[450px]">
            <img className=" md:hidden w-full" src={Mobile} alt="Mobile" />
            <img
              className="hidden md:block  w-[280px] lg:w-[350px] rounded-xl object-cover ml-8 md:mt-[20px] md:h-[90%]"
              src={Desktop}
              alt="Desktop"
            />
          </div>
          <div className="md:w-[50%] mt-[-100px] md:mt-0 ">
            <div className="mx-auto  w-[90%] ">
              <h1 className="text-5xl text-center text-DarkSlateGrey font-bold mb-2">
                Stay updated!
              </h1>
              <p className="mx-4 w-full my-3 pt-2">
                Join 60,000+ product managers receiving monthly updates on:
              </p>
              <div className="ml-4 my-3">
                <section className="flex">
                  <img
                    className="mr-2 w-[15px] my-2 "
                    src={Check}
                    alt="check mark"
                  />
                  <p className="mt-[3px]">
                    Product discovery and building what matters
                  </p>
                </section>
                <section className="flex">
                  <img
                    className="mr-2 w-[15px] my-2 "
                    src={Check}
                    alt="check mark"
                  />
                  <p className="mt-[3px]">
                    Measuring to ensure updates are a success{" "}
                  </p>
                </section>
                <section className="flex">
                  <img
                    className=" mr-2 w-[15px] my-2"
                    src={Check}
                    alt="check mark"
                  />
                  <p className="mt-[3px]">And much more!</p>
                </section>
              </div>
              <div className="mx-4">
                <div className="flex justify-between">
                  <p>Email address</p>
                  <p className="text-Tomato">{message}</p>
                </div>
                <input
                  className="my-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline text-gray-700 h-full w-full m-b-2 p-2 placeholder:text-gray-500 invalid:border-Tomato invalid:text-Tomato"
                  type="email"
                  placeholder="email@company.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="w-full bg-DarkSlateGrey text-White hover:bg-gradient-to-b from-Tomato to-Tomato/50 text-white font-bold py-2 px-4 rounded"
                >
                  Subscribe to monthly newsletter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
