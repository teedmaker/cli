# Bem vindo ao `Teed Maker CLI`, ou implesmente: `tmk`

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

### vamos iniciar a festa! :tada:

Inicialmente eu gostaria de dizer que estou realmente feliz com este projeto, porque há muito tempo venho tentando fazer algo parecido. 
Mas por *diversos* motivos eu vinha falhando miseravelmente. Minhas habilidades não eram tão boas, meus conhecimentos etc.

Vamos lá então!

---

Ainda não existem muitas funções que você possa usar, este projeto *encontra-se em desenvolvimento*.

Aqui estão as funções:

### create

uso:

> tmk create [methods]

#### create controller nome

Este comando irá criar um novo controller. Por definição, o diretório para os controllers é `./src/controllers/`, mas você pode passar um outro com a flag: `--path='path/to/controllers'`, ou simplesmente: `-p=path/to/controllers`. Você também poderá passar uma outra flag: (`--blank`, ou: `-b`) para criar um arquivo em branco.

exemplo:

> tmk create controller Home --path='new/path' --blank

Este comando irá criar um controller em branco dentro do diretório `new/path/`.

#### create service nome

Este comando criará um service. Por definição eles serão criados dentro de `src/services`, mas você pode alterar o destino utilizando: `--path='new/services'` (ou `-p=new/path`). Para criar um arquivo em brando você poderá passar a flag `--blank` (ou `-b`).

exemplo:

> tmk create service users

Este comando criará o service `Users` em `src/services/Users.php`.

#### create view caminho/para/a/view

Este comando permite a criação de um arquivo view. O diretório padrão é: `src/views`, e pode ser alterado com a flag `--path='novo/caminho'` (ou simplesmente `-p=new/path`). A flag `--blank` (ou `-b`) pode ser passada também caso você queira criar uma view em brando.

exemplo:

> tmk create view users/index

Isto criará uma view em `src/views/users/index.php`.

----

### Isto é tudo, pessoal! :wink:

Mais atualizações em breve! Por enquanto é só um experimento. Então, caso queira contribuir, dê um fork ou crie novas issues! :+1:
