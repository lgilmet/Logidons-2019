@echo off

cd ./AngularSite
start /WAIT "" install.bat
cd ./../expressAPI
start /WAIT "" install.bat
echo "finished installing both directories."
pause