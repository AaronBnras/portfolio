import emailjs from 'emailjs-com';

export const sendEmail = (formData) => {
    return emailjs.send(
        'service_ehrpcgd',
        'template_ofppwta',
        {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
        },
        'Y6gNGYLenaUFOlCH2'
        
    )
}