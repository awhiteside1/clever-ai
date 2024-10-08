export function Logomark(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      {...props}
      viewBox="0 0 111 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.125 57.1818C23.125 75.7923 37.7148 90.7022 55.5 90.7022L55.5 114.364C24.7532 114.364 -1.12333e-06 88.6649 -2.4995e-06 57.1818C-3.87566e-06 25.6988 24.7532 2.18062e-05 55.5 2.04622e-05L55.5 23.6615C37.7148 23.6615 23.125 38.5714 23.125 57.1818Z"
        fill="#8759F2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M78.625 57.1818C78.625 75.7923 93.2148 90.7022 111 90.7022L111 114.364C80.2532 114.364 55.5 88.6649 55.5 57.1818C55.5 25.6988 80.2532 2.18062e-05 111 2.04622e-05L111 23.6615C93.2148 23.6615 78.625 38.5714 78.625 57.1818Z"
        fill="#FFC300"
      />
      <rect x="55.5" width="55.5" height="23.5455" fill="#00D4E6" />
      <rect x="55.5" y="90.8182" width="55.5" height="23.5455" fill="#FF3E80" />
    </svg>
  )
}

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <div className="inline-flex gap-2 align-middle">
      <Logomark className="min-w-6 fill-cyan-500" />
      <p className="text-nowrap text-lg font-bold">Clever AI</p>
    </div>
  )
}
