<template>
    <q-layout>
        <q-page-container class="bg-primary window-height window-width column justify-center items-center">
            <h1 class="gt-xs text-h2 text-white text-weight-medium q-pb-lg">{{appName}}</h1>
            <div class="column">
                <div class="row">
                    <h5 class="text-h5 text-white q-my-md">登录</h5>
                </div>
                <div class="row">
                    <q-card square class="q-pa-lg shadow-1" style="width: 360px;">
                        <q-form @submit="login">
                            <q-card-section class="q-gutter-md">
                                <q-input
                                    v-model="account"
                                    label="账号"
                                    square filled
                                    clearable
                                    lazy-rules
                                    :rules="[v=>v&&v.length>0||'请输入账号']"
                                />
                                <q-input
                                    v-model="password"
                                    label="密码"
                                    square filled
                                    clearable
                                    type="password"
                                    lazy-rules
                                    :rules="[v=>v&&v.length>0||'请输入账号',v => v.length>=6||'密码至少6位']"
                                />
                            </q-card-section>

                            <q-card-actions class="q-px-md">
                                <q-btn unelevated :loading="logging" type="submit" color="primary" size="lg" class="full-width" label="登录"/>
                            </q-card-actions>
                        </q-form>
                    </q-card>
                </div>
            </div>
            <p class="text-white font-weight-light text-center q-pt-md">
                Copyright ©{{fullYear}} 深圳银泰保理有限公司 版权所有
            </p>
        </q-page-container>
    </q-layout>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            account: '',
            password: '',
            logging: false,
        }
    },
    computed: {
        appName: () => process.env.VUE_APP_TITLE,
        fullYear: () => new Date().getFullYear(),
    },
    methods: {
        login() {
            console.log(1);
        },
    },
}
</script>
