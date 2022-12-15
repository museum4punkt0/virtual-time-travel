# Virtual Time Travel

## Purpose of this application

This application allows museums and other similar institutions to present local history in an easy to configure environment for users on (primarily) mobile devices. Images and text can be bound to geocoordinates to allow users to access the content based on their location. Alternatively, an embedded QR code reader allows users to access a given place's history without directly visiting it in person.

Once fully configured, the application runs completely on the client-side. Thus, only a common web server like nginx or Apache is required to run the application in production.

## Development

This is a monorepo project generated with [Nx](https://nx.dev).

- Please adopt the [Conventional Commit 1.0.0](https://www.conventionalcommits.org/en/v1.0.0) specification
- Development practice follows the [git flow principles](https://www.gitkraken.com/learn/git/git-flow)
- Do not forget to publish your Feature-/BugFix-/Hotfix-/Support-/Release-Branch to the remote repository

### Requirements

- Node
  - Install **node v16.16.0 (LTS)**
  - Install **nx** as global package
    - `npm i --location=global nx`

### Development server

Run `nx serve geo-ar` for a geo-ar dev server. Navigate to <http://localhost:4200/>. The app will automatically reload if you change any of the source files.

### Code formatting

```
nx format:check --configuration=.prettierrc
```

or

```
nx format:write --configuration=.prettierrc
```

### Code Linting

```
nx lint
```

or

```
nx lint -- --fix
```

### Documentation

The documentation is using Docsify. This is a client-side-only tool.

- Client-side only Markdown renderer
- To serve it locally, just use an HTTP server.

```
npm install --global http-server
http-server -c-1 ./docs
```

The documentation can be viewed at <https://virtuelle-zeitreise.freies-deutsches-hochstift.de/docs/>.

## Credits

### Funding

The museum4punkt0 project is funded by the Federal Government Commissioner for Culture and the Media on the basis of a resolution of the German Bundestag.

![BKM-Logo](https://github.com/museum4punkt0/images/blob/2c46af6cb625a2560f39b01ecb8c4c360733811c/BKM_Fz_2017_Web_de.gif)
![NeustartKultur](https://github.com/museum4punkt0/media_storage/blob/a35eedb36e5b502e90cd76d669a6b337002b230a/BKM_Neustart_Kultur_Wortmarke_pos_RGB_RZ_web.jpg)

### About the German Romanticism Museum

The German Romanticism Museum presents unique originals with innovative exhibition forms that make it possible to experience the Romantic period as a key epoch. It is the first museum in the world dedicated to the Romantic era as a whole. In dialogue with the neighbouring Goethe House and the Goethe Gallery, manuscripts, graphic art, paintings and everyday objects are on display. The German Romanticism Museum offers a multimedia - in the Romantic sense synaesthetic - realisation of ideas, works and constellations of people. Goethe himself is put in a new light.

The German Romanticism Museum is supported by:

The Federal Government Commissioner for Culture and the Media, Hesse Ministry of Science and the Arts, City of Frankfurt am Main, Ernst Max von Grunelius Foundation, Deutsche Bank, Karsten Greve, Stiftung Polytechnische Gesellschaft, Kulturfonds Frankfurt RheinMain, Andrea and Carl-L. von Boehm-Bezing, Dirk Ippen, Wüstenrot Foundation, Art Mentor Foundation Lucerne, Dr Christoph Graf Douglas and Bergit Gräfin Douglas and many others.

![Logo: Deutsches Romantik-Museum](/docs/assets/images/deutsches-romantik-museum-logo-schwarz.svg)

### About MESO Digital Interiors GmbH

UNCOVERING THE CREATIVE POTENTIAL OF RELEVANT TECHNOLOGIES

MESO is a team of creative explorers, designers, strategists and makers, set to help shape the future of digital technologies. Founded in 1997 by designers who love computers and computer scientists with a soft spot for design, we aim to bridge disciplines and create hard- and software for communicative things and spaces.

![Logo: Meso](/docs/assets/images/meso.svg)
