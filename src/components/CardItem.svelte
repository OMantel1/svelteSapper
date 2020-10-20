<script>
    export let cardTitle;
    export let cardDesc;
    export let cardSrc;
    export let cardId;
    export let cardTypeFinancenemt;
</script>

<style>
    .card__list {
        display: grid;
        grid-template-rows: 100px auto 60px;
        align-items: stretch;
        width: 250px;
        height: auto;
        padding: 20px;
        margin: 0 8px 18px;
        border: #f39e5a 2px solid;
        border-radius: 6px;
        font-size: 12px;

        color: rgb(169, 169, 169);
        background-color: white;
    }
    .card__list p {
        margin-top: 0;
        margin-bottom: 0;
    }

    .card__title {
        color: #f39e5a;
        font-weight: 300;
        margin: 20px;
        font-size: 16px;
    }

    .card__img {
        max-width: 140px;
        max-height: 80px;
        height: auto;
    }

    .card__img-container {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card__desc {
        color: rgb(116, 116, 116);
        text-align: initial;
        margin-bottom: 14px;
    }

    .card__btn {
        display: inline-block;
        width: 160px;
        padding: 8px;
        border-radius: 16px;
        background-color: rgb(44, 143, 220);
        color: rgb(228, 228, 228);
        font-size: 14px;
        box-shadow: 0 0 0 black;
        transition: linear 0.15s;
    }

    .card__btn:hover {
        text-decoration: none;
        box-shadow: 2px 2px 4px grey;
    }

    .card__btn::after {
        content: url(../next.png);
        filter: invert();
        padding-left: 12px;
    }
    .card__link {
        display: inline-block;
        color: rgb(59, 160, 237);
        margin-top: 16px;
    }
</style>

<div class="card__list">
    <div>
        <p>{cardTypeFinancenemt}</p>
        <div class="card__img-container">
            <img src={cardSrc} alt="logo financeur" class="card__img" />
        </div>
    </div>
    <div>
        <h2 class="card__title">{cardTitle}</h2>
        <div class="card__desc">
            {@html cardDesc}
        </div>
    </div>
    <div>
        <a
            href="https://github.com/OMantel1"
            target="_blank"
            rel="noopener"
            class="card__btn"
            id={cardId}>Vérifier éligibilité
        </a>
        <br />
        <a
            href="https://github.com/OMantel1"
            target="_blank"
            rel="noopener"
            class="card__link"
            id={cardId}>En savoir plus</a>
    </div>
</div>
