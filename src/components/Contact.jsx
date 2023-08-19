import "./styles/Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-5 p-4 py-16  ">
      <h1 className="py-4 text-4xl font-bold text-center  contact__h1">
        Contacto
      </h1>
      <form
        action="https://getform.io/f/f9e98f63-6e27-42a8-a1f0-f77c7097cef0"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase font-serif text-gray-700 text-sm py-2">
              Nombre
            </label>
            <input
              className="border-2 rounded-lg p-2 flex border-gray-300"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase font-serif text-gray-700 text-sm py-2">
              Numero de telefono
            </label>
            <input
              className="border-2 rounded-lg p-2 flex border-gray-300"
              type="text"
              name="phone"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase font-serif text-gray-700 text-sm py-2">
            Email
          </label>
          <input
            className="border-2 rounded-lg p-2 flex border-gray-300"
            type="email"
            name="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase font-serif text-gray-700 text-sm py-2">
            Subject
          </label>
          <input
            className="border-2 rounded-lg p-2 flex border-gray-300 "
            type="text"
            name="subject"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase font-serif text-gray-700 text-sm py-2">
            Message
          </label>
          <textarea
            className="border-2 rounded-lg p-3 border-gray-300"
            rows="10"
            name="message"
          ></textarea>
        </div>
        <button className=" h-10 bg-violet-500 hover:bg-violet-700 focus:bg-blue-700 text-white font-bold px-4 rounded w-full">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
