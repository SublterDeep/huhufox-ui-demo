@echo off
for /f "tokens=1-3 delims=/ " %%a in ('date /t') do (
    set "YYYY=%%a"
    set "MM=%%b"
    set "DD=%%c"
)
git add .
git commit -m"%YYYY%/%MM%/%DD% save file"