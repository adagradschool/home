
---

title: Skills as a Service
date: 2026-01-17
description: The debate about AI and labor starts one step too late. What happens when the tools are in your hands, not just your employer's?
---------------------------------------------------------------------------------------------------------------------------------------------

I’ve been trying to reason about a version of the AI future that the standard labor debate tends to skip: AI not as something management deploys *on* workers to replace them, but as something an individual can pick up and wield directly.

The usual framing treats “people hire other people” as the baseline and AI as the disruptor. But if capable tools are broadly available, the more interesting baseline might become: a single person, acting like a small firm. In that world, the salient question isn’t “who gets replaced?” It’s “what does a person do when they can automate and amplify their own work?”

Here’s the hypothesis I keep circling: if production gets cheap, scarcity migrates. One plausible destination is **judgment**—the ability to decide *what problem we’re actually solving*, which constraints matter, which tradeoffs are real, and which abstraction level to commit to before you can verify the choice. I call this intangible quality, "skill".

### The oscillation: execution and frame-selection

The old slogan—“humans are creative, machines execute”—doesn’t survive contact with current systems. AI generates, recombines, surprises. It produces outputs that plausibly pass as “creative.” So the dividing line can’t simply be “idea vs implementation.”

What I notice in my own work is an oscillation:

* Sometimes I’m inside a known frame: applying a rubric, following a template, mapping inputs to outputs, moving from ambiguity to specification.
* Sometimes I’m choosing which frame applies: deciding what counts as relevant, which future states matter, whether the “obvious” solution is solving the wrong problem.

The same person does both, often within the same hour. The question is less “who owns creativity?” and more “where are you operating in the problem, and is that position upstream or downstream of what can be encoded?”

A lot of the visible surface area of craft *can* be encoded or at least bottled:

* vocabulary that sharpens vague requests into constraints
* rubrics that turn taste into criteria
* references that anchor judgment in a shared tradition
* checklists, patterns, and guardrails that prevent known failure modes

But the sense-making layer—the part where you decide what the problem even *is*—sits earlier than the moment where evaluation becomes clean. Encoding usually wants closed worlds: stable inputs, agreed metrics, repeatable feedback. Sense-making happens *before closure*. You’re deciding what “good” means while the definition is still plastic.

### A concrete example: leaving the axiom system

Hofstadter describes a difference between working within an axiom system and stepping outside it—seeing patterns the system can’t express about itself. Most work happens inside: apply rules to known structures. The “meta” move is recognizing the system you’re in and asking whether the system itself is the problem.

I ran into this while porting a system from one execution model to another. The obvious move was component mapping: A → A’, B → B’, done. That was the plan on paper.

But it felt wrong. The deeper issue wasn’t “how do we preserve two execution paths?” It was “why do we have two execution paths at all?”

The move that mattered was stepping back and treating the two models as symptoms of an incoherence rather than features to preserve. We unified execution into a single plane, preserved the external API through an adapter, and made the whole thing testable. None of that was in the task description. It came from anticipating maintenance costs, sensing duplication would compound, and choosing a higher abstraction level before I could fully prove it was correct.

That’s the kind of thing I mean by judgment: not correctness under a fixed spec, but *spec selection* under uncertainty.

### The obvious rebuttal: “frame selection will be encoded too”

There’s a straightforward counterargument: frame selection isn’t magic. You can treat it as a search problem. You can test candidate abstractions with evals. You can wire feedback loops to long-horizon outcomes. You can build systems that propose frames, simulate consequences, and update based on results. Over time, what looks like “taste” becomes a learned policy.

I take that seriously. If someone builds a system that reliably chooses good abstractions in novel domains—without human steering, without leaning on “secret” human priors smuggled in through data curation—then the ceiling I’m gesturing at is lower than I think.

So my claim is narrower: **today**, the gap I feel most sharply is not “can the model produce an artifact?” but “can it *own the meta-choice* of what game we are playing?” And more specifically: can it do that in situations where the payoff function is ambiguous, the constraints conflict, and the right move is to reframe the problem rather than solve it as stated?

That’s a capability question and an economic one—because scarcity is as much about trust and coordination as it is about raw competence.

### If outputs become abundant, what stays expensive?

