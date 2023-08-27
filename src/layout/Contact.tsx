import "../index.css";

function Contact() {
  return (
    <div className="bg-zinc-900 h-screen mt-20 rounded-t-3xl ">
      <div className="flex flex-row justify-center p-10">
        <h1 className="text-white text-3xl">
          <i className="fa-solid fa-envelope"></i> Contact
        </h1>
      </div>
      <div className="flex flex-row justify-center gap-10 m-10">
        <div className="order-1">
          <img src="src\assets\space.jpg"></img>
        </div>
        <form className="flex flex-col gap-4 order-2 w-screen">
          <div className="flex flex-row gap-2 justify-center">
            <input type="text" className="w-1/2"></input>
            <input type="text" className="w-1/2"></input>
          </div>
          <input type="email"></input>
          <textarea></textarea>
          <input type="submit" className="text-start" value="send"></input>
        </form>
      </div>
    </div>
  );
}

export default Contact;
