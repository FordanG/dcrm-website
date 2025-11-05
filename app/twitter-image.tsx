import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'dcrm.life - Simple CRM for Solo Professionals'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: 'black',
              marginBottom: 20,
              fontFamily: 'sans-serif',
            }}
          >
            dcrm.life
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 'bold',
              color: 'black',
              textAlign: 'center',
              marginBottom: 30,
              maxWidth: '900px',
              lineHeight: 1.2,
              fontFamily: 'sans-serif',
            }}
          >
            The CRM that got out of your way
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#6B7280',
              textAlign: 'center',
              maxWidth: '800px',
              lineHeight: 1.4,
              fontFamily: 'sans-serif',
            }}
          >
            Track deals. Get reminded. That's it.
          </div>
          <div
            style={{
              marginTop: 50,
              fontSize: 24,
              color: '#9CA3AF',
              fontFamily: 'sans-serif',
            }}
          >
            A refreshingly simple CRM for solo professionals
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
