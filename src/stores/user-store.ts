import { defineStore } from 'pinia';
import { User } from 'src/components/models';

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as User[],
    selectedUser: {} as User,
  }),
  getters: {
    getSelectedUser: (state) => state.selectedUser,
  },
  actions: {
    addUser(user: User) {
      user.id = this.users[this.users.length - 1].id++;
      this.users.push(user);
    },
    getAllUsers() {
      this.users = [
        {
          id: 1,
          name: 'RAKOTO Toky',
          email: 'tokiarimiora@gmail.com',
          phoneNumber: '+261343385809',
        },
        {
          id: 2,
          name: 'RABE Nomena',
          email: 'tokiarimiora@gmail.com',
          phoneNumber: '+261343385809',
        },
        {
          id: 3,
          name: 'RASOA Faniry',
          email: 'tokiarimiora@gmail.com',
          phoneNumber: '+261343385809',
        },
        {
          id: 4,
          name: 'RAVAOMARIA Jean',
          email: 'tokiarimiora@gmail.com',
          phoneNumber: '+261343385809',
        },
        {
          id: 5,
          name: 'RASOLONJATOVO eRIC',
          email: 'tokiarimiora@gmail.com',
          phoneNumber: '+261343385809',
        },
      ];
    },
    removeUser() {
      this.users.splice(
        this.users.findIndex((u) => u.id === this.selectedUser.id),
        1
      );
    },
    updateUser() {
      this.users[this.users.findIndex((u) => u.id === this.selectedUser.id)] =
        this.selectedUser;
    },
  },
});
