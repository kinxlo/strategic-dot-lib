import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react'

interface LogoProperties {
  logo: string
}

const Logo: FC<LogoProperties> = ({ logo }) => {
  return (
    <Link href="/" className="" data-testid="logo">
      <Image src={logo} alt="Techstudio academy logo" height={37} width={150} className="" />
    </Link>
  )
}

export default Logo
