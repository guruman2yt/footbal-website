/* ==========================================================================
   WORLD CUP 2026 DATABASE & INITIAL STATE
   ========================================================================== */

const TEAMS = {
    // Group A
    'MEX': { name: 'Mexico', code: 'mx', group: 'A', played: 2, won: 1, drawn: 1, lost: 0, gd: 2, pts: 4 },
    'RSA': { name: 'South Africa', code: 'za', group: 'A', played: 2, won: 0, drawn: 1, lost: 1, gd: -2, pts: 1 },
    'KOR': { name: 'South Korea', code: 'kr', group: 'A', played: 2, won: 1, drawn: 1, lost: 0, gd: 1, pts: 4 },
    'CZE': { name: 'Czechia', code: 'cz', group: 'A', played: 2, won: 0, drawn: 1, lost: 1, gd: -1, pts: 1 },

    // Group B
    'CAN': { name: 'Canada', code: 'ca', group: 'B', played: 2, won: 2, drawn: 0, lost: 0, gd: 3, pts: 6 },
    'BIH': { name: 'Bosnia & Herz.', code: 'ba', group: 'B', played: 2, won: 0, drawn: 1, lost: 1, gd: -2, pts: 1 },
    'QAT': { name: 'Qatar', code: 'qa', group: 'B', played: 2, won: 0, drawn: 1, lost: 1, gd: -3, pts: 1 },
    'SUI': { name: 'Switzerland', code: 'ch', group: 'B', played: 2, won: 1, drawn: 0, lost: 1, gd: 2, pts: 3 },

    // Group C
    'BRA': { name: 'Brazil', code: 'br', group: 'C', played: 2, won: 2, drawn: 0, lost: 0, gd: 4, pts: 6 },
    'MAR': { name: 'Morocco', code: 'ma', group: 'C', played: 2, won: 1, drawn: 0, lost: 1, gd: 0, pts: 3 },
    'HAI': { name: 'Haiti', code: 'ht', group: 'C', played: 2, won: 0, drawn: 0, lost: 2, gd: -5, pts: 0 },
    'SCO': { name: 'Scotland', code: 'gb-sct', group: 'C', played: 2, won: 1, drawn: 0, lost: 1, gd: 1, pts: 3 },

    // Group D
    'USA': { name: 'United States', code: 'us', group: 'D', played: 2, won: 1, drawn: 1, lost: 0, gd: 2, pts: 4 },
    'PAR': { name: 'Paraguay', code: 'py', group: 'D', played: 2, won: 0, drawn: 1, lost: 1, gd: -2, pts: 1 },
    'AUS': { name: 'Australia', code: 'au', group: 'D', played: 2, won: 1, drawn: 0, lost: 1, gd: -1, pts: 3 },
    'TUR': { name: 'Türkiye', code: 'tr', group: 'D', played: 2, won: 1, drawn: 1, lost: 0, gd: 1, pts: 4 },

    // Group E
    'GER': { name: 'Germany', code: 'de', group: 'E', played: 2, won: 2, drawn: 0, lost: 0, gd: 4, pts: 6 },
    'CUW': { name: 'Curaçao', code: 'cw', group: 'E', played: 2, won: 0, drawn: 0, lost: 2, gd: -5, pts: 0 },
    'CIV': { name: 'Côte d\'Ivoire', code: 'ci', group: 'E', played: 2, won: 1, drawn: 0, lost: 1, gd: 0, pts: 3 },
    'ECU': { name: 'Ecuador', code: 'ec', group: 'E', played: 2, won: 1, drawn: 0, lost: 1, gd: 1, pts: 3 },

    // Group F
    'NED': { name: 'Netherlands', code: 'nl', group: 'F', played: 2, won: 1, drawn: 1, lost: 0, gd: 2, pts: 4 },
    'JPN': { name: 'Japan', code: 'jp', group: 'F', played: 2, won: 1, drawn: 1, lost: 0, gd: 1, pts: 4 },
    'SWE': { name: 'Sweden', code: 'se', group: 'F', played: 2, won: 1, drawn: 0, lost: 1, gd: 0, pts: 3 },
    'TUN': { name: 'Tunisia', code: 'tn', group: 'F', played: 2, won: 0, drawn: 0, lost: 2, gd: -3, pts: 0 },

    // Group G
    'BEL': { name: 'Belgium', code: 'be', group: 'G', played: 2, won: 1, drawn: 1, lost: 0, gd: 2, pts: 4 },
    'EGY': { name: 'Egypt', code: 'eg', group: 'G', played: 2, won: 1, drawn: 0, lost: 1, gd: -1, pts: 3 },
    'IRN': { name: 'Iran', code: 'ir', group: 'G', played: 2, won: 0, drawn: 1, lost: 1, gd: -2, pts: 1 },
    'NZL': { name: 'New Zealand', code: 'nz', group: 'G', played: 2, won: 1, drawn: 0, lost: 1, gd: 1, pts: 3 },

    // Group H
    'ESP': { name: 'Spain', code: 'es', group: 'H', played: 2, won: 2, drawn: 0, lost: 0, gd: 5, pts: 6 },
    'CPV': { name: 'Cabo Verde', code: 'cv', group: 'H', played: 2, won: 0, drawn: 0, lost: 2, gd: -4, pts: 0 },
    'KSA': { name: 'Saudi Arabia', code: 'sa', group: 'H', played: 2, won: 1, drawn: 0, lost: 1, gd: -1, pts: 3 },
    'URU': { name: 'Uruguay', code: 'uy', group: 'H', played: 2, won: 1, drawn: 0, lost: 1, gd: 0, pts: 3 },

    // Group I
    'FRA': { name: 'France', code: 'fr', group: 'I', played: 2, won: 2, drawn: 0, lost: 0, gd: 4, pts: 6 },
    'SEN': { name: 'Senegal', code: 'sn', group: 'I', played: 2, won: 1, drawn: 0, lost: 1, gd: 1, pts: 3 },
    'IRQ': { name: 'Iraq', code: 'iq', group: 'I', played: 2, won: 0, drawn: 0, lost: 2, gd: -5, pts: 0 },
    'NOR': { name: 'Norway', code: 'no', group: 'I', played: 2, won: 1, drawn: 0, lost: 1, gd: 0, pts: 3 },

    // Group J
    'ARG': { name: 'Argentina', code: 'ar', group: 'J', played: 2, won: 2, drawn: 0, lost: 0, gd: 3, pts: 6 },
    'ALG': { name: 'Algeria', code: 'dz', group: 'J', played: 2, won: 0, drawn: 1, lost: 1, gd: -2, pts: 1 },
    'AUT': { name: 'Austria', code: 'at', group: 'J', played: 2, won: 1, drawn: 0, lost: 1, gd: 1, pts: 3 },
    'JOR': { name: 'Jordan', code: 'jo', group: 'J', played: 2, won: 0, drawn: 1, lost: 1, gd: -2, pts: 1 },

    // Group K
    'POR': { name: 'Portugal', code: 'pt', group: 'K', played: 2, won: 2, drawn: 0, lost: 0, gd: 4, pts: 6 },
    'COD': { name: 'DR Congo', code: 'cd', group: 'K', played: 2, won: 0, drawn: 1, lost: 1, gd: -3, pts: 1 },
    'UZB': { name: 'Uzbekistan', code: 'uz', group: 'K', played: 2, won: 0, drawn: 1, lost: 1, gd: -2, pts: 1 },
    'COL': { name: 'Colombia', code: 'co', group: 'K', played: 2, won: 1, drawn: 0, lost: 1, gd: 1, pts: 3 },

    // Group L
    'ENG': { name: 'England', code: 'gb-eng', group: 'L', played: 2, won: 2, drawn: 0, lost: 0, gd: 5, pts: 6 },
    'CRO': { name: 'Croatia', code: 'hr', group: 'L', played: 2, won: 1, drawn: 0, lost: 1, gd: 0, pts: 3 },
    'GHA': { name: 'Ghana', code: 'gh', group: 'L', played: 2, won: 0, drawn: 1, lost: 1, gd: -3, pts: 1 },
    'PAN': { name: 'Panama', code: 'pa', group: 'L', played: 2, won: 0, drawn: 1, lost: 1, gd: -2, pts: 1 }
};

