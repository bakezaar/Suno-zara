/* =========================================================
   SUNO ZARA CHAT INTERFACE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setupChat();

    }
);


function setupChat() {

    const form =
        document.getElementById(
            "chatForm"
        );

    const input =
        document.getElementById(
            "chatInput"
        );

    const messages =
        document.getElementById(
            "chatMessages"
        );

    const notice =
        document.getElementById(
            "chatNotice"
        );


    if (
        !form ||
        !input ||
        !messages
    ) {
        return;
    }


    const MAX_LENGTH = 250;

    const COOLDOWN =
        3000;

    let lastMessageTime =
        0;


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const message =
                input.value.trim();


            if (!message) {
                return;
            }


            if (
                message.length >
                MAX_LENGTH
            ) {

                showNotice(
                    `Please keep your message under ${MAX_LENGTH} characters.`
                );

                return;

            }


            const now =
                Date.now();


            if (
                now -
                lastMessageTime <
                COOLDOWN
            ) {

                const remaining =
                    Math.ceil(
                        (
                            COOLDOWN -
                            (
                                now -
                                lastMessageTime
                            )
                        ) / 1000
                    );

                showNotice(
                    `Please wait ${remaining} second${remaining === 1 ? "" : "s"} before sending another message.`
                );

                return;

            }


            lastMessageTime =
                now;


            addChatMessage(
                message,
                "You"
            );


            input.value =
                "";


            showNotice(
                "Message sent."
            );


            /*
             * Part B will send this same message to the
             * real-time backend so other listeners and the
             * presenter can see it.
             */

        }
    );


    function addChatMessage(
        message,
        sender
    ) {

        const welcome =
            messages.querySelector(
                ".chat-welcome"
            );

        if (welcome) {
            welcome.remove();
        }


        const wrapper =
            document.createElement(
                "div"
            );

        wrapper.className =
            "chat-message";


        const bubble =
            document.createElement(
                "div"
            );

        bubble.className =
            "chat-message-bubble";

        /*
         * textContent is deliberately used instead of
         * innerHTML so user messages cannot inject HTML.
         */

        bubble.textContent =
            message;


        const time =
            document.createElement(
                "span"
            );

        time.className =
            "chat-message-time";

        time.textContent =
            `${sender} · ${getCurrentTime()}`;


        wrapper.appendChild(
            bubble
        );

        wrapper.appendChild(
            time
        );


        messages.appendChild(
            wrapper
        );


        messages.scrollTop =
            messages.scrollHeight;

    }


    function showNotice(
        message
    ) {

        if (!notice) {
            return;
        }

        notice.textContent =
            message;

    }


    function getCurrentTime() {

        return new Date()
            .toLocaleTimeString(
                [],
                {
                    hour: "2-digit",
                    minute: "2-digit"
                }
            );

    }

}
