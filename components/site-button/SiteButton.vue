<template>
	<NuxtLink
		class="site-button-main"
		:class="classes"
		:to="to">
		<slot />
	</NuxtLink>
</template>

<script setup>
	import './style.scss';

	const props = defineProps({
		to: {
			type: String,
			required: true,
		},
		variant: {
			type: String,
			required: false,
			default: '1',
		},
	});

	const { to } = props;

	const classes = computed(() => {
		const styles = [];

		switch (props.variant) {
			case '1':
				styles.push('primary');
				break;
			case '2':
				styles.push('secondary');
				break;
			default:
				styles.push('primary');
				break;
		}

		return styles;
	});
</script>
