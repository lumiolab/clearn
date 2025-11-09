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
            name: "Interaktivität",
            detail: "Egal ob auf Handy oder PC. Überall funktioniert es."
        },
        {
            name: "FCG",
            detail: "Wir sind Teil von FCG also kannst du uns vertrauen."
        },
    ]
        const team = [
        {
            name: "Lumio",
            role: "Software und Web Entwickler"
        },
        {
            name: "Luraxx",
            role: "Kreativer Designer"
        },
    ]

</script>

<div class="bg-black text-white min-h-screen w-full flex flex-col items-center justify-center gap-2 py-20">
    <h1 class="transition-all text-transparent bg-linear-to-tr from-blue-700 to-teal-200 text-4xl md:text-5xl lg:text-6xl bg-clip-text font-semibold tracking-wide px-8 pt-8">CLearn</h1>
    <p class="text-neutral-300 font-light text-xl text-center sm:text-xs md:text-lg">Eine Emulator-basierte Plattform zum Zugriff auf verschiedene Schul-Lern-Apps.<br>Dank unserer Technologie haben viele Schüler ihre Noten deutlich verbessert.</p>
    <button onclick={() => {
        goto("/emulator")
    }} class="py-2 px-4 bg-linear-to-br from-blue-300 to-teal-700 rounded-xl hover:opacity-70 active:bg-indigo-600 active:scale-105">Starte jetzt!</button>
    <div class="gap-0 mt-32 opacity-35">

            <p class="text-neutral-300 font-light text-xl text-center mt-2 mb-0">Ein Teil von:</p>
    <img src={favicon} alt="Sponsor">

    </div>

    <div class="grid grid-row-3 md:grid-rows-3 lg:grid-cols-3 gap-3 items-center justify-center">

        {#each features as feature }

            <div class="bg-neutral-950 p-5 text-center border border-neutral-700 transition-all duration-50 hover:scale-95 hover:border-0 rounded-lg">

                <h2 class="text-xl md:text-1xl lg:text-2xl">{feature.name}</h2>
                <p class="text-neutral-300 font-light text-xl text-center sm:text-xs md:text-lg">{feature.detail}</p>
            </div>
            
        {/each}

    </div>

    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold  text-transparent bg-linear-to-tr from-blue-700 to-teal-200 bg-clip-text mb-6 md:mb-3 lg:mb-2 mt-8 md:mt-6 lg:mt-3">Unser Team</h2>
        <div class="flex flex-col items-center justify-center gap-4">
            {#each team as member}

            <div class="w-full h-full bg-neutral-950 p-5 text-center border border-neutral-700 transition-all duration-50 hover:scale-95 hover:border-0 rounded-lg">

                <h2 class="text-xl md:text-1xl lg:text-2xl font-bold text-transparent bg-clip-text bg-linear-to-tr from-red-400 to-red-700">{member.name}</h2>
                <p class="text-neutral-300 font-light text-xl text-center sm:text-xs md:text-lg"><span class="font-bold">{member.role}</span></p>
            </div>
                
            {/each}
    </div>

</div>