<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<svelte:head>
    <title>Chaimaa DARKAOUI</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
    <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-colors-flat.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
</svelte:head>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
 <!-- Footer -->
   
	<footer class="w3-container w3-padding-16 w3-center w3-opacity-min w3-flat-midnight-blue w3-medium">
			<i class="fa fa-facebook-official w3-hover-opacity"></i>
			<i class="fa fa-instagram w3-hover-opacity"></i>
			<i class="fa fa-snapchat w3-hover-opacity"></i>
			<i class="fa fa-pinterest-p w3-hover-opacity"></i>
			<i class="fa fa-twitter w3-hover-opacity"></i>
			<i class="fa fa-linkedin w3-hover-opacity"></i>
			<p class="w3-medium">Powered by Chaimaa DARKAOUI </p>
	</footer>
</div>

<style>
</style>
