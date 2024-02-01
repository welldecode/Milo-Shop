<script setup>
import Checkbox from '@/Components/Checkbox.vue';
import GuestLayout from '@/Layout/AppLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <GuestLayout>

        <Head title="Log in" />
        <div class="max-w-5xl   mx-auto mt-24">
            <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
                {{ status }}
            </div>
            <div class="bg-white p-10 rounded-md shadow-md mb-20">
                <div class="mx-auto col-lg-6">
                    <h1 class="text-center mb-11 font-bold">Login</h1>
                    <div class="flex justify-center items-center flex-wrap !gap-4 text-[13px] -tracking-[0.15px] mb-10">
                        <Link :href="route('login.google')"
                            class="flex items-center w-[calc(50%-0.5rem)] grow !py-3 !px-4  border border-solid border-slate-200 rounded-[10px] !no-underline text-base transition-all hover:shadow-lg hover:-translate-y-1">
                            <svg class="shrink-0 !me-2" width="22" height="22" viewBox="0 0 25 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M23.001 12.2332C23.001 11.3699 22.9296 10.7399 22.7748 10.0865H12.7153V13.9832H18.62C18.501 14.9515 17.8582 16.4099 16.4296 17.3898L16.4096 17.5203L19.5902 19.935L19.8106 19.9565C21.8343 18.1249 23.001 15.4298 23.001 12.2332Z"
                                    fill="#4285F4" />
                                <path
                                    d="M12.714 22.5C15.6068 22.5 18.0353 21.5666 19.8092 19.9567L16.4282 17.3899C15.5235 18.0083 14.3092 18.4399 12.714 18.4399C9.88069 18.4399 7.47596 16.6083 6.61874 14.0766L6.49309 14.0871L3.18583 16.5954L3.14258 16.7132C4.90446 20.1433 8.5235 22.5 12.714 22.5Z"
                                    fill="#34A853" />
                                <path
                                    d="M6.62046 14.0767C6.39428 13.4234 6.26337 12.7233 6.26337 12C6.26337 11.2767 6.39428 10.5767 6.60856 9.92337L6.60257 9.78423L3.25386 7.2356L3.14429 7.28667C2.41814 8.71002 2.00146 10.3084 2.00146 12C2.00146 13.6917 2.41814 15.29 3.14429 16.7133L6.62046 14.0767Z"
                                    fill="#FBBC05" />
                                <path
                                    d="M12.7141 5.55997C14.7259 5.55997 16.083 6.41163 16.8569 7.12335L19.8807 4.23C18.0236 2.53834 15.6069 1.5 12.7141 1.5C8.52353 1.5 4.90447 3.85665 3.14258 7.28662L6.60686 9.92332C7.47598 7.39166 9.88073 5.55997 12.7141 5.55997Z"
                                    fill="#EB4335" />
                            </svg>
                            Entrar com o Google
                        </Link>
                        <Link href="#"
                            class="flex items-center w-[calc(50%-0.5rem)] grow !py-3 !px-4 border border-solid border-slate-200 rounded-[10px] !no-underline text-base transition-all  hover:shadow-lg hover:-translate-y-1">
                            <svg class="shrink-0 !me-2" width="22" height="22" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24 12C24 5.3726 18.6274 2.65179e-05 12 2.65179e-05C5.37258 2.65179e-05 0 5.3726 0 12C0 17.9896 4.38823 22.954 10.125 23.8542V15.4688H7.07813V12H10.125V9.35628C10.125 6.34878 11.9165 4.68753 14.6576 4.68753C15.9705 4.68753 17.3438 4.9219 17.3438 4.9219V7.87503H15.8306C14.3399 7.87503 13.875 8.80003 13.875 9.74902V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9896 24 12Z"
                                    fill="#1877F2" />
                                <path
                                    d="M16.6711 15.4687L17.2031 12H13.875V9.74899C13.875 8.80001 14.3399 7.875 15.8306 7.875H17.3438V4.92187C17.3438 4.92187 15.9705 4.6875 14.6576 4.6875C11.9165 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4687H10.125V23.8542C10.7359 23.9501 11.3621 24 12 24C12.6379 24 13.2641 23.9501 13.875 23.8542V15.4687H16.6711Z"
                                    fill="white" />
                            </svg>
                            Entrar com o Facebook
                        </Link>
                    </div>
                </div>
                <form @submit.prevent="submit">
                    <div>
                        <InputLabel for="email" value="Email" />

                        <TextInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autofocus
                            autocomplete="username" />

                        <InputError class="mt-2" :message="form.errors.email" />
                    </div>

                    <div class="mt-4">
                        <InputLabel for="password" value="Senha" />

                        <TextInput id="password" type="password" class="mt-1 block w-full" v-model="form.password" required
                            autocomplete="current-password" />

                        <InputError class="mt-2" :message="form.errors.password" />
                    </div>

                    <div class="block mt-4">
                        <label class="flex items-center">
                            <Checkbox name="remember" v-model:checked="form.remember" />
                            <span class="ml-2 text-sm text-gray-600">Lembrar-me</span>
                        </label>
                    </div>

                    <div class="flex items-center justify-end mt-4">
                        <Link v-if="canResetPassword" :href="route('password.request')"
                            class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Esqueceu sua senha?
                        </Link>

                        <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            Entrar
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    </GuestLayout>
</template>
