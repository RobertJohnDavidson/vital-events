import Head from "next/head";
import { type NextPage } from "next";
import { FormEvent, useState } from "react";
import validator from "validator";

const Join: NextPage = () => {
  const [email, setEmail] = useState<boolean>(true);
  const [firstName, setFirstName] = useState<boolean>(true);
  const [lastName, setLastName] = useState<boolean>(true);
  const [phone, setPhone] = useState<boolean>(true);
  const [city, setCity] = useState<boolean>(true);
  const [state, setState] = useState<boolean>(true);
  const [zip, setZip] = useState<boolean>(true);
  const [age, setAge] = useState<boolean>(true);
  const [twitter, setTwitter] = useState<boolean>(true);
  const [instagram, setInstagram] = useState<boolean>(true);
  const [facebook, setFacebook] = useState<boolean>(true);
  const [tiktok, setTiktok] = useState<boolean>(true);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Read the form data

    const form = e.target as HTMLFormElement;
    const target = e.target as typeof e.target & {
      email: { value: string };
    };

    // // Validate the form data
    // if (!validator.isEmail(data.email)) {
    //   setEmail(false);
    // }
    // if (!validator.isAlpha(data.firstName)) {
    //   setFirstName(false);
    // }
    // if (!validator.isAlpha(data.lastName)) {
    //   setLastName(false);
    // }
    // if (!validator.isMobilePhone(data.phone)) {
    //   setPhone(false);
    // }
    // if (!validator.isAlpha(data.city)) {
    //   setCity(false);
    // }
    // if (!validator.isAlpha(data.state)) {
    //   setState(false);
    // }
    // if (!validator.isPostalCode(data.zip, "US")) {
    //   setZip(false);
    // }
    // if (!validator.isInt(data.age)) {
    //   setAge(false);
    // }

    for (const [key, value] of Object.entries(data)) {
      console.log(`${key}: ${value}`);
    }

    console.log("submitted");
  };
  return (
    <>
      <Head>
        <title>Events</title>
        <meta name="description" content="Join the Vital street team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div></div>
      <main className="flex flex-grow flex-col items-center bg-white">
        <h1 className="p-4 text-center text-4xl font-bold text-gray-800">
          Join the Vital Street Team
        </h1>
        <p className="max-w-4xl pb-8 text-center font-medium">
          Join one of the best street teams in the country! Connect with other
          fans, earn free tickets, chances to meet artists, and so much more.
          Fill out the form below and someone from Vital will contact you with
          more information!
        </p>
        <form method="POST" onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
              <label
                className={`mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700 ${
                  !firstName ? "border-red-400" : ""
                }`}
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded border bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                id="grid-first-name"
                name="firstName"
                type="text"
                placeholder="Jane"
              />
            </div>
            <div className="w-full px-3 md:w-1/2">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-last-name"
                name="lastName"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="-mx-3 mb-2 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:w-1/2">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-city"
              >
                City
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-city"
                name="city"
                type="text"
                placeholder="San Francisco"
              />
            </div>
            <div className="mb-6 w-full px-3  md:w-1/2">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-state"
              >
                State
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-state"
                name="state"
                type="text"
                placeholder="California"
              />
            </div>
            <div className="mb-6 w-full p-3 md:mb-0 ">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-email"
              >
                Email Address
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-email"
                name="email"
                type="text"
                placeholder="you@gmail.com"
              />
            </div>
            <div className="mb-6 w-full p-3 md:mb-0 ">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-phone"
              >
                Phone Number
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-phone"
                name="phone"
                type="text"
                placeholder="(xxx) xxx-xxxx"
              />
            </div>
            <div className="mb-6 w-full p-3 md:mb-0 ">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-age"
              >
                Age
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-age"
                name="age"
                type="text"
              />
            </div>
            <div className="mb-6 w-full p-3 md:mb-0 ">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-college"
              >
                Are you attending college?
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-college"
                name="college"
                type="text"
              />
            </div>
            <div className="mb-6 w-full p-3 md:mb-0 ">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-which-college"
              >
                Which college?
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-which-college"
                name="whichCollege"
                type="text"
              />
            </div>
            <div className="mb-6 flex gap-2">
              <div className=" w-full px-3 md:mb-0 md:w-1/3">
                <label
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                  htmlFor="grid-event-before"
                >
                  Have you atteneded a Vital event before?
                </label>
                <div className="relative">
                  <select
                    className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                    name="eventBefore"
                    id="grid-event-before"
                  >
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className=" w-full px-3 md:mb-0 md:w-1/3">
                <label
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                  htmlFor="grid-per-month"
                >
                  How many events do you attened per month?
                </label>
                <div className="relative">
                  <select
                    className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                    id="grid-per-month"
                    name="perMonth"
                  >
                    <option>0</option>
                    <option>1-2</option>
                    <option>3-4</option>
                    <option>5+</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className=" w-full px-3 md:mb-0 md:w-1/3">
                <label
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                  htmlFor="grid-car"
                >
                  Do you own or have regular access to a car?
                </label>
                <div className="relative">
                  <select
                    className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                    id="grid-car"
                    name="car"
                  >
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-6 w-full p-3 md:mb-0 ">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-which-fb"
              >
                Facebook Profile URL and Number of Friends
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-fb"
                name="fb"
                type="text"
              />
            </div>
            <div className="mb-6 w-full p-3 md:mb-0 ">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-which-ig"
              >
                Instagram Handle and Number of Followers
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-ig"
                name="ig"
                type="text"
              />
            </div>
            <div className="mb-6 w-full p-3 md:mb-0 ">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-which-tw"
              >
                Twitter Handle and Number of Followers
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-tw"
                name="tw"
                type="text"
              />
            </div>
            <div className="mb-6 w-full p-3 md:mb-0 ">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-which-tiktok"
              >
                Tiktok Handle and Number of Followers
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-tiktok"
                name="tiktok"
                type="text"
              />
            </div>
          </div>
          <div className="mb-2 flex justify-center">
            <button
              type="submit"
              className=" rounded-sm bg-purple-800 p-2 text-lg font-bold text-gray-100 shadow-md hover:bg-purple-600"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
    </>
  );
};
export default Join;
