import { useState } from "react";
import type { Session } from "@/data/sessions";

export function QuizGame({ session }: { session: Session }) {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const total = session.questions.length;
  const q = session.questions[index];

  const pick = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === q.answer) setScore((s) => s + 1);
  };
  const next = () => {
    if (index + 1 >= total) setDone(true);
    else {
      setIndex(index + 1);
      setPicked(null);
    }
  };
  const restart = () => {
    setIndex(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  };

  const perfect = done && score === total;

  return (
    <div className="card relative overflow-hidden">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-display text-xl">Quiz game</h3>
        <span className="pill">Score: {score} / {total}</span>
      </div>

      {perfect && (
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="confetti"
              style={{ left: `${(i * 37) % 100}%`, animationDelay: `${(i % 6) * 0.12}s` }}
            />
          ))}
        </div>
      )}

      {done ? (
        <div className="py-6 text-center">
          <p className="font-display text-3xl">{perfect ? "🎉 Perfect score!" : "Nice try!"}</p>
          <p className="mt-2 text-muted-foreground">You got {score} out of {total}.</p>
          <button onClick={restart} className="btn-accent mt-6">Play again</button>
        </div>
      ) : (
        <>
          <p className="text-sm text-muted-foreground">Question {index + 1} of {total}</p>
          <p className="mt-1 text-lg font-semibold">{q.question}</p>
          <div className="mt-4 grid gap-2">
            {q.options.map((opt, i) => {
              let state = "option";
              if (picked !== null) {
                if (i === q.answer) state = "option option-right";
                else if (i === picked) state = "option option-wrong";
                else state = "option opacity-60";
              }
              return (
                <button key={i} onClick={() => pick(i)} disabled={picked !== null} className={state}>
                  {opt}
                </button>
              );
            })}
          </div>
          {picked !== null && (
            <div className="mt-4 rounded-2xl bg-muted p-4">
              <p className="font-semibold">{picked === q.answer ? "✅ Correct!" : "❌ Not quite."}</p>
              <p className="mt-1 text-sm">{q.explanation}</p>
            </div>
          )}
          <div className="mt-5 flex flex-wrap gap-2">
            {picked !== null && (
              <button onClick={next} className="btn-accent">
                {index + 1 >= total ? "See result" : "Next question"}
              </button>
            )}
            <button onClick={restart} className="btn-ghost">Play again</button>
          </div>
        </>
      )}
    </div>
  );
}
