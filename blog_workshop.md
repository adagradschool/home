# Blog workshop notes

## Discussion summary
- Thesis: skills are being distilled into artifacts (e.g., Markdown files), but the real value is the evolving taste/judgment behind them; this raises new economics for monetizing living craft.
- Concern: open-source distribution makes artifacts copyable; monetization hinges on whether people pay for ongoing judgment instead of static files.
- Counterpoint to test: can taste be encoded at all, and is there a representational ceiling? What can be captured vs. what remains latent?
- What can be encoded today: professional vocabulary, references, rubrics, and playbooks that help articulate and evaluate quality.
- What resists encoding: strategic sense-making under uncertainty; choosing the right abstraction level; latent beliefs and tool inclinations.
- Concrete example: a system port where unifying execution into one plane and preserving the API (adapter pattern, testability) reflected higher-order judgment, not a checklist.
- Reframe: the debate is one step too late if it starts with "employers replace workers." AI is also at the individual's disposal, so the question becomes how individuals act when automation/amplification tools are available to them.
- Goal of the piece: reframe the debate (not advice), explore the phenomenon, stress-test assumptions, and map the limits of representation and economics.

## Current plan
1) Reframe the public narrative: from AI-as-bogeyman to AI-at-the-individual's-disposal.
2) Define the shift in scarcity: artifacts are copyable; living judgment/taste is scarce.
3) Lay out what can be encoded now (vocabulary, rubrics, references) vs. what can't (sense-making under uncertainty).
4) Use the system-port example to make the "uncertainty judgment" concrete.
5) Close with open questions: representational ceiling, willingness to pay for evolving craft, and how this changes labor economics.

## Draft anchor (v2)
- The debate shouldn't start at "who gets replaced." It should start at "what does the individual do when AI is at their disposal?"
- The value isn't the artifact; it's the evolving craft behind it.
- Encoding can scale parts of taste, but sense-making under uncertainty remains the hard core.
- The future hinges on whether people value living judgment over static outputs.

## Full draft (v5)

I've been trying to figure out what happens when AI is at the individual's disposal. Not AI as something employers wield against workers, but AI as something a person can pick up themselves. This is my attempt to think through it.

The standard debate treats "people hire other people" as the baseline and AI as the disruptor. But that framing might be wrong. If AI tools are available to individuals—not just companies—then the interesting question isn't "who gets replaced?" It's "what does a person do when they can automate and amplify their own work?"

I don't have an answer. What I have is a hypothesis: if production gets cheap, scarcity migrates somewhere else. One possibility is that it migrates to judgment—the capacity to decide what to make, how to frame a problem, when to deviate from the obvious path. If this is true, then the economic question isn't about replacement; it's about what remains scarce when outputs become abundant.

The old framing—"humans are creative, machines execute"—might be too simple. AI generates, recombines, surprises. It produces things that look creative. But here's what I notice in my own work: the activity oscillates. Sometimes I'm applying a known frame—following a rubric, executing a template, mapping inputs to outputs. Other times I'm choosing which frame applies—deciding what counts as relevant, what future states matter, which abstraction to commit to. The same person does both, often in the same hour. If this observation generalizes, then the question isn't who owns creativity. It's where in the problem you're operating, and whether that position is upstream or downstream of what can be encoded.

The visible part of craft can be encoded: vocabulary that sharpens vague requests into precise constraints, rubrics that turn taste into criteria, references that anchor judgment in shared tradition. That's real, and it scales. The sense-making layer—where you're setting the frame rather than applying it—seems to resist capture. I don't know if it can ever be fully encoded. What would tell me: if someone builds a system that reliably chooses good abstractions in novel domains without human steering, I'm wrong about the ceiling. I haven't seen that yet, but I'm watching for it.

Here's an example that clarifies what I mean.

I was porting a system from one execution model to another. The obvious move was to map each component of the old system to its counterpart in the new one. A to A', B to B', done. But that felt wrong. The move I made instead was to step back: why are we running things two different ways at all? We unified execution into a single plane, preserved the external API through an adapter, made the whole thing testable. None of that was in the task description. It came from anticipating future maintenance costs, sensing that duplication would compound, choosing a higher abstraction level when I couldn't verify the choice yet.

