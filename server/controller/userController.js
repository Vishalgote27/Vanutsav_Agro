const nodemailer = require("nodemailer");

exports.sendEmail = async (req, res) => {
    try {
        const { name, email, textMessage, eventTypes, plannedDate, mobile } = req.body;

        // Check if all required fields are provided
        if (!name || !email || !plannedDate) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Create a transport for sending emails
        const mailTransport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "vishalgote2019@gmail.com",
                pass: "owmqalujtujboyzv" // Make sure to use environment variables for sensitive data in production
            }
        });

        // Prepare mail details including the new fields
        let mailDetails = {
            from: "vishalgote2019@gmail.com",
            to: email,
            subject: "Van Utsav Contact Inquiries",
            html: `
                <h3>Contact Details</h3>
                <ul>
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Mobile:</strong> ${mobile}</li>
                    <li><strong>Planned Date:</strong> ${plannedDate}</li>
                </ul>
                <h3>Event Type</h3>
                <ul>
                    ${eventTypes.length > 0 ? eventTypes.map(type => `<li>${type}</li>`).join('') : '<li>No event type selected</li>'}
                </ul>
                <h3>Message</h3>
                <p>${textMessage}</p>
            `,
        };

        // Send email
        mailTransport.sendMail(mailDetails, (err, data) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: "Something went wrong sending the email: " + err.message });
            } else {
                return res.json({ message: "Email sent successfully" });
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Unable to send email: " + error.message });
    }
};
