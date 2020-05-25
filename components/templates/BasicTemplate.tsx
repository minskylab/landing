import React from "react";
import Head from "next/head";

const BasicTemplate = (props: any) => {
    return (
        <>
            <style jsx global>{`
                * {
                    font-size: 16px;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }

                body {
                    margin: 0;
                    padding: 0;
                    font-weight: 400;
                    line-height: 1.8;
                    color: #333;
                    font-family: sans-serif;
                }
                h1 {
                    font-weight: 700;
                }
                p {
                    margin-bottom: 10px;
                }
            `}</style>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta
                    name="description"
                    content="Minsky is a Peruvian located company with the mision to change the technological landscape of Peru"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />

                <script
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `
                        var _paq = window._paq || [];
                        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
                        _paq.push(['trackPageView']);
                        _paq.push(['enableLinkTracking']);
                        (function() {
                          var u="//analytics.minsky.cc/";
                          _paq.push(['setTrackerUrl', u+'matomo.php']);
                          _paq.push(['setSiteId', '1']);
                          var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                          g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
                        })();`,
                    }}
                />

                <script
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `(function(h,o,t,j,a,r){
                            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                            h._hjSettings={hjid:1710264,hjsv:6};
                            a=o.getElementsByTagName('head')[0];
                            r=o.createElement('script');r.async=1;
                            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                            a.appendChild(r);
                        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
                    }}
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&family=Rubik:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            {props.children}
        </>
    );
};

export default BasicTemplate;