This is the same cognitive operation Hofstadter describes in *Gödel, Escher, Bach*: the difference between working within an axiom system and stepping outside to observe patterns the system can't express about itself. The component-by-component mapping was staying inside the axioms—applying known rules to known structures. The unifying move required stepping outside: seeing that the two execution models were symptoms of an incoherence, not features to preserve. You can't get there by following the rules more carefully. You get there by noticing you're in a system and asking whether the system itself is the problem.

Both modes are necessary. Most work happens inside: applying rubrics, following patterns, executing known transformations. The upstream work—setting the frame—requires the step outside. Encoding requires a closed problem—fixed inputs, clear evaluation criteria. Sense-making operates before the problem closes. You're deciding what counts as relevant, what future states to weight, which abstraction to commit to when you can't verify the choice yet. In my experience, humans intuitively jump levels after trying something for ten or fifteen rounds. That meta-move—the decision to step outside the current frame—is what seems to resist encoding. But I want to be careful here: "seems to resist" isn't "cannot be." I'm describing a current limitation, not a law.

If this analysis is right, what shifts economically? One possibility: the scarce part is no longer producing artifacts—it's interpreting, choosing, evolving. This suggests we should watch not just productivity gains, but how people actually value living craft. Do they trust a static artifact, or the evolving judgment that produces it? I genuinely don't know the answer.

Here's what might be new: this isn't consulting. Consulting is time-bound, one project at a time, trading hours for money. Productized skill would be different—your judgment scales to many projects without you in the room. You're not selling a file. You're offering access to evolving taste. The artifact is just the current manifestation; the value is the ongoing capacity to produce new ones.

Who would pay for this? Both individuals and companies, perhaps—the line between them is blurring. Leverage per person keeps increasing. Someone with taste and AI tools can now do what used to require a team. But "can do" isn't "will pay for." The economic question is whether the market values judgment enough to compensate it, or whether abundant production just drives prices to zero.

If there's a window where human judgment is valuable and compensable, it makes sense to act on it now rather than wait for certainty about where the ceiling lands.

I used AI to draft and refine this essay. The AI kept suggesting I frame this around "productivity gains" and "efficiency"—the standard discourse. I discarded that framing because it stays inside the replacement paradigm instead of questioning it. The AI also proposed treating "taste" as a definable, listable thing; I kept the framing that taste resists full capture. Those were my choices. Whether that editorial layer is itself encodable is part of what I'm exploring here.

This reframing doesn't resolve the economics. It clarifies what's at stake. A static artifact becomes stale. A living practitioner updates their model. Under uncertainty, you might want access to someone still learning, not a snapshot of what they knew last year.

Here's a concrete test: Tailwind CSS became the dominant approach to styling, but its creators struggled to monetize beyond consulting. If someone figures out how to productize the *evolving judgment* behind Tailwind—not the templates, but the ongoing curatorial sense that decides what belongs in the system—and people pay for that at scale, my thesis holds. If people just copy the artifacts and the creators see no sustained revenue, I'm wrong.

---

› We're starting to see know-how being distilled into skills. It's condemned to open-source only as the only distribution mechanism. How do you incentivize a professional designer/


› Anyone who is interested in AI and how it interacts with the labor force.


• I'm deciding to ask one question at a time in a loop, alternating between their stance and personal experience, keeping each question focused and singular.

• What personal experience or observation led you to this thesis?


› The general public's response to how AI is pitched is pretty hostile, and for good reasons. Most AI is pitched as a way of automating your labor and causing mass unemployment. At the
  second time, there's also almost like a fringe of people who think that this is their way to be unblocked by any technical constraints and having the agency to do what they wish to. So
  example, we recently had a case of Tailwind CSS which has become the go-to way of doing things. SHAD, CN, and Tailwind CSS. But they could not monetize their Open Source service. How
  could they have productized their agency in a way that people could pay them not in just getting consultation calls which is a service-based industry, but to actually productize their
  taste not just in templates but in how you could create different kinds of templates while retaining the identity and the aesthetic sense of Tailwind CSS?


• What specific outcome do you want readers to walk away with—agreement, a new mental model, or a concrete action?


