import Image from 'next/image'
// import desktopLogo from '/assets/images/logo.svg'
// import mobileLogo from '/assets/images/logo-small.svg'

const Header = () => {
  return <header id="site-header" className="scrollup">
    <nav>
      <ul>
        <li>
          <a href="/" className="inline-block site-logo"> 
            <div className="desktop">
              <Image 
                src="/assets/images/logo.svg"
                alt="Remote India Logo"
                width={32}
                height={32} />
              </div>
            <div className="mobile">
              <Image 
                src="/assets/images/logo-small.svg"
                alt="Remote India Logo"
                width={32}
                height={32} />
            </div>
          </a>
        </li>
      </ul>
      <ul>
        {}
        <li>
          <a href="https://forms.gle/NLKBu8JU7JZHNKak9" target="_blank" className="btn btn--secondary">Post a Job</a>
        </li>
      </ul>
    </nav>
  </header>
}

export default Header