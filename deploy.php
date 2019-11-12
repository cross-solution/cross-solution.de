<?php
namespace Deployer;

require 'recipe/zend_framework.php';

// Project name
set('application', 'cross-home');

// Project repository
set('repository', 'https://github.com/cross-solution/cross-solution.de.git');

set('default_stage', 'prod');

// deploy to Hosts
host('quasar.cross-solution.de')
    ->user('nuxt')
    ->stage('prod')
    ->multiplexing(false) 
    ->set('deploy_path', '/srv/cross-solution')
    ->set('writableusesudo', true);
    
// if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');

// run npm 
after('deploy:symlink', 'npm');

// restart nodeserver
after('cleanup', 'restart');

task('npm', '
    npm i;
    npm run build;
    npm run generate;
');

task('restart', '
    systemctl restart node-server-cross;
');