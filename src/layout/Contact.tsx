import "../index.css";

function Contact() {
  return (
    <div className="bg-zinc-950 h-screen mt-20 rounded-t-3xl " id="contact">
      <div className="flex flex-row justify-center p-10">
        <h1 className="text-white text-3xl">
          <i className="fa-solid fa-phone"></i> Contact
        </h1>
      </div>
      <div className="flex flex-row justify-center gap-10 m-10">
        <div className="order-1 mx-10 text-center">
          <h1 className="text-4xl m-4">Reach me</h1>
          <hr className="w-1/2 m-auto border-2"></hr>{" "}
          <h1 className="text-5xl text-white m-3 font-bold">
            jelmourne@outlook.com
          </h1>
          <img className="h-1/2 m-auto mt-10" src="src\assets\avatar.png"></img>
        </div>
        <form className="flex flex-col gap-4 order-2 w-screen ">
          <div className="flex flex-row gap-2 justify-center ">
            <input
              type="text"
              className=" w-1/2 p-3 rounded-lg border-2 bg-transparent focus:outline-none focus:border-2 focus:border-blue-400 transition-all"
              placeholder="First Name"
            ></input>
            <input
              type="text"
              className="w-1/2 p-3 rounded-lg border-2 bg-transparent focus:outline-none focus:border-2 focus:border-blue-400 transition-all"
              placeholder="Last Name"
            ></input>
          </div>

          <input
            type="email"
            className="p-3 rounded-lg border-2 bg-transparent focus:outline-none focus:border-2 focus:border-blue-400 transition-all"
            placeholder="Email"
          ></input>

          <textarea className="p-3 rounded-lg h-1/2 border-2 bg-transparent resize-none focus:outline-none focus:border-2 focus:border-blue-400 transition-all"></textarea>
          <input
            type="submit"
            className="text-start text-black w-fit bg-blue-400 hover:cursor-pointer p-2 px-10 rounded-md"
            value="Send"
          ></input>
        </form>
      </div>
    </div>
  );
}

export default Contact;
