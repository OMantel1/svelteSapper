<script>
    import { onMount } from "svelte";
    import CardItem from "../components/CardItem.svelte";
    let aidesListe;

    onMount(async () => {
        await fetch(
            "https://dev.api.mesaidespubliques.fr/Aides/all?page=1&count=50",
            {
                method: "GET",
                mode: "cors",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
            }
        )
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw error;
                }
            })
            .then((data) => {
                aidesListe = data.aides;
            })
            .catch((error) => console.log(error));
    });
</script>

<style>
    .card-container {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        max-width: 1440px;
        margin: auto;
        text-align: center;
        opacity: 1;
        animation: opacity ease-in 0.4s;
    }
    h1 {
        color: #f39e5a;
        font-size: 2.5em;
        font-weight: 300;
        opacity: 1;
        animation: opacity ease-in 0.2s;
    }
    @keyframes opacity {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>

<h1>Mes aides</h1>
<div class="card-container">
    {#if aidesListe}
        {#each aidesListe as card, i}
            <CardItem
                cardTitle={card.title}
                cardDesc={card.description}
                cardSrc={card.picture}
                cardId={card.id} />
        {/each}
    {:else}
        <div>No content yet</div>
    {/if}
</div>
