## Важно - для того, чтобы модули инициализировались внутри host-app их нужно предварительно сбилдить и запустить через serve

Чтобы сбилдить проект:
1. pnpm run install
2. pnpm run restart

Чтобы запустить host в dev-mode:
- pnpm run dev:hosts

Чтобы сбилдить и отдельно запустить модули:
1. pnpm run build:remotes
2. pnpm run serve:remotes