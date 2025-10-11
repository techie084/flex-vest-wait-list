<script>
	import { toast } from 'svoast';

	let name = $state('');
	let email = $state('');
	let loading = $state(false);

	const handleFormSubmit = async () => {
		loading = true;
		try {
			const res = await fetch('/api/waitlist', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email })
			});

			const data = await res.json();

			if (res.ok) {
				toast.success('Successfully joined the waitlist!');
			} else {
				const errorData = await res.json();
				toast.error(`Error: ${errorData.message || 'Failed to join the waitlist.'}`);
			}
		} catch (error) {
			const errorMessage =
				typeof error === 'object' && error !== null && 'message' in error
					? error.message
					: undefined;
			toast.error(`Error: ${errorMessage || 'An unexpected error occurred.'}`);
		} finally {
			loading = false;
		}
	};
</script>

<header class="max-w-8xl mx-auto flex items-center justify-between px-6 py-6 md:justify-center">
	<div class="flex items-center bg-black p-2">
		<span class="text-xs font-semibold tracking-wide text-shadow-gray-600 sm:text-xl"
			>Flex-Vest <span class="text-green-600">| Save in stable coins</span></span
		>
	</div>
</header>

<!-- Main Components -->
<main
	class="max-w-8xl jus mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 md:justify-center"
>
	<!-- text container -->
	<section class="max-w-full px-4 md:px-1">
		<h1
			class="w-full bg-gradient-to-r from-gray-300 to-green-600 bg-clip-text text-[2.88rem] leading-tight font-extrabold text-transparent drop-shadow-md sm:text-5xl"
		>
			Join the waitlist
		</h1>

		<p class="mt-6 max-w-full text-lg text-slate-300">
			Get early access to our platform and beat inflation by saving in stable coins
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
					<div class="text-sm text-slate-200">Gain early access</div>
					<div class="text-sm text-slate-200">Join thousands of People</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Form Section -->
	<div class="glass flex w-full max-w-md justify-center rounded-2xl p-8 shadow-2xl">
		<!-- svelte-ignore event_directive_deprecated -->
		<form
			id="waitlistForm"
			class="flex w-full flex-col gap-3 space-y-4"
			on:submit|preventDefault={handleFormSubmit}
		>
			<div>
				<div class="flex items-center rounded-lg bg-black/40 px-3 py-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-user-icon lucide-user"
						><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle
							cx="12"
							cy="7"
							r="4"
						/></svg
					>
					<input
						bind:value={name}
						{name}
						type="name"
						required
						class="ml-3 w-full border-none bg-transparent outline-none"
						placeholder="Full name"
					/>
				</div>
			</div>

			<div>
				<div class="flex items-center rounded-lg bg-black/40 px-3 py-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-mail-icon lucide-mail"
						><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect
							x="2"
							y="4"
							width="20"
							height="16"
							rx="2"
						/></svg
					>
					<input
						bind:value={email}
						name={email}
						type="email"
						required
						class="ml-3 w-full border-none bg-transparent outline-none"
						placeholder="Email address"
					/>
				</div>
			</div>

			<div>
				<button
					type="submit"
					class="inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-green-400 to-green-500 py-3 font-semibold text-black transition hover:from-green-500 hover:to-green-900"
				>
					{loading ? 'Joining...' : 'Join the waitlist'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M17 8l4 4m0 0l-4 4m4-4H3"
						/></svg
					>
				</button>
			</div>
		</form>
	</div>
</main>
