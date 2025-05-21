#!/usr/bin/env node
import { spawnSync } from 'child_process';

function run(cmd, args) {
    const result = spawnSync(cmd, args, { stdio: 'inherit' });
    if (result.error) {
        throw result.error;
    }
    if (result.status !== 0) {
        throw new Error(`${cmd} ${args.join(' ')} failed with code ${result.status}`);
    }
}

try {
    run('npm', ['run', 'lint']);
    if (spawnSync('which', ['composer']).status === 0) {
        run('composer', ['php:lint']);
    } else {
        console.warn('composer not found; skipping PHP lint');
    }
    console.log('All formatter checks passed.');
} catch (err) {
    console.error(err.message);
    process.exit(1);
}
