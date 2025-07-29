const Contact = require("../models/Contactus");

exports.contactUs = async (req, res) => {
  const { name, email, msg } = req.body;

  if (!name || !email || !msg) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const contactEntry = new Contact({ name, email, msg });
    await contactEntry.save();

    console.log('Contact Form Submitted:', contactEntry);

    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Server error. Try again later.' });
  }
};