// Simulated Match Schedule for June 16, 2026 (Live tournament ongoing)
const MATCHES = [
    { id: 1, home: 'USA', away: 'TUR', homeScore: 2, awayScore: 2, time: 'FT', status: 'finished', group: 'D', date: 'June 15' },
    { id: 2, home: 'MEX', away: 'KOR', homeScore: 1, awayScore: 1, time: 'FT', status: 'finished', group: 'A', date: 'June 15' },
    { id: 3, home: 'ARG', away: 'AUT', homeScore: 3, awayScore: 1, time: '74\'', status: 'live', group: 'J', date: 'Today' },
    { id: 4, home: 'ENG', away: 'CRO', homeScore: 2, awayScore: 0, time: '12\'', status: 'live', group: 'L', date: 'Today' },
    { id: 5, home: 'BRA', away: 'SCO', homeScore: null, awayScore: null, time: '18:00', status: 'upcoming', group: 'C', date: 'Today' },
    { id: 6, home: 'FRA', away: 'NOR', homeScore: null, awayScore: null, time: '21:00', status: 'upcoming', group: 'I', date: 'Today' },
    { id: 7, home: 'GER', away: 'ECU', homeScore: null, awayScore: null, time: '15:00', status: 'upcoming', group: 'E', date: 'June 17' },
    { id: 8, home: 'CAN', away: 'SUI', homeScore: null, awayScore: null, time: '18:00', status: 'upcoming', group: 'B', date: 'June 17' },
    { id: 9, home: 'POR', away: 'COL', homeScore: null, awayScore: null, time: '21:00', status: 'upcoming', group: 'K', date: 'June 17' }
];

