import GalaxyImage from "../assets/images/mario-galaxy.jpeg";
import OdysseyImage from "../assets/images/mario-odyssey.jpg";
import SF5 from "../assets/images/streetfigher.jpg";
import KOF from "../assets/images/kof13.jpg";
import Mario3d from "../assets/images/mario3d.jpg";
import AC from "../assets/images/animal crossing.jpeg";
import Smash from "../assets/images/smashultimate.jpg";

export const SongLibrary = () => {
    return [
        {
            id: 1,
            name: "Gusty Garden Galaxy",
            artist: "Nintendo",
            cover: GalaxyImage,
            source:  "https://vgmsite.com/soundtracks/super-mario-galaxy-ost-super-mario-35th-anniversary-release/qipfjvwfco/17%20Gusty%20Garden%20Galaxy.mp3",
            color: "#322682"
        },
        {
            id: 2,
            name: "Jump Up, Super Star!",
            artist: "Nintendo",
            cover: OdysseyImage,
            source: "https://vgmsite.com/soundtracks/super-mario-odyssey-ost/gynnebqj/3-26%20Jump%20Up%2C%20Super%20Star%21.mp3",
            color: "#e11200"
        },
        {
            id: 3,
            name: "Street Fighter V",
            artist: "Capcom",
            cover: SF5,
            source: "https://vgmsite.com/soundtracks/street-fighter-v-original-soundtrack-vol.-1-original-version-ost/jmwpzwkpne/1-02%20Street%20Fighter%20V.mp3",
            color: "#f4990b"
        },
        {
            id:4,
            name: "Esaka Continues...",
            artist: "SNK Playmore",
            cover: KOF,
            source: "https://vgmsite.com/soundtracks/king-of-fighters-xiii-the-complete-soundtrack/albqdfbhrb/1-04.%20Esaka%20Continues...%20%28Japan%20Team%29.mp3",
            color: "#19803a"
        },
        {
            id: 5,
            name: "Super Bell Hill",
            artist: "Nintendo",
            cover: Mario3d,
            source: "https://vgmsite.com/soundtracks/super-mario-3d-world-soundtrack/ciulqikv/1-03%20-%20Super%20Bell%20Hill.mp3",
            color: "#fdfdfd"
        },
        {
            id: 6,
            name: "Welcome Horizons",
            artist: "Nintendo",
            cover: AC,
            source: "https://vgmsite.com/soundtracks/animal-crossing-new-horizons-2020-switch-gamerip/nwisjhmctg/1-01%20Welcome%20Horizons.mp3",
            color: "#faca40"
        },
        {
            id: 7,
            name: "Lifelight",
            artist: "Nintendo",
            cover: Smash,
            source: "https://vgmsite.com/soundtracks/super-smash-bros.-ultimate-vol.-30-super-smash-bros.-ultimate/skckkdthnd/2.%20Lifelight.mp3",
            color: "#1e438a"
        }
    ]
}