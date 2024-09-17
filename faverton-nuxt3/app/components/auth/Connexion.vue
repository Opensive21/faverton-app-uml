<script setup lang="ts">
import type { FormError, FormErrorEvent, FormSubmitEvent } from "#ui/types";

const state = reactive({
  email: undefined,
  password: undefined,
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ path: `email`, message: `Required` });
  if (!state.password) errors.push({ path: `password`, message: `Required` });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data);
}

async function onError(event: FormErrorEvent) {
  const element = document.getElementById(event.errors[0].id);
  element?.focus();
  element?.scrollIntoView({ behavior: `smooth`, block: `center` });
}

const modelValue = defineModel<boolean>({ required: true });

const openForgetPass = ref(false);
</script>

<template>
  <div>
    <UModal v-model="modelValue">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="modelValue = false"
          />
        </template>

        <UForm
          :validate="validate"
          :state="state"
          class="space-y-4 h-42"
          @submit="onSubmit"
          @error="onError"
        >
          <UFormGroup
            label="Email"
            name="email"
          >
            <UInput v-model="state.email" />
          </UFormGroup>
          <UFormGroup
            label="Password"
            name="password"
          >
            <UInput
              v-model="state.password"
              type="password"
            />
          </UFormGroup>
          <div class="flex justify-end">
            <UButton type="submit">
              Submit
            </UButton>
          </div>
        </UForm>

        <template #footer>
          <div>
            <div class="flex justify-center">
              <UButton
                color="blue"
                variant="link"
                label="Réinitialiser le mot de passe"
                @click="openForgetPass = true"
              />
            </div>
            <AuthentificationForgetPass v-model="openForgetPass" />
          </div>
        </template>
      </UCard>
    </UModal>
  </div>
</template>
