@echo off
setlocal enabledelayedexpansion
set counter=1

for %%f in (*.png) do (
    if not "%%~nf"=="card-image" (
        if not "%%~nf"=="rename-screenshots" (
            ren "%%f" "screenshot-!counter!.png"
            echo Renamed %%f to screenshot-!counter!.png
            set /a counter+=1
        )
    )
)

echo Done! Screenshots renamed.
pause