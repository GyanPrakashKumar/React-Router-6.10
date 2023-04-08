import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
  const data = useActionData();

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="POST" action="/help/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>

        {data && data.error &&
          <p className="formError">{data.error}</p>
        }

        <button>Submit 📩</button>
      </Form>
    </div>
  )
}

export const contactAction = async ({ request }) => {
  // the request must be request named
  const data = await request.formData();
  const submission = {
    email: data.get('email'),
    message: data.get('message')
  }
  console.log(submission);

  // return {
  //   status: 200,
  //   body: JSON.stringify(submission)
  // }
  if (submission.message.length < 10) {
    return { error: 'Message too short, must be > 10' }
  }
  return redirect('/');
}