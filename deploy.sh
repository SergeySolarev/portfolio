#!/usr/bin/env bash
# Выкладка сайта на хостинг reg.ru (алиас solarev-reg описан в ~/.ssh/config).
# Использование: ./deploy.sh        — выложить
#                ./deploy.sh -n     — показать, что изменится (dry run)
set -euo pipefail
cd "$(dirname "$0")"

rsync -avz --delete "$@" \
  --include='index.html' \
  --include='style.css' \
  --include='script.js' \
  --include='assets/' --include='assets/***' \
  --exclude='*' \
  ./ solarev-reg:www/solarev.ru/
