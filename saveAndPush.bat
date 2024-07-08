@echo off
for /f "tokens=1-3 delims=/ " %%a in ('date /t') do (
    set "YYYY=%%a"
    set "MM=%%b"
    set "DD=%%c"
)

REM 获取当前分支名
for /f "tokens=*" %%a in ('git rev-parse --abbrev-ref HEAD') do set "BRANCH=%%a"

REM 添加文件到暂存区
git add .

REM 提交更改
git commit -m"%YYYY%/%MM%/%DD% save file" || exit /b 1

npm run build

git subtree push --prefix dist g gh-pages