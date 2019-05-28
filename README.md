# Welcome to: Teed Maker CLI or just `tmk`

```
  _                _                   _
 | |              | |                 | |
 | |_ ___  ___  __| |  _ __ ___   __ _| | _____ _ __
 | __/ _ \/ _ \/ _` | | '_ ` _ \ / _` | |/ / _ \ '__|
 | ||  __/  __/ (_| | | | | | | | (_| |   <  __/ |
  \__\___|\___|\__,_| |_| |_| |_|\__,_|_|\_\___|_|

```

[![GitHub stars](https://img.shields.io/github/stars/teedmaker/cli.svg)](https://github.com/teedmaker/cli/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/teedmaker/cli.svg)](https://github.com/teedmaker/cli/issues) 
[![npm (scoped)](https://img.shields.io/npm/v/@teedmaker/cli.svg)](https://www.npmjs.com/package/@teedmaker/cli) 

### let's start the party! :tada:

Initially I want to say that I'm really proud of with this project, because a long time I was tried to made some thing like this one. For various reasons I was fail, my programming skills was not good yet and a lot of things.

So, I will explain how it works.

---

For now have little methods that you can use.

And here they are:

### create

usage:

> tmk create [methods]

#### create controller name

This command will create a new controller. By default the path to controllers is `src/controllers`, but you can pass another with the flag: `--path='path/to/controllers'`, or just: `-p=path/to/controllers`. You can pass a another flag too (`--blank`, or just `-b`) to create a blank file.

e.g.:

> tmk create controller Home --path='new/path' --blank

This will create a blank controller (`HomeController`), inside of `new/path/`.

#### create service name

This command will create a new service. By default the path to services is `src/services`, you can change it with the flag `--path='new/services'` (or just `-p=new/path`). To create a new blank file, you need to pass the flag `--blank` (or `-b`).

e.g.:

> tmk create service users

This will create a service `Users` in `src/services/Users.php`.

#### create view path/name

This command enables you to create a view file. The default path is `src/views`, and can be changed with the flag `--path='new/path/to/views'` (or just `-p=new/path`). The flag `--blank` (or `-b`) can be passed to, if you want to create a blank view file.

e.g.:

> tmk create view users/index

This will create a view file in `src/views/users/index.php`.

----

### For now, it's all!

Some features will be added. For now it's look like a experiment. So, if you want to contribute, fork and work in it! Or create a new `issue`! :+1:
