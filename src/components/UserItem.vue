<template>
  <q-item class="items-center">
    <q-item-section>
      <q-item-label> {{ props.user.name }} </q-item-label>
      <q-item-label caption lines="2">
        {{ props.user.email + ' | ' + props.user.phoneNumber }}
      </q-item-label>
    </q-item-section>

    <q-item-section side top>
      <q-item-label caption>
        <q-btn
          round
          size="sm"
          color="secondary"
          icon="edit"
          @click="
            updateUserModal = true;
            userStore.selectedUser = props.user;
          "
        />
        <q-btn
          class="q-ml-sm"
          round
          size="sm"
          color="red"
          icon="delete"
          @click="
            userStore.selectedUser = props.user;
            onRemoveUser();
          "
        />
      </q-item-label>
    </q-item-section>
  </q-item>

  <q-dialog v-model="updateUserModal" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Nouvel utilisateur:</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          dense
          v-model="userStore.selectedUser.name"
          autofocus
          placeholder="Nom"
        />
        <q-input
          dense
          v-model="userStore.selectedUser.email"
          autofocus
          placeholder="Email"
        />
        <q-input
          dense
          v-model="userStore.selectedUser.phoneNumber"
          autofocus
          placeholder="Téléphone"
        />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Annuler" v-close-popup />
        <q-btn flat label="Modifier" @click="onUpdateUser" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { useUserStore } from 'src/stores/user-store';
import { onMounted, ref } from 'vue';
import { User } from './models';

const userStore = useUserStore();

const updateUserModal = ref(false);

const props = defineProps<{
  user: User;
}>();

onMounted(() => {
  console.log(props);
});

function onUpdateUser() {
  userStore.updateUser();
}

function onRemoveUser() {
  if (confirm('Etes-vous sûr de vouloir supprimer cet utilisateur ?')) {
    userStore.removeUser();
  }
}
</script>