› I want it and I want this process as a way of refining my thoughts on this to go back and forth and try to evaluate if my thesis is correct or if there's some implicit assumption that
  I'm making that basically breaks this argument. Is this a reasonable, coherent line of thought? Yes or no?


• I'll answer yes/no briefly while acknowledging, then ask a clarifying question like "What's your strongest assumption?" to focus the discussion.

• Yes, it’s coherent as a thesis, but it hinges on a few assumptions we should stress‑test.


› I want you to tell me that.


• I'm preparing to confirm if the central assumption that users will pay for encoded taste as a service with protected IP is accurate before proceeding.

• The biggest assumption is that people will pay for encoded taste/process as a product or service, even when the underlying skills can be copied or commoditized.

  Is that the assumption you most want to test, or is there another one you think is more fragile?
› Yeah, I think this is a new kind of economics that I am pitching here. The idea that people will pay for skills, which they see as just a bunch of Markdown files. How do we prevent
  people from seeing the short-term product aspect of it? And use that to basically reject the entire thesis. Skills are the current manifestation of this. But maybe eventually you will
  have continual learning models that are basically mirroring human skills, such as those of a professional designer, in a way that they can replicate and be of use across different
  projects. This will be a service rendered at scale while still holding the same bar. You are not replicating clones of yourself but you have encoded your meta-algorithm that runs in
  your head and try to monetize that. So I think the closest relation with me with my project would be something like a service-based organization where you pay on a per-project basis,
  and the Markdowns are just not the artifacts that are delivered.



› I mean, we could be talking about artists. Why buy a painting when you can just look at it? Why are cookbooks important and so varied? Why do we hire freelancing consultants?


• Which of those analogies feels strongest to you—and why?



• If you had to lead with just one analogy in the opening, which would you pick?



• I'll respond thoughtfully to each question individually, reflecting on the answer before asking the next question to maintain clarity and engagement.

• Totally fair — let me react a bit. The “artist/cookbook/consultant” trio works because it reframes skills as taste + trust, not just outputs. That’s a strong hook.


› The artifacts being rendered at a specific time are frozen in time, and human beings and their skill sets and taste evolve over time. So, it's not just getting a markdown file today,
  but it's being subscribed to the continuous stream as a person figures out what kind of taste they have.


• That’s a strong distinction: the artifact is a snapshot, while the value is the evolving taste stream.

  If we name that concept—“taste as a subscription,” “living process,” something like that—what term feels right to you?


› Yeah, I think that makes sense. Taste as a subscription sounds a lot like a marketing jargon thing, but maybe that's the way to go. I don't know.


• I'm focusing on making the interaction conversational by asking one question at a time, proposing term options, and checking user preferences before proceeding.

• Yeah, “taste as a subscription” is a bit marketing-y, but it’s directionally right. We could make it more grounded, like “living craft,” “evolving taste,” or “process-as-a-service.”

  Which framing feels most authentic to you?
› Yeah, I think Living Craft seems like the right angle, but I don't care about naming the thing as much as trying to figure out what are the things that we could do to understand if this
  is a real phenomenon or not.


• What would convince you it’s real—what evidence, signal, or experiment would change your mind either way?


› How about we list down the right questions to ask. What do people who have the supposed taste skill think about monetizing their skills or how they see their taste and personality and
  process being enhanced by AI rather than being replaced by it? For the users I want to see:
  - Do they just treat it as a utility


• I'm shifting to a single-question approach to keep the conversation clear and manageable, aiming to summarize briefly and then ask the user to elaborate on their specific segment next.

• Great, that’s a solid line of inquiry.


› It doesn't quite matter. I think we can approach the question and ask this as a broader question to everyone. There is no straight line between a creator and a consumer anymore. All of
  us are wrapped up in this process anyway.


• Got it. If we’re speaking to everyone, what’s the one question that cuts through roles and surfaces whether they treat “taste” as a utility or a craft?
• I'm suggesting a single strong question to ask people and immediately offering to provide another if desired, respecting the one-question-at-a-time approach.

• Here’s one that cuts across roles:

  “When you pay for something, are you paying for the outcome itself, or for the maker’s evolving judgment and taste—and why?”

  Want a second question in a different direction?


› Yeah, go ahead. What's the next question?



› That's the same as the first question, right?


