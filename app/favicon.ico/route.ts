import fs from 'fs'
import path from 'path'

export async function GET() {
  const p = path.join(process.cwd(), 'public', 'ibm-bob.png')
  try {
    const buffer = await fs.promises.readFile(p)
    return new Response(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=86400'
      }
    })
  } catch (err) {
    return new Response('Not found', { status: 404 })
  }
}
