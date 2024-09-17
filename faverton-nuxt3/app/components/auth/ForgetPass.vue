<script setup lang="ts">
import type { FormError, FormErrorEvent, FormSubmitEvent } from "#ui/types";

const register = `./register`;

const state = reactive({
  email: undefined,
  password: undefined,
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ path: `email`, message: `Required` });
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

const openRegister = ref(false);
</script>

<template>
  <div>
    <UModal v-model="modelValue">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <!-- <Placeholder class="h-8" /> -->
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="modelValue = false"
          />
        </template>

        <!-- <Placeholder class="h-32" /> -->
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
          <div class="flex justify-end">
            <UButton type="submit">
              Submit
            </UButton>
          </div>
        </UForm>
        <template #footer>
          <!-- <Placeholder class="h-8" /> -->
          <div class="h-8">
            <div class="flex justify-center">
              <UButton
                color="blue"
                variant="link"
                label="Crée un compte si vous n'en avez pas!"
                @click="openRegister = true"
              />
            </div>
            <AuthentificationRegister v-model="openRegister" />
          </div>
        </template>
      </UCard>
    </UModal>
  </div>
</template>
