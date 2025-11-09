---
title: "Linux Basics: A Beginner's Guide to the Linux File System"
description: "A comprehensive guide to understanding Linux file system, commands, and essential operations for beginners"
expert: "A comprehensive guide to understanding Linux file system, commands, and essential operations for beginners"
date: 2025-11-07
tags: ["linux", "linux-file-system"]
readingTime: 10
---

# Linux Basics

**_Benefits Of Learning Linux_**

1. `Efficient Navigation`

   Efficient Navigationဆိုတာက Linux file systemကို နားလည်ခြင်းအားဖြင့် System Directoriesတွေကနေတစ်ဆင့် မိမိသွားလိုတဲ့ Directoriesတွေကို မြန်မြန်ဆန်ဆန်သွားနိုင်ဖို့ အကျိုးရှိပါတယ်။

1. `File Management`

   File Managementဆိုတာက Linux Commandsတွေကိုအသုံးပြုပြီး Fileတွေကို Creating, Moving and Deletingလုပ်ခြင်းအပါအဝင် Files and Directoriesတွေကို အလွယ်တကူ Manageလုပ်နိုင်ပါတယ်။

1. `System Administration`

   System Administrationဆိုတာကတော့ Linux File Systemတစ်ခုလုံးကို နားလည်ထားမှသာလျှင် System Administratorအနေနဲ့ ဒီSystemကို Configureပြုလုပ်ခြင်း၊ Maintainလုပ်ခြင်းနဲ့ Troubleshootingလို့ခေါ်တဲ့ Problemsတွေကို ဖြေရှင်းရာမှာ မြန်ဆန်စေမှာဖြစ်ပါတယ်။

1. `Scripting and Automation`

   Scripting and Automationဆိုတာက Linux File Systemကို Familiarityဖြစ်ခြင်းအားဖြင့် Systemပေါ်က တစ်ချို့သောအလုပ်တွေကို Scriptsရေးခြင်းဖြင့် Automaticလုပ်ဆောင်နိုင်မှာပဲဖြစ်ပါတယ်။

1. `Security`

   Securityဆိုတာကတော့ Linux File Systemအတွင်းက File Permissions and Ownershipတွေကို နားလည်ခြင်းအားဖြင့် Sensitive Dataတွေကို Protectလုပ်နိုင်ခြင်းနဲ့ User Accessပေးခြင်း စတာတွေမှာ အထောက်အကူဖြစ်စေပါလိမ့်မယ်။

1. `Performance And Optimization`

   Performance And Optimizationရဲ့ Advantageကတော့ Linux File Systemကို နားလည်ခြင်းအားဖြင့် ဒီFilesတွေကို ဘယ်လိုသိမ်းဆည်းရမယ်၊ ဘယ်လိုဝင်ရောက်ရမလဲ စသဖြင့် Systemရဲ့ Performanceကို မထိခိုက်စေပဲ System Performanceကိုတိုးတက်ကောင်းမွန်စွာ အသုံးပြုနိုင်မှာပဲဖြစ်ပါတယ်။

1. `Compatibility And Tools`

   Compatibility And Toolsဆိုတာကတော့ Linux File Systemကို relyလုပ်နေတဲ့ Tools and Applicationsတွေကို ကောင်းစွာ ထိထိရောက်ရောက်အသုံးပြုနိုင်မှာပဲဖြစ်ပါတယ်။

1. `Troubleshooting`

   Troubleshootingဆိုတာကတော့ Linux File Systemကို နားလည်ခြင်းအားဖြင့် Systemအတွင်းမှာ ဖြစ်ပေါ်နေတဲ့ Problemsတွေကို အလွယ်တကူဖြေရှင်းနိုင်မှာပဲ ဖြစ်ပါတယ်။

