import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { sessions } from "@/data/sessions";
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
      <header className="mx-auto max-w-3xl px-4 pt-10 pb-6">
        <h1 className="font-display text-4xl sm:text-5xl">
          Guest Speaker <span className="text-primary">Game Hub</span>
        </h1>
        <p className="mt-2 text-muted-foreground">What I learned from each guest speaker — turned into quick games.</p>
      </header>

      <nav className="sticky top-0 z-10 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-3xl gap-2 overflow-x-auto px-4 py-3">
          <button onClick={() => setTab("home")} className={tab === "home" ? "tab tab-active" : "tab"}>Home</button>
          {sessions.map((s) => (
            <button key={s.id} onClick={() => setTab(s.id)} className={tab === s.id ? "tab tab-active" : "tab"}>
              {s.date} · {s.title}
            </button>
          ))}
        </div>
      </nav>

      <main className="mx-auto max-w-3xl space-y-5 px-4 py-6">
        {!session ? (
          <>
            <section className="card">
              <h2 className="font-display text-2xl">Welcome! 👋</h2>
              <p className="mt-2">This site collects the key ideas from every guest speaker session this semester. Each session has its own tab with a short quiz game.</p>
            </section>
            <section className="card">
              <h2 className="font-display text-2xl">How to play</h2>
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
                  <span className="pill">{s.date}</span>
                  <p className="mt-2 font-display text-xl">{s.title}</p>
                  <p className="text-sm text-muted-foreground">{s.questions.length} questions</p>
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <section className="card">
              <span className="pill">{session.date}</span>
              <h2 className="mt-2 font-display text-3xl">{session.title}</h2>
              <p className="text-sm text-muted-foreground">Speaker: {session.speakers.join(", ")}</p>
              <h3 className="mt-4 font-semibold">Key takeaways</h3>
              <ul className="mt-2 space-y-2">
                {session.takeaways.map((t) => (
                  <li key={t} className="flex gap-2"><span className="text-primary">★</span>{t}</li>
                ))}
              </ul>
            </section>
            <QuizGame key={session.id} session={session} />
          </>
        )}
      </main>
    </div>
  );
}
