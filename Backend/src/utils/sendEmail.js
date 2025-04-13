// import nodemailer from "nodemailer";

// const sendInvoiceEmail = async (userEmail, invoicePath) => {
//     const transporter = nodemailer.createTransport({
//         service: "Gmail",
//         auth: {
//             user: process.env.EMAIL_USER,
//             pass: process.env.EMAIL_PASS
//         }
//     });

//     const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: userEmail,
//         subject: "Your Invoice",
//         text: "Thank you for your order. Find your invoice attached.",
//         attachments: [
//             {
//                 filename: "invoice.pdf",
//                 path: invoicePath
//             }
//         ]
//     };

//     await transporter.sendMail(mailOptions);
// };

// export {sendInvoiceEmail}


import nodemailer from "nodemailer";

const sendInvoiceEmail = async (userEmail) => {
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from:  `"Your Company" <${process.env.EMAIL_USER}>`,
        to: userEmail,
        subject: "🧾 Your Invoice is Ready! ",
        html: `
        <h2>Thank you for your purchase!</h2>
        <p>Your invoice is attached. If you have any questions, feel free to <a href="mailto:${process.env.EMAIL_USER}">contact us</a>.</p>
    `,
        replyTo: process.env.EMAIL_USER  
    };

    await transporter.sendMail(mailOptions);
};

export {sendInvoiceEmail}