1. `Customization`

   Customizationဆိုတာက Config Files And Binary Filesတွေကို ဘယ်နေရာမှာ ထားသိုမလဲဆိုတာ သိခြင်းအားဖြင့် မိမိ Systemနဲ့ ကိုက်ညီတဲ့ Work Flowကိုဖန်တီးနိုင်တဲ့ အကျိုးရရှိမှာဖြစ်ပါတယ်။

**_Linux File System_**

![linux-file-system.png](/blog/linux-file-system.png)

အထက်ကပုံမှာ မြင်တွေ့ရတဲ့ (/) Sign လေးဟာ Root Directoryကို ကိုယ်စားပြုပါတယ်။ ပုံမှာမြင်တွေ့ရသလို `/bin, /boot` စတဲ့ File Systemတွေဟာ Root Directoryအောက်ကနေလည်ပတ်ပြီး ဘယ်Fileဟာ ဘယ်လို Dataတွေ၊ ဘယ်လို Informationတွေကို သိမ်းဆည်းမယ်ဆိုတဲ့ တာဝန်ကိုယ်စီလုပ်ဆောင်ကြပါတယ်။

**_Linux Commands And Explain File System_**

`ls`

ပထမဆုံးအနေနဲ့ Terminalမှာ lsလို့ရိုက်ပြီး enterခေါက်လိုက်ရင် Rootအောက်မှာရှိတဲ့ Fileတွေကို listအနေနဲ့ပြပါလိမ့်မယ်။

`ls -al`

ဒီ commandလေးကို ရိုက်လိုက်ရင်တော့ Hidden Filesတွေအပါအဝင် Rootအောက်က Filesတွေအားလုံးကို Long Formatနဲ့ပြပေးမှာဖြစ်ပါတယ်။ lsကတော့ Listကိုကိုယ်စားပြုပြီး -a -l နှစ်ခုကတော့ allနဲ့ long formatကို ကိုယ်စားပြုပါတယ်။

`/bin = User Binaries`

ဆိုလိုတာက bin အောက်မှာ Userနဲ့ပတ်သက်တဲ့ Information and Commandsတွေရှိမယ်ဆိုတဲ့သဘောပါပဲ။

Linuxမှာ Executable Pathရှာလို့ရတဲ့ which Commandကိုသုံးပြီး မိမိနှစ်သက်ရာ Commandတစ်ခုခုကို Executeလုပ်ကြည့်ပါ။

ဥပမာ -

```jsx

which whoami -> /usr/bin/whoami

which id -> /usr/bin/id

which uname -> /usr/bin/uname

```

`/sbin = System Binaries`

`/bin` အောက်မှာ Userနဲ့ပတ်သက်တဲ့ Binaries Filesတွေရှိသလို `/sbin` ရဲ့အောက်မှာတော့ Systemနဲ့သက်ဆိုင်တဲ့ System Binaries Filesတွေရှိနေမှာဖြစ်ပါတယ်။

ဥပမာ -

Config Filesတွေဆိုတာ ဘာလဲ။ နားလည်အောင် ပြောရရင် Config Filesတွေဆိုတာ Systemတစ်ခုလုံးရဲ့ Processတွေ Runနိုင်ဖို့အတွက် Serviceပေးရပါတယ်။ ဒီ့ထက် အကျယ်ချဲ့ရရင် Operating System, Networking Settings, User Authentication, System Services and Software Packagesစတာတွေကို Controlလုပ်ထားတာ Configပါပဲ။ ဒီConfig Filesတွေသာမရှိသာမရှိရင် Systemတစ်ခုလုံး လည်ပတ်နိုင်မှာ မဟုတ်ပါဘူး။ ထို့အတူ အသုံးပြုသူတို့ဟာ Config Filesတွေကို လိုအပ်သလို ဖတ်ရှုပြင်ဆင်နိုင်ပြီး Systemတစ်ခုလုံးကို ကိုင်တွယ်နိုင်ပါတယ်။

