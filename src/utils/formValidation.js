export const validateForm = (formData) => {
    const errors = {};

    if (!formData.name) {
        errors.name = "Name is required";
    }

    if (!formData.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Email is invalid";
    }

    if (!formData.subject) {
        errors.subject = "Subject is required";
    }

    if (!formData.message) {
        errors.message = "Message is required";
    }

    return errors;
}