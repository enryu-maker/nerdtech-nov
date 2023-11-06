import React from "react";
import { InfinitySpin, MutatingDots } from "react-loader-spinner";
import Slider from "./slider";

export const Aboutus = () => {

  return (
    <>
      <div id="about" className="flex flex-col justify-center items-center w-[90%] py-24 ">
        <div
          className="text-4xl  px-24 py-10"
          style={{ fontFamily: "nothing", letterSpacing: 2 }}
        >
          ABOUT US
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          <p
            className="text-center"
            style={{ fontFamily: "nothing", letterSpacing: 2 }}
          >
            NERDTECH Technologies is a premier digital organization specializing
            in plenty of IT and advanced promoting solutions. Our primary point
            is to empower businesses over a wide range, ensuring entrepreneurs
            and little businesses have the same resources to scale themselves as
            huge corporations at a quarter of the cost. It’s all almost energy:
            energy for promoting, for innovation, for development and
            idealization, for explore and experiences, energy for next and new.
            This energy is the primary base of STRATAGEM Wanders. We are
            differing, advanced, and up for a challenge. Together, we reflect a
            decade’s ability in key promoting and management. Digital promoting,
            development hacking, venture development, management, procedure, and
            consulting: we’ve got it.
          </p>
        </div>
      </div>
    </>
  );
};

export const Team = () => {
  return (
    <>
      <div id="team" className="flex flex-col justify-center items-center w-[90%] py-24 ">
        <div
          className="text-4xl  px-24 py-10"
          style={{ fontFamily: "nothing", letterSpacing: 2 }}
        >
          OUR TEAM
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          <Slider/>
        </div>
      </div>
    </>
  );
};

export const Contactus = () => {
  const [Message, setMessage] = React.useState("");
  const [Name, setName] = React.useState("");
  const [Phone, setPhone] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [Sucess, setSucess] = React.useState(false);

  async function sendEmail() {
    setLoading(true);
    const data = {
      fullname: Name,
      phone: Phone,
      email: Email,
      message: Message,
    };
    await fetch(
      "https://formspree.io/f/xbjvrwqp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((data) => {
        console.log(data);
        setSucess(true);
        setMsg("Thanks, We will contact you soon");
        setLoading(false);
        setEmail("");
        setName("");
        setPhone("");
        setMessage("");
      })
      .catch((err) => {
        console.log(err);

        setSucess(false);
        setMsg("Something went wrong");
        setLoading(false);
      });
  }
  return (
    <>
      <div id="contact" className="flex flex-col justify-center items-center w-[90%] py-24 ">
        <div
          className="text-4xl  px-24 py-10"
          style={{ fontFamily: "nothing", letterSpacing: 2 }}
        >
          CONTACT US
        </div>

        <div className="flex justify-around" style={{ fontFamily: "nothing", letterSpacing: 2 }}>
          <div className=" flex flex-col">
            <div>
              <h2 className="text-lg font-bold pt-3">Mobile NO : </h2>
              <p className="text-md  ">
                9405649047
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold pt-3">Email : </h2>
              <p className="text-md ">
                contact@nerdtech.in
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold pt-3">Address : </h2>
              <p className="text-md pb-10 ">
                NerdTech, Office No.8, Jagdish Sankul, KBT Circle, Thatte Nagar, Gangapur
                Raod, Nashik, Maharashtra. Pin Code : 422005
              </p>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d270.7107379740597!2d73.76403527624599!3d20.010179882771663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb91ba094e0f%3A0x4db062f92da39292!2sKBT%20Circle!5e0!3m2!1sen!2sin!4v1699004716762!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex w-[60%]">

            <div class="py-8 lg:py-16 px-4 mx-auto w-full ">
              {/* <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2> */}
              {/* <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p> */}
              <form action="#" class="space-y-8">
                <p
                  style={{
                    color: Sucess ? "green" : "red",
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "bold",
                    fontFamily: "nothing",
                    letterSpacing: "2px",
                    marginBlock: 0,
                  }}
                >
                  {msg}
                </p>
                <div>
                  <label for="name" class="block mb-2 text-sm font-medium text-black">Name</label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text" id="name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Let me know your name" required />
                </div>
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-black">Your email</label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@nerdtech.in" required />
                </div>
                <div>
                  <label for="mobile" class="block mb-2 text-sm font-medium text-black">Mobile</label>
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    type="text" id="mobile" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Let me know your Phone Number" required />
                </div>
                <div class="sm:col-span-2">
                  <label for="message" class="block mb-2 text-sm font-medium text-black ">Your message</label>
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500    " placeholder="Leave a comment..."></textarea>
                </div>
                {
                  loading ?
                    <MutatingDots
                      height="100"
                      width="100"
                      color="#0f7abc"
                      secondaryColor='#f5e40b'
                      radius='12.5'
                      ariaLabel="mutating-dots-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    /> :

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        sendEmail();
                      }}
                      type="submit" class="py-3 px-5 text-md     font-medium text-center text-black rounded-lg bg-[#f5e40b] hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">Send message</button>
                }
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
