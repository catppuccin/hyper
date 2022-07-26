<h3 align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
	Catppuccin for <a href="https://github.com/vercel/hyper">Hyper</a>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
    <a href="https://github.com/catppuccin/hyper-catppuccin/stargazers"><img src="https://img.shields.io/github/stars/catppuccin/hyper-catppuccin?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
    <a href="https://github.com/catppuccin/hyper-catppuccin/issues"><img src="https://img.shields.io/github/issues/catppuccin/hyper-catppuccin?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
    <a href="https://github.com/catppuccin/hyper-catppuccin/contributors"><img src="https://img.shields.io/github/contributors/catppuccin/hyper-catppuccin?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>


<div align="center">
  <img src="media/preview.png" width="100%" />
</div>

## Contents

- [Install](#install)
- [Usage](#usage)
- [License](#license)

## Install
**Please note that the name of NPM package and the theme itself is `hypurr` and not `hyper-catppuccin`.**\
Add the following line to `plugins` field in your `~/.hyper.js`
```js
plugins: [
  'hypurr#latest'
]
```

## Usage
A total of 4 different color palettes are available in catppuccin theme --
- [Latte](https://github.com/catppuccin/catppuccin#-palettes)
- [Frappé](https://github.com/catppuccin/catppuccin#-palettes)
- [Macchiato](https://github.com/catppuccin/catppuccin#-palettes)
- [Mocha](https://github.com/catppuccin/catppuccin#-palettes)

You can use the one you like from the four by adding the name of the theme (make sure you type frappé correctly if you're using it!) to the `catppuccinTheme` field in your `~/.hyper.js` like this --
```js
module.exports = {
  ...
  config : {
    ...
    catppuccinTheme: 'Frappé'
    ...
  }
  ...
}
```   
By default, the theme is set to `macchiato`.

## License

[MIT](license.md) 

## Contributors

- Ashish ([@asrvd](https://github.com/asrvd))
- Adal Zanabria ([@AdalZanabria](https://github.com/AdalZanabria))

&nbsp;

<p align="center"><img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true" /></p>
<p align="center">Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
<p align="center"><a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a></p>
