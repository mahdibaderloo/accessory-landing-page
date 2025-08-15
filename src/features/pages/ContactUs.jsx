import callIcon from "../../data/images/call.svg";
import emailIcon from "../../data/images/email.svg";
import smsIcon from "../../data/images/sms.svg";

function ContactUs() {
  return (
    <div className="w-full mt-16 flex flex-col laptop:flex-row">
      <section className="w-full p-4 laptop:w-[55%]">
        <div className="text-zinc-800">
          <p className="font-bold text-4xl tablet:text-5xl laptop:text-7xl desktop:text-8xl">
            Contact Us
          </p>
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
            className="w-full laptop:w-[80%] bg-zinc-50 font-medium outline-none mb-2 p-2 border border-zinc-300 rounded-lg"
          />
          <input
            type="email"
            placeholder="Your email"
            required
            className="w-full laptop:w-[80%] bg-zinc-50 font-medium outline-none mb-2 p-2 border border-zinc-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Ticket topic"
            required
            className="w-full laptop:w-[80%] bg-zinc-50 font-medium outline-none mb-2 p-2 border border-zinc-300 rounded-lg"
          />
          <textarea
            id=""
            placeholder="Description"
            required
            className="w-full laptop:w-[80%] bg-zinc-50 font-medium outline-none mb-2 p-2 border border-zinc-300 rounded-lg"
          ></textarea>
          <button className="bg-zinc-800 text-zinc-50 text-xl font-medium w-full laptop:w-[80%] py-2 rounded-lg laptop:hover:bg-zinc-700 transition-all duration-200 laptop:cursor-pointer">
            Send
          </button>
        </form>
      </section>
      <section className="w-full p-4 laptop:w-[45%] h-full mx-auto">
        <div className="laptop:mt-24 rounded-lg overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25872.907688362247!2d50.97741995201496!3d35.84622132322883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dc1002c7a30b9%3A0x1a4721f5d1359aa7!2z2KjYp9mFINqp2LHYrA!5e0!3m2!1sfa!2suk!4v1749582659234!5m2!1sfa!2suk"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-72"
          ></iframe>
        </div>
        <div className="mt-4 laptop:mt-8 w-full flex flex-col flex-wrap tablet:flex-row gap-4 laptop:items-center justify-between tablet:justify-center">
          <div className="flex gap-2">
            <img src={callIcon} alt="icon" className="w-6 laptop:w-8" />
            <div className="flex flex-col justify-center">
              <span className="font-medium text-zinc-800 text-md laptop:text-xl">
                Phone
              </span>
              <span className="text-sm text-zinc-600">026-0000</span>
            </div>
          </div>
          <div className="flex gap-2">
            <img src={smsIcon} alt="icon" className="w-7 laptop:w-9" />
            <div className="flex flex-col justify-center">
              <span className="font-medium text-zinc-800 text-md laptop:text-xl">
                SMS
              </span>
              <span className="text-sm text-zinc-600">09-000-0000</span>
            </div>
          </div>
          <div className="flex gap-2">
            <img src={emailIcon} alt="icon" className="w-7 laptop:w-9" />
            <div className="flex flex-col justify-center">
              <span className="font-medium text-zinc-800 text-md laptop:text-xl">
                Email
              </span>
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
