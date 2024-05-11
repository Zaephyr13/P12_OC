import { Link } from 'react-router-dom'
import { useTheme } from '../../utils/hooks/index'
import LogoCA from '../../assets/logo/logo.png' // .svg à faire
import DarkLogoCA from '../../assets/logo/darklogo.png' // .svg à faire
import '../../sass/components/_logo.scss'

const Logo = () => {
  const { darkMode } = useTheme()
  return (
    <div className="header__logo">
      <Link to="/">
        <img src={darkMode ? DarkLogoCA : LogoCA} alt="Mon logo personnel" />
      </Link>
    </div>
  )
}

export default Logo
