<template>
    <v-card>
        {{ skill.title }}
    </v-card>
</template>
<script>
export default {
    props: {
        article: {
            type: Object,
            required: true
        }
    }
}
</script>