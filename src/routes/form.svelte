<script lang="ts">
	let name: string = '';
	let email: string = '';
	let message: string = '';

	const jonWaitlist = async () => {
		try {
			const res = await fetch('/api/waitlist', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email })
			});

			const data = await res.json();
			message = data.message || data.error;
		} catch (error) {
			message = 'Something went wrong, please try again!';
		}
	};
</script>

<div class="glass flex w-full max-w-md justify-center rounded-2xl p-8 shadow-2xl">
	<form
		id="waitlistForm"
		class="flex w-full flex-col gap-3 space-y-4"
		on:submit|preventDefault={jonWaitlist}
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
					{name}
					type="text"
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
				class="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-green-400 to-green-500 py-3 font-semibold text-black transition hover:from-green-500 hover:to-green-900"
			>
				<span>Join the waitlist</span>
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
	<p class="mt-3 text-sm text-gray-600">
		{message}
	</p>
	<!-- {#if data.success}
		<p>{data.message}</p>
	{/if} -->
</div>
