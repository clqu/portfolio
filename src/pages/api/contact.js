import nodeMailer from 'nodemailer';

export default (req, res) => {
    let { name, email, message } = req.body;
    if (!name || !email || !message) {
        res.status(400).json({
            success: true,
            message: "All fields are required",
            data: null
        });
    }

    let mailTo = "me@clqu.live";
    let mailSubject = "Contact Form Submission";

    let mailBody = `
        <h1>Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    let mailOptions = {
        from: email,
        to: mailTo,
        subject: mailSubject,
        html: mailBody
    }

    res.status(200).json({
        success: true,
        message: "Message sent successfully",
        data: {
            subject: mailSubject,
            body: mailBody
        }
    });
};