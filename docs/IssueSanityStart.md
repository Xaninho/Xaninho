When trying to run 'sanity start' to run de localhost of sanity, a similar error message might popup: 

"When you run a .ps1 PowerShell script you might get the message saying “.ps1 is not digitally signed. The script will not execute on the system."

To fix it you have to run the command below to run Set-ExecutionPolicy and change the Execution Policy setting.

Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass