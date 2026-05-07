@echo off
echo 正在启动英语学习平台...
echo.
echo ========================================
echo 英语学习平台 - 启动说明
echo ========================================
echo.
echo 方法1：直接双击 index.html 打开
echo.
echo 方法2：使用本地服务器（推荐）
echo.
echo 如果你有Python，可以运行：
echo python -m http.server 8000
echo 然后在浏览器打开：http://localhost:8000
echo.
echo ========================================
echo.
echo 正在尝试使用Python启动服务器...
python -m http.server 8000
if errorlevel 1 (
    echo.
    echo Python未找到，请直接双击 index.html 文件打开
    pause
)
