// import { useState } from "react";
// import "./ContactForm.css";

// export const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     alert("Message sent successfully!");
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <div className="contact-wrapper">
//       <div className="contact-image">
//         <img
//           src="https://i.pinimg.com/originals/df/28/fb/df28fb26ad318e1815548f0df93b0a8b.gif"
//           alt="Contact Us"
//         />
//       </div>

//       <div className="contact-form-wrapper">
//         <h2>Contact Us</h2>
//         <form onSubmit={handleSubmit} className="contact-form">
//           <label>
//             Name:
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </label>

//           <label>
//             Email:
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </label>

//           <label>
//             Message:
//             <textarea
//               name="message"
//               rows="5"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             />
//           </label>

//           <button type="submit">Send Message</button>
//         </form>
//       </div>
//     </div>
//   );
// };
import { useState } from "react";
import "./ContactForm.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <div className="contact-gif">
      <img
  src="https://media.giphy.com/media/QHE5gWI0QjqF2/giphy.gif"
  alt="Get in Touch"
/>
      </div>

      <div className="contact-form-wrapper">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Message:
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};
