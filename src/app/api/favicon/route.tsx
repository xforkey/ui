import { ImageResponse } from 'next/og';

export async function GET() {
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
                    background: 'radial-gradient(ellipse at bottom right, #18181b, #18181b, #000000)',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                }}
            >
                {/* X Key */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '24px',
                        height: '24px',
                        borderRadius: '4px',
                        border: '2px solid rgba(0, 153, 102, 0.8)',
                        backgroundColor: 'rgba(0, 153, 102, 0.1)',
                        color: 'rgba(0, 153, 102, 0.8)',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        fontFamily: 'monospace',
                    }}
                >
                    X
                </div>
            </div>
        ),
        {
            width: 32,
            height: 32,
        },
    );
}