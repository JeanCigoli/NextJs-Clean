const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.API_KEY_SEND)

  const { name } = req.body

  const content = {
    to: 'Eu <jeancigoli30@gmail.com>',
    from: 'jeancigoli30@gmail.com',
    subject: `Nova mensagem - ${name}`,
    templateId: 'd-09fbaa574d1d4af49a5735fee3ecb3e4',
    dynamic_template_data: req.body
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    res.status(400).send('Message not sent.')
  }
}