ပထမဦးစွာ Terminalမှာ `cd /etc/` လို့ရိုက်ပြီး Enterခေါက်လိုက်ပါ။ `cd`ဆိုတာ Change Directoryဖြစ်ပြီး etc Directory ကို Changeမယ်ဆိုတဲ့သဘောပါ။ ပြီးရင် `ls -al`ခေါက်လိုက်ပါ။ `/etc` ဖိုင်ထဲမှာ ရှိနေတဲ့ Files and Directoriesတွေကို တွေ့မြင်ရပါလိမ့်မယ်။

```jsx

which ifconfig -> /usr/sbin/ifconfig

```

`/etc = Config Files`

အဲ့အထဲက စိတ်ဝင်စားစရာကောင်းတဲ့ `passwd`ဆိုတဲ့ Directoryလေးကို `cat passwd` commandနဲ့ဖွင့်လိုက်ပါ။ `cat` ဆိုတာ ဒီဖိုင်ကို ဖတ်မယ်ဆိုတဲ့သဘောပါ။ Read onlyပါ Writeလုပ်လို့ မရပါဘူး။

catနဲ့ဖတ်လိုက်တဲ့အခါ systemထဲမှာရှိတဲ့ Userတွေကို ပြပါလိမ့်မယ်။ အဲ့အထဲက မိမိ usernameလေးကို တွေ့ပါလိမ့်မယ်။

```jsx

nyeinphyoaung:x:1000:1000:nyeinphyoaung:/home/nyeinphyoaung:/bin/bash

```

ရှေ့ဆုံးက `nyeinphyoaung` ဆိုတာ usernameပါ။ `x` ဆိုတာလေးက Passwordကိုဖျောက်ထားပြီး Shadow Fileမှာသိမ်းထားကြောင်း သင်္ကေတလေးပါ။ အပြည့်အစုံသိချင်ရင် `sudo cat shadow` commandနဲ့ကြည့်နိုင်ပါတယ်။ `x` နောက်က `1000` လေးက UIDပါ။ Debian Based System(Ubuntu)မှာ Debian Conventionကိုလိုက်နာသောအားဖြင့် UserIDကို 1000ကနေစကြပါတယ်။ Arch Linuxတို့လို Pacman Basedတွေမှာလည်း UIDကို 1000ကနေပဲစကြပါတယ်။

Red Hat System and SUSEတွေမှာတော့ UIDကို 500ကနေစကြပါတယ်။ နောက်ဆုံးက `1000` ကတော့ GIDခေါ် GroupID ဖြစ်ပါတယ်။ `/home/nyeinphyoaung` ကတော့ လက်ရှိ Userရဲ့ home directoryဖြစ်ပြီး `/bin/bash` ကတော့ လက်ရှိအသုံးပြုနေတဲ့ Shellအမျိုးအစားဖြစ်ပါတယ်။

---

`/dev = Device Files`

Device Fileဆိုတာကတော့ Systemရဲ့ Hardware Devicesနဲ့ User Interfaceတို့ကြားမှာ interactလုပ်ပေးတာပါ။ အရမ်းကြီးနားလည်စရာမလိုတဲ့အတွက် မရှင်းပြတော့ပါဘူး။

`/proc = Process File`

Systemရဲ့ Process Fileမို့ အရမ်းကြီးသိစရာမလိုပါဘူး။ Knowledgeအနေနဲ့ဆိုရင်တော့ proc Fileမှာ Dynamic Information နဲ့ Process Informationဆိုပြီး နှစ်မျိုးရှိပါတယ်။ Dynamic Informationဆိုတာက Kernelကနေ Informationထုတ်ပေးပြီးတော့ Process Informationဆိုတာက Process သို့မဟုတ် လုပ်ငန်းစဥ်တွေကို PIDလို့ခေါ်တဲ့ လုပ်ငန်းစဥ်အမှတ်(Process ID)တွေတပ်ပေးပါတယ်။

`/var = Variable Files`

