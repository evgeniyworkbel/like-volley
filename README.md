## Стайлгайд

- В проекте используем `FSD` методологию ([ссылка](https://feature-sliced.github.io/documentation/ru/docs/get-started/tutorial))
- Все git ветки, папки и файлы должны именоваться с маленькой буквы и в `kebab-case`

### Next.js
- Для внутренних ссылок внутри приложения используем `<Link />` компонент из next.js, для внешних - нативный `<a />` тег c указанием семантического `rel` аттрибута
Источники:
https://github.com/vercel/next.js/discussions/54095
https://github.com/vercel/next.js/discussions/46511
https://github.com/vercel/next.js/discussions/37597
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel

### React:
- Для написания реакт-компонентов используем слово `function`
- Типы пропсов выносим выше компонента в этот же файле и именуем как "название компонента" + props. Например, компонент называется `NavMenu`, тогда тип пропсов должен называться `NavMenuProps`
- Неймспейс _React._ разрешено использовать только для написания типов. Запрещено для написания логики реакт компонентов

### TypeScript
- Имя объектного типа должно заканчиваться на `Model`, чтобы не было конфликта имен реакт-компонента и типа. Например, тип для описания модели тренера будет именоваться как `CoachModel`

### CSS (+tailwind):
- Если нужно добавить в проекте новый класснейм-пропс, к примеру `wrapperClassName`, то нужно также зайти в prettier конфиг и добавить в массив `tailwindAttributes`, чтобы свойства в этом пропсе могли сортироваться. В 95% случаев можно обойтись обычным `className`


## Процессы
- работать не через форк, а склонировать репозиторий, отводить фиче-ветку от main ветки и открывать пулл-реквест с этой ветки

### До деплоя
- если был изменен конфиг cms или связанные с ним файлы, то следует периодически перезапускать скрипт `generate:importmap`. Также в конце работы над фичей следует запустить скрипт `migrate:create` (чтобы создать миграции)

### Деплой:
- конфигурация вдохновлена https://github.com/vercel/next.js/tree/canary/examples/with-docker, https://github.com/leerob/next-self-host и https://www.youtube.com/watch?v=_uZQtRyF6Eg&t=3234s
- для запуска контейнеров набери `docker compose up --build -d`