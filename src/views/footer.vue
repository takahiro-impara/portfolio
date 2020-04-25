<template>
    <v-card height="150" id="Footer">
    <v-footer
        absolute
        class="font-weight-medium"
    >
        <v-col
        class="text-center"
        cols="12"
        >
        {{ new Date().getFullYear() }} — <strong>Takahiro Koichi</strong>
        </v-col>
    </v-footer>
    </v-card>
</template>