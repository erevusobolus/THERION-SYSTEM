// Since we're building static, we need to remove the API route
// Contact form will submit to a static form service instead

export default function StaticContactHandler() {
  return new Response('This is a static build - API routes not available', {
    status: 501
  })
}