import { NextRequest, NextResponse } from 'next/server';

type Body = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export async function POST(req: NextRequest) {
  const body: Body = await req.json();
  try {
    const res = await fetch(process.env.CONTACT_FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        message: body.message
      })
    });
    const data = await res.json();
    return NextResponse.json({ data });
  } catch (err) {
    let message: string;
    if (err instanceof Error) {
      message = err.message;
    } else if (err && typeof err === 'object' && 'message' in err) {
      message = String(err.message);
    } else if (typeof err === 'string') {
      message = err;
    } else {
      message = 'Something went wrong';
    }
    return NextResponse.json({ message });
  }
}
