import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 24,
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    borderRadius: 8, // Rounded corners matching the site logo (approx)
                }}
            >
                {/* Simple SVG Shopping Bag representation for reliable rendering without dependencies */}
                <svg t="1767771223872" className="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1566" width="18" height="18">
                    <path d="M232.65 543.7l-8.14-63.28h569.47l-8.14 63.28H232.65z" fill="#F42B1C" p-id="1567"></path>
                    <path
                        d="M696.8 797.81H321.69a64.07 64.07 0 0 1-63.55-55.9l-25.49-198.22h553.19l-25.49 198.22a64.07 64.07 0 0 1-63.55 55.9z"
                        fill="#FF6648" p-id="1568"></path>
                    <path
                        d="M354.89 587.58m22.5 0l0.93 0q22.5 0 22.5 22.5l0 113.31q0 22.5-22.5 22.5l-0.93 0q-22.5 0-22.5-22.5l0-113.31q0-22.5 22.5-22.5Z"
                        fill="#FFE6C5" p-id="1569"></path>
                    <path
                        d="M487.05 587.58m22.5 0l0.93 0q22.5 0 22.5 22.5l0 113.31q0 22.5-22.5 22.5l-0.93 0q-22.5 0-22.5-22.5l0-113.31q0-22.5 22.5-22.5Z"
                        fill="#FFE6C5" p-id="1570"></path>
                    <path
                        d="M619.21 587.58m22.5 0l0.93 0q22.5 0 22.5 22.5l0 113.31q0 22.5-22.5 22.5l-0.93 0q-22.5 0-22.5-22.5l0-113.31q0-22.5 22.5-22.5Z"
                        fill="#FFE6C5" p-id="1571"></path>
                    <path
                        d="M573.245087 251.78984m14.150855-8.17l37.100528-21.42q14.150855-8.17 22.320855 5.980855l93.88 162.60493q8.17 14.150855-5.980855 22.320855l-37.100528 21.42q-14.150855 8.17-22.320855-5.980855l-93.88-162.60493q-8.17-14.150855 5.980855-22.320855Z"
                        fill="#F42B1C" p-id="1572"></path>
                    <path
                        d="M334.521619 442.691454m-14.150855-8.17l-37.100528-21.42q-14.150855-8.17-5.980855-22.320855l93.88-162.60493q8.17-14.150855 22.320855-5.980855l37.100528 21.42q14.150855 8.17 5.980855 22.320855l-93.88 162.60493q-8.17 14.150855-22.320855 5.980855Z"
                        fill="#F42B1C" p-id="1573"></path>
                    <path
                        d="M189.52 390.59h640A27.52 27.52 0 0 1 857 418.11v30.65H162v-30.65a27.52 27.52 0 0 1 27.52-27.52z"
                        fill="#FFC627" p-id="1574"></path>
                    <path
                        d="M829.48 505.94h-640A27.52 27.52 0 0 1 162 478.42v-30.65h695v30.65a27.52 27.52 0 0 1-27.52 27.52z"
                        fill="#F7A614" p-id="1575"></path>
                </svg>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    )
}
