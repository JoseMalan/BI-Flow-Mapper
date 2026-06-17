Set shell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")

root = fso.GetParentFolderName(WScript.ScriptFullName)
launcher = fso.BuildPath(root, "launch.ps1")
shell.CurrentDirectory = root
command = "powershell.exe -NoProfile -ExecutionPolicy Bypass -File """ & launcher & """"
shell.Run command, 0, False
