import nodemailer from 'nodemailer';

// Function to send email
export const sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter object using SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'sanjaikannang@gmail.com', // Your Gmail email address
      pass: 'rmop fyel onrs kykk', // Your Gmail password
    },
  });

  // Email options
  let mailOptions = {
    from: 'your-email@gmail.com', // Sender address
    to: 'recipient-email@example.com', // List of recipients
    subject: 'New Message from Portfolio Form', // Subject line
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Plain text body
  };

  // Send mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
    //   console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Error sending email' });
    } else {
    //   console.log('Email sent:', info.response);
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    }
  });
};
