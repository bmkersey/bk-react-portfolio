import { useState } from "react";
import { validateEmail } from "../utils/helpers";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



// const ContactForm = (props) => {
//   const [errorMessage, setErrorMessage] = useState('');
//   const [formState, setFormState] = useState({ name: '', email: '', message: '' });
//   const { name, email, message } = formState;
//   function handleChange(e) {
//     if (e.target.name === 'email') {
//       const isValid = validateEmail(e.target.value);
//       console.log(isValid);
//       // isValid conditional statement
//       if (!isValid) {
//         setErrorMessage('Your email is invalid.');
//       } else {
//         setErrorMessage('');
//       }
//     } else {
//       if (!e.target.value.length) {
//         setErrorMessage(`${e.target.name} is required.`);
//       } else {
//         setErrorMessage('');
//       }
//     } 
    
//     if (!errorMessage) {
//       setFormState({ ...formState, [e.target.name]: e.target.value });
//     }
    
//   }
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(formState);
//   }
  
//   return (
//     <Container>
//       <h1>Contact me</h1>
//       <form id="contact-form" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
//         </div>
//         <div>
//           <label htmlFor="message">Message:</label>
//           <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
//         </div>
//         {errorMessage && (
//           <div>
//             <p className="error-text">{errorMessage}</p>
//           </div>
//         )}
//         <button type="submit">Submit</button>
//       </form>
//     </Container>
//   )
// }

function ContactForm() {
  const [errorMessage, setErrorMessage] = useState('');
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    } 
    
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="email" >
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter Email" defaultValue={email} onBlur={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="name" >
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" type="input" placeholder="Enter Name" defaultValue={name} onBlur={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="message" >
        <Form.Label>Message</Form.Label>
        <Form.Control name="message" type="textarea" placeholder="Message goes here." defaultValue={message} onBlur={handleChange} />
      </Form.Group>
      {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      <Button variant="primary" type="submit">
        Submit
      </Button>
      
    </Form>
  );
}

export default ContactForm;
