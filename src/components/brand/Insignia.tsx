type InsigniaProps = {
  size?: number
  variant?: 'full' | 'simplified'
  className?: string
}

export function Insignia({ size = 280, variant = 'full', className }: InsigniaProps) {
  const width = size * (280 / 370)
  const isFull = variant === 'full'

  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 280 370"
      role="img"
      aria-label="Vizion insignia"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="vizion-rim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD879" />
          <stop offset="45%" stopColor="#F2B33D" />
          <stop offset="100%" stopColor="#6B4F18" />
        </linearGradient>
        <linearGradient id="vizion-v-face" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFD879" />
          <stop offset="50%" stopColor="#F2B33D" />
          <stop offset="100%" stopColor="#A87726" />
        </linearGradient>
        <linearGradient id="vizion-steel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A39C8C" />
          <stop offset="50%" stopColor="#5E6168" />
          <stop offset="100%" stopColor="#22272F" />
        </linearGradient>
      </defs>

      {/* Outer shield rim */}
      <path
        d="M 50 50 L 230 50 L 230 175 Q 230 270 140 315 Q 50 270 50 175 Z"
        fill="none"
        stroke="url(#vizion-rim)"
        strokeWidth="5"
        strokeLinejoin="miter"
      />
      <path
        d="M 52 52 L 228 52 L 228 175 Q 228 268 140 313 Q 52 268 52 175 Z"
        fill="none"
        stroke="#FFD879"
        strokeWidth="0.5"
        opacity="0.55"
      />

      {/* Perimeter band */}
      <path
        d="M 67 67 L 213 67 L 213 172 Q 213 260 140 298 Q 67 260 67 172 Z"
        fill="none"
        stroke="#F2B33D"
        strokeWidth="1.8"
        strokeLinejoin="miter"
      />

      {/* Chronograph tick marks - omitted in simplified variant */}
      {isFull && (
        <g stroke="#F2B33D" strokeWidth="0.7">
          <line x1="76" y1="67" x2="76" y2="71" />
          <line x1="86" y1="67" x2="86" y2="70" />
          <line x1="96" y1="67" x2="96" y2="71" />
          <line x1="106" y1="67" x2="106" y2="70" />
          <line x1="116" y1="67" x2="116" y2="71" />
          <line x1="126" y1="67" x2="126" y2="70" />
          <line x1="154" y1="67" x2="154" y2="70" />
          <line x1="164" y1="67" x2="164" y2="71" />
          <line x1="174" y1="67" x2="174" y2="70" />
          <line x1="184" y1="67" x2="184" y2="71" />
          <line x1="194" y1="67" x2="194" y2="70" />
          <line x1="204" y1="67" x2="204" y2="71" />
        </g>
      )}

      {/* Inner panel - triple stroke */}
      <path
        d="M 84 90 L 196 90 L 196 170 Q 196 245 140 275 Q 84 245 84 170 Z"
        fill="none"
        stroke="#F2B33D"
        strokeWidth="1.8"
        strokeLinejoin="miter"
      />
      <path
        d="M 87 93 L 193 93 L 193 170 Q 193 243 140 272 Q 87 243 87 170 Z"
        fill="none"
        stroke="#3D2E10"
        strokeWidth="0.7"
      />
      <path
        d="M 90 96 L 190 96 L 190 169 Q 190 241 140 269 Q 90 241 90 169 Z"
        fill="none"
        stroke="#FFD879"
        strokeWidth="0.4"
        opacity="0.55"
      />

      {/* Side-rib gradations - omitted in simplified variant */}
      {isFull && (
        <g stroke="#F2B33D" strokeWidth="0.5" opacity="0.55">
          <line x1="82" y1="108" x2="89" y2="108" />
          <line x1="82" y1="122" x2="89" y2="122" />
          <line x1="82" y1="136" x2="89" y2="136" />
          <line x1="82" y1="150" x2="89" y2="150" />
          <line x1="82" y1="164" x2="89" y2="164" />
          <line x1="191" y1="108" x2="198" y2="108" />
          <line x1="191" y1="122" x2="198" y2="122" />
          <line x1="191" y1="136" x2="198" y2="136" />
          <line x1="191" y1="150" x2="198" y2="150" />
          <line x1="191" y1="164" x2="198" y2="164" />
        </g>
      )}

      {/* The V - five layered paths */}
      <path
        d="M 105 113 L 122 113 L 140 175 L 158 113 L 175 113 L 140 215 Z"
        fill="#3D2E10"
        opacity="0.85"
        transform="translate(2,3)"
      />
      <path
        d="M 105 111 L 122 111 L 140 173 L 158 111 L 175 111 L 140 213 Z"
        fill="url(#vizion-v-face)"
        stroke="#6B4F18"
        strokeWidth="0.7"
        strokeLinejoin="miter"
      />
      <path
        d="M 105 111 L 122 111 L 140 173 L 137 177 L 118 113 Z"
        fill="#FFD879"
        opacity="0.6"
      />
      <path
        d="M 175 111 L 158 111 L 140 173 L 143 177 L 172 113 Z"
        fill="#8A6B25"
        opacity="0.55"
      />
      <path
        d="M 105 111 L 175 111"
        stroke="#FFD879"
        strokeWidth="1"
        opacity="0.7"
      />

      {/* Secondary chevron */}
      <path
        d="M 126 230 L 140 242 L 154 230 L 150 230 L 140 239 L 130 230 Z"
        fill="#F2B33D"
        stroke="#6B4F18"
        strokeWidth="0.5"
        strokeLinejoin="miter"
      />
      <path
        d="M 126 230 L 140 242 L 143 240 L 130 230 Z"
        fill="#FFD879"
        opacity="0.55"
      />

      {/* Divider below chevron */}
      <line x1="80" y1="256" x2="200" y2="256" stroke="#F2B33D" strokeWidth="0.7" />
      <line x1="80" y1="258" x2="200" y2="258" stroke="#FFD879" strokeWidth="0.4" opacity="0.55" />
      <circle cx="140" cy="257" r="1.2" fill="#F2B33D" />

      {/* Steel fasteners */}
      <circle cx="69" cy="69" r="4.5" fill="#22272F" stroke="#5E6168" strokeWidth="0.8" />
      <circle cx="69" cy="69" r="2.5" fill="url(#vizion-steel)" />
      <circle cx="69" cy="69" r="1" fill="#0B0D11" />
      <circle cx="68" cy="68" r="0.45" fill="#EDE6D5" opacity="0.6" />

      <circle cx="211" cy="69" r="4.5" fill="#22272F" stroke="#5E6168" strokeWidth="0.8" />
      <circle cx="211" cy="69" r="2.5" fill="url(#vizion-steel)" />
      <circle cx="211" cy="69" r="1" fill="#0B0D11" />
      <circle cx="210" cy="68" r="0.45" fill="#EDE6D5" opacity="0.6" />

      {/* Cardinal fiducials - omitted in simplified variant */}
      {isFull && (
        <>
          <path d="M 140 36 L 143 43 L 140 50 L 137 43 Z" fill="url(#vizion-steel)" stroke="#22272F" strokeWidth="0.4" />
          <path d="M 140 36 L 143 43 L 141.5 44 L 140 38 Z" fill="#EDE6D5" opacity="0.55" />
          <path d="M 37 172 L 44 175 L 51 172 L 44 169 Z" fill="url(#vizion-steel)" stroke="#22272F" strokeWidth="0.35" />
          <path d="M 37 172 L 44 175 L 44 173 L 39 172 Z" fill="#EDE6D5" opacity="0.55" />
          <path d="M 229 172 L 236 175 L 243 172 L 236 169 Z" fill="url(#vizion-steel)" stroke="#22272F" strokeWidth="0.35" />
          <path d="M 229 172 L 236 175 L 236 173 L 231 172 Z" fill="#EDE6D5" opacity="0.55" />
        </>
      )}

      {/* Drop shadow at base */}
      <ellipse cx="140" cy="332" rx="92" ry="4.5" fill="#1A0F03" opacity="0.5" />
      <ellipse cx="140" cy="332" rx="58" ry="2" fill="#000" opacity="0.4" />
    </svg>
  )
}
