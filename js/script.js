/* =========================================================
   SUNO ZARA GENERAL SITE SCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    setupMobileNavigation();

    setupCurrentYear();

    setupNews();

    setupArticle();

    setupProgramPlayers();

});


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

function setupMobileNavigation() {

    const button =
        document.getElementById(
            "mobileMenuButton"
        );

    const navigation =
        document.getElementById(
            "mainNavigation"
        );

    if (!button || !navigation) {
        return;
    }

    button.addEventListener(
        "click",
        () => {

            const isOpen =
                navigation.classList.toggle(
                    "open"
                );

            button.classList.toggle(
                "active",
                isOpen
            );

            button.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            document.body.classList.toggle(
                "menu-open",
                isOpen
            );

        }
    );


    navigation
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navigation.classList.remove(
                        "open"
                    );

                    button.classList.remove(
                        "active"
                    );

                    button.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    document.body.classList.remove(
                        "menu-open"
                    );

                }
            );

        });

}


/* =========================================================
   FOOTER YEAR
   ========================================================= */

function setupCurrentYear() {

    const yearElements =
        document.querySelectorAll(
            "#currentYear"
        );

    const currentYear =
        new Date().getFullYear();

    yearElements.forEach(element => {

        element.textContent =
            currentYear;

    });

}


/* =========================================================
   NEWS DATA
   =========================================================
   
   IMPORTANT:
   These are structured entries for the website.
   Verify real-world reporting before publishing
   factual claims as journalism.
   ========================================================= */

const SUNO_ZARA_NEWS = [

    {
        id: "gcu-communication-confusion",

        category: "GCU",

        date: "Campus Desk",

        author: "Suno Zara Newsroom",

        title:
            "When a campus post creates more questions than answers",

        excerpt:
            "A notification circulating among students can quickly become a source of confusion when its official status is unclear.",

        lead:
            "Students often rely on social media pages and online notices for quick updates. But when a message appears official before its status is confirmed, uncertainty can spread just as quickly as the information itself.",

        body: [

            {
                type: "p",

                text:
                    "Campus communication moves quickly. A notice can appear online, be shared between students and departments, and become a topic of conversation within minutes."
            },

            {
                type: "p",

                text:
                    "That speed can be useful when information is accurate and clearly sourced. It can also create confusion when students cannot immediately tell whether a message represents an official university decision or an informal announcement."
            },

            {
                type: "h2",

                text:
                    "Why the source matters"
            },

            {
                type: "p",

                text:
                    "For students, the difference between a confirmed university notification and a social-media post is important. Attendance rules, academic deadlines and administrative decisions can directly affect students, which makes clarity especially important."
            },

            {
                type: "quote",

                text:
                    "A message can travel faster than its clarification."
            },

            {
                type: "p",

                text:
                    "Suno Zara approaches such stories by separating what is confirmed from what is being circulated. The aim is not simply to repeat a notification, but to ask where it came from, whether the relevant authority has confirmed it and what students actually need to know."
            }

        ]

    },


    {
        id: "lahore-city-stories",

        category: "Lahore",

        date: "Lahore Desk",

        author: "Suno Zara Newsroom",

        title:
            "The city is always telling a story",

        excerpt:
            "From traffic and weather to neighbourhood conversations, Lahore produces stories long before they become headlines.",

        lead:
            "A city does not stop producing news simply because a story has not reached the front page.",

        body: [

            {
                type: "p",

                text:
                    "Lahore is experienced differently by every person moving through it. The route to university, the road outside a market, a sudden change in weather or a small public gathering can all reveal something about the city."
            },

            {
                type: "p",

                text:
                    "For a student-focused radio station, local reporting begins with paying attention to those details."
            },

            {
                type: "h2",

                text:
                    "Looking beyond the obvious"
            },

            {
                type: "p",

                text:
                    "Not every useful story needs to be dramatic. Sometimes the value of local journalism is simply helping people understand something they encounter every day."
            }

        ]

    },


    {
        id: "pakistan-student-voices",

        category: "Pakistan",

        date: "Pakistan Desk",

        author: "Suno Zara Newsroom",

        title:
            "Why student voices belong in the conversation",

        excerpt:
            "Young people are not simply an audience for news. They are also participants in the issues being discussed.",

        lead:
            "Students experience education, technology, employment, culture and social change directly — making their perspectives part of the wider national conversation.",

        body: [

            {
                type: "p",

                text:
                    "News about young people is often presented through statistics, policy announcements and institutional statements. Those perspectives matter, but they are only part of the picture."
            },

            {
                type: "p",

                text:
                    "Students also experience these issues in ordinary ways: through classrooms, family conversations, transport, expenses, technology and plans for the future."
            },

            {
                type: "h2",

                text:
                    "Making space for the voice behind the statistic"
            },

            {
                type: "p",

                text:
                    "Broadcast journalism can make room for those voices through interviews, conversations and firsthand experiences while still maintaining the responsibility to verify information."
            }

        ]

    },


    {
        id: "world-attention",

        category: "World",

        date: "World Desk",

        author: "Suno Zara Newsroom",

        title:
            "Living in an age of constant updates",

        excerpt:
            "The world can feel permanently live. The challenge is knowing what deserves our attention.",

        lead:
            "With news arriving continuously through phones and social platforms, attention has become one of the most valuable things journalism competes for.",

        body: [

            {
                type: "p",

                text:
                    "A major international event can reach a student's phone within seconds. The same screen may also contain entertainment, advertising, rumours and personal messages."
            },

            {
                type: "p",

                text:
                    "That environment makes media literacy and verification increasingly important. Fast information is not automatically reliable information."
            },

            {
                type: "quote",

                text:
                    "The question is not only what happened. It is also: how do we know?"
            }

        ]

    },


    {
        id: "culture-between-generations",

        category: "Culture",

        date: "Culture Desk",

        author: "Suno Zara Newsroom",

        title:
            "Culture lives between what we keep and what we change",

        excerpt:
            "Music, language, fashion and everyday habits constantly move between generations.",

        lead:
            "Culture is not frozen in one moment. It is something people inherit, reinterpret and pass forward.",

        body: [

            {
                type: "p",

                text:
                    "A song from another decade can suddenly return to a younger audience. An old phrase can appear in a new meme. A traditional idea can be reshaped through contemporary art."
            },

            {
                type: "p",

                text:
                    "These small exchanges show how culture remains alive. It survives not simply because people preserve it, but because people continue to give it new meaning."
            },

            {
                type: "h2",

                text:
                    "The stories we carry"
            },

            {
                type: "p",

                text:
                    "For Suno Zara, culture is part of everyday journalism because the way people speak, listen, dress, create and remember tells us something about the communities around us."
            }

        ]

    }

];


