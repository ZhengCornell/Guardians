// This is the template using the email as an input, and build the content
// based on the email body.
module.exports = email => {
  return `
  <html>
  <body>
  <div style="text-align: center;">

  <p>${email.body}</p>
  <div>
  </div>
  <div>
  </div>
  </div>
  </body>
  </html>
  `;
};
