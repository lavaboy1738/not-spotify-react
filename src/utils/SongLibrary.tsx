import GalaxyImage from "../assets/images/mario-galaxy.jpeg";
import OdysseyImage from "../assets/images/mario-odyssey.jpg";

export const SongLibrary = () => {
    return [
        {
            id: 1,
            name: "Gusty Garden Galaxy",
            artist: "Nintendo",
            cover: GalaxyImage,
            active: true,
            source:  "https://vgmsite.com/soundtracks/super-mario-galaxy-ost-super-mario-35th-anniversary-release/qipfjvwfco/17%20Gusty%20Garden%20Galaxy.mp3",
            color: "#322682"
        },
        {
            id: 2,
            name: "Jump Up, Super Star!",
            artist: "Nintendo",
            cover: OdysseyImage,
            active: false,
            source: "https://vgmsite.com/soundtracks/super-mario-odyssey-ost/gynnebqj/3-26%20Jump%20Up%2C%20Super%20Star%21.mp3",
            color: "#e11200"
        },
    ]
}