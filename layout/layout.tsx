import React, { FC, useRef, useEffect } from 'react'
import Head from 'next/head'
import Header from './header'

interface layoutInterface {
  children: any
}

const Layout: FC<layoutInterface> = ({ children }) => {
  const stickyHeader = useRef()

  useEffect(() => {
    const mainHeader = document.getElementById('site-header')
    const pageCTA = document.getElementById("page-cta")

    let pageCTAPosition = 0
    let previousScrollPosition = 0
    if (pageCTA) {
      pageCTAPosition = pageCTA.getBoundingClientRect().bottom;
    }

    const handleNavScroll = () => {
      let currentScrolledPosition = window.scrollY || window.pageYOffset;

      if (isScrollingDown()) {
        mainHeader?.classList.add("scroll-down");
        mainHeader?.classList.remove("scroll-up");
      } else {
        mainHeader?.classList.add("scroll-up");
        mainHeader?.classList.remove("scroll-down");
      }

      if (currentScrolledPosition > pageCTAPosition + 50) {
        if (!mainHeader?.classList.contains('fixed')) {
          mainHeader?.classList.add("fixed");
        }
      } else {
        if (mainHeader?.classList.contains("fixed")) {
          mainHeader?.classList.remove("fixed");
        }
      }
    }

    const isScrollingDown = () => {
      let currentScrolledPosition = window.scrollY || window.pageYOffset;
      let scrollingDown;
    
      if (currentScrolledPosition > previousScrollPosition) {
        scrollingDown = true;
      } else {
        scrollingDown = false;
      }
      previousScrollPosition = currentScrolledPosition;
      return scrollingDown;
    }
    
    window.addEventListener('scroll', handleNavScroll)
  }, [])

  

  return (
    <>
      <Head>
        <title>Remote Jobs — Find your next work from home job.</title>
        <meta name="description" content="Find your next work from home job." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="@NewDesignFile" />
        <meta property="og:title" content="Remote Jobs" />
        <meta property="og:url" content="https://new-ui.com/templates/job-listing" />
        <meta property="og:type" content="website" />


        <meta property="og:image" content="" />
        <meta property="og:description" content="Find your next work from home job." />
        <meta property="og:site_name" content="Remote Jobs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Find your next work from home job." />
        <meta name="twitter:title" content="Remote Jobs" />
        <meta name="twitter:url" content="" />
        <meta name="twitter:description" content="Find your next work from home job." />
        <meta name="twitter:image" content="" />
        <link rel="icon" href="/assets/images/logo.svg" />
      </Head>
      
      <Header />
      {children}
      
    </>
  )
}

export default Layout;