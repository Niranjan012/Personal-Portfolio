import { createTransport } from 'nodemailer';
import { google } from 'googleapis';

const REFRESH_TOKEN = process.env.NEXT_PUBLIC_OAUTH_REFRESH_TOKEN;
const CLIENT_ID = process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID;
const CLIENT_SECRETE = process.env.NEXT_PUBLIC_OAUTH_CLIENT_SECRETE;
const REDIRECT_URI = process.env.NEXT_PUBLIC_OAUTH_REDIRECT_URI;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRETE, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendMail = async (text) => {
    try {
        const accessToken = oAuth2Client.getAccessToken();

        const transport = createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'mrniranjanwork@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRETE,
                accessToken: accessToken,
                refreshToken: REFRESH_TOKEN,
            }
        });

        const mailOption = {
            from: 'PortFolio - Niranjan Panigrahi <niranjanpanigrahi.vercel.app>',
            to: 'mrniranjanwork@gmail.com',
            subject: 'Someone sent you a message',
            text: text,
            html: text
        };

        const result = await transport.sendMail(mailOption);
        return result;
    } catch (error) {
        return error;
    }
};

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, subject, message, phone } = req.body;
        const pretier = `
            <h4>Name:- ${name} </h4>
            <h4>Email: - ${email} </h4>
            <h4>Phone: - ${phone} </h4>
            <h4>Subject: - ${subject} </h4>
            <h4>Message:- </h4>
            <p>${message}</p>
        `
        try {
            const resf = await sendMail(pretier);
            res.status(200).json(resf);
        } catch (error) {
            res.json(error);
        }
    }
}