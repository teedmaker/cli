module.exports = function (name) {
  return `<?php

/**
 *
 * This class was be create automatically from \`Teed Maker Cli\`!
 * You can see how here:
 * https://github.com/teedmaker/cli
 *
 **/

use App\\Services\\Base as Base;

class ${name} extends Base
{
  public function all()
  {
    return $this->fetchAll();
  }
}
`;
}
