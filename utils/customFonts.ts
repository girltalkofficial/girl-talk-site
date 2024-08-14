import localFont from "next/font/local";

const Boruna = localFont({
    src: [{path:"../assets/fonts/boruna/boruna.otf"}],
    variable:"--font-boruna"
})

const Mda = localFont({
    src: [{path:"../assets/fonts/maison-de-artisan/mdareg.otf"}],
    variable:"--font-mda"
})

const Motley = localFont({
    src: [{path:"../assets/fonts/motley-forces/motley.ttf"}],
    variable:"--font-motley"
})

const Quiet = localFont({
    src: [{path:"../assets/fonts/quiet-sound/Quiet.otf"}],
    variable:"--font-quiet"
})

const Futura = localFont({
    src: [
        {
            path:"../assets/fonts/Futura/FuturaPTLight.otf",
            weight:"300",
            style: "normal"
        },
        {
            path:"../assets/fonts/Futura/FuturaPTMedium.otf",
            weight:"500",
            style: "normal"
        },
        {
            path:"../assets/fonts/Futura/FuturaPTBold.otf",
            weight:"700",
            style: "normal"
        },
        {
            path:"../assets/fonts/Futura/FuturaPTExtraBold.otf",
            weight:"800",
            style: "normal"
        }
    ],
    variable:"--font-futura"
})


const Futuracond = localFont({
    src: [
        {
            path:"../assets/fonts/Futura/FuturaPTCondBook.otf",
            weight:"300",
            style: "normal"
        },
        {
            path:"../assets/fonts/Futura/FuturaPTCondMedium.otf",
            weight:"500",
            style: "normal"
        },
        {
            path:"../assets/fonts/Futura/FuturaPTCondBold.otf",
            weight:"700",
            style: "normal"
        },
        {
            path:"../assets/fonts/Futura/FuturaPTCondExtraBold.otf",
            weight:"800",
            style: "normal"
        }
    ],
    variable:"--font-futuracond"
})
export {Boruna, Mda, Motley, Quiet, Futura , Futuracond}