<template>
	<b-card
		border-variant="danger"
		bg-variant="light"
		text-variant="black"
		:title="title"
    :sub-title="subtitle"
    :img-src="image"
    :img-alt="image.replace(/^.*[\\\/]/, '').split('.')[0]">
  	<p class="card-text" v-text="content" />
	</b-card>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'content', 'image']
}
</script>

<style>

</style>
