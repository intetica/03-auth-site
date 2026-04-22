# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Описание проекта

Это учебный проект из трека `~/claude-journey/`. Цель — сделать сайт с авторизацией через Supabase. Целевая аудитория — индивидуальные пользователи, которые регистрируются и попадают в личный кабинет.

## Стек

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind**
- **Supabase** (база + Auth)
- **Vercel** (деплой)

## Команды

```bash
npm run dev     # dev-сервер Next.js (порт 3000; если занят — 3001/3002/…)
npm run build   # production build
npm run start   # запустить production build (после build)
npm run lint    # next lint (ESLint + eslint-config-next)
```

## Правила

### Архитектура
- По умолчанию — **Server Components**. Клиентский компонент только когда нужна интерактивность.
- Формы — через **Server Actions**, без отдельных API-роутов на CRUD.
- Авторизация — **только Supabase Auth**. Свой JWT/куки/пароли не катим.

### Стиль
- Стили — **только Tailwind**. Без CSS-модулей, styled-components, inline-стилей.
- Иконки — **`lucide-react`**.

### Данные
- Supabase вызываем **через хелперы в `lib/supabase/`** (клиент для браузера, клиент для сервера). Прямые `createClient` по компонентам запрещены.

### Работа с кодом
- Не переписывать работающее без просьбы.
- Минимальные изменения — только то, что нужно для задачи.
- **Никаких комментариев в коде** без явной просьбы.

## Принципы

1. **Минимальность** — каждое изменение максимально простое.
2. **Корень проблемы** — не лечим симптом.
3. **Не трогай лишнего** — меняем только нужное для задачи.