// Streaming Guide details
const STREAMING_GUIDE = {
    'US': {
        title: '🇺🇸 Where to stream FIFA World Cup in the USA',
        channels: [
            { name: 'FOX Sports (English)', type: 'Broadcast / Cable', access: 'Premium subscription / Cable TV login required' },
            { name: 'Telemundo (Spanish)', type: 'Broadcast TV', access: 'Free over-the-air (OTA) or Peacock premium' },
            { name: 'Peacock (Spanish)', type: 'Streaming App', access: 'Paid plans starting at $5.99/mo' },
            { name: 'FuboTV / YouTube TV', type: 'Sling Live TV Apps', access: 'Free trials available for new accounts' }
        ]
    },
    'UK': {
        title: '🇬🇧 Where to stream FIFA World Cup in the United Kingdom',
        channels: [
            { name: 'BBC iPlayer', type: 'Free Streaming App', access: '100% Free (requires TV license confirmation)' },
            { name: 'ITVX', type: 'Free Streaming App', access: '100% Free with standard sign up' },
            { name: 'BBC One & ITV1', type: 'Broadcast Television', access: 'Free OTA (Terrestrial Channels)' }
        ]
    },
    'CA': {
        title: '🇨🇦 Where to stream FIFA World Cup in Canada',
        channels: [
            { name: 'CTV', type: 'Broadcast Television', access: 'Free over-the-air' },
            { name: 'TSN', type: 'Cable Channel / App', access: 'Paid subscription (TSN+ starting at $19.99/mo)' },
            { name: 'RDS (French)', type: 'Cable Channel / App', access: 'Paid subscription' }
        ]
    },
    'AU': {
        title: '🇦🇺 Where to stream FIFA World Cup in Australia',
        channels: [
            { name: 'SBS', type: 'Broadcast Television', access: 'Free over-the-air' },
            { name: 'SBS On Demand', type: 'Free Streaming App', access: '100% Free digital streaming' }
        ]
    },
    'IN': {
        title: '🇮🇳 Where to stream FIFA World Cup in India',
        channels: [
            { name: 'Sports18', type: 'Cable TV', access: 'Standard cable network subscription' },
            { name: 'JioCinema App', type: 'Free Streaming App', access: '100% Free streaming for all users (No login required)' }
        ]
    }
};

