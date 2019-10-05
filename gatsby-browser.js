require("prismjs/themes/prism-okaidia.css");
require("prismjs/plugins/line-numbers/prism-line-numbers.css");
require("aos/dist/aos.css");
require("aos").init();

exports.onInitialClientRender = () => {
  require("typeface-nunito");
};
