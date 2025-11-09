<script>
	import { goto } from "$app/navigation";
    import favicon from '$lib/assets/fcg.png';

    const features = [
        {
            name: "Einfach",
            detail: "Eine der einfachsten Softwares"
        },
        {
            name: "Spaßig",
            detail: "Mit uns hat man Spaß beim lernen"
        },
        {
            name: "Spaßig",
            detail: "Mit uns hat man Spaß beim lernen"
        },

    ]

</script>

<div class="bg-black text-white h-screen w-screen flex flex-col items-center justify-center gap-2">
    <h1 class="transition-all text-transparent bg-linear-to-tr from-blue-700 to-teal-200 text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text">CLearn</h1>
    <p class="text-neutral-300 font-light text-xl text-center sm:text-xs md:text-lg">Eine Emulator-basierte Plattform zum Zugriff auf verschiedene Schul-Lern-Apps.<br>Dank unserer Technologie haben viele Schüler ihre Noten deutlich verbessert.</p>
    <button onclick={() => {
        goto("/emulator")
    }} class="py-2 px-4 bg-linear-to-br from-blue-300 to-teal-700 rounded-xl hover:opacity-70 active:bg-indigo-600 active:scale-105">Starte jetzt!</button>
    <div class="gap-0 mt-32 opacity-35">

            <p class="text-neutral-300 font-light text-xl text-center mt-2 mb-0">Ein Teil von:</p>
    <img src={favicon} alt="Sponsor">

    </div>

    <div class="grid grid-row-3 md:grid-cols-3 lg:grid-cols-3 gap-3 items-center justify-center">

        {#each features as feature }

            <div class="bg-neutral-950 p-5 text-center border border-white hover:border-0 rounded-lg">

                <h2 class="text-xl md:text-1xl lg:text-2xl">{feature.name}</h2>
                <p class="text-neutral-300 font-light text-xl text-center sm:text-xs md:text-lg">{feature.detail}</p>
            </div>
            
        {/each}

    </div>

</div>