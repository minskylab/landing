import FontFaceObserver from "fontfaceobserver";

const minskyGoogleFonts = "https://fonts.googleapis.com/css?family=Karla:400,700|Rubik:400,700&display=swap";

const Fonts = () => {
    const link = document.createElement("link");
    link.href = minskyGoogleFonts;
    link.rel = "stylesheet";

    document.head.appendChild(link);

    const roboto = new FontFaceObserver("Karla");

    roboto.load().then(() => {
        document.documentElement.classList.add("karla");
    });
};

export default Fonts;
