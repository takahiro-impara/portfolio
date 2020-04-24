<template>
    <v-app>
        <v-container id="page2">
            <h1 class="under">Skills</h1>
        </v-container>
        <v-container>
            <v-card class="mt-2 mb-2 pa-4">
                <v-layout row wrap>
                    <v-flex xs4 v-for="(skill, index) in skills" :key="index">
                        <v-card class="grey lighten-3 ma-2">
                            <v-card-title><v-icon>{{ skill.icon }}</v-icon>{{ skill.title }}</v-card-title>
                            <v-card-text>{{ skill.desc }}</v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-container>
    </v-app>
</template>
<script>
export default {
    data: function() {
        return {
            skills: [
                { title: 'Python', icon: 'mdi-language-python', 'desc': '自動化ツールの開発'},
                { title: 'Github', icon: 'mdi-github', 'desc': '中規模開発での使用経験'},
                { title: 'CloudOperation', icon: 'mdi-cloud-outline', 'desc': '7000台規模のインフラ運用'},
                { title: 'Storage', icon: 'mdi-database', 'desc': 'EMC/PureStorageの設計'},
                { title: 'Network', icon: 'mdi-lan', 'desc': '大規模L2網の設計'},
                { title: 'Server', icon: 'mdi-server', 'desc': 'Quanta社製品のHW設計'},
                { title: 'AI/ML', icon: 'mdi-brain', 'desc': 'SKlearnを用いたHW故障検知基盤の開発'},
                { title: 'AWS', icon: 'mdi-aws', 'desc': '2020/03 SAP取得'},                
            ]
        }
    }
}
</script>
<style scoped>
    .under {
        border-bottom: solid 3px rgb(161, 235, 219);;
    }
</style>