const resume = require("../resume");
const fs = require("fs");
const copy = require('recursive-copy');
const ejs = require('ejs');
const path = require("path");

const companiesLogos = {
  "Craft Foundry": "assets/images/cf.jpeg",
  "Armada Delivery Solutions": "assets/images/armada.jpeg",
  "Info Langue Sousse": "assets/images/ils.jpeg",
  "TakiAcademy": "assets/images/ta.png",
  "Tildah": "assets/images/tildah.png",
  "Think-it": "assets/images/thinkit.jpeg"
}

module.exports = async (output) => {
  const templatePath = path.resolve(__dirname, "../web/template.ejs");
  const templateContent = fs.readFileSync(templatePath, "utf-8")
  const assetsSrc = path.resolve(__dirname, "../web/assets");
  const html = ejs.render(templateContent, { ...resume, companiesLogos });
  const outputDir = path.resolve(process.cwd(), output);
  const outputIndex = path.resolve(outputDir, "index.html") 
  const outputAssets = path.resolve(outputDir, "assets/") 

  if(fs.existsSync(outputDir)) {
    console.log(`${outputDir} directory already exists, it will be deleted right now!`)
    fs.rmSync(outputDir, { recursive: true });
  }

  fs.mkdirSync(outputDir);
  fs.mkdirSync(outputAssets);

  fs.writeFileSync(outputIndex, html);
  await copy(assetsSrc, outputAssets)
  console.log(`Rendered! My resume should now be located at ${outputIndex}`);
}


