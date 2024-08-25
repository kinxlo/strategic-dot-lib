// import { Image } from '@radix-ui/react-avatar'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface LogoProperties {
  logo: string
}

const Logo: FC<LogoProperties> = ({ logo }) => {
  return (
    <Link to="/" className="" data-testid="logo">
      <img src={logo} alt="Techstudio academy logo" height={37} width={150} className="" />
    </Link>
  )
}

export default Logo
