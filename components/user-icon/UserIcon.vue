<template>
	<p style="color: black">user: {{ props.username }}</p>
</template>

<script lang="ts" setup>
import './style.scss';
import coredata from '~/data/core.json';
import type { IUser } from '~/types/user';



const props = defineProps<IUser>();

</script>