အရေးကြီးပါတယ်။ `Variable Files` ဟာ `/etc, /usr` အောက်က Filesတွေလို Static Filesတွေကို သိမ်းတာမျိုးမဟုတ်ပဲ Dynamic Filesတွေကို Storeလုပ်ပါတယ်။

နားလည်အောင်ပြောရရင် -

`cd /var` ရိုက်ပြီး `ls -al`ခေါက်ကြည့်ပါ။

varအောက်က Filesတွေကို တွေ့ရပါလိမ့်မယ်။ အဲ့ထဲက backups, mailဖိုင်တွေက မိမိတို့အတွက် Dataစုဆောင်းဖို့ အင်မတန်အရေးပါပါတယ်။ အဲ့ဖိုင်တွေထဲကနေလည်း username and passwordတွေရနိုင်ပါသေးတယ်။

`/tmp = Temporary Files`

Filesတွေကို ယာယီခဏတာသိမ်းလို့ရတဲ့ နေရာလေးပါပဲ။

`/usr = User Program`

Linux File Systemတစ်ခုမှာ `/etc` နည်းတူ အရေးကြီးတဲ့ File or Directoryဆိုရင် `/usr` ပါပဲ။ အစောကပြောခဲ့သလို User Program, System Program commandsတွေဟာ `/usr` ကနေလာပါတယ်။ ဒါ့အပြင် မိမိတို့ Brute forceတိုက်တဲ့အခါ အသုံးပြုရတဲ့ Password Wordlists တွေဟာလည်း `/user` အောက်ကနေပဲ လာပါတယ်။

`/home = Home Directory`

Home Directoryဆိုတာ မိမိရဲ့ Directoryကိုပြောခြင်းပါပဲ။ `ls -al` commandခေါက်ကြည့်လိုက်ရင် အဲ့ထဲမှာရှိနေတဲ့ Filesတွေဟာ မိမိရဲ့ကိုယ်ပိုင်ဖိုင်တွေပါပဲ။

`/boot = Boot Files`

Boot Filesဆိုတာကတော့ မိမိတို့ရဲ့ Linux Systemတစ်ခုလုံး စတင်ဖို့အတွက် လိုအပ်တဲ့ Filesတွေကို စုစည်းထားတဲ့ Files Systemတစ်ခုပါပဲ။ Bootထဲမှာ Kernel images, Initramfs and Bootloader config filesတွေရှိပါတယ်။ လုပ်စရာဆိုလို့ ဒီFilesတွေကို Updateလုပ်ပေးနိုင်တာလောက်ပဲရှိတာမို့ အရမ်းအရေးမကြီးပါဘူး။

`/lib = System Libraries`

မိမိတို့ရဲ့ Operating System and Applications တွေအတွက် မရှိမဖြစ်လိုအပ်တဲ့ System library filesတွေကို စုစည်းထားတဲ့နေရာပါပဲ။

`/opt = Optional App`

Optional Fileကတော့ မိမိတို့အနေနဲ့ ဒီSystemထဲမှာ စိတ်ကြိုက် Software Packages and Applicationsတွေကို ရွေးချယ်အသုံးပြုနိုင်ဖို့ ထည့်သွင်းပေးထားတဲ့ File Systemတစ်ခုပါပဲ။

`/mnt = Mount Directory`

Mount Directoryဆိုတာကတော့ တစ်ခါတစ်လေမှာ မိမိတို့အနေနဲ့ External Devices(USB, Hard Drives), Network Shares (NFS, CIFS), CD/DVD Media File Systemတွေကို ယာယီအသုံးပြုနိုင်ဖို့ Mount Pointတစ်ခုအနေနဲ့ သုံးနိုင်ပါတယ်။

`/media = Removable Media`

Media Fileဆိုတာကလည်း အပေါ်က `mnt`လို ဖြုတ်နိုင်တပ်နိုင်တဲ့ devicesတွေအတွက် အသုံးပြုနိုင်တဲ့ File Directoryတစ်ခုပါပဲ။

