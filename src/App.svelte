<script>
  import { quiz } from "./data/quiz";
  import { getResult } from "./utils/scoring";

  let current = $state(0);
  let chosen = $state([]);
  let selected = $state(null);

  let finished = $derived(current >= quiz.questions.length);
  let question = $derived(quiz.questions[current]);
  let outcome = $derived(finished ? getResult(quiz, chosen) : null);

  // these two are vibecoded lol
  let featured = $derived(
    outcome
      ? outcome.ranking.find((r) => r.name === (selected ?? outcome.name))
      : null,
  );
  let others = $derived(
    outcome ? outcome.ranking.filter((r) => r.name !== featured.name) : [],
  );

  function handleAnswer(answer) {
    chosen = [...chosen, answer];
    current = current + 1;
  }
</script>

{#if outcome}
  <main>
    <p>{featured.percent}% of your answers match with:</p>
    <h1>{quiz.results[featured.name].name}</h1>
    <div class="image">
      <img src={quiz.results[featured.name].image} alt="YE" />
    </div>
    {#if quiz.results[featured.name].quote}
      <h2><em>"{quiz.results[featured.name].quote}"</em></h2>
    {/if}
    <p>

      {#if quiz.results[featured.name].mbti}
        {quiz.results[featured.name].mbti}
      {/if}
      {#if quiz.results[featured.name].playlist}
        | <a href={quiz.results[featured.name].playlist}
          >{quiz.results[featured.name].name}'s Playlist</a
        >
      {/if}
    </p>

    <p>{@html quiz.results[featured.name].description}</p>

    <h2>Others (you can click them lol)</h2>
    <div class="rankings-stack">
      {#each others as other (other.name)}
        <button class="rankings" onclick={() => (selected = other.name)} style="background-color: {quiz.results[other.name].color};">
          <b>{quiz.results[other.name].name}</b>: {other.percent}%
        </button>
      {/each}
    </div>
  </main>
{:else}
  <main>
    <h1>{quiz.title}</h1>
    <p>Question {current + 1} of {quiz.questions.length}</p>
    <h2>{question.text}</h2>
    {#each question.answers as answer (answer.text)}
      <button onclick={() => handleAnswer(answer)}>{answer.text}</button>
    {/each}
  </main>
{/if}
