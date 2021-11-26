import Link from 'next/link'
import Script from 'next/script'

export default function Settings() {
    return (
        <>
            <main>
                <div id="fullpage">
                    <div className="section">
                        <h1 className="text-center text-4xl font-black lg:text-8xl md:text-7xl sm:text3xl m-5"><Link href="/">Islamic Tools (V3)</Link></h1>
                        <h1 className="text-center text-4xl font-black lg:text-8xl md:text-7xl sm:text3xl m-5"><ion-icon name="logo-github" /><Link href="https://github.com/IslamicTools/islamictools-v3-web"> Source Code</Link></h1>
                        <h1 className="text-center text-4xl font-black lg:text-8xl md:text-7xl sm:text3xl m-5"><ion-icon name="settings-outline" /><Link href="/settings"> Settings</Link></h1>
                        <h1 className="text-center text-4xl font-black lg:text-8xl md:text-7xl sm:text3xl m-5"><ion-icon name="return-up-back" /><Link href="https://islamic-tools-web.pages.dev/"> Use Legacy Site (V2)</Link></h1>
                    </div>
                    <div className="section active">
                        <h1 className="cc text-4xl font-black lg:text-9xl md:text-7xl sm:text3xl text-shadow" id="fajr">Work In Progress</h1>
                    </div>
                </div>
            </main>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.min.js" onLoad={() => { new fullpage('#fullpage', { autoScrolling: true }) }} integrity="sha512-gSf3NCgs6wWEdztl1e6vUqtRP884ONnCNzCpomdoQ0xXsk06lrxJsR7jX5yM/qAGkPGsps+4bLV5IEjhOZX+gg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
            <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
        </>
    )
}