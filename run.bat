@echo off
echo ============================
echo Tailwind + SCSS Compiler
echo ============================

:: Tailwind watching
start cmd /k "npx tailwindcss -i ./src/tailwind/tailwind-input.css -o ./css/tailwind.css --watch"

:: SCSS watching
start cmd /k "npx sass ./src/scss/main.scss ./css/main.css --style=compressed --watch"

echo Watching for changes...
pause