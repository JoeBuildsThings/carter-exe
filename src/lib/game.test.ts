import { describe, expect, it } from "vitest";
import { gameRounds, getGameOutcome, getRoundsForCreator, kayjayRounds } from "./game";

describe("component sprint", () => {
  it("gives every round three choices and a valid answer", () => {
    for (const round of gameRounds) {
      expect(round.choices).toHaveLength(3);
      expect(
        round.choices.some((choice) => choice.id === round.answerId),
      ).toBe(true);
    }
  });

  it("keeps creator editions distinct and validates every answer", () => {
    expect(gameRounds).toHaveLength(6);
    expect(kayjayRounds).toHaveLength(6);
    expect(getRoundsForCreator("carterpcs")).toBe(gameRounds);
    expect(getRoundsForCreator("kayjayohpcs")).toBe(kayjayRounds);
    expect(kayjayRounds[0].prompt).toMatch(/car tire/i);

    for (const round of [...gameRounds, ...kayjayRounds]) {
      expect(round.choices).toHaveLength(3);
      expect(round.choices.some((choice) => choice.id === round.answerId)).toBe(true);
    }
  });

  it("requires at least four correct picks and fewer than three strikes to win", () => {
    expect(getGameOutcome(4, 0)).toBe("win");
    expect(getGameOutcome(5, 2)).toBe("win");
    expect(getGameOutcome(3, 0)).toBe("loss");
    expect(getGameOutcome(4, 3)).toBe("loss");
  });
});
