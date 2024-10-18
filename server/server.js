require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors({
  origin: ['https://teamb.com.py', 'https://www.teamb.com.py']
}));
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  const { nombre, email, mensaje, telefono } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 587,
    secure: false, 
    auth: {
      user: process.env.ZOHO_EMAIL,
      pass: process.env.ZOHO_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.ZOHO_EMAIL, 
    to: process.env.ZOHO_EMAIL, 
    subject: `Nuevo mensaje de ${nombre}`,
    text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Mensaje enviado');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al enviar el mensaje');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
