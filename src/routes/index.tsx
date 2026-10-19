import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { sessions } from "@/data/sessions";
import { Bow } from "@/components/Bow";
import { QuizGame } from "@/components/QuizGame";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guest Speaker Game Hub" },
      { name: "description", content: "Mini games recapping what I learned from each guest speaker session this semester." },
      { property: "og:title", content: "Guest Speaker Game Hub" },
      { property: "og:description", content: "Play a short quiz for every guest speaker session this semester." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [tab, setTab] = useState("home");
  const session = sessions.find((s) => s.id === tab);

  return (
    <div className="min-h-screen">
      <header className="mx-auto max-w-3xl px-4 pt-14 pb-8 text-center">
        <Bow className="float mb-3 h-8 w-12" />
        <h1 className="font-display text-4xl sm:text-5xl">
          Guest Speaker <span className="text-muted-foreground">Game Hub</span>
        </h1>
        <hr className="ribbon-line mx-auto mt-6 w-40" />
        <p className="mt-4 text-muted-foreground">What I learned?</p>
      </header>

      <nav className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-3xl gap-2 overflow-x-auto px-4 py-3">
          <button onClick={() => setTab("home")} className={tab === "home" ? "tab tab-active" : "tab"}>Home</button>
          {sessions.map((s) => (
            <button key={s.id} onClick={() => setTab(s.id)} className={tab === s.id ? "tab tab-active" : "tab"}>
              {s.date} · {s.title}
            </button>
          ))}
        </div>
      </nav>

      <main className="mx-auto max-w-3xl space-y-8 px-4 py-10">
        {!session ? (
          <>
            <section className="card">
              <h2 className="font-display text-2xl"><Bow /> Welcome</h2>
              <p className="mt-2">This site collects the key ideas from every guest speaker session this semester. Each session has its own tab with a short quiz game.</p>
            </section>
            <section className="card">
              <h2 className="font-display text-2xl"><Bow /> How to play</h2>
              <ol className="mt-2 list-decimal space-y-1 pl-5">
                <li>Pick a session tab above.</li>
                <li>Read the key takeaways.</li>
                <li>Answer the questions — you'll see an explanation after each one.</li>
                <li>Get a perfect score for a surprise, or hit "Play again".</li>
              </ol>
            </section>
            <div className="grid gap-3 sm:grid-cols-2">
              {sessions.map((s) => (
                <button key={s.id} onClick={() => setTab(s.id)} className="card text-left transition hover:-translate-y-1">
                  <span className="pill">{s.date} · {s.event}</span>
                  <p className="mt-2 font-display text-xl">{s.title}</p>
                  <p className="text-sm text-muted-foreground">{s.games.reduce((n, g) => n + g.questions.length, 0)} questions</p>
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <section className="card">
              <span className="pill">{session.date} · {session.event}</span>
              <h2 className="mt-2 font-display text-3xl">{session.title}</h2>
              <p className="text-sm text-muted-foreground">Speaker: {session.speakers.join(", ")}</p>
              <hr className="ribbon-line my-6" />
              <h3 className="font-display"><Bow /> Key takeaways</h3>
              <ul className="mt-2 space-y-2">
                {session.takeaways.map((t) => (
                  <li key={t} className="flex gap-2"><span className="text-muted-foreground">♡</span>{t}</li>
                ))}
              </ul>
            </section>
            {session.games.map((g) => (
              <QuizGame key={session.id + g.title} game={g} />
            ))}
          </>
        )}
      </main>
    </div>
  );
}
