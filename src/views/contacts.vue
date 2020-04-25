<template>
    <v-app>
        <v-container id="page4">
            <h1 class="under">contacts</h1>
            <v-layout wrap >
                <v-flex xs12 sm3 md4 text-center 
                v-for="(contact, index) in contacts" :key="index">
                    <a :href="contact.link"
                        class="link_unker"
                        @hover="setHoverAction(contact)"
                    ><v-icon>{{ contact.img_link }}</v-icon></a>
                    <p>{{ contact.title }}</p>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>
<script>
export default {
    data: function() {
        return {
            contacts: [
                { title: 'gmail', link: 'mailto:takahiro4120@gmail.com', img_link: 'fas fa-envelope'},
                { title: 'github', link: 'https://github.com/takahiro-impara', img_link: 'fab fa-github'},
                { title: 'twitter', link: 'https://twitter.com/paramim999', img_link: 'fab fa-twitter'},
                { title: 'linkedin', link: 'https://www.linkedin.com/in/takahiro-koichi-7b41679a/', img_link: 'fab fa-linkedin'},
            ]
        }
    },
    methods: {
        setHoverAction: function(contact) {
            contact['inline'] = 'none;'
        }
    }
}
</script>
<style scoped>
    .img-container {
        width: 100px;
        height: 50px;
    }
    .under {
        border-bottom: solid 3px rgb(247, 248, 153);;
    }
    .link_unker {
        text-decoration: none;
    }
</style>