/* =========================================================
   NEWS PAGE
   ========================================================= */

function setupNews() {

    const newsGrid =
        document.getElementById(
            "newsGrid"
        );

    if (!newsGrid) {
        return;
    }

    renderNews(
        SUNO_ZARA_NEWS,
        newsGrid
    );


    const filterButtons =
        document.querySelectorAll(
            ".category-button"
        );

    filterButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                filterButtons.forEach(
                    item => {
                        item.classList.remove(
                            "active"
                        );
                    }
                );

                button.classList.add(
                    "active"
                );

                const category =
                    button.dataset.category;

                if (
                    category === "all"
                ) {

                    renderNews(
                        SUNO_ZARA_NEWS,
                        newsGrid
                    );

                    return;
                }

                const filtered =
                    SUNO_ZARA_NEWS.filter(
                        story =>
                            story.category ===
                            category
                    );

                renderNews(
                    filtered,
                    newsGrid
                );

            }
        );

    });

}


/* =========================================================
   RENDER NEWS CARDS
   ========================================================= */

function renderNews(
    stories,
    container
) {

    container.innerHTML = "";

    if (!stories.length) {

        const empty =
            document.createElement(
                "div"
            );

        empty.className =
            "news-empty";

        empty.textContent =
            "No stories available in this category.";

        container.appendChild(
            empty
        );

        return;
    }


    stories.forEach(
        story => {

            const card =
                document.createElement(
                    "article"
                );

            card.className =
                "news-card";


            const visual =
                document.createElement(
                    "div"
                );

            visual.className =
                "news-card-visual";


            const visualCategory =
                document.createElement(
                    "span"
                );

            visualCategory.className =
                "news-card-visual-category";

            visualCategory.textContent =
                story.category;


            const visualTitle =
                document.createElement(
                    "span"
                );

            visualTitle.className =
                "news-card-visual-title";

            visualTitle.textContent =
                "SUNO ZARA";


            visual.appendChild(
                visualCategory
            );

            visual.appendChild(
                visualTitle
            );


            const content =
                document.createElement(
                    "div"
                );

            content.className =
                "news-card-content";


            const date =
                document.createElement(
                    "span"
                );

            date.className =
                "news-card-date";

            date.textContent =
                story.date;


            const title =
                document.createElement(
                    "h2"
                );

            title.textContent =
                story.title;


            const excerpt =
                document.createElement(
                    "p"
                );

            excerpt.textContent =
                story.excerpt;


            const link =
                document.createElement(
                    "a"
                );

            link.className =
                "news-card-link";

            link.href =
                `article.html?story=${encodeURIComponent(story.id)}`;

            link.innerHTML =
                `<span>Read story</span><span>→</span>`;


            content.appendChild(
                date
            );

            content.appendChild(
                title
            );

            content.appendChild(
                excerpt
            );

            content.appendChild(
                link
            );


            card.appendChild(
                visual
            );

            card.appendChild(
                content
            );


            container.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   ARTICLE PAGE
   ========================================================= */

function setupArticle() {

    const titleElement =
        document.getElementById(
            "articleTitle"
        );

    if (!titleElement) {
        return;
    }


    const params =
        new URLSearchParams(
            window.location.search
        );

    const storyId =
        params.get("story");


    const story =
        SUNO_ZARA_NEWS.find(
            item =>
                item.id === storyId
        );


    if (!story) {

        titleElement.textContent =
            "Story not found";

        const lead =
            document.getElementById(
                "articleLead"
            );

        if (lead) {

            lead.textContent =
                "The story you are looking for could not be found.";

        }

        return;
    }


    document.title =
        `${story.title} — Suno Zara`;


    const description =
        document.getElementById(
            "articleDescription"
        );

    if (description) {

        description.setAttribute(
            "content",
            story.lead
        );

    }


    document.getElementById(
        "articleCategory"
    ).textContent =
        story.category;


    document.getElementById(
        "articleTitle"
    ).textContent =
        story.title;


    document.getElementById(
        "articleDate"
    ).textContent =
        story.date;


    document.getElementById(
        "articleAuthor"
    ).textContent =
        story.author;


    document.getElementById(
        "articleLead"
    ).textContent =
        story.lead;


    renderArticleBody(
        story.body
    );

}


/* =========================================================
   RENDER ARTICLE BODY
   ========================================================= */

function renderArticleBody(
    blocks
) {

    const container =
        document.getElementById(
            "articleBody"
        );

    if (!container) {
        return;
    }

    container.innerHTML = "";


    blocks.forEach(
        block => {

            let element;


            if (block.type === "h2") {

                element =
                    document.createElement(
                        "h2"
                    );

            }
            else if (
                block.type === "quote"
            ) {

                element =
                    document.createElement(
                        "blockquote"
                    );

            }
            else {

                element =
                    document.createElement(
                        "p"
                    );

            }


            element.textContent =
                block.text;


            container.appendChild(
                element
            );

        }
    );

}


/* =========================================================
   PRE-RECORDED PROGRAM PLAYERS
   ========================================================= */

function setupProgramPlayers() {

    const buttons =
        document.querySelectorAll(
            ".program-play-button"
        );

    if (!buttons.length) {
        return;
    }


    let audio =
        document.getElementById(
            "programAudio"
        );


    if (!audio) {

        audio =
            document.createElement(
                "audio"
            );

        audio.id =
            "programAudio";

        audio.preload =
            "none";

        document.body.appendChild(
            audio
        );

    }


    buttons.forEach(
        button => {

            button.addEventListener(
                "click",
                async () => {

                    const source =
                        button.dataset.audio;

                    const title =
                        button.dataset.title;


                    if (
                        audio.src.endsWith(
                            source
                        ) &&
                        !audio.paused
                    ) {

                        audio.pause();

                        button.classList.remove(
                            "playing"
                        );

                        button.querySelector(
                            "span"
                        ).textContent =
                            "▶";

                        button.childNodes[
                            button.childNodes.length - 1
                        ].textContent =
                            " Play";

                        return;
                    }


                    buttons.forEach(
                        other => {

                            other.classList.remove(
                                "playing"
                            );

                            const icon =
                                other.querySelector(
                                    "span"
                                );

                            if (icon) {
                                icon.textContent =
                                    "▶";
                            }

                        }
                    );


                    audio.src =
                        source;

                    audio.load();


                    try {

                        await audio.play();

                        button.classList.add(
                            "playing"
                        );

                        button.querySelector(
                            "span"
                        ).textContent =
                            "❚❚";

                    }
                    catch (error) {

                        console.error(
                            "Program playback failed:",
                            error
                        );

                        alert(
                            `The audio file "${title}" could not be played. Make sure the MP3 exists in the audio folder.`
                        );

                    }

                }
            );

        }
    );


    audio.addEventListener(
        "ended",
        () => {

            buttons.forEach(
                button => {

                    button.classList.remove(
                        "playing"
                    );

                    const icon =
                        button.querySelector(
                            "span"
                        );

                    if (icon) {
                        icon.textContent =
                            "▶";
                    }

                }
            );

        }
    );

}
