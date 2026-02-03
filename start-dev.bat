@echo off
echo.
echo ===================================
echo   CACH DAU TU - Setup Script
echo ===================================
echo.
cd /d d:\Project\test

echo [1/3] Xoa cai dat cu...
rmdir /s /q node_modules 2>nul
rmdir /s /q .next 2>nul
del package-lock.json 2>nul

echo.
echo [2/3] Cai dat dependencies (vui long doi 1-2 phut)...
"C:\Program Files\nodejs\node.exe" "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" install

if errorlevel 1 (
  echo.
  echo LOI: Khong cai dat duoc. Vui long chup anh man hinh nay.
  pause
  exit /b 1
)

echo.
echo [3/3] Khoi dong dev server...
echo.
echo ===================================
echo   Mo trinh duyet: http://localhost:3000
echo   Nhan Ctrl+C de dung server
echo ===================================
echo.
"C:\Program Files\nodejs\node.exe" "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" run dev
pause
