module.exports = function(name) {
  return `<?php

/**
 *
 * This class was be create automatically from \`Teed Maker Cli\`!
 * You can see how here:
 * https://github.com/teedmaker/cli
 *
 **/

class ${name}
{
  public function home()
  {
    return view('home.index');
  }
}
`;
}
