const FRAGMENTS = [
  'Software you forgot.',
  'Customers who never paid.',
  'Vendors who quietly raised prices.',
]

const FRAGMENT_DELAYS = ['0.1s', '0.3s', '0.5s']

export function Hook() {
  return (
    <div className="mt-7">
      <div className="flex flex-col gap-[6px]">
        {FRAGMENTS.map((text, i) => (
          <p
            key={text}
            className="font-sans text-[30px] max-sm:text-[26px] font-normal tracking-[-0.022em] text-ink-secondary"
            style={{
              animation: `vh-rise 0.6s cubic-bezier(0.16,1,0.3,1) ${FRAGMENT_DELAYS[i]} both`,
            }}
          >
            {text}
          </p>
        ))}
      </div>

      <div className="mt-[14px] flex flex-col gap-0">
        <p
          className="font-sans text-[44px] max-sm:text-[30px] font-semibold tracking-[-0.032em] text-ink-primary leading-[1.1]"
          style={{ animation: 'vh-rise 0.6s cubic-bezier(0.16,1,0.3,1) 0.85s both' }}
        >
          The bleed has a number.
        </p>
        <p
          className="font-sans text-[44px] max-sm:text-[30px] font-semibold tracking-[-0.032em] text-signal-agent leading-[1.1]"
          style={{ animation: 'vh-rise 0.6s cubic-bezier(0.16,1,0.3,1) 0.85s both' }}
        >
          We find it.
        </p>
      </div>
    </div>
  )
}
