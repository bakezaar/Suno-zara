/* =========================================================
   SUNO ZARA CONFIGURATION
   ========================================================= */

window.SUNO_ZARA_CONFIG = {

    stationName: "Suno Zara",

    tagline: "Awaazon Ke Darmiyan",

    /*
     * Part B will provide the real AzuraCast/Icecast stream URL.
     *
     * Example:
     *
     * streamUrl:
     * "https://radio.example.com/listen/suno_zara/radio.mp3"
     *
     * DO NOT put http:// when the website itself is hosted on
     * GitHub Pages HTTPS. The stream should preferably use HTTPS.
     */

    streamUrl: "https://excessive-colour-dodge-direct.trycloudflare.com/listen/suno-zara/radio.mp3",


    /*
     * Program information shown on the live player.
     *
     * You can change these whenever your actual programming
     * schedule is finalized.
     */

    currentProgram: "Suno Zara Live",

    currentPresenter: "Live from the station",


    /*
     * Local program audio.
     *
     * These files are stored in the /audio/ folder.
     */

    programs: {

        "between-the-lines": {
            title: "Between The Lines",
            presenter: "Suno Zara Team",
            audio: "audio/between-the-lines.mp3"
        },

        "local-frequency": {
            title: "The Local Frequency",
            presenter: "Suno Zara Team",
            audio: "audio/local-frequency.mp3"
        },

        "talk-to-me": {
            title: "Talk To Me",
            presenter: "Suno Zara Team",
            audio: "audio/talk-to-me.mp3"
        },

        "after-hours": {
            title: "After Hours",
            presenter: "Suno Zara Team",
            audio: "audio/after-hours.mp3"
        }

    }

};