Suppose artifact production trends toward abundance: drafts, code, designs, analyses, strategies, briefs. If that supply explodes, prices for the artifacts themselves tend to fall. But demand doesn’t disappear; it shifts.

One candidate for what remains scarce:

* deciding what is worth making
* selecting the frame that makes downstream work non-wasteful
* knowing when to deviate from templates
* integrating messy context that isn’t captured in the prompt
* taking responsibility for a decision, not just producing options

This is where “service” enters as a category distinction. A static artifact is a snapshot. Judgment is an ongoing process that updates with new information, new constraints, and new failures.

If you believe that, then the question becomes: **do people value the snapshot, or the updating mind behind it?** And under what conditions do they pay for the latter?

To make this less hand-wavy, imagine a few *shapes* this could take in practice—not as recommendations, but as ways to test whether the market values “living judgment” over “copyable output”:

* recurring review of decisions (not deliverables)
* ongoing critique of work-in-progress rather than final artifacts
* stewardship of a shared set of constraints (“what we consider good”) that evolves over time
* accountability structures where someone’s reputation is on the line for the choices, not the documents

If none of those get paid for—and only the files do—then the thesis is weaker than it sounds.

### The defensibility problem: why doesn’t it go to zero?

If artifacts are cheap and copyable, why doesn’t judgment get competed to zero as well?

It might. That’s the uncomfortable possibility. But there are a few reasons it might not, all of which are empirical:

* **Trust and risk transfer:** In ambiguous situations, people don’t only want options; they want someone whose judgment they trust when the cost of being wrong is real.
* **Context that doesn’t travel:** The “real” problem often lives in local constraints, politics, tacit knowledge, and history. Outputs travel; context doesn’t.
* **Accountability:** Organizations frequently pay for someone to be responsible—someone you can point to when things go sideways, someone who will defend a choice and revise it as reality changes.
* **Continuous adaptation:** A rubric isn’t valuable because it exists; it’s valuable because it stays aligned with a changing environment.
* **Bandwidth and relationship:** Even if judgment is theoretically replicable, access to *this particular* judgment may be scarce because the relationship and attention are scarce.

None of these are guaranteed moats. They’re reasons value *might* concentrate around people rather than artifacts, even when the artifacts are trivial to reproduce.

The hard part is that each one is vulnerable: trust can be borrowed by brands, context can be scraped, accountability can be automated into process, adaptation can be done by systems that learn, relationship bandwidth can be approximated by always-on agents. So the question isn’t “is it defensible?” but “for how long, in which domains, and at what price?”

Tailwind is a good example because it exposes the gap between producing an artifact (CSS utilities, docs, examples) and maintaining an evolving sense of “what belongs” in the system. But it’s not unique to developer tooling. You can see the same pattern elsewhere.

### What I’m actually uncertain about

I can compress my uncertainty into one question:

**When outputs become abundant, will markets pay for the upstream activity of frame selection and ongoing calibration—or will they treat it as overhead and drive it toward zero anyway?**

I can imagine futures that support either outcome:

* A future where “living craft” is valuable because environments churn, coordination is hard, and responsibility can’t be automated away.
* A future where the cheapest plausible output wins, institutions standardize around minimal acceptable quality, and the premium for taste collapses.

The only honest way through is to watch the boundary conditions: where people keep paying for ongoing judgment even when deliverables are cheap; where they stop; and what replaces it when they do.

### What would change my mind

I’m watching for systems that can do the meta-move reliably: not just solve framed problems, but **choose frames well** in novel settings.

Concretely, I’d update away from this thesis if we see tools that:

* propose multiple plausible abstractions,
* test them against messy, long-horizon feedback,
* and converge on consistently good framings without humans acting as the hidden evaluator.

If that becomes commonplace, “judgment” stops being the scarce bottleneck and becomes another layer that can be scaled and commoditized.

Until then, the more practical question for individuals isn’t “will AI replace me?” but “which parts of my work are inside a frame, and which parts are frame selection—and can I move upstream?”

---

**Disclosure:** I used AI to draft and refine this essay in a ralph loop. I set an initial rubric and had it critique each draft harshly while I wrote. It pushed me to make concrete claims and reduce hedging; I pushed back where the writing stopped matching my taste. The LLM thinks I score 60%, I am happy with this draft.

---
