<template>
    <v-app>
        <v-container id="page3">
            <h1 class="under">ideas</h1>
            <v-card
            class="mx-auto"
            max-width="400"
            v-for="(idea, index) in ideas" :key="index"
            >
            <a v-bind:href="idea.url" class="link_unker">
                <v-img
                    class="white--text align-end"
                    height="200px"
                    src="../../public/portfolio_top.png"
                >
                    <v-card-title>{{ idea.title }}</v-card-title>
                </v-img>
            </a>
            <v-card-subtitle class="pb-0">2020/04</v-card-subtitle>
            <v-card-text class="text--primary">
                <div>{{ idea.desc }}</div>
            </v-card-text>
            <v-card-actions>
                <v-icon color="blue">fab fa-twitter</v-icon>
                <v-btn
                color="blue"
                text
                @click="twitterShare(idea)"
                >
                Share
                </v-btn>
            </v-card-actions>
            </v-card>
        </v-container>
    </v-app>
</template>
<script>
    export default {
        data: function () {
            return {
                ideas: [
                    { title: 'ポートフォリオサイト', desc: 'このポートフォリオサイトです', url: 'https://master.d1e2cex8jz38ye.amplifyapp.com/'}
                ]
            }
        },
        methods: {
            twitterShare(idea) {
                let shareURL = 'https://twitter.com/intent/tweet?text=' + idea.title + "%20%23Takahiro's Profile" + '&url=' + idea.url;
                location.href = shareURL
            }
        }
    }
</script>
<style scoped>
    .under {
        border-bottom: solid 3px rgb(235, 168, 209);;
    }
    .link_unker {
        text-decoration: none;
    }
</style>