import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container sm:px-16 px-[3%] sm:py-10 py-12">
      <h2 className="font-palanquin text-4xl font-bold w-full lg:max-w-md">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletters
      </h2>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-300 rounded-full bg-white shadow-sm focus-within:border-coral-red transition-all">
        <input
          type="email"
          className="input w-full bg-transparent text-slate-900 placeholder:text-slate-400 outline-none focus:outline-none border-none focus:ring-0"
          placeholder="Your email address"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;