`/srv = Service Data`

`srv` Fileကတော့ Systemကပေးတဲ့ Web, FTP and File Sharingတို့လို Servicesတွေအတွက် Dataတွေသိမ်းဆည်းဖို့အတွက် အသုံးပြုပါတယ်။

---

**_Useful Command Line Interface - `CLI`_**

1. `Ctrl + Alt + T ==> Terminal`

2. `clear ==> To clear terminal history`

3. `cd ==> Change Directory`

4. `ls -al ==> Get all lists include hidden files`

5. `mkdir ==> To create new Directory`

6. `rm -r <file_name> ==> To delete file or folder → r is recursive`

7. `cp ~/Downloads/image.png ~/Pictures/image.png ==> Copied to image from Downloads to Pictures directory`

8. `cp -r ebook ~/Documents/ebooks ==> To copy Directories`

9. `mv ebook ~/Documents/ebooks ==> To move files or directories`

10. `cat <path_file_name> ==> To read file's information`

11. `tail <path_file_name> ==> prints the last few number of lines (10 lines by default)`

12. `head <path_file_name> ==> prints the first of lines(10 lines by default)`

13. `tail/head -n <num> <path_file_name> ==> specific line number`

14. `find -type d ==> just get dir from the current dir`

15. `find -type f ==> just get file from the current dir`

16. `touch <file_name> ==> To create file`

17. `echo "Hello, World!" > hello ==> Store output in hello file`

18. `nano <file_name> ==> To edit file with nano`

19. `nvim <file_name> ==> To edit file with nvim`

20. `sudo apt-get dist-upgrade -y ==> To update OS`

**_Files Compression_**

1. `sudo systemctl restart NetworkManager.Service ==> To restart network service`

2. `gzip <file_name> ==> To compress original file`

3. `gzip -k <file_name> ==> compressလုပ်ပြီး မူရင်းဖိုင်ကိုလည်းချန်ထားစေချင်ရင်`

4. `gzip -d hello.txt.gz ==> To depress compress files`

**_Files Archives_**

1. `tar -czf archive.tar.gz file1, file2, folder1 ==> file1, 2, 3ကို archiveအမည်နဲ့ Archiveလုပ်ပေးတာပါ။ c -> create, z -> optional, f -> file`

2. `tar -xzf <file_name.tar.gz> ==> To Extract files (x -> extract)`

3. `tar -xzf archive.tar.gz -C ~/Documents ==> တစ်ခြား Directoryထဲမှာ extractလုပ်စေလိုရင်(C → Change Directory)`

**_PPA Channel_**

1. `sudo apt-add-repository <ppa_address> ==> To add PPA Channel`

**_Packages_**

1. `sudo apt-get install <package_name> ==> To install Packages`

2. `sudo apt-get remove <package_name> ==> To remove Packages`

3. `sudo apt-get autoremove ==> To remove packages unnecessary in our system`

4. `sudo dpkg -i dropbox.deb ==> To install .deb extension`

5. `sudo apt-get install -f ==> To solve fail installation (f -> force install)`

**_User Management_**

1. `passwd ==> To change user password`

2. `sudo passwd <username> = To change password other user`

3. `sudo passwd root ==> To enable root user by defining password`

4. `sudo passwd -l root ==> To disable root user by removing password`

5. `sudo useradd --create-home -d /home/james <username> ==> To create user account (--create-home က userရဲ့ home directoryကိုသတ်မှတ်ဖို့၊ -d optionနဲ့အတူ home directoryရဲ့ locationကိုသတ်မှတ်နိုင်)`

6. `sudo userdel -r <username> ==> To delete user`

7. `sudo groupadd <groupname> ==> To create Group`

8. `sudo groupdel <groupname> ==> To delete Group`

9. `sudo usermod -a -G <groupname> <username> ==> To add user in Group (-a -> append, -G -> group)`

