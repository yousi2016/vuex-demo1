
在github和gitee上创建新库的步骤：
Administrator@PC-20180723OWWX MINGW64 /d/geekbang
$ git clone https://github.com/yousi2016/vuex-demo1.git
Cloning into 'vuex-demo1'...
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), done.

Administrator@PC-20180723OWWX MINGW64 /d/geekbang
$ git status
fatal: not a git repository (or any of the parent directories): .git

Administrator@PC-20180723OWWX MINGW64 /d/geekbang
$ cd vuex-demo1

Administrator@PC-20180723OWWX MINGW64 /d/geekbang/vuex-demo1 (master)
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        .browserslistrc
        .eslintrc.js
        .gitignore
        babel.config.js
        package-lock.json
        package.json
        postcss.config.js
        public/
        src/

nothing added to commit but untracked files present (use "git add" to track)

Administrator@PC-20180723OWWX MINGW64 /d/geekbang/vuex-demo1 (master)
$ git add .
warning: LF will be replaced by CRLF in .browserslistrc.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in .eslintrc.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in .gitignore.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in babel.config.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in package-lock.json.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in package.json.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in postcss.config.js.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in public/index.html.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/App.vue.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/components/HelloWorld.vue.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/main.js.
The file will have its original line endings in your working directory

Administrator@PC-20180723OWWX MINGW64 /d/geekbang/vuex-demo1 (master)
$ git commit -m 'first add vuex-demo1 to github'
[master 8a3355e] first add vuex-demo1 to github
 13 files changed, 11754 insertions(+)
 create mode 100644 .browserslistrc
 create mode 100644 .eslintrc.js
 create mode 100644 .gitignore
 create mode 100644 babel.config.js
 create mode 100644 package-lock.json
 create mode 100644 package.json
 create mode 100644 postcss.config.js
 create mode 100644 public/favicon.ico
 create mode 100644 public/index.html
 create mode 100644 src/App.vue
 create mode 100644 src/assets/logo.png
 create mode 100644 src/components/HelloWorld.vue
 create mode 100644 src/main.js

Administrator@PC-20180723OWWX MINGW64 /d/geekbang/vuex-demo1 (master)
$ git push github master
fatal: 'github' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.

Administrator@PC-20180723OWWX MINGW64 /d/geekbang/vuex-demo1 (master)
$ git branch
* master

Administrator@PC-20180723OWWX MINGW64 /d/geekbang/vuex-demo1 (master)
$ git remote -v
origin  https://github.com/yousi2016/vuex-demo1.git (fetch)
origin  https://github.com/yousi2016/vuex-demo1.git (push)

Administrator@PC-20180723OWWX MINGW64 /d/geekbang/vuex-demo1 (master)
$ git remote add github git@github.com:yousi2016/vuex-demo1.git

Administrator@PC-20180723OWWX MINGW64 /d/geekbang/vuex-demo1 (master)
$ git remote -v
github  git@github.com:yousi2016/vuex-demo1.git (fetch)
github  git@github.com:yousi2016/vuex-demo1.git (push)
origin  https://github.com/yousi2016/vuex-demo1.git (fetch)
origin  https://github.com/yousi2016/vuex-demo1.git (push)

Administrator@PC-20180723OWWX MINGW64 /d/geekbang/vuex-demo1 (master)
$ git remote rm origin

Administrator@PC-20180723OWWX MINGW64 /d/geekbang/vuex-demo1 (master)
$ git remote -v
github  git@github.com:yousi2016/vuex-demo1.git (fetch)
github  git@github.com:yousi2016/vuex-demo1.git (push)

Administrator@PC-20180723OWWX MINGW64 /d/geekbang/vuex-demo1 (master)
$  git remote add gitee git@gitee.com:frontEndArchitect/vuex-demo1.git

Administrator@PC-20180723OWWX MINGW64 /d/geekbang/vuex-demo1 (master)
$ git remote -v
gitee   git@gitee.com:frontEndArchitect/vuex-demo1.git (fetch)
gitee   git@gitee.com:frontEndArchitect/vuex-demo1.git (push)
github  git@github.com:yousi2016/vuex-demo1.git (fetch)
github  git@github.com:yousi2016/vuex-demo1.git (push)

Administrator@PC-20180723OWWX MINGW64 /d/geekbang/vuex-demo1 (master)
$ git push github master
Enumerating objects: 20, done.
Counting objects: 100% (20/20), done.
Delta compression using up to 4 threads
Compressing objects: 100% (16/16), done.
Writing objects: 100% (19/19), 82.52 KiB | 242.00 KiB/s, done.
Total 19 (delta 0), reused 0 (delta 0)
To github.com:yousi2016/vuex-demo1.git
   4243aeb..8a3355e  master -> master

Administrator@PC-20180723OWWX MINGW64 /d/geekbang/vuex-demo1 (master)
$ git push gitee master
Access denied: Repository Not Found
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.

Administrator@PC-20180723OWWX MINGW64 /d/geekbang/vuex-demo1 (master)
$ git status
On branch master
nothing to commit, working tree clean

Administrator@PC-20180723OWWX MINGW64 /d/geekbang/vuex-demo1 (master)
$ git push gitee master
Everything up-to-date

第二章：生态篇 (13讲)
    20 | 为什么需要Vuex
        vuex和vue component相互独立的，使用场景和运行机制
    21 | 如何在Vue中使用Vuex
        使用方式：
        步骤：
            1.vue create vuex-demo1

            npm i vuex
            npm run serve
            在入口文件main.js中引入vuex


