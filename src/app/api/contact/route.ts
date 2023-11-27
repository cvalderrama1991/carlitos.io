export async function GET() {
  const res = await fetch('http://localhost:3000/contact/api/contact', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await res.json();
  console.log(data);
  return Response.json({ data });
}
