<template>
    <q-layout view="lHh LpR lff">

        <q-header elevated class="bg-primary text-white" height-hint="98">
            <q-toolbar>
                <q-btn dense flat round icon="mdi-menu" @click="left = !left"/>

                <q-toolbar-title>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
                    </q-avatar>
                    Title
                </q-toolbar-title>
            </q-toolbar>

            <q-tabs align="left">
                <q-route-tab to="/page1" label="Page One"/>
                <q-route-tab to="/page2" label="Page Two"/>
                <q-route-tab to="/page3" label="Page Three"/>
            </q-tabs>
        </q-header>

        <q-drawer show-if-above v-model="left" side="left" bordered>
            <!-- drawer content -->
        </q-drawer>

        <q-page-container>
            <router-view/>
        </q-page-container>

        <q-footer bordered class="bg-grey-8 text-white">
            <q-toolbar>
                <q-toolbar-title>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
                    </q-avatar>
                    Title
                </q-toolbar-title>
            </q-toolbar>
        </q-footer>

    </q-layout>
</template>

<script>
export default {
    data() {
        return {
            left: false,
        };
    },
};
</script>

<style lang="scss">

</style>
