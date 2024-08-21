// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const config = {
  runtime: 'edge',
}

export default async function handler(req) {
  return new Response(JSON.stringify({ name: 'John Doe' }))
}