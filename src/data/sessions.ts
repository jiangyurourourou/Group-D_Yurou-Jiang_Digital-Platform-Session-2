// Add a new guest speaker session by adding an object to this array.
export type Question = {
  question: string;
  options: string[];
  answer: number; // index of the correct option
  explanation: string;
};

export type Session = {
  id: string;
  date: string; // short label, e.g. "9 Oct"
  title: string;
  speakers: string[];
  takeaways: string[];
  questions: Question[];
};

export const sessions: Session[] = [
  {
    id: "vibe-coding",
    date: "9 Oct",
    title: "Vibe Coding",
    speakers: ["Guest Speaker (add name)"],
    takeaways: [
      "Describe what you want in plain words and let AI draft the code.",
      "Iterate in small steps and check the result each time.",
      "You still own the result: test it and understand it.",
    ],
    questions: [
      {
        question: "What is 'vibe coding' mostly about?",
        options: [
          "Writing every line by hand",
          "Describing your idea in plain language and letting AI build it",
          "Coding only with music on",
          "Copying code from friends",
        ],
        answer: 1,
        explanation: "Vibe coding means guiding AI tools with natural language, then refining the result.",
      },
      {
        question: "What's the best way to improve an AI-built app?",
        options: [
          "One huge prompt with everything",
          "Give up and start over",
          "Small, clear changes, checking each one",
          "Never test it",
        ],
        answer: 2,
        explanation: "Small steps make it easy to see what changed and fix mistakes quickly.",
      },
      {
        question: "Who is responsible for the final app?",
        options: ["The AI", "You", "Nobody", "The internet"],
        answer: 1,
        explanation: "AI is a helper. You decide what ships, so test and review it.",
      },
    ],
  },
  {
    id: "ai-ethics",
    date: "16 Oct",
    title: "AI & Ethics",
    speakers: ["Guest Speaker (add name)"],
    takeaways: [
      "AI can repeat biases found in its training data.",
      "Never share private data with tools you don't trust.",
      "Always credit when AI helped with your work.",
    ],
    questions: [
      {
        question: "Why can AI give biased answers?",
        options: [
          "It learned from data that contains bias",
          "It has feelings",
          "It is always random",
          "It can't be biased",
        ],
        answer: 0,
        explanation: "AI learns patterns from data, including unfair ones, so outputs can reflect them.",
      },
      {
        question: "Which is safe to paste into a public AI chatbot?",
        options: ["Your password", "A friend's phone number", "A general question about photosynthesis", "Your ID number"],
        answer: 2,
        explanation: "Keep personal and private information out of tools you don't control.",
      },
      {
        question: "If AI helped write your essay, you should…",
        options: ["Hide it", "Say how AI helped", "Delete the essay", "Blame the AI"],
        answer: 1,
        explanation: "Being transparent about AI help is honest and is often required by school rules.",
      },
    ],
  },
];
