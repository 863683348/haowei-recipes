@echo off
rem 好味 HǎoWèi · 本地启动脚本（会员体系 v2.1）
rem 双击运行，或在此目录的终端里执行 start-dev.bat
rem 启动后浏览器打开 http://localhost:4100/en
cd /d "%~dp0"
echo.
echo  Starting HǎoWèi dev server on http://localhost:4100 ...
echo  (首次编译约需 10-30 秒，看到 "Ready" 后即可打开)
echo.
call npm run dev -- -p 4100
pause
