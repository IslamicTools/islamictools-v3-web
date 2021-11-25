import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import fajr from '../public/fajr.webp'
import sunrise from '../public/sunrise.webp'
import dhuhr from '../public/dhuhr.webp'
import asr from '../public/asr.webp'
import maghrib from '../public/maghrib.webp'
import isha from '../public/isha.webp'
// import React, { useEffect } from "react";

export default function Home() {
  //   useEffect(() => {
  //     function init() {
  //       new fullpage('#fullpage', {
  //         //options here
  //         autoScrolling:true,
  //         scrollHorizontally: true
  //       });

  //       //methods
  //       fullpage_api.setAllowScrolling(true);
  //     }

  //     window.onload = init();
  // }, [])

  return (
    <>
      <Head>
        <title>Islamic Tools</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.min.css" integrity="sha512-4rPgyv5iG0PZw8E+oRdfN/Gq+yilzt9rQ8Yci2jJ15rAyBmF0HBE4wFjBkoB72cxBeg63uobaj1UcNt/scV93w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      {/* <div className="modal z-50">
        <div class="modal-content">
          <span className="close-button">&times;</span>
          <h1>Hello, I am a modal!</h1>
        </div>
      </div> */}
      <main>
        <div id="fullpage">
        <div className="section">
            <h1 className="cc text-5xl font-black lg:text-9xl md:text-7xl sm:text3xl">Work In Progress</h1>
          </div>
          <div className="section active">
            <div className="bgWrap filter blur-sm"><Image src={fajr} alt="Fajr - Dawn Prayer" layout="fill" objectFit="cover" placeholder="blur" /></div>
            <h1 className="cc text-5xl font-black lg:text-9xl md:text-7xl sm:text3xl" id="fajr">Fajr: Loading...</h1>
          </div>
          <div className="section">
            <div className="bgWrap filter blur-sm"><Image src={sunrise} alt="Sunrise" layout="fill" objectFit="cover" placeholder="blur" /></div>
            <h1 className="cc text-5xl font-black lg:text-9xl md:text-7xl sm:text3xl" id="sunrise">Sunrise: Loading...</h1>
          </div>
          <div className="section">
            <div className="bgWrap filter blur-sm"><Image src={dhuhr} alt="Dhuhr - Zenith/Noon Prayer" layout="fill" objectFit="cover" placeholder="blur" /></div>
            <h1 className="cc text-5xl font-black lg:text-9xl md:text-7xl sm:text3xl" id="dhuhr">Dhuhr: Loading...</h1>
          </div>
          <div className="section">
            <div className="bgWrap filter blur-sm"><Image src={asr} alt="Asr - Afternoon Prayer" layout="fill" objectFit="cover" placeholder="blur" /></div>
            <h1 className="cc text-5xl font-black lg:text-9xl md:text-7xl sm:text3xl" id="asr">Asr: Loading...</h1>
          </div>
          <div className="section">
            <div className="bgWrap filter blur-sm"><Image src={maghrib} alt="Maghrib - Sunset Prayer" layout="fill" objectFit="cover" placeholder="blur" /></div>
            <h1 className="cc text-5xl font-black lg:text-9xl md:text-7xl sm:text3xl" id="maghrib">Maghrib: Loading...</h1>
          </div>
          <div className="section">
            <div className="bgWrap filter blur-sm"><Image src={isha} alt="Isha - Night Prayer" layout="fill" objectFit="cover" placeholder="blur" /></div>
            <h1 className="cctext-5xl font-black lg:text-9xl md:text-7xl sm:text3xl" id="isha">Isha: Loading...</h1>
          </div>
        </div>
      </main>
      {/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.min.js" integrity="sha512-gSf3NCgs6wWEdztl1e6vUqtRP884ONnCNzCpomdoQ0xXsk06lrxJsR7jX5yM/qAGkPGsps+4bLV5IEjhOZX+gg==" crossOrigin="anonymous" referrerPolicy="no-referrer" /> */}
      <Script src="/pray.js" strategy="beforeInteractive" />
      <Script src="/main.js" />
    </>
  )
}
