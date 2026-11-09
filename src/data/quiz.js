export const quiz = {
    title: "slop magical girl quiz",
    results: {
        lunatic: { 
            name: "LUNAT!C", 
            description: "Spunky gorl",
            image: "/images/lunatic.jpeg",
            color: "#fdde2e",
            quote: "haha 6 7",
            mbti: "ENFP-A",
            playlist: "https://music.youtube.com/playlist?list=PLLMieXTyJfmw&si=-vrAIc7xicDcC07U",
        },
        repX: { 
            name: "Reporter X", 
            description: "A beloved, friendly teacher by day, and a ruthless, anti-magical-girl journalist by night, Reporter X is the eccentric mastermind behind some of the most notorious smear campaigns against magical girls, with his works gaining an ever-growing cult following across J-Town. Using dramatic reportage, controlling narratives, and fabricating evidence, he is determined to “expose” the “truth” about magical girls at any cost, and won’t stop until all of them are gone.<br>Yet, his reasons for his actions seem to stem from something personal. Fear? Grief? No one knows. What matters to him is that he can protect his students and the city he cares so deeply about, even if it means going about it in his own odd ways…",
            image: "/images/reporterX.gif",
            color: "#c39a67fd",
            quote: "Wassup prankster gangsters welcome back to my youtube channel be sure to like comment and subscribe for more epic [insert magical girl slur here] content",
            mbti: "ESFJ-A",
            playlist: "https://music.youtube.com/playlist?list=PLEG8BRo4iD-s&si=AgFqYb8IJqU3kInm",
        },
        prince: { 
            name: "Conductor: Prince", 
            description: "9 yrs old and already too far gone",
            color: "#ca6f6f",
            image: "/images/IMG_2314.PNG",
        },
    },

    questions: [
        {
            text: "I fight…",
            answers: [
                { text: "Its expected of me", scores: { lunatic: 2} },
                { text: "For revenge", scores: { repX: 2} },
                { text: "For my entertainment", scores: { prince: 2} },
            ],

        },
        {
            text: "Some jackass reporter in heels is spreading some baaaad juju about you! What will you do?",
            answers: [
                { text: "Sass em", scores: { lunatic: 2} },
                { text: "I am the jackass reporter in heels", scores: { repX: 2} },
                { text: "cry", scores: { prince: 2} },
            ],

        },
        {
            text: "What will your side-plot-filler-episode look like?",
            answers: [
                { text: "The most unhinged, memeable, budget-wasting episode known to man", scores: { lunatic: 2} },
                { text: "Amending fences, or making a new friend", scores: { repX: 2} },
                { text: "An angsty flashback- dropping a massive lorebomb no one saw coming", scores: { prince: 2} },
            ],
        },
    ],
}