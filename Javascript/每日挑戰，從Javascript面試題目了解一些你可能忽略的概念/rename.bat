@echo off
setlocal enabledelayedexpansion
set count=1
for %%f in (*.js) do (
    ren "%%f" "javascript!count!.js"
    set /a count+=1
)
