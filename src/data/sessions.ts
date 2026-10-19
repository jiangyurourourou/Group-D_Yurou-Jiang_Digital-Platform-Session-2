// Add a new tab by adding an object to `sessions`. Each tab can hold one or more games.
export type Question = {
  question: string;
  options: string[];
  answer: number; // index of the correct option
  explanation: string;
};

export type Game = {
  title: string;
  shuffle?: boolean; // shuffle answer options each play
  questions: Question[];
};

export type Session = {
  id: string;
  date: string; // e.g. "9 Oct"
  event: string; // e.g. "Vibe Coding · ESSEC x LaunchLab"
  title: string; // tab title, e.g. "Part 1 · Yibo – Design & Build with Claude"
  speakers: string[];
  takeaways: string[];
  games: Game[];
};

// Helper: correct answer first, wrong ones after (options get shuffled when played).
const mc = (question: string, correct: string, wrong: string[], explanation: string): Question => ({
  question,
  options: [correct, ...wrong],
  answer: 0,
  explanation,
});

const tf = (question: string, isTrue: boolean, explanation: string): Question => ({
  question,
  options: ["True", "False"],
  answer: isTrue ? 0 : 1,
  explanation,
});

const files = ["index.html", "styles.css", "script.js"];
const which = (question: string, file: string, explanation: string): Question => ({
  question,
  options: files,
  answer: files.indexOf(file),
  explanation,
});

const EVENT = "Vibe Coding · ESSEC x LaunchLab";

