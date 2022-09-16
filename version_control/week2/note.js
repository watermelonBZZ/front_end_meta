/* 

command lines
cd: change directory
to point our command line to a specific directory. 

cd ~(tilde)/Desktop
cd .. move out of the current directory and back into the parent directory.

touch 
makes a new file of whatever type you specify

mkdir
make new folders

cat
cat > filename.txt
control + D to finish input
cat < filename.txt, less filename.txt
to have content showed on screen

wc
the word count command

Pipes
Pipes allow you to pass the output from one command as the input to another.


!REDIRECTION!

3 types of IO streams
0 == standard input, (keyboard, file object)
1 == standard output, (monitor, file object)
2 == standard error, (monitor, file object)

3 types of IO redirections 
< input, > output, 2> error

syntax：
> filename.txt 2>&1
(如果没有错误，则filename里面的内容是stdoutput，
    反之如果有错误，filename的内容是stderr)

example:
ls -l > output.txt 2>&1
ls -l /not_exsited_fold > output.txt 2>&1 
or
ls -l /not_exsited_fold &>output.txt

command line 2>&1 filename.txt

https://blog.csdn.net/sunshine_lulu/article/details/53357246?spm=1001.2101.3001.6650.9&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-9-53357246-blog-79924814.t5_download_50w&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-9-53357246-blog-79924814.t5_download_50w&utm_relevant_index=10

https://blog.csdn.net/sunshine_lulu/article/details/53357246?spm=1001.2101.3001.6650.9&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-9-53357246-blog-79924814.t5_download_50w&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-9-53357246-blog-79924814.t5_download_50w&utm_relevant_index=10


Grep

syntax:

1. grep -i target_text file.txt
find content while ignore case sensitivity

2.grep -w target_text file.txt
find content  match exactly target_text

3.partial match


create public and private key


ssh-keygen -t ed25519 -C "your@email.com"

copy key:
cat ~/.ssh/id_ed25519.pub | clip

git clone https://xxx <targetName>
(克隆下来的repo本身就有一个默认别名，叫origin，同时对应clone的url)

git add command

如果在add 之后又修改，git status -s 会显示AM，没有修改则是A
https://www.runoob.com/git/git-add.html

git commit -m "type description"
（这一步还没有上传，还在local machine）

create a branch 
a. git checkout -b feature/lesson(branch name)
(创建branch feature/lesson，并且将工作目录转到feature/lesson)

b.git branch feature/lesson(name)

git branch 
（后面没有名字时，会列出你在本地的分支）

重命名当前branch的名称
git branch -M <targetName>

git checkout (branch name)
(切换分支)

在本地床在repository

1.mkdir foldname
2.cd foldname
3.git init(initialize an empty Git repository in foldname)

till now, it still works on local machine, not on remote

4.git remote add origin <url>
5.git pull origin main
(download the repository in working repo)

6.git checkout main (to set up main branch to match the branch on remote repo as currently ,it's empty)

****git remote说明****
1.为<url>添加一个别名<name>
git remote add <name> <url>

2.查看所有别名
git remote 

3.删除<name>的别名
git remote remove <name> 

4.rename
git remote rename <oldName> <newName>

5.-h/--help 获取帮助说明
git remote -h

7. git push origin main
origin == remote repo's url
mian是本地仓库的分支名称
-u 设置分支的关联 （后面可以直接写git push 不写 origin main）


git remote -v
show the url that repository linked to 

gh auth login

****查看当前工作branch*****
cd .git
cat HEAD
(cat .git/HEAD)

****git diff****
明确指出两个文件的不同

****git diff 输出内容解释****
(https://blog.csdn.net/SICAUliuy/article/details/125256486)

****git diff 和 git diff head 区别****
(https://www.cnblogs.com/fighxp/p/14446712.html)


git blame -l num, num filename
(展示文件指定行范围的修改记录)

git log -p IDnumber
(展示id号的详细修改)

****冲突解决****
1.git status 找到冲突文件
2.修改为目标内容
3.git add， git commit


****三个区域****
工作，暂存cache，仓库区repo

ls 查看当前工作区文件列表
git ls -files 查看暂存区的文件列表

****git status 说明****

1.工作区的所有修改都已经提交
on branch main 
nothing to commit, working tree clean

2.有新增文件，但未提交到暂存区
untracked files（）
2.1 将文件从缓存区移除
git restore --staged filename.format 

3.暂存区有新新修改，可以使用commit提交
changes to be committed 

4.误删找回文件
git restore . (实在工作区)

5.版本返回（没执行一次commit就是一个新的版本）
git log 查看历史版本记录，按q退出
git log --oneline

git reset --hard <hashNumber>

如果从s6回到s1，则不会显示s2-s6，可以使用
git reflog 重新得到版本号

版本切换之前，将工作区文件进行提交（git add/commit）

****git 配置忽略文件****

1.创建 .gitignore 文件
2.在内部编辑

2.1 * 通配符 匹配所有 
*.format

2.2 忽略指定文件
.idea

2.3只忽略当前文件夹下面的
/filename.format

2.4 在库中删除文件
git rm -chached filename.format
(需要忽略的文件如果已经存在于库中，应该先删除，然后再编辑.gitignore规则，接着add、commit)

2.5
foldname/ 忽略

2.6删除库
find . -name ".git" | xargs rm -Rf

****问题解决*****
#只对github.com
# 找到自己的代理的port的4个数字的端口就行，不一定是1080口的
git config --global http.https://github.com.proxy socks5://127.0.0.1:1080
#上面是别人的，如果你的代理是http类型的，如下设置：
git config --global http.https://github.com.proxy 'http://127.0.0.1:代理的port'

#取消代理
git config --global --unset http.https://github.com.proxy


使用cmd命令tasklist，找到git bash的进程
执行命令(taskkill /pid 9872 -t -f)将其杀死即可

ping github.com

C:\Windows\System32\drivers\etc

*/