// Trivia Questions Database
const TRIVIA_QUESTIONS = [
    {
        q: "Which country hosted the first ever FIFA World Cup in 1930?",
        answers: ["Argentina", "Uruguay", "Brazil", "Italy"],
        correct: 1, // Uruguay
        shotDir: 'left' // correct answer shoots left
    },
    {
        q: "Who is the all-time top goalscorer in FIFA World Cup history?",
        answers: ["Miroslav Klose", "Ronaldo Nazário", "Pelé", "Lionel Messi"],
        correct: 0, // Miroslav Klose
        shotDir: 'center'
    },
    {
        q: "Which nation has won the most FIFA World Cup titles (5 trophies)?",
        answers: ["Germany", "Italy", "Argentina", "Brazil"],
        correct: 3, // Brazil
        shotDir: 'right'
    },
    {
        q: "Which city is scheduled to host the 2026 World Cup Final on July 19?",
        answers: ["Los Angeles", "Mexico City", "New York/New Jersey (MetLife)", "Toronto"],
        correct: 2, // New York/New Jersey
        shotDir: 'left'
    },
    {
        q: "How many matches will be played in total in the expanded 48-team 2026 World Cup?",
        answers: ["64", "80", "104", "96"],
        correct: 2, // 104
        shotDir: 'right'
    }
];

// State for predictions
let userPredictions = {}; // Format: { 'A': ['MEX', 'KOR', 'RSA', 'CZE'], ... }

// State for trivia
let currentTriviaIndex = 0;
let triviaScore = 0;
let triviaTrackerSlots = []; // ['scored', 'missed', 'pending', ...]

/* ==========================================================================
   APP INITIALIZATION
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initCountdown();
    renderStandings('A');
    renderMatchTicker();
    renderSidebarMatchList();
    initGroupPredictor();
    renderStreamingGuide('US');
    initTrivia();
    initPoll();
    setupEventListeners();
});

/* ==========================================================================
   COUNTDOWN TIMER
   ========================================================================== */

