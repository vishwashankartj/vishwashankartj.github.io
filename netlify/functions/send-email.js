

export const handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    const body = JSON.parse(event.body || "{}");

    // Use server-side env vars that are NOT prefixed with VITE_
    const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;
    const PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY;
    const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
    const TO_EMAIL = process.env.EMAILJS_TO_EMAIL;

    if (!PUBLIC_KEY || !PRIVATE_KEY || !SERVICE_ID || !TEMPLATE_ID || !TO_EMAIL) {
        console.error("Missing environment variables");
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Missing environment variables configuration" }),
        };
    }

    try {
        const resp = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                service_id: SERVICE_ID,
                template_id: TEMPLATE_ID,
                user_id: PUBLIC_KEY,
                accessToken: PRIVATE_KEY,
                template_params: {
                    from_name: body.from_name,
                    to_name: body.to_name,
                    from_email: body.from_email,
                    to_email: TO_EMAIL,
                    message: body.message,
                },
            }),
        });

        const text = await resp.text();

        if (!resp.ok) {
            console.error("EmailJS Error:", text);
            return { statusCode: resp.status, body: text };
        }

        return {
            statusCode: 200,
            body: text,
        };
    } catch (error) {
        console.error("Function Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to send email" }),
        };
    }
};
