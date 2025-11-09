<script>
	import { goto } from "$app/navigation";
    import favicon from '$lib/assets/fcg.png';

</script>

<div class="bg-neutral-800 text-white h-screen w-screen flex flex-col items-center justify-center gap-2">
    <h1 class="transition-all text-transparent bg-linear-to-tr from-indigo-700 to-indigo-300 text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text">CLearn</h1>
    <p class="text-neutral-300 font-light text-xl text-center sm:text-xs md:text-lg">Eine Emulator-basierte Plattform zum Zugriff auf verschiedene Schul-Lern-Apps.<br>Dank unserer Technologie haben viele Schüler ihre Noten deutlich verbessert.</p>
    <button onclick={() => {
        goto("/emulator")
    }} class="py-2 px-4 bg-linear-to-tr from-indigo-300 to-indigo-700 rounded-xl hover:opacity-70 active:bg-indigo-600 active:scale-105">Starte jetzt!</button>
    <div class="gap-0 mt-32 opacity-35">

            <p class="text-neutral-300 font-light text-xl text-center mt-2 mb-0">Ein Teil von:</p>
    <img src={favicon} alt="Sponsor">

    </div>

</div>