function initCountdown() {
    // FIFA World Cup 2026 Final: July 19, 2026
    const targetDate = new Date('July 19, 2026 20:00:00 GMT-0400').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference < 0) {
            document.getElementById('countdown').innerHTML = "<span>FINAL MATCH UNDERWAY!</span>";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('mins').innerText = String(minutes).padStart(2, '0');
        document.getElementById('secs').innerText = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

/* ==========================================================================
   MATCH TICKER & SCHEDULE
   ========================================================================== */

function renderMatchTicker() {
    const tickerContainer = document.getElementById('quick-match-ticker');
    tickerContainer.innerHTML = '';

    // Only show live & upcoming matches for today in the quick ticker
    const featuredMatches = MATCHES.filter(m => m.date === 'Today');

    featuredMatches.forEach(match => {
        const homeTeam = TEAMS[match.home];
        const awayTeam = TEAMS[match.away];

        const card = document.createElement('div');
        card.className = `ticker-match-card ${match.status === 'live' ? 'live-border' : ''}`;
        
        let scoreDisplay = match.status === 'upcoming' 
            ? `<span class="match-time">${match.time}</span>`
            : `<span class="match-ticker-score">${match.homeScore} - ${match.awayScore}</span>`;

        card.innerHTML = `
            <div class="match-meta">
                ${match.status === 'live' ? '<span class="live-dot-pulse"></span>' : ''} 
                Group ${match.group} • ${match.status.toUpperCase()} ${match.status === 'live' ? `(${match.time})` : ''}
            </div>
            <div class="ticker-teams">
                <div class="team-row-ticker">
                    <img src="https://flagcdn.com/w40/${homeTeam.code}.png" alt="${homeTeam.name}" class="team-flag-circle">
                    <span>${match.home}</span>
                </div>
                ${scoreDisplay}
                <div class="team-row-ticker">
                    <span>${match.away}</span>
                    <img src="https://flagcdn.com/w40/${awayTeam.code}.png" alt="${awayTeam.name}" class="team-flag-circle">
                </div>
            </div>
        `;
        tickerContainer.appendChild(card);
    });
}

function renderSidebarMatchList(filterText = '') {
    const container = document.getElementById('sidebar-match-list-container');
    container.innerHTML = '';

    const query = filterText.toLowerCase();

    const filtered = MATCHES.filter(match => {
        const homeName = TEAMS[match.home].name.toLowerCase();
        const awayName = TEAMS[match.away].name.toLowerCase();
        return homeName.includes(query) || awayName.includes(query) || match.group.toLowerCase().includes(query);
    });

    if (filtered.length === 0) {
        container.innerHTML = '<p class="empty-predictor-msg">No matches match search.</p>';
        return;
    }

    filtered.forEach(match => {
        const homeTeam = TEAMS[match.home];
        const awayTeam = TEAMS[match.away];

        const card = document.createElement('div');
        card.className = 'sidebar-match-card';
        
        let scoreDiv = match.status === 'upcoming' 
            ? `<span class="sidebar-match-score">${match.time}</span>`
            : `<span class="sidebar-match-score">${match.homeScore} - ${match.awayScore}</span>`;

        card.innerHTML = `
            <div class="sidebar-match-meta">
                <span>Group ${match.group} • ${match.date}</span>
                <span class="${match.status === 'live' ? 'neon-green-text' : ''}">${match.status.toUpperCase()} ${match.status === 'live' ? match.time : ''}</span>
            </div>
            <div class="sidebar-team-row">
                <div class="sidebar-team-info">
                    <img src="https://flagcdn.com/w40/${homeTeam.code}.png" alt="${homeTeam.name}" class="team-flag-circle">
                    <span>${homeTeam.name}</span>
                </div>
                ${match.status !== 'upcoming' ? `<span>${match.homeScore}</span>` : ''}
            </div>
            <div class="sidebar-team-row">
                <div class="sidebar-team-info">
                    <img src="https://flagcdn.com/w40/${awayTeam.code}.png" alt="${awayTeam.name}" class="team-flag-circle">
                    <span>${awayTeam.name}</span>
                </div>
                ${match.status !== 'upcoming' ? `<span>${match.awayScore}</span>` : scoreDiv}
            </div>
        `;
        container.appendChild(card);
    });
}

/* ==========================================================================
   STANDINGS WIDGET
   ========================================================================== */

function renderStandings(groupLetter) {
    const tbody = document.getElementById('standings-body');
    tbody.innerHTML = '';

    // Filter teams in selected group and sort by points, then GD
    const groupTeams = Object.keys(TEAMS)
        .map(key => ({ id: key, ...TEAMS[key] }))
        .filter(t => t.group === groupLetter)
        .sort((a, b) => b.pts - a.pts || b.gd - a.gd);

    groupTeams.forEach((team, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${index + 1}</strong></td>
            <td class="team-cell">
                <img src="https://flagcdn.com/w40/${team.code}.png" alt="${team.name}" class="team-flag-circle">
                <span>${team.name} <span class="group-tag" style="opacity:0.5; font-size:0.75rem;">(${team.id})</span></span>
            </td>
            <td class="col-hide-mobile">${team.played}</td>
            <td class="col-hide-mobile">${team.won}</td>
            <td class="col-hide-mobile">${team.drawn}</td>
            <td class="col-hide-mobile">${team.lost}</td>
            <td>${team.gd > 0 ? '+' + team.gd : team.gd}</td>
            <td><strong>${team.pts}</strong></td>
        `;
        tbody.appendChild(row);
    });
}

/* ==========================================================================
   INTERACTIVE BRACKET & GROUP PREDICTOR
   ========================================================================== */

function initGroupPredictor() {
    // Pre-populate predictor state from the actual DB if not set
    const groupLetters = ['A','B','C','D','E','F','G','H','I','J','K','L'];
    groupLetters.forEach(letter => {
        if (!userPredictions[letter]) {
            // Sort standard teams based on points
            userPredictions[letter] = Object.keys(TEAMS)
                .filter(key => TEAMS[key].group === letter)
                .sort((a,b) => TEAMS[b].pts - TEAMS[a].pts || TEAMS[b].gd - TEAMS[a].gd);
        }
    });

    renderPredictorGroup('A');
    renderPredictorSummary();
}

function renderPredictorGroup(groupLetter) {
    const container = document.getElementById('prediction-items-list');
    container.innerHTML = '';

    const list = userPredictions[groupLetter];

    list.forEach((teamId, index) => {
        const team = TEAMS[teamId];
        const card = document.createElement('div');
        card.className = 'prediction-item';
        card.setAttribute('data-team-id', teamId);
        
        card.innerHTML = `
            <div class="predict-team-details">
                <span class="rank-badge">${index + 1}</span>
                <img src="https://flagcdn.com/w40/${team.code}.png" alt="${team.name}" class="team-flag-circle">
                <span>${team.name}</span>
            </div>
            <div class="predict-controls">
                <button class="predict-arrow up-arrow" ${index === 0 ? 'disabled style="opacity:0.3;"' : ''}><i class="fa-solid fa-arrow-up"></i></button>
                <button class="predict-arrow down-arrow" ${index === 3 ? 'disabled style="opacity:0.3;"' : ''}><i class="fa-solid fa-arrow-down"></i></button>
            </div>
        `;
        container.appendChild(card);
    });
}

function movePredictTeam(groupLetter, index, direction) {
    const list = userPredictions[groupLetter];
    const targetIndex = index + direction;
    
    if (targetIndex >= 0 && targetIndex < list.length) {
        // Swap elements
        const temp = list[index];
        list[index] = list[targetIndex];
        list[targetIndex] = temp;
        
        // Save
        userPredictions[groupLetter] = list;
        
        // Re-render
        renderPredictorGroup(groupLetter);
        renderPredictorSummary();
    }
}

function renderPredictorSummary() {
    const container = document.getElementById('predicted-teams-container');
    container.innerHTML = '';

    let totalQualified = 0;

    Object.keys(userPredictions).sort().forEach(groupLetter => {
        const top2 = userPredictions[groupLetter].slice(0, 2);
        
        top2.forEach(teamId => {
            totalQualified++;
            const team = TEAMS[teamId];
            
            const card = document.createElement('div');
            card.className = 'predicted-card-team';
            card.innerHTML = `
                <img src="https://flagcdn.com/w40/${team.code}.png" alt="${team.name}" class="team-flag-circle">
                <span>${teamId}</span>
                <span class="group-tag">Group ${groupLetter}</span>
            `;
            container.appendChild(card);
        });
    });
}

/* ==========================================================================
   STREAMING GUIDE
   ========================================================================== */

function renderStreamingGuide(countryCode) {
    const container = document.getElementById('streaming-channels-container');
    container.innerHTML = '';

    const guide = STREAMING_GUIDE[countryCode];
    if (!guide) return;

    const title = document.createElement('h4');
    title.className = 'stream-guide-title';
    title.innerText = guide.title;
    container.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'channel-grid';

    guide.channels.forEach(channel => {
        const card = document.createElement('div');
        card.className = 'channel-card';
        card.innerHTML = `
            <i class="fa-solid fa-circle-play"></i>
            <div class="channel-info">
                <h5>${channel.name}</h5>
                <span>Type: ${channel.type} • Access: ${channel.access}</span>
            </div>
        `;
        grid.appendChild(card);
    });
    
    container.appendChild(grid);
}

/* ==========================================================================
   DWELL-TIME TRIVIA SHOOTOUT GAME
   ========================================================================== */

function initTrivia() {
    currentTriviaIndex = 0;
    triviaScore = 0;
    triviaTrackerSlots = Array(TRIVIA_QUESTIONS.length).fill('pending');
    
    renderTriviaScoreboard();
    renderTriviaQuestion();
}

function renderTriviaScoreboard() {
    const tracker = document.getElementById('shootout-tracker');
    tracker.innerHTML = '';

    triviaTrackerSlots.forEach(status => {
        const slot = document.createElement('span');
        slot.className = 'tracker-slot';
        if (status === 'scored') {
            slot.className += ' scored';
            slot.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        } else if (status === 'missed') {
            slot.className += ' missed';
            slot.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        } else {
            slot.innerHTML = '<i class="fa-solid fa-circle-minus"></i>';
        }
        tracker.appendChild(slot);
    });

    document.getElementById('trivia-score').innerText = `${triviaScore}/${TRIVIA_QUESTIONS.length}`;
}

function renderTriviaQuestion() {
    const feedback = document.getElementById('trivia-feedback');
    feedback.innerText = '';
    feedback.className = 'trivia-feedback-message';

    // Reset ball position & keeper position
    const ball = document.getElementById('shootout-ball');
    ball.className = 'ball';
    ball.style = '';

    const keeper = document.getElementById('gk-character');
    keeper.style.left = '80px'; // center

    if (currentTriviaIndex >= TRIVIA_QUESTIONS.length) {
        showTriviaFinalResults();
        return;
    }

    const question = TRIVIA_QUESTIONS[currentTriviaIndex];
    document.getElementById('question-text').innerText = `Q${currentTriviaIndex + 1}: ${question.q}`;

    const answersGrid = document.getElementById('answers-grid');
    answersGrid.innerHTML = '';

    question.answers.forEach((ans, index) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.innerText = ans;
        btn.onclick = () => submitTriviaAnswer(index);
        answersGrid.appendChild(btn);
    });
}

function submitTriviaAnswer(answerIdx) {
    // Disable all options during animation
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(btn => btn.disabled = true);

    const question = TRIVIA_QUESTIONS[currentTriviaIndex];
    const isCorrect = (answerIdx === question.correct);
    
    // Animate penalty shot
    const ball = document.getElementById('shootout-ball');
    const keeper = document.getElementById('gk-character');
    const feedback = document.getElementById('trivia-feedback');

    // Keeper diving decision (randomized dive for visual impact)
    const dives = ['left', 'center', 'right'];
    let keeperDive = dives[Math.floor(Math.random() * dives.length)];
    
    // Make keeper dive opposite of correct direction if they score
    if (isCorrect) {
        if (question.shotDir === 'left') keeperDive = 'right';
        else if (question.shotDir === 'right') keeperDive = 'left';
        else keeperDive = 'left'; // dive left if ball goes center
    } else {
        // If wrong, keeper dives towards the direction of shot to block it
        keeperDive = question.shotDir;
    }

    // Set Goalie visual position
    if (keeperDive === 'left') {
        keeper.style.left = '10px';
    } else if (keeperDive === 'right') {
        keeper.style.left = '150px';
    } else {
        keeper.style.left = '80px';
    }

    // Shoot ball
    let shotClass = `shoot-${question.shotDir}`;
    if (!isCorrect) {
        shotClass += '-saved';
    }
    ball.classList.add(shotClass);

    // After animation completes
    setTimeout(() => {
        if (isCorrect) {
            triviaScore++;
            triviaTrackerSlots[currentTriviaIndex] = 'scored';
            feedback.innerText = "⚽ GOOOAAAL!!!";
            feedback.className = "trivia-feedback-message goal";
        } else {
            triviaTrackerSlots[currentTriviaIndex] = 'missed';
            feedback.innerText = "❌ SAVED! Goalie caught it!";
            feedback.className = "trivia-feedback-message missed";
        }

        // Highlight correct and wrong answers on screen
        buttons.forEach((btn, idx) => {
            if (idx === question.correct) btn.classList.add('correct');
            else if (idx === answerIdx) btn.classList.add('wrong');
        });

        renderTriviaScoreboard();

        // Load next question after 2 seconds
        setTimeout(() => {
            currentTriviaIndex++;
            renderTriviaQuestion();
        }, 1800);

    }, 600);
}

function showTriviaFinalResults() {
    document.getElementById('question-text').innerText = "Shootout Trivia Completed!";
    
    const answersGrid = document.getElementById('answers-grid');
    answersGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center;">
            <h3 class="gold-text" style="font-size: 1.8rem; margin-bottom: 0.5rem;">You Scored: ${triviaScore} / 5 Goals!</h3>
            <p style="margin-bottom: 1.2rem;">Ready to challenge your friends to the ultimate trivia shootout?</p>
            <button class="primary-btn glow-button" onclick="resetTrivia()">Play Again</button>
        </div>
    `;
}

function resetTrivia() {
    initTrivia();
}

window.resetTrivia = resetTrivia; // Expose globally to trigger from button

/* ==========================================================================
   FAN POLL
   ========================================================================== */

function initPoll() {
    const voted = localStorage.getItem('worldcup_poll_voted');
    if (voted) {
        showPollResults();
    }
}

function showPollResults() {
    const rows = document.querySelectorAll('.poll-option-row');
    rows.forEach(row => {
        row.querySelector('.poll-btn').disabled = true;
        row.querySelector('.poll-bar-container').style.display = 'flex';
        // Trigger width animation
        const bar = row.querySelector('.poll-bar');
        const targetWidth = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 50);
    });
}

function handlePollVote(optionRow) {
    localStorage.setItem('worldcup_poll_voted', 'true');
    showPollResults();
}

/* ==========================================================================
   EVENT LISTENERS & INTERACTION ACTIONS
   ========================================================================== */

function setupEventListeners() {
    // Standings tabs clicks
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderStandings(tab.getAttribute('data-group'));
        });
    });

    // Schedule search filter
    const searchInput = document.getElementById('match-search');
    searchInput.addEventListener('input', (e) => {
        renderSidebarMatchList(e.target.value);
    });

    // Predictor Group selector dropdown change
    const groupSelect = document.getElementById('predictor-group-select');
    groupSelect.addEventListener('change', (e) => {
        renderPredictorGroup(e.target.value);
    });

    // Predictor rank controls delegation (arrow clicks)
    const predContainer = document.getElementById('prediction-items-list');
    predContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.predict-arrow');
        if (!btn) return;

        const card = btn.closest('.prediction-item');
        const teamId = card.getAttribute('data-team-id');
        const groupLetter = document.getElementById('predictor-group-select').value;
        const list = userPredictions[groupLetter];
        const index = list.indexOf(teamId);

        if (btn.classList.contains('up-arrow')) {
            movePredictTeam(groupLetter, index, -1);
        } else if (btn.classList.contains('down-arrow')) {
            movePredictTeam(groupLetter, index, 1);
        }
    });

    // Reset predictions button
    document.getElementById('reset-predictions-btn').addEventListener('click', () => {
        userPredictions = {};
        initGroupPredictor();
    });

    // Save predictions button (Modal trigger)
    document.getElementById('save-predictions-btn').addEventListener('click', () => {
        const codes = [];
        Object.keys(userPredictions).sort().forEach(grp => {
            codes.push(userPredictions[grp].slice(0,2).join('-'));
        });
        
        const hash = codes.join(',');
        const shareLink = `${window.location.origin}${window.location.pathname}?pred=${hash}`;
        document.getElementById('share-link-input').value = shareLink;
        document.getElementById('share-modal').style.display = 'flex';
    });

    // Modal close button
    document.querySelector('.close-modal-btn').addEventListener('click', () => {
        document.getElementById('share-modal').style.display = 'none';
    });

    // Copy modal link button
    document.getElementById('copy-share-link-btn').addEventListener('click', () => {
        const copyText = document.getElementById('share-link-input');
        copyText.select();
        copyText.setSelectionRange(0, 99999); // for mobile
        navigator.clipboard.writeText(copyText.value);
        
        const btn = document.getElementById('copy-share-link-btn');
        btn.innerText = 'Copied!';
        btn.style.background = 'var(--neon-green)';
        setTimeout(() => {
            btn.innerText = 'Copy';
            btn.style.background = '';
        }, 1500);
    });

    // Close share modal clicking outside content
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('share-modal');
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Streaming guide dropdown change
    const streamSelect = document.getElementById('country-stream-select');
    streamSelect.addEventListener('change', (e) => {
        renderStreamingGuide(e.target.value);
    });

    // Poll button click delegation
    const pollBox = document.getElementById('fan-poll-box');
    pollBox.addEventListener('click', (e) => {
        const btn = e.target.closest('.poll-btn');
        if (!btn) return;
        const row = btn.closest('.poll-option-row');
        handlePollVote(row);
    });

    // Close sticky bottom ad button
    document.getElementById('close-sticky-ad-btn').addEventListener('click', () => {
        document.getElementById('sticky-ad-bar').style.display = 'none';
    });
}
