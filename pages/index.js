import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import fajr from '../public/fajr.webp'
import sunrise from '../public/sunrise.webp'
import dhuhr from '../public/dhuhr.webp'
import asr from '../public/asr.webp'
import maghrib from '../public/maghrib.webp'
import isha from '../public/isha.webp'

export default function Home() {
  function getPray() {
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      prayTimes.setMethod('Egypt');
      var times = prayTimes.getTimes(new Date(), [latitude, longitude]);
      document.getElementById("fajr").innerHTML = `Fajr: ${times.fajr}`;
      document.getElementById("dhuhr").innerHTML = `Dhuhr: ${times.dhuhr}`;
      document.getElementById("asr").innerHTML = `Asr: ${times.asr}`;
      document.getElementById("maghrib").innerHTML = `Maghrib: ${times.maghrib}`;
      document.getElementById("sunrise").innerHTML = `Sunrise: ${times.sunrise}`;
      document.getElementById("isha").innerHTML = `Isha: ${times.isha}`;
    }

    function error() {
      alert('Unable to retrieve your location');
    }

    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
    } else {
      console.log('Locating...');
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }
  return (
    <>
      <Head>
        <title>Islamic Tools</title>
      </Head>
      {/* <div className="modal z-50">
        <div className="modal-content">
          <span className="close-button">&times;</span>
          <h1 className="font-black">First Time Setup</h1>
        </div>
      </div> */}
      <main>
        <div id="fullpage">
          <div className="section">
            <h1 className="text-center text-4xl font-black lg:text-8xl md:text-7xl sm:text3xl m-5"><Link href="/">Islamic Tools (V3)</Link></h1>
            <h1 className="text-center text-4xl font-black lg:text-8xl md:text-7xl sm:text3xl m-5"><ion-icon name="logo-github" /><Link href="https://github.com/IslamicTools/islamictools-v3-web"> Source Code</Link></h1>
            <h1 className="text-center text-4xl font-black lg:text-8xl md:text-7xl sm:text3xl m-5"><ion-icon name="settings-outline" /><Link href="/settings"> Settings</Link></h1>
            <h1 className="text-center text-4xl font-black lg:text-8xl md:text-7xl sm:text3xl m-5"><ion-icon name="return-up-back" /><Link href="https://islamic-tools-web.pages.dev/"> Use Legacy Site (V2)</Link></h1>
          </div>
          <div className="section active">
            <div className="bgWrap"><Image src={fajr} alt="Fajr - Dawn Prayer" layout="fill" objectFit="cover" placeholder="blur" /></div>
            <h1 className="cc text-4xl font-black lg:text-9xl md:text-7xl sm:text3xl text-shadow" id="fajr">Fajr: Loading...</h1>
          </div>
          <div className="section">
            <div className="bgWrap"><Image src={sunrise} alt="Sunrise" layout="fill" objectFit="cover" placeholder="blur" /></div>
            <h1 className="cc text-4xl font-black lg:text-9xl md:text-7xl sm:text3xl text-shadow" id="sunrise">Sunrise: Loading...</h1>
          </div>
          <div className="section">
            <div className="bgWrap"><Image src={dhuhr} alt="Dhuhr - Zenith/Noon Prayer" layout="fill" objectFit="cover" placeholder="blur" /></div>
            <h1 className="cc text-4xl font-black lg:text-9xl md:text-7xl sm:text3xl text-shadow" id="dhuhr">Dhuhr: Loading...</h1>
          </div>
          <div className="section">
            <div className="bgWrap"><Image src={asr} alt="Asr - Afternoon Prayer" layout="fill" objectFit="cover" placeholder="blur" /></div>
            <h1 className="cc text-4xl font-black lg:text-9xl md:text-7xl sm:text3xl text-shadow" id="asr">Asr: Loading...</h1>
          </div>
          <div className="section">
            <div className="bgWrap"><Image src={maghrib} alt="Maghrib - Sunset Prayer" layout="fill" objectFit="cover" placeholder="blur" /></div>
            <h1 className="cc text-4xl font-black lg:text-9xl md:text-7xl sm:text3xl text-shadow" id="maghrib">Maghrib: Loading...</h1>
          </div>
          <div className="section">
            <div className="bgWrap"><Image src={isha} alt="Isha - Night Prayer" layout="fill" objectFit="cover" placeholder="blur" /></div>
            <h1 className="cc text-4xl font-black lg:text-9xl md:text-7xl sm:text3xl text-shadow" id="isha">Isha: Loading...</h1>
          </div>
        </div>
      </main>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.min.js" onLoad={() => { new fullpage('#fullpage', { autoScrolling: true }) }} integrity="sha512-gSf3NCgs6wWEdztl1e6vUqtRP884ONnCNzCpomdoQ0xXsk06lrxJsR7jX5yM/qAGkPGsps+4bLV5IEjhOZX+gg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <Script src="/pray.js" onLoad={getPray} />
      {/* <Script src="/main.js" strategy="lazyOnload" /> */}
      <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
      <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
    </>
  )
}