10. `sudo deluser <username> <groupname> ==> To remove user from Group`

**_File Permission Management_**

```jsx
Owner = u;

Group = g;

Other = o;
```

```jsx

Read = r

wriet = w

execute = x



+ sign to give permission

- sign to remove permission

```

1. `chmod g+r <file_name> ==> To give read permission to Group User`

2. `chmod g-x <file_name> ==> To remove execute permission to group user`

3. `chmod -R g-x <dir_or_file_name> ==> To apply for all files and sub directories`

4. `chmod g+rx <directory_name> ==> To give read and execute permission to Group User`

5. `chmod ugo+r <file_name> ==> To give execute permission all User`

6. `chmod a+r <file_name> ==> To give execute permission all User`

**_Bonus For File Permission 😗_**

File permissionတွေကို စီမံတဲ့အခါ ကျွန်တော်တို့ဟာ Octal Valuesတွေနဲ့ စီမံလို့ရပါတယ်။

Okay, What is Octal Values?

Octal Valuesဆိုတာက Read(r), Write(w), Execute(x)တို့ကို ကိန်းဂဏာန်းတွေနဲ့ သတ်မှတ်ခြင်းပါပဲ။

```jsx

Read(r) = 4

Write(w) = 2

Execute(x) = 1

(-) = 0

-rw-rw-r--  1  nyeinphyoaung  nyeinphyoaung  44  Oct  3  08:18  abc.py

// ဒုတိယ (-) signကနေစကြည့်ပါက (-) sign လေးတွေဟာ မပေးရသေးတဲ့ permissionsတွေအတွက်

// အစားထိုးပေးခြင်းပါ

```

အပေါ်က exampleမှာ

rootအတွက် `rw` = 4+2 = 6

groupအတွက် `rw` = 4+2 = 6

otherအတွက် `r` = 4 = 4 → Octal Valuesက 664ပဲဖြစ်ပါတယ်။

`*` Fileတစ်ခုကို permissionအပြည့်ပေးဖို့ဆို Octal Valuesက 777ဖြစ်ရပါမယ်။

```jsx

// so we can give permission full with this command

chmod 777 <file_name>



// means

// root - rwx = 4+2+1 = 7

// group - rwx = 4+2+1 = 7

// other - rwx = 4+2+1 = 7

```

**_Owner Management_**

```jsx

-rwxrwxrwx  1  nyeinphyoaung  nyeinphyoaung  44  Oct  3  08:18  abc.py

// fist nyeinphyoaung is Owner Name

// second nyeinphyoaung is Group Name

```

1. `sudo chown root <file_name> ==> To change Owner Name to root`

2. `sudo chown :root <file_name> ==> To change Group Name to root`

3. `sudo chown root:root <file_name> ==> To change Owner Name and Group Name to root`

**_Other Useful Commands_**

1. `cat /etc/lsb-release = To check Ubuntu version`

2. `top = To check CPU usage and Memory usage`

3. `sudo kill <PINID> = To kill or force stop process`

4. `lscpu = To check CPU information`

5. `lspci = To check PCI Devices`

6. `lsusb = To check USB Devices`

7. `ifconfig = To check Network connection configuration`

8. `nslookup = To check internet connection`

9. `nslookup [www.google.com](http://www.google.com) = To find IP Address of Domain`

10. `ping <domain_name> = To ping of Domain`

11. `find Pictures -name *.png = To find some files`

12. `sudo grep -rnw /etc -e "trusty" = To find content in file(r → recursive, n →line number, w → whole word )`

13. `sudo shutdown -h now = To shutdown our system (-h -> halt the system meanings stop all processes and power-off machine)`

14. `ssh-keygen = To generate ssh`

---

_"Hope you all to enjoy Linux Operating System"_

     *"Absolutely intended for beginner in Linux"*



                           *(Generated by Nyein Phyo Aung)*