• I’ll respond to the user's comment and then ask a focused follow-up question around willingness to pay, subscription options, or attribution preferences, keeping the interaction one
› I think that's just an implementation detail at this point. I'm thinking of this concept as a phenomenon, not as a start-up in the making!


• Got it — let’s stay at the phenomenon level.

  What’s the strongest counter‑argument you can imagine to your thesis?




• That’s a deep counter — if taste can’t be adequately represented, the whole productization premise weakens.

  So the next question: what do you think can be encoded today, and what can’t?

  different. So they are limited to saying some inane generic stuff like "make this beautiful." Whereas a designer with professional training who has had experience working in this space
  has a much richer set of vocabulary they can use. At the same point, they can also give references to other literature in this work. For example, as an engineer, I can say, "If you're
  doing a refactoring job, go and check out John Oosterhout's book about the philosophy of software design." What are the tenets of that, and try to form a rubric of what the definition
  of good taste is so I can point to things. And I have more material to point to than a person who does not have that acquired experience. As for what cannot be encoded, maybe it's
  something deeper than that, something that's just related to the craft. It's not tactical but strategic.


• When you say “strategic,” what do you mean in this context—decision framing, goal setting, or something else?


› Yes. How do they perceive the artifacts? How do they react in terms of their own belief system? What kind of tools do they have an inclination to reach towards? These are things that

• So would you say the core of taste is less “rules” and more “sense‑making under uncertainty”?


› Absolutely!


• What’s a concrete example from your own work where sense‑making under uncertainty (not rules) was the deciding factor?


› I was working on a project recently where we were porting from one system to another. Notice we were doing the same thing for different ways, and I wanted to unify them so that we only
  executed it in one particular way while maintaining the constraint that there need not be any API definition change there.

  So what I ended up doing was even thinking of this as a potential solution that we should have one particular way of executing things is very different from a generally AI which is sort
  of like, "Okay, this is the task, and I am supposed to do a mapping between this one system to the other system. So let me just copy each component of the system."

  We thought of a higher dimension of what the future requirements are. Maybe it is easier to maintain if we just have one execution plane. The API mapping adapter pattern is easily unit
  testable. Is that like post-hoc decision or is that like a higher level or out-of-the-box decision that was made? I think that comes down to sense making under uncertainty.


• That’s a great example: you prioritized a unifying execution plane and testability under future uncertainty, not just “map A to B.”

  Given that, do you think “taste” is really the ability to choose the right abstraction level under uncertainty?


› Taste could be pretty much anything. It's by its own essence undefinable.


• Totally — that’s why “taste” resists capture. But we can still point at its effects.

  So for the blog, do you want to argue that taste is undefinable but observable in outcomes, or that it’s partially definable via vocabulary + rubrics?


› I mean, I want to capture the essence that it is undefinable, but what can we express today and explore that limit of its representational capacity and what can we do to map out the
  economic. So it is like a synthesis along all of these lines of inquiry.


• Next, I'll proceed by asking one question at a time and confirm if skill usage should be announced, since the user hasn't specified it.

• What’s the core claim you want readers to remember in one sentence?
› I think that's enough questions. Let's move on to the next phase of the Ralph loop.


• I'll create a concise first-pass blog outline with thesis statement options and clearly identify assumptions, then ask for feedback to align with the user's intent.

