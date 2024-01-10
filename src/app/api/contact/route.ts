import { NextRequest, NextResponse } from 'next/server';

type Body = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export async function POST(req: NextRequest) {
  const body: Body = await req.json();
  console.log(body);
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
    console.log(data);
    return NextResponse.json({ data });
  } catch (err) {
    console.log(err);
  }
}
