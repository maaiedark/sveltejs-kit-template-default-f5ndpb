 <svelte:head>
	<title>My professionnal experience</title>
</svelte:head>
 <script>
	import SeeMore1 from "$lib/components/see_more1.svelte"
	import SeeMore2 from "$lib/components/see_more2.svelte"
	import SeeMore3 from "$lib/components/see_more3.svelte"
</script>
 
 <!-- Professionnel Experience -->
<div class="w3-container w3-pale-red" id="tour">
    <div class="w3-container w3-content w3-padding-64" style="max-width:800px">
        <h2 class="w3-wide w3-center">PROFESSIONAL EXPERIENCE</h2>
        <p class="w3-opacity w3-center"><i>Remember, I want to be an engineer and i have a little bit of experience!</i></p><br>

        <ul class="w3-ul w3-border w3-white w3-text-grey">
            <li class="w3-padding">Stage d'Initiation: COLLINS AEROSPACE, Casablanca (Juillet 2019 - Août 2019 ).
            <li class="w3-padding">Stage Technicien: LeanCam Engineering (Juin 2021 - Juillet 2021 )
            <li class="w3-padding">Stage élève ingénieur: Malichaud Atlantique, Rochefort (Mai 2022 - Septembre 2022 )  </li>
        </ul>

        <div class="w3-row-padding w3-padding-32" style="margin:0 -16px">
            <div class="w3-third w3-margin-bottom">
                <img src="https://www.mecanicvallee.com/wp-content/uploads/job-manager-uploads/company_logo/2019/06/Image6-7.png" alt="Ratier Figeac" width="300" height="200">
                <div class="w3-container w3-hover-light-gray">
                    <p><b>Collins Aerospace : Ratier Figeac</b></p>
                    <p class="w3-opacity">Juillet 2019 - Août 2019</p>
                    <p>Stage d'initiation. </p>
                    <button class="w3-button w3-flat-midnight-blue w3-margin-bottom" onclick="document.getElementById('see_more1').style.display='block'">See more.</button>
                </div>
            </div>
            <div class="w3-third w3-margin-bottom">
                <img src="https://leancam-engineering.com/wp-content/uploads/2021/05/logo-web-transparent.png" alt="LeanCAM Engineering – Think BIG" width="300" height="200">
                <div class="w3-container w3-hover-light-gray">
                    <p><b>LeanCam Engineering</b></p>
                    <p class="w3-opacity">Juin 2021 - Juillet 2021</p>
                    <p>Stage Technicien. </p>
                    <button class="w3-button w3-flat-midnight-blue w3-margin-bottom" onclick="document.getElementById('see_more2').style.display='block'">See more.</button>
                </div>
            </div>
            <div class="w3-third w3-margin-bottom">
                <img src="https://perform-industrie.com/wp-content/uploads/2019/11/MALICHAUD-1.png" alt="Malichaud Atlantique" width="300" height="200">
                <div class="w3-container  w3-hover-light-gray">
                    <p><b>Malichaud Atlantique</b></p>
                    <p class="w3-opacity">Mai 2022 - Septembre 2022</p>
                    <p>Stage élève Ingénieur. </p>
                    <button class="w3-button w3-flat-midnight-blue w3-margin-bottom" onclick="document.getElementById('see_more3').style.display='block'">See more.</button>
                </div>
            </div>
        </div>
    </div>
</div>

<SeeMore1 />
<SeeMore2 />
<SeeMore3 />