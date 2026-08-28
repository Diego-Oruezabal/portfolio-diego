import { EmailTemplate } from '@/components/email.template';
import { Resend } from 'resend';

export async function POST(req: Request) {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        return Response.json(
            { error: 'Email service is not configured.' },
            { status: 503 }
        );
    }

    const resend = new Resend(apiKey);

    try {  
        const dataForm = await req.json()
        try {
            const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['diegooruezabal@gmail.com'],
            subject: 'Hello world',
            react: EmailTemplate({
                firstName: dataForm.username,
                message: dataForm.message,
                email: dataForm.email
                }),
                text: "DiegoDev"
            });
            return Response.json(data);
         } catch (error) {
            return Response.json({ error }, { status: 500 });
            }

            
        } catch (error) {
            return Response.json({ error }, { status: 500 });
        }
    }
