/* =========================================================
   SUNO ZARA — REAL-TIME LISTENER CHAT
   ========================================================= */

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";

import {
    getDatabase,
    ref,
    push,
    onChildAdded
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";


/* ================= FIREBASE CONFIG ================= */

const firebaseConfig = {
    apiKey: "AIzaSyADC5adJBMeiBwfFRpTarl8XbT-Qvyi0fU",
    authDomain: "suno-zara-b2905.firebaseapp.com",
    projectId: "suno-zara-b2905",
    storageBucket: "suno-zara-b2905.firebasestorage.app",
    messagingSenderId: "551715171225",
    appId: "1:551715171225:web:769e61f393eb06e28e8108",
    measurementId: "G-T8N3HPNLS4"
};


/* ================= INITIALIZE FIREBASE ================= */

const app =
    initializeApp(firebaseConfig);

const database =
    getDatabase(app);


/* ================= CHAT SETUP ================= */

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

    const COOLDOWN = 3000;

    let lastMessageTime = 0;


    /* ================= RECEIVE MESSAGES ================= */

    const chatRef =
        ref(
            database,
            "chat"
        );


    onChildAdded(
        chatRef,
        snapshot => {

            const data =
                snapshot.val();


            if (
                !data ||
                !data.message
            ) {
                return;
            }


            addChatMessage(
                data.message,
                data.sender || "Anonymous",
                data.timestamp
            );

        }
    );


    /* ================= SEND MESSAGE ================= */

    form.addEventListener(
        "submit",
        async event => {

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


            try {

                await push(
                    chatRef,
                    {
                        message: message,
                        sender: "Anonymous",
                        timestamp: now
                    }
                );


                input.value = "";

                showNotice(
                    "Message sent."
                );

            } catch (error) {

                console.error(
                    "Chat error:",
                    error
                );

                showNotice(
                    "Couldn't send your message. Please try again."
                );

            }

        }
    );


    /* ================= DISPLAY MESSAGE ================= */

    function addChatMessage(
        message,
        sender,
        timestamp
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
         * textContent is deliberately used.
         * This prevents users from injecting HTML
         * or JavaScript into the chat.
         */

        bubble.textContent =
            message;


        const time =
            document.createElement(
                "span"
            );

        time.className =
            "chat-message-time";


        const messageTime =
            timestamp
                ? new Date(timestamp)
                : new Date();


        time.textContent =
            `${sender} · ${messageTime.toLocaleTimeString(
                [],
                {
                    hour: "2-digit",
                    minute: "2-digit"
                }
            )}`;


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


    /* ================= NOTICE ================= */

    function showNotice(
        message
    ) {

        if (!notice) {
            return;
        }

        notice.textContent =
            message;

    }

}