• Here’s a first synthesis pass: a one‑sentence core claim, a tight outline, and a starter draft. Tell me what feels right/wrong, and we’ll iterate.

  Core claim (candidate)
  We’re moving from “skills as artifacts” to “skills as living craft,” where the monetizable value isn’t the Markdown file but the evolving judgment behind it—yet the economics only work
  Outline (v1)

  - Hook: AI pitches automation; people fear replacement, but also sense liberation.
  - Thesis: Skills-as-artifacts are copyable; the scarce value is living craft (evolving taste).
  - What can be encoded today: vocabulary, rubrics, references, playbooks.
  - What can’t (yet): sense‑making under uncertainty; choosing abstraction levels.
  - Implication: “skills as a service” is plausible only if buyers pay for ongoing judgment.
  - Tests: questions to ask across creators/consumers; signals that taste is valued.
  - Open question: representational ceiling and the economics of trust.

  Starter draft (v1)
  AI is usually sold as automation. That pitch creates fear for good reasons—people hear “replacement.” At the same time, there’s a quieter counter‑current: AI as a way to remove
  constraints and unlock agency. Those two stories collide when we talk about “skills.”

  Right now, skills are largely artifacts—Markdown files, prompt libraries, templates. But artifacts are easy to copy. If that’s the whole product, the economics collapse. The deeper value
  isn’t in the file; it’s in the person’s evolving judgment—the way taste changes over time, the way a craftsperson adapts, revises, and learns. A static snapshot can’t capture that.

  What can be encoded today? A lot more than we admit. Professionals carry a vocabulary that helps them articulate the difference between “make it beautiful” and “make it legible under
  constraint.” They have references, rubrics, and books they can point to. An engineer can say “read Ousterhout on design” and translate that into concrete review criteria. That’s already
  a form of skill encoding.

  What can’t be encoded—at least not fully—is sense‑making under uncertainty. The best decisions aren’t a checklist; they’re about choosing the right abstraction level when the future is
  unclear. I saw this while porting a system: the naive move was to map A to B component‑by‑component. The higher‑order move was to unify execution in one plane, preserve the API, and make
  the adapter pattern testable. That wasn’t a rule—it was a judgment under uncertainty.
  ongoing stream of judgment, maybe. The distinction matters because it suggests a different mental model: not skills as a one‑time artifact, but skills as a living practice you subscribe
  to.

  The phenomenon isn’t settled. The right way to test it is to ask people—creators and users alike—whether they pay for outcomes or for evolving judgment, and what earns their trust. If
  the answer is “utility only,” then this thesis dies. If the answer is “craft matters,” then skills‑as‑a‑service becomes a real category.



› I think the current status quo is even one step before that. The current status quo is people are hiring other people to do most of the work, and AI is being treated as this bogeyman
  that will come and replace you. I'm trying to come at it trying to figure out what does the individual do when AI is a technology that is available and it's also at your own disposal.


• I'm focusing on concise iterative responses with one question at a time and brief updated framing before each question.

• That’s a useful shift: from “skills as artifacts” to “what does an individual do when AI is available to them, not just to employers.” I’ll reframe the draft around that.

  Before I revise, what audience posture should the piece take—guiding individuals (what to do), or reframing the debate (how to think about AI and labor)?


› I think reframing the debate - I don't want to give any advice to anyone.


• Reframed draft (v2) focused on shifting the debate, not advice. Let me know what to keep/cut.

  Draft (v2)
  The current debate about AI and labor starts one step too late. We act like the baseline is “people hire other people to do the work,” and AI is the bogeyman that might replace them. But
  AI isn’t only a tool in the hands of employers; it’s also at the individual’s disposal. That changes the frame.

  If AI is available to everyone, then the question isn’t just “who gets replaced?” It’s “what is the individual’s role when the tools to automate and amplify work are inside their own
  reach?” This is where the concept of “skills” starts to break. A skill isn’t just an output or a template. It’s a living craft—evolving judgment, taste, and decision‑making under
  uncertainty.

  The visible part of that craft can be encoded: vocabulary that sharpens vague requests into precise constraints, rubrics that turn taste into criteria, references that anchor judgment in
  shared tradition. That’s real, and it scales. But the irreducible part—the sense‑making—doesn’t fully transfer. It shows up when you choose the right abstraction level, or unify a system
  to anticipate the unknown instead of mapping components one‑to‑one.

  So the debate isn’t “AI replaces labor.” It’s “AI shifts the scarcity.” The scarce part is no longer the ability to produce artifacts; it’s the ability to interpret, choose, and evolve.
  If that’s true, then what we should be watching isn’t just productivity, but how people value living craft—whether they trust a static artifact or the evolving judgment that produces it.

  This reframing doesn’t resolve the economics. It just points to a new axis: what can be encoded and scaled, and what resists representation. The future of skills isn’t only about who can
  automate; it’s about whether people are willing to value the part of craft that can’t be copied.

  What do you want to emphasize more—individual agency, the scarcity shift, or the limits of encoding taste?


› Write our discussion and your current plan to a markdown file.


• I'm choosing to write the discussion and current plan to /Users/ada/fun/home/blog_workshop.md with a clear summary inside.
