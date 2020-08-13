<template>
    <q-layout view="hhh LpR lff">
        <q-header elevated class="bg-primary text-white" height-hint="98">
            <q-toolbar>
                <q-btn flat round icon="mdi-menu" @click="left = !left"/>
                <q-toolbar-title>
                    <q-avatar>
                        <img src="../../../assets/logo_white.png" alt="logo">
                    </q-avatar>
                    {{appName}}
                </q-toolbar-title>
            </q-toolbar>

            <!--            <q-tabs align="left">-->
            <!--                <q-route-tab to="/page1" label="Page One"/>-->
            <!--                <q-route-tab to="/page2" label="Page Two"/>-->
            <!--                <q-route-tab to="/page3" label="Page Three"/>-->
            <!--            </q-tabs>-->
        </q-header>

        <q-drawer show-if-above v-model="left" :mini="$q.screen.md" side="left" bordered content-class="bg-primary text-white">
            <div class="lt-md q-pa-sm">
                <img style="width: 100%;" src="../../../assets/logo_title.png" alt="logo">
            </div>

            <q-separator class="lt-md" color="white"/>

            <q-list padding class="rounded-borders">
                <template v-for="(menu,i) in menus">
                    <q-item clickable v-ripple :key="i" :active="$route.path===menu.to" active-class="bg-secondary">
                        <q-item-section avatar>
                            <q-icon :name="menu.icon"/>
                        </q-item-section>
                        <q-item-section>{{menu.name}}</q-item-section>
                    </q-item>

                    <q-separator v-if="menu.separate&&i!==menus.length-1" :key="'s'+i" color="white" spaced/>
                </template>
            </q-list>
        </q-drawer>

        <q-page-container>
            <!--            <router-view/>-->
            <div style="width: 100%;height: 500px;"></div>
            <div style="width: 100%;height: 500px;"></div>
            <div style="width: 100%;height: 500px;"></div>
            <div style="width: 100%;height: 500px;"></div>
            <div style="width: 100%;height: 500px;"></div>
            <div style="width: 100%;height: 500px;"></div>
        </q-page-container>

        <q-footer bordered>
            <q-toolbar>
                <a href="/">首页</a>
                <q-space/>
                <div class="text-white text-center">
                    Copyright ©{{fullYear}} 深圳银泰保理有限公司 版权所有
                </div>
            </q-toolbar>
        </q-footer>

    </q-layout>
</template>

<script>
export default {
    data: () => ({
        left: false,
        menus: [
            {
                name: '首页',
                icon: 'mdi-view-dashboard',
                to: '/',
            },
            {
                name: '用户管理',
                icon: 'mdi-account',
                to: {},
            },
            {
                name: '企业管理',
                icon: 'mdi-domain',
                to: {},
            },
            {
                name: '角色管理',
                icon: 'mdi-card-account-details',
                to: {},
                separate: true,
            },
            {
                name: '菜单管理',
                icon: 'mdi-menu-open',
                to: {},
                separate: true,
            },

        ],
    }),
    computed: {
        appName: () => process.env.VUE_APP_TITLE,
        fullYear: () => new Date().getFullYear(),
    },
    created() {
        console.log(this.$q.screen);
    },
};
</script>
