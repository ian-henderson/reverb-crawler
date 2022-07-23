# Reverb Crawler

A web crawler that crawls reverb's "On Sale" pages for given product types and categories to find the biggest percentage discounts in the first x "On Sale" pages. The data is currently dumped into a `listings.json` file in the project directory.

## Getting Started

### Requirements

- Node.js and NPM. (I developed this with Node.js v18.4.0 and NPM v8.12.1. Earlier versions might work but aren't supported)

### Installation

```bash
git clone https://github.com/ian-henderson/reverb-crawler.git;
cd reverb-crawler;
npm install;
```

### Running

```bash
npm run dev;
```

Note: project is still in development. You can only configure the webcrawler in `src/index.ts` currently. Config file support is on the way!
