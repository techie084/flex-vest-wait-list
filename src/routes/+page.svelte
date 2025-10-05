<script>
	import Form from '$lib/components/form.svelte';
	// import NotificationModal from '$lib/components/notification-modal.svelte';
</script>

<header class="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:justify-center">
	<div class="flex items-center bg-black p-2">
		<span class="text-xs font-semibold tracking-wide text-shadow-gray-600 sm:text-xl"
			>Flex-Vest <span class="text-green-600">| Sell Global</span></span
		>
	</div>
</header>

<!-- <NotificationModal /> -->

<!-- Main Components -->
<main class=" mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10">
	<!-- text container -->
	<section class="max-w-full px-4 md:px-1">
		<h1 class="w-full text-5xl leading-tight font-extrabold text-wrap drop-shadow-md sm:text-5xl">
			Join the waitlist today <br />
			<span class="bg-gradient-to-r from-gray-300 to-green-600 bg-clip-text text-transparent"
				>to Showcase your Global Talent</span
			>
		</h1>

		<p class="mt-6 max-w-full text-lg text-slate-300">
			Get early access to our platform and connect with clients worldwide who are looking for your
			unique skills and talents.
		</p>

		<!-- optional small badge/avatar floating -->
		<div class="mt-5 items-center gap-3 md:flex">
			<div class="flex items-center gap-3">
				<img
					src="/avatar-1.webp"
					alt="avatar"
					class="h-12 w-12 rounded-full border-2 border-green-600 shadow-lg"
				/>
				<div>
					<div class="text-sm text-slate-200">Gain early access and</div>
					<div class="text-sm text-slate-200">Join thousands of creators</div>
				</div>
			</div>
		</div>
	</section>

	<!-- form section -->
	<Form />
</main>

<!-- floating memoji top-right -->
<!-- <div class="fixed top-24 right-6 hidden md:block">
	<div class="relative">
		<img
			src="/avatar-1.webp"
			alt="memoji"
			class="h-20 w-20 rounded-full border-4 border-slate-900 shadow-2xl"
		/>
		<div
			class="absolute -right-2 -bottom-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-black bg-green-600 text-xs font-semibold"
		>
			✓
		</div>
	</div>
</div> -->
