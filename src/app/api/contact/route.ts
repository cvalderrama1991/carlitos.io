import { NextRequest, NextResponse } from 'next/server';

type Body = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

function isBody(value: unknown): value is Body {
  if (typeof value !== 'object' || value === null) return false;

  const body = value as Record<string, unknown>;
  return ['firstName', 'lastName', 'email', 'message'].every(
    (field) => typeof body[field] === 'string'
  );
}

export async function POST(req: NextRequest) {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: 'Invalid JSON body.' }, { status: 400 });
  }

  if (!isBody(body)) {
    return NextResponse.json({ message: 'Invalid contact form data.' }, { status: 400 });
  }

  const endpoint = process.env.CONTACT_FORM_ENDPOINT;

  if (!endpoint) {
    return NextResponse.json(
      { message: 'Contact service is not configured.' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: 'The contact service could not send your message.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ message: 'Message sent successfully!' });
  } catch {
    return NextResponse.json(
      { message: 'The contact service is unavailable. Please try again.' },
      { status: 502 }
    );
  }
}
