<template>
  <div>
    <h4>Voici la liste des utilisateurs</h4>
    <div>
      <q-list bordered separator>
        <UserItem :user="user" v-for="user in userStore.users" :key="user.id" />
      </q-list>
    </div>
    <q-btn
      style="position: absolute; bottom: 50px; right: 50px"
      round
      size="lg"
      color="primary"
      icon="add"
      @click="addNewUser = true"
    />
  </div>

  <q-dialog v-model="addNewUser" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Nouvel utilisateur:</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input dense v-model="newUser.name" autofocus placeholder="Nom" />
        <q-input dense v-model="newUser.email" autofocus placeholder="Email" />
        <q-input
          dense
          v-model="newUser.phoneNumber"
          autofocus
          placeholder="Téléphone"
        />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Annuler" v-close-popup />
        <q-btn flat label="Ajouter" @click="onAddNewUser" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import UserItem from './UserItem.vue';
import { onMounted, ref } from 'vue';
import { useUserStore } from 'src/stores/user-store';
import { User } from './models';

const addNewUser = ref(false);
const newUser = ref({} as User);

const userStore = useUserStore();

onMounted(() => {
  userStore.getAllUsers();
});

function onAddNewUser() {
  userStore.addUser(newUser.value);
  newUser.value = {} as User;
}
</script>
