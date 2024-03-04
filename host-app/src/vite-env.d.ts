/// <reference types="vite/client" />

declare module './router' {
  import { Router } from 'vue-router';
  const router: Router;
  export default router;
}

declare module "usersApp/*"{}