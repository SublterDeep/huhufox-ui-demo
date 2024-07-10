@echo off
for /f "tokens=1-3 delims=/ " %%a in ('date /t') do (
    set "YYYY=%%a"
    set "MM=%%b"
    set "DD=%%c"
)
npm run build
git add .
git commit -m"%YYYY%/%MM%/%DD% save file" || exit /b 1
git push g master
git subtree push --prefix dist g gh-pages
git status
git log