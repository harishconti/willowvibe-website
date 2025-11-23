import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, updates } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Here you would integrate with ConvertKit, Mailchimp, etc.
    // Example:
    // await fetch('https://api.convertkit.com/v3/forms/ID/subscribe', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ api_key: process.env.CK_API_KEY, email, first_name: name })
    // });

    console.log('Lead captured:', { name, email, company, updates });

    return NextResponse.json(
      { message: 'Success! Please check your email.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
