#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// ANSI colors for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  dim: '\x1b[2m',
  bold: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function copyRecursive(src, dest) {
  const stats = fs.statSync(src);
  
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    
    const files = fs.readdirSync(src);
    for (const file of files) {
      copyRecursive(path.join(src, file), path.join(dest, file));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

function main() {
  log('\n🎨 Design Review Skill Installer', 'blue');
  log('━'.repeat(45), 'dim');

  // Get the directory where the user ran npx (their project root)
  const projectRoot = process.cwd();
  
  // Get the package directory (where this script lives)
  // __dirname is bin/, so we go up one level to get package root
  const packageDir = path.dirname(__dirname);
  const templatesDir = path.join(packageDir, 'templates');
  
  // Target: .claude/skills/design-review in the user's project
  const targetDir = path.join(projectRoot, '.claude', 'skills', 'design-review');
  
  log(`\n📁 Project:  ${projectRoot}`, 'dim');
  log(`📍 Target:   .claude/skills/design-review`, 'dim');
  
  // Check if templates exist
  if (!fs.existsSync(templatesDir)) {
    log('\n❌ Error: Templates directory not found in package', 'red');
    log(`   Expected: ${templatesDir}`, 'dim');
    log('\n   This might be a packaging issue. Please report at:', 'dim');
    log('   https://github.com/richardsimms/design-review/issues', 'dim');
    process.exit(1);
  }

  // Create target directory
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    log(`\n✓ Created .claude/skills/design-review`, 'green');
  } else {
    log(`\n⚠ Directory exists, updating files...`, 'yellow');
  }

  // Copy all files from templates to target
  const files = fs.readdirSync(templatesDir);
  let copiedCount = 0;
  
  log('', 'reset');
  for (const file of files) {
    const srcPath = path.join(templatesDir, file);
    const destPath = path.join(targetDir, file);
    
    try {
      copyRecursive(srcPath, destPath);
      log(`  ✓ ${file}`, 'green');
      copiedCount++;
    } catch (err) {
      log(`  ✗ ${file}: ${err.message}`, 'red');
    }
  }

  log('\n' + '━'.repeat(45), 'dim');
  log(`✅ Installed ${copiedCount} files`, 'green');
  
  log('\n📖 Usage:', 'blue');
  log('   /design-review              Start comprehensive audit', 'dim');
  log('   /design-review screenshot   Review visual design', 'dim');
  log('   /design-review src/         Audit codebase', 'dim');
  
  log('\n🔗 Docs: https://design-review-skill.vercel.app\n', 'dim');
}

main();
