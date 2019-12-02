import React from "react";
import "../styles/ContactForm.css";
import "../styles/style.css"

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feedback: "", name: "Name", email: "email@example.com" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="ContactForm">
        <section className="row ContactForm-container container-fluid">
            <div className='col-sm'>
                
                <br/>
            <h2 className='contact-title'>Let's get social</h2>
            <h4 className='contact-subtitle'>I appreciate if you want
            to follow me to share job offers, questions, comments and everything
            you want.  </h4>
                
            </div>
          <div className='col-sm'>
              <br/>
              <h2 className='contact-title'>Get in touch</h2>
              <h4 className='email-contact'>You can send an e-mail here</h4>
          <form className="test-mailing">
            <div>
              <textarea
                id="test-mailing"
                name="mailing-area"
                onChange={this.handleChange}
                placeholder="Put your name and e-mail and I'll answer your message 
                as soon as possible"
                required
                value={this.state.feedback}
                style={{ width: "100%", height: "150px" }}
              />
            </div>
            <input
              type="button"
              value="Send"
              className="btn btn-info btn-prime"
              onClick={this.handleSubmit}
            />
          </form>
          </div>
        </section>
      </div>
    );
  }

  handleChange(event) {
    this.setState({ feedback: event.target.value});
  }

  handleSubmit (event) {
	const templateId = 'my_template';

	this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
  }

  sendFeedback (templateId, variables) {
	window.emailjs.send(
  	'gmail', templateId,
  	variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }
}
