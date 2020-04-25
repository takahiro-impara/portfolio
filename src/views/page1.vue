<template>
    <v-app>
        <v-container id="page1">
            <h1 class="under">Profile</h1>
                <div class="col-xs-12">
                    <div v-for="(profile, index) in profiles" :key=index>
                        <p><v-icon>{{ profile.icon }}</v-icon> {{ profile.title }}</p>
                        <p v-if="profile.link"><a v-bind:href="profile.link">{{ profile.text }}</a></p>
                        <p v-else>{{ profile.text }}</p>
                        <br>
                    </div>
                </div>
        </v-container>
    </v-app>
</template>
<script>
export default {
    data: function () {
        return {
            profiles: [
                { title: 'Name', text: '小市 貴大(Takahiro Koichi)', icon: 'mdi-account-box'},
                { title: 'Job', text: '2015年入社。某通信企業でクラウドエンジニアとして従事', icon: 'mdi-desktop-classic'},
                { title: 'GitHub', text: 'takahiro-impara', icon: 'mdi-github', link: 'https://github.com/takahiro-impara'},
                { title: 'linkedin', text: 'takahiro-impara', icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/takahiro-koichi-7b41679a/'},
        ]
        }
    }
}
</script>>
<style scoped>
    .profile-table {
        float: center;
    }
    .profile-block {
        margin: 10%
    }
    .under {
        border-bottom: solid 3px rgb(62, 166, 207);;
    }
</style>