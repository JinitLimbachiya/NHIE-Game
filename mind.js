const questions = [
  
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        // FUNNY & LIGHTHEARTED
    
        "skipped school to sleep in.",,
        "eaten an entire pizza by myself.",
        "laughed so hard I peed my pants.",
        "worn pajamas all day in public.",
        "fallen asleep during a movie at the theater.",
        "forgotten where I parked my car.",
        "tripped in public.",
        "sung in the shower.",
        "walked into a glass door.",
        "faked being sick to skip work or school.",
        "talked to myself in a mirror.",
        "accidentally worn mismatched shoes.",
        "pretended to know a stranger.",
        "spilled a drink on myself in public.",
        "mistaken someone for someone else.",
    
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        // EMBARASSING
    
        "texted the wrong person.",
        "snored loudly in a public place.",
        "sent a text and regretted it immediately.",
        "forgotten someone’s name right after meeting them.",
        "called someone the wrong name in a conversation.",
        "walked into the wrong restroom.",
        "waved at someone who wasn’t waving at me.",
        "accidentally liked an old photo while stalking someone on social media.",
        "forgotten what I was about to say mid-sentence.",
        "fallen asleep in a class or meeting.",
        
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        // ADVENTURE & TRAVEL
    
        "traveled to a foreign country.",
        "gone skydiving.",
        "swum with dolphins.",
        "been on a road trip.",
        "stayed up all night just to watch the sunrise.",
        "gone camping.",
        "flown in a helicopter.",
        "taken a spontaneous trip.",
        "been scuba diving.",
        "ridden a horse.",
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        // PERSONAL & LIFE EXPERIENCES
    
        "broken a bone.",
        "gotten a tattoo.",
        "dyed my hair.",
        "cried during a movie.",
        "been in a car accident.",
        "been in love.",
        "been stood up on a date.",
        "lied to my parents.",
        "pulled an all-nighter.",
        "baked something from scratch.",
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        // AWKWARD & RISKY
    
        "lied about my age.",
        "sent a risky text.",
        "kissed someone on a dare.",
        "gotten a speeding ticket.",
        "stolen something from a store.",
        "been kicked out of a bar or party.",
        "laughed at a funeral.",
        "gotten a bad haircut.",
        "given a fake name to someone.",
        "prank-called someone.",
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        // TECHNOLOGY AND SOCIAL MEDIA 
    
        "binge-watched an entire TV series in one sitting.",
        "dropped my phone in the toilet.",
        "Googled myself.",
        "tried to take a selfie while crying.",
        "used someone else’s Netflix account.",
        "gone viral on social media.",
        "been blocked on social media.",
        "created a fake social media account.",
        "used a dating app.",
        "accidentally sent a text to the wrong group chat.",
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        // RELATIONSHIPS & FRIENDS
    
        "been friend-zoned.",
        "kissed someone under the mistletoe.",
        "ghosted someone.",
        "gone on a blind date.",
        "been the third wheel.",
        "had a crush on a friend’s sibling.",
        "forgotten an important anniversary.",
        "gone out with a friend’s ex.",
        "gotten in a physical fight.",
        "stood someone up on a date.",
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        // GROSS OR WEIRD EXPERIENCES
    
        "eaten food that fell on the floor.",
        "picked my nose in public.",
        "worn the same clothes two days in a row.",
        "eaten a bug.",
        "eaten something and then regretted it instantly.",
        "stepped in dog poop barefoot.",
        "drank straight from the milk or juice carton.",
        "burped loudly in public.",
        "had a bug fly into my mouth.",
        "accidentally eaten expired food.",
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        // CAREER & WORK
    
        "been late to a job interview.",
        "lied on my resume.",
        "fallen asleep at work.",
        "called in sick when I wasn’t.",
        "had a bad performance review.",
        "forgotten an important work meeting.",
        "worked from home in pajamas.",
        "been promoted.",
        "had a work crush.",
        "been fired from a job.",
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        // SCHOOL & LEARNING 
    
        "cheated on a test.",
        "slept through an important class.",
        "missed a deadline.",
        "forgotten to do my homework.",
        "been sent to the principal’s office.",
        "pulled an all-nighter to study.",
        "failed a class.",
        "skipped class.",
        "been caught passing notes in class.",
        "gotten detention.",
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ]
    
    let questionDiv = document.getElementById('questionContainer')
    let gameDiv = document.getElementById('gameDiv')
    
    let iHaveBtn = document.getElementById('iHaveBtn')
    let iHaveNotBtn = document.getElementById('iHaveNotBtn')
    
    let icon = document.getElementById('icon')
    let title = document.getElementById('title')
    
    let usedIndex = []
    
    const randomQuestion = () => {
    
        if(usedIndex.length == questions.length) {
            usedIndex = []
        }
    
        let randomIndex = Math.floor(Math.random() * questions.length)
    
        if(!usedIndex.includes(randomIndex)) {
            questionDiv.innerHTML = questions[randomIndex]
            usedIndex.push(randomIndex)
        }
    
        else {
            randomQuestion()
        }
        
        questionDiv.style.transition = 'all 0.2s ease'
    }
    
    iHaveBtn.onclick = () => {
        questionDiv.style.opacity = 0
    
        setTimeout(() => {
            randomQuestion()
            questionDiv.style.opacity = 1
        }, 200)
    
        questionDiv.style.transition = 'opacity 0.2s ease'
    }
    
    iHaveNotBtn.onclick = () => {
        questionDiv.style.opacity = 0
    
        setTimeout(() => {
            randomQuestion()
            questionDiv.style.opacity = 1
        }, 200)
    
        questionDiv.style.transition = 'opacity 0.2s ease'
    }
    
    icon.onclick = () => {
        icon.style.opacity = 0
    
        setTimeout(() => {
    
            if(icon.src.includes('Dark%20Mode%20Icon.png')) {
                icon.src = 'Light%20Mode%20Icon.png'
                document.body.style.backgroundColor = 'rgb(19, 18, 18)'
                title.style.color = 'rgb(212, 228, 233)'
                questionDiv.style.color = 'rgb(212, 228, 233)'
            }
        
            else {
                icon.src = 'Dark%20Mode%20Icon.png'
                document.body.style.backgroundColor = 'rgb(184, 224, 235)'
                title.style.color = 'rgb(19, 18, 18)'
                questionDiv.style.color = 'rgb(19, 18, 18)'
            }
    
            icon.style.opacity = 1
    
            document.body.style.transition = 'all 0.2s ease'
            icon.style.transition = 'opacity 0.2s ease'
    
        }, 200)
    }
    
    randomQuestion()