---
title: Skills as a Service
date: 2026-01-17
description: The debate about AI and labor starts one step too late. What happens when the tools are in your hands, not just your employer's?
---

I've been trying to figure out what happens when AI is at the individual's disposal. Not AI as something employers wield against workers, but AI as something a person can pick up themselves.

The standard debate treats "people hire other people" as the baseline and AI as the disruptor. But that framing might be wrong. If AI tools are available to individuals—not just companies—then the interesting question isn't "who gets replaced?" It's "what does a person do when they can automate and amplify their own work?"

I don't have an answer. What I have is a hypothesis: if production gets cheap, scarcity migrates somewhere else. One possibility is that it migrates to judgment—the capacity to decide what to make, how to frame a problem, when to deviate from the obvious path. If this is true, then the economic question isn't about replacement; it's about what remains scarce when outputs become abundant.

The old framing—"humans are creative, machines execute"—might be too simple. AI generates, recombines, surprises. It produces things that look creative. But here's what I notice in my own work: the activity oscillates. Sometimes I'm applying a known frame—following a rubric, executing a template, mapping inputs to outputs. Other times I'm choosing which frame applies—deciding what counts as relevant, what future states matter, which abstraction to commit to. The same person does both, often in the same hour. If this observation generalizes, then the question isn't who owns creativity. It's where in the problem you're operating, and whether that position is upstream or downstream of what can be encoded.

The visible part of craft can be encoded: vocabulary that sharpens vague requests into precise constraints, rubrics that turn taste into criteria, references that anchor judgment in shared tradition. The sense-making layer—where you're setting the frame rather than applying it—seems to resist capture. I don't know if it can ever be fully encoded. What would tell me: if someone builds a system that reliably chooses good abstractions in novel domains without human steering, I'm wrong about the ceiling. I haven't seen that yet, but I'm watching for it.

Hofstadter describes something like this in *Gödel, Escher, Bach*: the difference between working within an axiom system and stepping outside to observe patterns the system can't express about itself. Most work happens inside—applying rules to known structures. The meta-move is stepping outside: noticing you're in a system and asking whether the system itself is the problem. You can't get there by following the rules more carefully. You get there by recognizing the limits of the current frame.

An example might clarify what I mean.

I was porting a system from one execution model to another. The obvious move was to map each component of the old system to its counterpart in the new one. A to A', B to B', done. But that felt wrong. The move I made instead was to step back: why are we running things two different ways at all? The component-by-component mapping was staying inside the axioms—applying known rules to known structures. The unifying move required stepping outside: seeing that the two execution models were symptoms of an incoherence, not features to preserve. We unified execution into a single plane, preserved the external API through an adapter, made the whole thing testable. None of that was in the task description. It came from anticipating future maintenance costs, sensing that duplication would compound, choosing a higher abstraction level when I couldn't verify the choice yet.

I want to be careful here: "seems to resist" isn't "cannot be." I'm describing a current limitation, not a law. Encoding requires a closed problem—fixed inputs, clear evaluation criteria. Sense-making operates before the problem closes. You're deciding what counts as relevant, what future states to weight, which abstraction to commit to when you can't verify the choice yet. In my experience, humans intuitively jump levels after trying something for ten or fifteen rounds. Whether that meta-move can be captured systematically is an open question.

If this analysis is right, what might shift economically? One possibility: the scarce part is no longer producing artifacts—it's interpreting, choosing, evolving. This suggests we should watch not just productivity gains, but how people actually value living craft. Do they trust a static artifact, or the evolving judgment that produces it? I don't know the answer.

Consulting is time-bound, one project at a time, trading hours for money. What might be different: judgment that scales to many projects without you in the room. You're not selling a file. You're offering access to evolving taste. The artifact is just the current manifestation; the value is the ongoing capacity to produce new ones. Whether the market values that enough to compensate it—or whether abundant production just drives prices to zero—is the economic question I can't resolve.

Who would pay for this? Both individuals and companies, perhaps—the line between them is blurring. Leverage per person keeps increasing. Someone with taste and AI tools can now do what used to require a team. But "can do" isn't "will pay for."

If there's a window where human judgment is valuable and compensable, it makes sense to act on it now rather than wait for certainty about where the ceiling lands.

Tailwind CSS became the dominant approach to styling, but its creators struggled to monetize beyond consulting. If someone figures out how to productize the evolving judgment behind Tailwind—not the templates, but the ongoing curatorial sense that decides what belongs in the system—what would that look like? Would people pay for it at scale? I don't know. If they do, my thesis might hold. If people just copy the artifacts and the creators see no sustained revenue, I might be wrong. The phenomenon is still unfolding.

This reframing doesn't resolve the economics. It clarifies what's at stake. A static artifact becomes stale. A living practitioner updates their model. Under uncertainty, you might want access to someone still learning, not a snapshot of what they knew last year.

Disclosure - I used AI to draft and refine this essay in a Ralph Loop. I set up the initial rubric, asked it to be a harsh critique while I wrote each draft. It kept pushing me to not hedge. To have a concrete judgement of things. In some cases, I pushed back. If anything, I got a 60% score on this draft version but it matches my taste and captures where I stand today.
