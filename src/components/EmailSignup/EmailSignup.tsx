import Image from "next/image";
const EmailSignup = () => {
  return (
    <section className="w-full bg-gray-900">
      <div className="mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6">
        <div className="mx-auto flex max-w-screen-md flex-col sm:text-center">
          <Image
            className="color-white mx-auto h-auto w-40 object-cover pb-8  "
            width={100}
            height={100}
            src="./vital-logo-white.svg"
            alt="Event Image"
          />
          <p className="mx-auto mb-4 max-w-2xl font-light text-gray-500 dark:text-gray-400 sm:text-xl ">
            Sign up with your email address to receive event news and updates.
          </p>
          <button className="mx-auto flex w-20 items-center justify-center rounded-md bg-gray-800 p-2 font-bold text-gray-100 hover:bg-gray-700">
            <a href="https://arep.co/m/vital-events">Sign Up</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;
