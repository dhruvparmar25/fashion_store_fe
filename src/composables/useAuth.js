import { ref, watchEffect } from "vue";
import { useRouter } from "vue-router";

export function useAuth() {
  const router = useRouter();
  const isLoggedIn = ref(!!localStorage.getItem("token"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    isLoggedIn.value = false;
    router.push("/login");
  };

  watchEffect(() => {
    isLoggedIn.value = !!localStorage.getItem("token");
  });

  return { isLoggedIn, logout };
}
