import FontFaceObserver from "fontfaceobserver";

const minskyGoogleFonts = "https://fonts.googleapis.com/css?family=Karla:400,700|Rubik:400,700|PT+Mono&display=swap";

const Fonts = () => {
    const link = document.createElement("link");
    link.href = minskyGoogleFonts;
    link.rel = "stylesheet";

    document.head.appendChild(link);

    const karla = new FontFaceObserver("Karla");

    karla.load().then(() => {
        document.documentElement.classList.add("minsky");
    });
};

export default Fonts;
