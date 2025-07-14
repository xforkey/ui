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
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '24px',
                    }}
                >
                    {/* X Key */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '60px',
                            height: '60px',
                            borderRadius: '8px',
                            border: '2px solid rgba(0, 153, 102, 0.8)',
                            backgroundColor: 'rgba(0, 153, 102, 0.1)',
                            color: 'rgba(0, 153, 102, 0.8)',
                            fontSize: '32px',
                            fontWeight: 'bold',
                            fontFamily: 'monospace',
                        }}
                    >
                        X
                    </div>

                    {/* F Key */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '60px',
                            height: '60px',
                            borderRadius: '8px',
                            border: '2px solid rgba(0, 153, 102, 0.8)',
                            backgroundColor: 'rgba(0, 153, 102, 0.1)',
                            color: 'rgba(0, 153, 102, 0.8)',
                            fontSize: '32px',
                            fontWeight: 'bold',
                            fontFamily: 'monospace',
                        }}
                    >
                        F
                    </div>

                    {/* Text */}
                    <div
                        style={{
                            fontSize: '72px',
                            fontWeight: '600',
                            color: '#ffffff',
                            marginLeft: '32px',
                        }}
                    >
                        xforkey/ui
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        },
    );
}
