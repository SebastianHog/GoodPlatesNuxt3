import { jwtDecode } from "jwt-decode";
import { defineStore } from "pinia";
import type { IUser } from "~/types/user";
import { useCookie } from "#app";
import { useRouter } from "vue-router";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {} as IUser | null,
    token: useCookie("login_token").value || ("" as string),
  }),

  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token,
  },

  actions: {
    async login(email: string, password: string) {
      const config = useRuntimeConfig();
      const base_url = config.public.BASE_URL;
      interface resp {
        user: IUser;
        token: string;
      }

      try {
        const resp = await $fetch<resp>(`${base_url}/login`, {
          method: "POST",
          body: {
            email,
            password,
          },
          credentials: "include",
        });

        this.user = resp.user;
        this.token = resp.token;
        await navigateTo("/");
      } catch (err: any) {
        throw new Error(err.message || "Login failed");
      }
    },

    async getCurrentUserData() {
      const config = useRuntimeConfig();
      const base_url = config.public.BASE_URL;

      try {
        const currentId = jwtDecode<{ id: string }>(this.token).id;

        const resp = await $fetch<IUser>(`${base_url}/user/${currentId}`);
        return resp;
      } catch (error) {
        console.error("Failed getting current user data");
      }
    },

    async logout() {
      const config = useRuntimeConfig();
      const base_url = config.public.BASE_URL;
      interface resp {
        user: IUser;
        token: string;
      }

      const resp = await $fetch<resp>(`${base_url}/logout`, {
        method: "POST",
        credentials: "include",
      });
      await navigateTo("/");
      window.location.reload();
    },
  },
});
