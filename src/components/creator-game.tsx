"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CreatorProfile } from "@/lib/creators";
import { gameRounds, getGameOutcome } from "@/lib/game";

type GamePhase = "ready" | "playing" | "complete";

type RoundFeedback = {
  kind: "correct" | "incorrect" | "timeout";
  message: string;
};

type CreatorGameProps = {
  creator: CreatorProfile;
};

export function CreatorGame({ creator }: CreatorGameProps) {
  const [phase, setPhase] = useState<GamePhase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(12);
  const [locked, setLocked] = useState(false);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(
    null,
  );
  const [feedback, setFeedback] = useState<RoundFeedback | null>(null);
  const [letterOpen, setLetterOpen] = useState(false);
  const timeoutHandled = useRef(false);

  const activeRound = gameRounds[roundIndex];
  const outcome = getGameOutcome(score, strikes);
  const progress = ((roundIndex + 1) / gameRounds.length) * 100;

  useEffect(() => {
    if (phase !== "playing" || locked) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setSecondsLeft((current) => Math.max(0, current - 1));
    }, 1000);

    const timeoutId = window.setTimeout(() => {
      if (timeoutHandled.current) {
        return;
      }

      timeoutHandled.current = true;
      setSecondsLeft(0);
      setLocked(true);
      setStrikes((current) => current + 1);
      setFeedback({
        kind: "timeout",
        message: "Time ran out. The bench needed a quicker call.",
      });
    }, 12000);

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
    };
  }, [phase, locked, roundIndex]);

  useEffect(() => {
    if (!letterOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLetterOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [letterOpen]);

  function startGame() {
    timeoutHandled.current = false;
    setPhase("playing");
    setRoundIndex(0);
    setScore(0);
    setStrikes(0);
    setSecondsLeft(12);
    setLocked(false);
    setSelectedChoiceId(null);
    setFeedback(null);
    setLetterOpen(false);
  }

  function chooseAnswer(choiceId: string) {
    if (phase !== "playing" || locked || timeoutHandled.current) {
      return;
    }

    timeoutHandled.current = true;
    setLocked(true);
    setSelectedChoiceId(choiceId);

    if (choiceId === activeRound.answerId) {
      setScore((current) => current + 1);
      setFeedback({
        kind: "correct",
        message: activeRound.explanation,
      });
      return;
    }

    setStrikes((current) => current + 1);
    setFeedback({
      kind: "incorrect",
      message: "Not quite. " + activeRound.explanation,
    });
  }

  function advanceRound() {
    if (strikes >= 3 || roundIndex === gameRounds.length - 1) {
      setPhase("complete");
      return;
    }

    timeoutHandled.current = false;
    setRoundIndex((current) => current + 1);
    setSecondsLeft(12);
    setLocked(false);
    setSelectedChoiceId(null);
    setFeedback(null);
  }

  return (
    <main id="main-content" className="creator-game-page">
      <div className="creator-game-topline">
        <Link className="play-back-link" href="/play">
          <span aria-hidden="true">←</span> Change creator
        </Link>
        <span className="play-topline-note">
          INDEPENDENT FAN EXPERIENCE / NOT AN OFFICIAL CREATOR GAME
        </span>
      </div>

      <section
        className={"creator-game creator-game-" + creator.variant}
        aria-labelledby="creator-game-title"
      >
        <header className="creator-game-heading">
          <div>
            <p className="play-eyebrow">{creator.label} / CARTER.EXE</p>
            <h1 id="creator-game-title">
              {creator.name}
              <span> challenge.</span>
            </h1>
            <p className="creator-game-description">{creator.tagline}</p>
          </div>
          <div className="creator-game-stamp" aria-hidden="true">
            <span>{creator.initial}</span>
            <small>PLAYER</small>
          </div>
        </header>

        {phase === "ready" && (
          <section className="game-ready-panel" aria-labelledby="game-title">
            <div className="game-panel-meta">
              <span>ARCADE MODULE / 001</span>
              <span>KEYBOARD + TOUCH</span>
            </div>
            <p className="game-kicker">THE WORKSHOP IS OPEN</p>
            <h2 id="game-title">Bench rush.</h2>
            <p>
              Six quick PC-building decisions. You have 12 seconds for each
              pick and three strikes before the run ends. Get at least four
              right to clear the challenge.
            </p>
            <div className="game-rules">
              <span>06 ROUNDS</span>
              <span>12 SECONDS EACH</span>
              <span>03 STRIKES MAX</span>
            </div>
            <button
              className="button button-primary game-start-button"
              type="button"
              onClick={startGame}
            >
              Start the challenge <span aria-hidden="true">→</span>
            </button>
          </section>
        )}

        {phase === "playing" && (
          <section className="game-live-panel" aria-labelledby="round-prompt">
            <div className="game-hud">
              <span>
                ROUND {String(roundIndex + 1).padStart(2, "0")} /{" "}
                {String(gameRounds.length).padStart(2, "0")}
              </span>
              <span>{score} CORRECT PICKS</span>
              <span>{Math.max(0, 3 - strikes)} STRIKES LEFT</span>
            </div>

            <div
              className="game-progress-track"
              role="progressbar"
              aria-label="Round progress"
              aria-valuemin={0}
              aria-valuemax={gameRounds.length}
              aria-valuenow={roundIndex + 1}
            >
              <span style={{ width: String(progress) + "%" }} />
            </div>

            <div className="game-timer-row">
              <span>MAKE YOUR PICK</span>
              <span
                className={secondsLeft <= 4 ? "game-timer is-urgent" : "game-timer"}
                aria-live="off"
              >
                00:{String(secondsLeft).padStart(2, "0")}
              </span>
            </div>

            <div className="game-question">
              <p className="game-kicker">WORKSHOP SCENARIO / {activeRound.id}</p>
              <h2 id="round-prompt">{activeRound.prompt}</h2>
              <p>{activeRound.context}</p>
            </div>

            <div className="game-choice-grid">
              {activeRound.choices.map((choice, index) => {
                const isSelected = selectedChoiceId === choice.id;
                const isCorrect = locked && choice.id === activeRound.answerId;
                const isWrong =
                  locked &&
                  isSelected &&
                  choice.id !== activeRound.answerId;

                const classes = [
                  "game-choice",
                  isSelected ? "is-selected" : "",
                  isCorrect ? "is-correct" : "",
                  isWrong ? "is-wrong" : "",
                ]
                  .filter(Boolean)
                  .join(" ");

                return (
                  <button
                    className={classes}
                    type="button"
                    key={choice.id}
                    onClick={() => chooseAnswer(choice.id)}
                    disabled={locked}
                  >
                    <span className="game-choice-key">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <strong>{choice.label}</strong>
                    <span className="game-choice-detail">{choice.detail}</span>
                  </button>
                );
              })}
            </div>

            {feedback && (
              <div
                className={"game-feedback game-feedback-" + feedback.kind}
                aria-live="polite"
              >
                <p>{feedback.kind === "correct" ? "GOOD CALL" : "NOT THIS TIME"}</p>
                <span>{feedback.message}</span>
              </div>
            )}

            {locked && (
              <div className="game-next-row">
                <span>
                  {strikes >= 3
                    ? "THREE STRIKES / RUN ENDED"
                    : "DECISION LOCKED"}
                </span>
                <button
                  className="button button-primary"
                  type="button"
                  onClick={advanceRound}
                >
                  {strikes >= 3
                    ? "See your result"
                    : roundIndex === gameRounds.length - 1
                      ? "See your result"
                      : "Continue"}
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            )}
          </section>
        )}

        {phase === "complete" && (
          <section className="game-result-panel" aria-labelledby="game-result-title">
            <p className="game-kicker">
              {outcome === "win" ? "CHALLENGE CLEARED" : "RUN COMPLETE"}
            </p>
            <h2 id="game-result-title">
              {outcome === "win"
                ? "The bench is ready."
                : "The bench needs another run."}
            </h2>
            <p className="game-result-summary">
              You made {score} correct picks out of {gameRounds.length} and
              collected {strikes} {strikes === 1 ? "strike" : "strikes"}.
              {outcome === "win"
                ? " Solid work. The workshop is yours."
                : " Every build gets better with another attempt."}
            </p>
            <div className="game-result-stats">
              <div>
                <strong>{score}/{gameRounds.length}</strong>
                <span>CORRECT PICKS</span>
              </div>
              <div>
                <strong>{strikes}/3</strong>
                <span>STRIKES</span>
              </div>
              <div>
                <strong>{outcome === "win" ? "PASS" : "RETRY"}</strong>
                <span>RESULT</span>
              </div>
            </div>
            <div className="game-result-actions">
              <button
                className="button button-primary"
                type="button"
                onClick={() => setLetterOpen(true)}
              >
                Open the letter <span aria-hidden="true">✉</span>
              </button>
              <Link className="button button-secondary" href="/support">
                See laptop details <span aria-hidden="true">↗</span>
              </Link>
              <button
                className="game-retry-button"
                type="button"
                onClick={startGame}
              >
                Run it again
              </button>
            </div>
          </section>
        )}
      </section>

      <p className="creator-game-disclaimer">
        This is an independently made fan experience. It does not represent a
        partnership, endorsement, or official game from {creator.name}.
      </p>

      {letterOpen && (
        <div
          className="letter-backdrop"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setLetterOpen(false);
            }
          }}
        >
          <section
            className="letter-paper"
            role="dialog"
            aria-modal="true"
            aria-labelledby="letter-title"
          >
            <div className="letter-topline">
              <span>PRIVATE NOTE / 001</span>
              <button
                className="letter-close"
                type="button"
                aria-label="Close letter"
                onClick={() => setLetterOpen(false)}
              >
                ×
              </button>
            </div>
            <p className="letter-kicker">A NOTE FROM THE BUILDER</p>
            <h2 id="letter-title">A note from Joseph.</h2>
            <p className="letter-greeting">
              Hello {creator.name} and community,
            </p>
            <p>
              My name is Joseph. I&apos;m a university student and independent
              developer, learning by building real projects. I made this small
              experience because I enjoy PC culture and wanted to create
              something useful and fun for people who share that interest.
            </p>
            <p>
              I&apos;m working toward a dependable development laptop. A
              suitable machine would let me run modern development tools,
              test larger projects locally, and keep building without my
              hardware becoming the main limitation. It would also give me a
              better starting point for learning game development with Unity
              and Unreal Engine.
            </p>
            <p>
              I&apos;m looking for a refurbished Lenovo ThinkPad T14 Gen 2 AMD
              with a Ryzen 5 PRO 5650U, 16GB RAM, and a 512GB SSD, or another
              reliable machine with comparable specifications. It does not
              need to be brand new. A healthy, verified refurbished laptop
              would make a meaningful difference.
            </p>
            <p>
              If you or someone in the community might be open to helping me
              source a suitable laptop or discussing support privately, I
              would be grateful. I can share the specifications and check any
              machine before a purchase. There is no pressure, and this
              website does not collect payments.
            </p>
            <p className="letter-signoff">
              Thank you for taking the time to play and read this.
              <br />
              <strong>Joseph</strong>
            </p>
            <div className="letter-actions">
              <Link
                className="button button-primary"
                href="/support"
                onClick={() => setLetterOpen(false)}
              >
                Review the laptop details <span aria-hidden="true">↗</span>
              </Link>
              <button
                className="letter-text-button"
                type="button"
                onClick={() => setLetterOpen(false)}
              >
                Close note
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
