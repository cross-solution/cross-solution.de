<?php
namespace Deployer;

require 'recipe/zend_framework.php';

// Project name
set('application', 'cross-home');

// Shared files/dirs between deploys
add('shared_files', [
    '.env',
    '.env.production',
    'public/frankfurt-im-nebel.jpg'
]);

add('shared_dirs', [
    'public/downloads',
]);

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
    ~/.yarn/bin/yarn;
    node_modules/.bin/quasar build -m ssr;
');

task('restart', '
    sudo systemctl restart nodeserver-quasar.service;
');