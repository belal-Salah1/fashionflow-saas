<script setup lang="ts">
import { Head, useForm } from '@inertiajs/vue3';
import ConfirmablePasswordController from '@/actions/App/Http/Controllers/Auth/ConfirmablePasswordController';
import GuestLayout from '@/layouts/GuestLayout.vue';
import InputError from '@/shared/components/forms/InputError.vue';
import InputLabel from '@/shared/components/forms/InputLabel.vue';
import TextInput from '@/shared/components/forms/TextInput.vue';
import PrimaryButton from '@/shared/components/ui/PrimaryButton.vue';

const form = useForm({
    password: '',
});

const submit = () => {
    form.post(ConfirmablePasswordController.store.url(), {
        onFinish: () => {
            form.reset();
        },
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Confirm Password" />

        <div class="mb-4 text-sm text-gray-600 dark:text-gray-400">
            This is a secure area of the application. Please confirm your
            password before continuing.
        </div>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="password" value="Password" />
                <TextInput
                    id="password"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    required
                    autocomplete="current-password"
                    autofocus
                />
                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="mt-4 flex justify-end">
                <PrimaryButton
                    class="ms-4"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                >
                    Confirm
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template>
