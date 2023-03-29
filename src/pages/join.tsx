import Head from "next/head";
import { type NextPage } from "next";
import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";

type Inputs = {
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  email: string;
  phone: string;
  age: number;
  attendingCollege: string;
  whichCollege?: string;
  eventBefore: string;
  eventsPerMonth: string;
  car: string;
  facebook: string;
  instagram: string;
  twitter: string;
  tiktok: string;
};
const Join: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const form = useRef<HTMLFormElement>(null);
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        form.current as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const attendingCollege = watch("attendingCollege");
  const requiredField = () => {
    return (
      <span className="text-xs italic text-red-500">
        Please fill out this field.
      </span>
    );
  };
  return (
    <>
      <Head>
        <title>Events</title>
        <meta name="description" content="Join the Vital street team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div></div>
      <main className="flex flex-grow flex-col items-center bg-white p-4">
        <h1 className="p-4 text-center text-4xl font-bold text-gray-800">
          Join the Vital Street Team
        </h1>
        <p className="max-w-4xl pb-8 text-center font-medium">
          Join one of the best street teams in the country! Connect with other
          fans, earn free tickets, chances to meet artists, and so much more.
          Fill out the form below and someone from Vital will contact you with
          more information!
        </p>
        <form
          ref={form}
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-lg"
        >
          <div className="-mx-3 flex flex-wrap">
            <div className="my-3 w-full px-3 md:mb-0 md:w-1/2">
              <label
                className={`mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700`}
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className=" block w-full appearance-none rounded border bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                {...register("firstName", { required: true })}
              />
              {/* errors will return when field validation fails  */}
              {errors.firstName && requiredField()}
            </div>
            <div className="my-3 w-full  px-3 md:w-1/2">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-last-name"
                {...register("lastName", { required: true })}
                type="text"
                placeholder="Doe"
              />
              {errors.lastName && requiredField()}
            </div>
          </div>
          <div className="-mx-3 mb-2 flex flex-wrap">
            <div className="my-3 w-full px-3 md:w-1/2">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-city"
              >
                City
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-city"
                {...register("city", { required: true })}
                type="text"
                placeholder="San Francisco"
              />
              {errors.city && requiredField()}
            </div>
            <div className="my-3 w-full px-3  md:w-1/2">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-state"
              >
                State
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-state"
                {...register("state", { required: true })}
                type="text"
                placeholder="California"
              />
              {errors.state && requiredField()}
            </div>
            <div className="my-3 w-full px-3 md:mb-0 ">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-email"
              >
                Email Address
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-email"
                {...register("email", { required: true })}
                type="text"
                placeholder="you@gmail.com"
              />
              {errors.email && requiredField()}
            </div>
            <div className="my-3 w-full px-3 md:mb-0 ">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-phone"
              >
                Phone Number
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-phone"
                {...register("phone", { required: true })}
                type="text"
                placeholder="(xxx) xxx-xxxx"
              />
              {errors.phone && requiredField()}
            </div>
            <div className="my-3 w-full px-3 md:mb-0 ">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-age"
              >
                Age
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-age"
                {...register("age", { required: true })}
                type="number"
              />
              {errors.age && requiredField()}
            </div>

            <div className=" my-3 flex w-full flex-col justify-between px-3">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-event-before"
              >
                Are You Attending College?
              </label>
              <div className="relative">
                <select
                  className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  {...register("attendingCollege", { required: true })}
                  id="grid-event-before"
                >
                  <option>Yes</option>
                  <option selected>No</option>
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
                {errors.eventBefore && requiredField()}
              </div>
            </div>
            {attendingCollege === "Yes" && (
              <div className="mb-3 w-full px-3 md:mb-0 ">
                <label
                  className="my-3 block text-xs font-bold uppercase tracking-wide text-gray-700"
                  htmlFor="grid-which-college"
                >
                  Which college?
                </label>
                <input
                  className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="grid-which-college"
                  {...register("whichCollege")}
                  name="whichCollege"
                  type="text"
                />
                {errors.whichCollege && requiredField()}
              </div>
            )}
            <div className="my-3 flex gap-2">
              <div className=" flex w-full flex-col justify-between px-3 md:mb-0 md:w-1/3">
                <label
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                  htmlFor="grid-event-before"
                >
                  Have you atteneded a Vital event before?
                </label>
                <div className="relative">
                  <select
                    className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                    {...register("eventBefore", { required: true })}
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
                  {errors.eventBefore && requiredField()}
                </div>
              </div>
              <div className="flex w-full flex-col  justify-between px-3 md:mb-0 md:w-1/3">
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
                    {...register("eventsPerMonth", { required: true })}
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
                  {errors.eventsPerMonth && requiredField()}
                </div>
              </div>
              <div className="flex w-full flex-col justify-between px-3 md:mb-0 md:w-1/3">
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
                    {...register("car", { required: true })}
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
                  {errors.car && requiredField()}
                </div>
              </div>
            </div>
            <div className="my-3 w-full px-3 md:mb-0 ">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-which-fb"
              >
                Facebook Profile URL and Number of Friends
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-fb"
                {...register("facebook", { required: true })}
                type="text"
              />
              {errors.facebook && requiredField()}
            </div>
            <div className="my-3 w-full px-3 md:mb-0 ">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-which-ig"
              >
                Instagram Handle and Number of Followers
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-ig"
                {...register("instagram", { required: true })}
                type="text"
              />
              {errors.instagram && requiredField()}
            </div>

            <div className="my-3 w-full px-3 md:mb-0 ">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-which-tw"
              >
                Twitter Handle and Number of Followers
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-tw"
                {...register("twitter", { required: true })}
                type="text"
              />
              {errors.twitter && requiredField()}
            </div>
            <div className="my-3 w-full px-3 md:mb-0 ">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-which-tiktok"
              >
                Tiktok Handle and Number of Followers
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-tiktok"
                {...register("tiktok", { required: true })}
                type="text"
              />
              {errors.tiktok && requiredField()}
            </div>
          </div>
          <div className="my-6 flex justify-center">
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