export const sessions: Session[] = [
  {
    id: "vibe-1-yibo",
    date: "9 Oct",
    event: EVENT,
    title: "Part 1 · Yibo – Design & Build with Claude",
    speakers: ["Yibo"],
    takeaways: [
      "Claude Design lets you describe the look of your site — no code needed.",
      "Hand the design to Claude Code to build it, then deploy.",
      "Great prompts name a role, goal, audience, pages, features and style.",
    ],
    games: [
      {
        title: "Quick quiz",
        shuffle: true,
        questions: [
          mc("What does Claude Design do?", "Lets you design the look of your site by describing it, no code", ["Hosts your website online", "Stores your users' passwords", "Checks your code for typos"], "Claude Design turns your description into a visual design, without writing code."),
          mc("How do you send a design to Claude Code?", "Share menu → \"Handoff to Claude Code…\"", ["Email it to yourself", "Take a screenshot and upload it", "Copy the URL into GitHub"], "The Share menu has a built-in \"Handoff to Claude Code…\" option."),
          mc("What is Claude Code?", "An agentic coding tool that reads your whole project, runs commands and fixes errors", ["A drawing app for logos", "A website hosting service", "A chat app for teams"], "Claude Code works across your whole project: reading files, running commands and fixing errors."),
          mc("Which is the better prompt?", "One with a role, goal, audience, pages, features and style", ["\"Create a website for my course\""], "More detail gives the AI a clear picture, so the first result is much closer to what you want."),
          mc("Put the workflow in order", "Design → Build → Deploy", ["Build → Deploy → Design", "Deploy → Design → Build", "Design → Deploy → Build"], "First decide the look, then build it, then put it online."),
          mc("Name one site you can use to launch your website", "tiiny.host", ["Google Docs", "Spotify", "Canva Slides"], "tiiny.host puts your site online quickly (you can also preview it locally on localhost)."),
        ],
      },
    ],
  },
  {
    id: "vibe-2-nirvan",
    date: "9 Oct",
    event: EVENT,
    title: "Part 2 · Nirvan – GitHub & Vercel",
    speakers: ["Nirvan"],
    takeaways: [
      "GitHub stores your code and tracks changes; Vercel turns it into a live site.",
      "Commit saves locally, push sends to GitHub, pull requests ask for review.",
      "HTML is content, CSS is style, JavaScript is behaviour.",
    ],
    games: [
      {
        title: "Match the term",
        shuffle: true,
        questions: [
          mc("Fork", "Your own copy of someone else's repo on your GitHub account", ["Copy a repo from GitHub onto your computer", "Send your commits up to GitHub", "Combine an approved pull request into the main project"], "A fork lives on your GitHub account, so you can change it freely."),
          mc("Clone", "Copy a repo from GitHub onto your computer", ["Your own copy of someone else's repo on your GitHub account", "Propose changes and ask for review", "Send your commits up to GitHub"], "Cloning downloads the project so you can work on it locally."),
          mc("Commit", "Save a snapshot of your changes with a note (local only)", ["Send your commits up to GitHub", "Combine an approved pull request into the main project", "Copy a repo from GitHub onto your computer"], "A commit is a saved checkpoint on your computer — it isn't on GitHub yet."),
          mc("Push", "Send your commits up to GitHub", ["Save a snapshot of your changes with a note (local only)", "Propose changes and ask for review", "Your own copy of someone else's repo on your GitHub account"], "Pushing uploads your local commits to GitHub."),
          mc("Pull Request", "Propose changes and ask for review", ["Send your commits up to GitHub", "Combine an approved pull request into the main project", "Copy a repo from GitHub onto your computer"], "A pull request lets teammates review your changes before they join the project."),
          mc("Merge", "Combine an approved pull request into the main project", ["Propose changes and ask for review", "Save a snapshot of your changes with a note (local only)", "Your own copy of someone else's repo on your GitHub account"], "Merging brings the approved changes into the main project."),
        ],
      },
      {
        title: "Which file?",
        questions: [
          which("Change the text on the main button", "index.html", "Text and page content live in the HTML file."),
          which("Make the button orange", "styles.css", "Colours and looks live in the CSS file."),
          which("Make the button do something when clicked", "script.js", "Actions and behaviour live in the JavaScript file."),
        ],
      },
      {
        title: "True or false",
        questions: [
          tf("GitHub stores code but is not a website by itself", true, "GitHub holds your code; a host like Vercel turns it into a live site."),
          tf("Vercel updates your live site every time you push", true, "Vercel watches your GitHub repo and redeploys on every push."),
          tf("A push needs teammates to approve it first", false, "Pushing doesn't need approval — that's what a pull request is for."),
          tf("With Lovable you connect GitHub in Settings and it syncs automatically", true, "Once connected in Settings, Lovable keeps your GitHub repo in sync."),
        ],
      },
    ],
  },
  {
    id: "vibe-3-rishabh",
    date: "9 Oct",
    event: EVENT,
    title: "Part 3 · Rishabh – Logins & Supabase",
    speakers: ["Rishabh"],
    takeaways: [
      "A basic site can't remember users or show live data on its own.",
      "Logging in is an API call that gives your browser a temporary token.",
      "Supabase adds login and a database, and connects to GitHub, Vercel and Lovable.",
    ],
    games: [
      {
        title: "Sort and quiz",
        shuffle: true,
        questions: [
          mc("Which two things can a basic site NOT do?", "Remember users, and show live data like the weather", ["Show text and pictures", "Have buttons and links", "Change colours with CSS"], "Without a backend, a site can't store who you are or fetch live data."),
          mc("What happens when you sign up?", "A new row is added to the user table with your email and a scrambled password", ["Your password is emailed to everyone", "The website is rebuilt", "Nothing is saved"], "Sign-up stores your email and a scrambled (hashed) password in the user table."),
          mc("What happens when you log in?", "The site checks your email and password, then gives your browser a token", ["The site creates a new account", "Your password is shown on screen", "The site restarts"], "After checking your details, the site hands your browser a token to prove who you are."),
          mc("What is a token?", "A temporary \"this is me\" sticker your browser shows on every request; it expires", ["Your password in plain text", "A coin you pay with", "A permanent copy of your account"], "Tokens prove who you are for a while, then expire for safety."),
          mc("What happens when you log out?", "The token is thrown away", ["Your account is deleted", "Your password changes", "The website closes"], "Without the token, the site no longer knows it's you."),
          mc("Logging in is really…", "An API call (a request to another computer)", ["A file saved on your desktop", "A change to the CSS", "A GitHub commit"], "Your browser sends your details to a server and waits for its reply."),
          mc("Which tool adds login and a database, and connects to GitHub, Vercel and Lovable?", "Supabase", ["Canva", "tiiny.host", "Google Slides"], "Supabase provides login and a database and plugs into those tools."),
        ],
      },
    ],
  },
];
