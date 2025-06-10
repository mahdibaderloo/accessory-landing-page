import callIcon from "../../data/images/call.svg";
import emailIcon from "../../data/images/email.svg";
import smsIcon from "../../data/images/sms.svg";

function ContactUs() {
  return (
    <div className="w-full mt-16 flex">
      <section className="w-[55%]">
        <div className="text-zinc-800">
          <p className="font-bold text-8xl">Contact Us</p>
          <span className="block mt-2 ml-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
            repellendus dolorum quidem dignissimos dolorem sunt facilis, nemo
            laborum maxime non
          </span>
        </div>
        <form action="" className="flex flex-col mt-8">
          <input
            type="text"
            placeholder="Your name"
            required
            className="w-[80%] bg-zinc-50 font-medium outline-none mb-2 p-2 border border-zinc-300 rounded-lg"
          />
          <input
            type="email"
            placeholder="Your email"
            required
            className="w-[80%] bg-zinc-50 font-medium outline-none mb-2 p-2 border border-zinc-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Ticket topic"
            required
            className="w-[80%] bg-zinc-50 font-medium outline-none mb-2 p-2 border border-zinc-300 rounded-lg"
          />
          <textarea
            id=""
            placeholder="Description"
            required
            className="w-[80%] bg-zinc-50 font-medium outline-none mb-2 p-2 border border-zinc-300 rounded-lg"
          ></textarea>
          <button className="bg-zinc-800 text-zinc-50 text-xl font-medium w-[80%] py-2 rounded-lg laptop:hover:bg-zinc-700 transition-all duration-200 laptop:cursor-pointer">
            Send
          </button>
        </form>
      </section>
      <section className="w-[45%] h-full mx-auto">
        <div className="mt-24 bg-zinc-800 rounded-lg">Map</div>
        <div className="mt-8 w-full flex items-center justify-between">
          <div className="flex gap-2">
            <img src={callIcon} alt="icon" className="w-8" />
            <div className="flex flex-col justify-center">
              <span className="font-medium text-zinc-800 text-xl">Phone</span>
              <span className="text-sm text-zinc-600">026-0000</span>
            </div>
          </div>
          <div className="flex gap-2">
            <img src={smsIcon} alt="icon" className="w-9" />
            <div className="flex flex-col justify-center">
              <span className="font-medium text-zinc-800 text-xl">SMS</span>
              <span className="text-sm text-zinc-600">09-000-0000</span>
            </div>
          </div>
          <div className="flex gap-2">
            <img src={emailIcon} alt="icon" className="w-9" />
            <div className="flex flex-col justify-center">
              <span className="font-medium text-zinc-800 text-xl">Email</span>
              <span className="text-sm text-zinc-600">
                supportteam@example.com
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
