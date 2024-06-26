<h1 align="center">
  
 prismajs-blog
  
</h1>

<!-- <h4 align="center">summary <a href="http://electron.atom.io" target="_blank">"link"</a>.</h4> -->

<!-- <p align="center">
  <a href="https://badge.fury.io/js/electron-markdownify">
    <img src="https://badge.fury.io/js/electron-markdownify.svg"
         alt="Gitter">
  </a>
  <a href="https://gitter.im/amitmerchant1990/electron-markdownify"><img src="https://badges.gitter.im/amitmerchant1990/electron-markdownify.svg"></a>
  <a href="https://saythanks.io/to/bullredeyes@gmail.com">
      <img src="https://img.shields.io/badge/SayThanks.io-%E2%98%BC-1EAEDB.svg">
  </a>
  <a href="https://www.paypal.me/AmitMerchant">
    <img src="https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&amp;style=flat">
  </a>
</p> -->

<p align="center">
  <a href="#description">Description</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#used-technologies">Used technologies</a> 
</p>

![screenshot](https://raw.githubusercontent.com/gist/mahmudinm/47588cab5af928d2c8a2976d90216ea7/raw/88f20c9d749d756be63f22b09f3c4ac570bc5101/programming.gif)

## Description

Create un nuovo progetto Node.js (senza Express) ed installate la Prisma CLI e il Prisma Client. Successivamente definite i modelli Post, Category e Tag nel file schema.prisma Il Post deve contenere le seguenti proprietà:

Tramite una funzione, salvare l'array dei post nel file .json

nella funzione store permettere di passare i dati nel formato multipart/form-data tramite multer
permettere di eseguire l'upload dell'immagine principale del post.

- title
- slug (deve essere univoco)
- image (non obbligatoria)
- content
- published (boolean)
- createdAt
- updatedAt

Mentre per Category e Tag è sufficiente la proprietà name.
Le relazioni fra i modelli:

- Category (one-to-many): Ogni Post deve avere una categoria associata, e una categoria può avere più Post associati.
- Tag (many-to-many): Ogni Post può avere uno o più tag associati, e ogni Tag può avere uno o più Post associati.

Dopo aver definito i modelli, aggiungete le funzioni per creare una Categoria e un Tag ed implementate tutte le operazioni CRUD per il modello Post, ovvero:

- Una funzione che consente di creare un Post.
- Una funzione che permette di leggere un Post usando lo slug.
- Una funzione che restituisce l'elenco di tutti i Post.
- Una funzione che consente di modificare un Post.
- Una funzione che elimina un Post.

### Bonus

- Crea una funzione che restituisca solo i Post pubblicati.
- Crea una funzione che restituisca solo i Post che contengono una determinata stringa nel contenuto.

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
 git clone ('link of the repository')

# Go into the repository
 cd ('file name')

# Install dependencies
 npm install

# Run the app
 npm run dev
```

## Used technologies

This software uses the following technologies:

- [Node.js](https://)
- [Express](https://)

> GitHub [@JohnQuimson](https://github.com/JohnQuimson) &nbsp;&middot;&nbsp;
> Twitter [@John Henric Quimson](https://www.linkedin.com/in/john-henric-quimson-973827280/)
