<script>
    import { onMount } from 'svelte'
    import { supabase } from '$lib/supabaseClient'

    let name = ''
    let email = ''
    let message = ''
    let contactHow = null

    let contactHows = []
	onMount(async () => {
		const { data, error } = await supabase
			.from('contact_how')
			.select('text, contact_how_id')

		contactHows = data

        console.log(contactHows)

	})

    const handleClick = async () => {
        console.log("contactHow", contactHow)
		const { data, error } = await supabase
            .from('contact_form')
            .insert([
                { name: name, email: email , message: message, contact_how_id: contactHow   },
            ])
        console.log("error", error)
        console.log("data", data)
    }
</script>

<svelte:head>
	<title>Contact Me</title>
</svelte:head>


<!-- The Contact Section -->
        <div class="w3-container w3-content w3-padding-64" style="max-width:800px" id="contact">
            <h2 class="w3-wide w3-center">CONTACT</h2>
            <p class="w3-opacity w3-center"><i>Fan? Drop a note or know more about me!</i></p>
            <div class="w3-row w3-padding-32">
                <div class="w3-col m6 w3-large w3-margin-bottom">
                    <i class="fa fa-map-marker" style="width:30px"></i> LA Rochelle, FR<br>
                    <i class="fa fa-phone" style="width:30px"></i> Phone: +33 766 341 902 <br>
                    <i class="fa fa-envelope" style="width:30px"> </i> Email: chaimaadarkaoui11@mail.com<br>
                    <p></p>
                    <i style="width:30px"> </i> How did you find me ? <br>
                </div>
                <div class="w3-col m6">
                    <form>
                        <div class="w3-row-padding" style="margin:0 -16px 8px -16px">
                            <div class="w3-half">
                                <input bind:value={name} class="w3-input w3-border" type="text" placeholder="Name" required name="Name">
                            </div>
                            <div class="w3-half">
                                <input bind:value={email} class="w3-input w3-border" type="text" placeholder="Email" required name="Email">
                            </div>
                        </div>
                        <input bind:value={message} class="w3-input w3-border" type="text" placeholder="Message" required name="Message">
                        <select bind:value={contactHow} class="w3-input w3-border" style="margin:10px 0">
                            {#each contactHows as { text, contact_how_id }}
                                <option value={contact_how_id}>
                                    {text} 
                                </option>
                            {/each}
                        </select>
                        <button class="w3-button w3-flat-midnight-blue w3-section w3-right" type="submit" on:click={handleClick}>SEND</button>
                    </form>
                </div>
            </div>
        </div>

        <!-- End Page Content -->
