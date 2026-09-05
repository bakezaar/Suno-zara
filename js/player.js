/* =========================================================
   SUNO ZARA LIVE PLAYER
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setupLivePlayer();

    }
);


function setupLivePlayer() {

    const audio =
        document.getElementById(
            "liveAudio"
        );

    const playButton =
        document.getElementById(
            "livePlayButton"
        );

    const playIcon =
        document.getElementById(
            "playIcon"
        );

    const playerState =
        document.getElementById(
            "playerState"
        );

    const liveStatus =
        document.getElementById(
            "liveStatus"
        );

    const liveStatusText =
        document.getElementById(
            "liveStatusText"
        );

    const waveform =
        document.getElementById(
            "waveformContainer"
        );

    const volume =
        document.getElementById(
            "volumeControl"
        );

    const currentProgram =
        document.getElementById(
            "currentProgram"
        );

    const currentPresenter =
        document.getElementById(
            "currentPresenter"
        );


    if (
        !audio ||
        !playButton
    ) {
        return;
    }


    const config =
        window.SUNO_ZARA_CONFIG || {};


    if (
        currentProgram &&
        config.currentProgram
    ) {

        currentProgram.textContent =
            config.currentProgram;

    }


    if (
        currentPresenter &&
        config.currentPresenter
    ) {

        currentPresenter.textContent =
            config.currentPresenter;

    }


    if (
        volume
    ) {

        audio.volume =
            Number(
                volume.value
            );

        volume.addEventListener(
            "input",
            () => {

                audio.volume =
                    Number(
                        volume.value
                    );

            }
        );

    }


    if (
        !config.streamUrl
    ) {

        setPlayerState(
            "Live stream will connect after AzuraCast is configured.",
            false
        );

        return;

    }


    audio.src =
        config.streamUrl;


    playButton.addEventListener(
        "click",
        async () => {

            if (
                audio.paused
            ) {

                await startLive();

            }
            else {

                stopLive();

            }

        }
    );


    audio.addEventListener(
        "playing",
        () => {

            playIcon.textContent =
                "❚❚";

            playerState.textContent =
                "Live broadcast is playing";

            waveform.classList.add(
                "playing"
            );

            liveStatus.classList.add(
                "connected"
            );

            liveStatusText.textContent =
                "Live";

        }
    );


    audio.addEventListener(
        "pause",
        () => {

            playIcon.textContent =
                "▶";

            waveform.classList.remove(
                "playing"
            );

            liveStatus.classList.remove(
                "connected"
            );

            liveStatusText.textContent =
                "Paused";

            playerState.textContent =
                "Press play to listen";

        }
    );


    audio.addEventListener(
        "waiting",
        () => {

            playerState.textContent =
                "Connecting to the broadcast...";

        }
    );


    audio.addEventListener(
        "stalled",
        () => {

            playerState.textContent =
                "Stream connection stalled...";

        }
    );


    audio.addEventListener(
        "error",
        () => {

            waveform.classList.remove(
                "playing"
            );

            liveStatus.classList.remove(
                "connected"
            );

            liveStatusText.textContent =
                "Connection error";

            playerState.textContent =
                "Unable to connect to the live stream.";

            playIcon.textContent =
                "▶";

        }
    );


    async function startLive() {

        try {

            playerState.textContent =
                "Connecting to the broadcast...";

            await audio.play();

        }
        catch (error) {

            console.error(
                "Live stream error:",
                error
            );

            playerState.textContent =
                "Your browser requires you to press play again.";

        }

    }


    function stopLive() {

        audio.pause();

    }


    function setPlayerState(
        message,
        connected
    ) {

        if (playerState) {

            playerState.textContent =
                message;

        }

        if (liveStatus) {

            liveStatus.classList.toggle(
                "connected",
                connected
            );

        }

        if (liveStatusText) {

            liveStatusText.textContent =
                connected
                    ? "Live"
                    : "Ready to listen";

        }

    }

}
