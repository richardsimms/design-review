#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const os = require('os');

// ANSI colors for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  dim: '\x1b[2m',
  bold: '\x1b[1m',
  cyan: '\x1b[36m'
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

function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => rl.question(query, ans => {
    rl.close();
    resolve(ans);
  }));
}

async function showMenu() {
  log('\n🎨 Design Review Skill Installer', 'blue');
  log('━'.repeat(50), 'dim');
  log('\nSelect installation type:\n', 'cyan');
  log('  1. Claude Code only (.claude/skills/)', 'reset');
  log('  2. Cursor only (.cursorrules)', 'reset');
  log('  3. Codex only (AGENTS.md)', 'reset');
  log('  4. All platforms (install everything)', 'reset');
  log('  5. Cancel\n', 'dim');

  const answer = await askQuestion('Choice [1-5]: ');
  return answer.trim();
}

async function askCodexLocation() {
  log('\n📁 Codex installation location:\n', 'cyan');
  log('  1. Project-level (./AGENTS.md)', 'reset');
  log('  2. Global (~/.codex/AGENTS.md)\n', 'reset');

  const answer = await askQuestion('Choice [1-2]: ');
  return answer.trim();
}

function installClaude(projectRoot, packageDir) {
  const templatesDir = path.join(packageDir, 'templates');
  const targetDir = path.join(projectRoot, '.claude', 'skills', 'design-review');

  log(`\n📍 Installing to .claude/skills/design-review`, 'dim');

  if (!fs.existsSync(templatesDir)) {
    log('\n❌ Error: Claude templates directory not found', 'red');
    return false;
  }

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    log(`✓ Created .claude/skills/design-review`, 'green');
  } else {
    log(`⚠ Directory exists, updating files...`, 'yellow');
  }

  const files = fs.readdirSync(templatesDir);
  let copiedCount = 0;

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

  log(`\n✅ Installed ${copiedCount} files to Claude Code`, 'green');
  return true;
}

function installCursor(projectRoot, packageDir) {
  const templateFile = path.join(packageDir, 'templates-cursor', '.cursorrules');
  const targetFile = path.join(projectRoot, '.cursorrules');

  log(`\n📍 Installing to .cursorrules`, 'dim');

  if (!fs.existsSync(templateFile)) {
    log('\n❌ Error: Cursor template not found', 'red');
    return false;
  }

  if (fs.existsSync(targetFile)) {
    log('\n⚠ Warning: .cursorrules already exists!', 'yellow');
    log('   Please backup your existing file and re-run the installer.', 'yellow');
    log('   Installation aborted to prevent overwriting your configuration.', 'dim');
    return false;
  }

  try {
    fs.copyFileSync(templateFile, targetFile);
    log(`✓ Created .cursorrules`, 'green');
    log(`\n✅ Installed to Cursor`, 'green');
    return true;
  } catch (err) {
    log(`\n❌ Error: ${err.message}`, 'red');
    return false;
  }
}

async function installCodex(projectRoot, packageDir) {
  const templateFile = path.join(packageDir, 'templates-codex', 'AGENTS.md');

  if (!fs.existsSync(templateFile)) {
    log('\n❌ Error: Codex template not found', 'red');
    return false;
  }

  const location = await askCodexLocation();

  let targetFile;
  let displayPath;

  if (location === '1') {
    // Project-level
    targetFile = path.join(projectRoot, 'AGENTS.md');
    displayPath = './AGENTS.md';
    log(`\n📍 Installing to ${displayPath}`, 'dim');
  } else if (location === '2') {
    // Global
    const codexDir = path.join(os.homedir(), '.codex');
    targetFile = path.join(codexDir, 'AGENTS.md');
    displayPath = '~/.codex/AGENTS.md';
    log(`\n📍 Installing to ${displayPath}`, 'dim');

    // Create .codex directory if it doesn't exist
    if (!fs.existsSync(codexDir)) {
      fs.mkdirSync(codexDir, { recursive: true });
      log(`✓ Created ~/.codex directory`, 'green');
    }
  } else {
    log('\n❌ Invalid choice', 'red');
    return false;
  }

  if (fs.existsSync(targetFile)) {
    // File exists, append with section header
    log(`\n⚠ ${displayPath} already exists`, 'yellow');
    log(`  Appending design-review section...`, 'dim');

    try {
      const templateContent = fs.readFileSync(templateFile, 'utf8');
      const existingContent = fs.readFileSync(targetFile, 'utf8');

      // Check if already installed
      if (existingContent.includes('# SEEK Design Audit Agent')) {
        log(`\n⚠ Design Review already installed in ${displayPath}`, 'yellow');
        log(`  Skipping to avoid duplicates.`, 'dim');
        return true;
      }

      const separator = '\n\n' + '━'.repeat(80) + '\n\n';
      const newContent = existingContent + separator + templateContent;

      fs.writeFileSync(targetFile, newContent, 'utf8');
      log(`✓ Appended to ${displayPath}`, 'green');
      log(`\n✅ Installed to Codex (${displayPath})`, 'green');
      return true;
    } catch (err) {
      log(`\n❌ Error: ${err.message}`, 'red');
      return false;
    }
  } else {
    // New file
    try {
      fs.copyFileSync(templateFile, targetFile);
      log(`✓ Created ${displayPath}`, 'green');
      log(`\n✅ Installed to Codex (${displayPath})`, 'green');
      return true;
    } catch (err) {
      log(`\n❌ Error: ${err.message}`, 'red');
      return false;
    }
  }
}

async function main() {
  const projectRoot = process.cwd();
  const packageDir = path.dirname(__dirname);

  const choice = await showMenu();

  log(''); // Empty line for spacing

  if (choice === '5' || !choice) {
    log('Installation cancelled.\n', 'dim');
    process.exit(0);
  }

  let success = false;

  switch (choice) {
    case '1':
      // Claude Code only
      success = installClaude(projectRoot, packageDir);
      if (success) {
        log('\n📖 Usage:', 'blue');
        log('   /design-review              Start comprehensive audit', 'dim');
        log('   /design-review screenshot   Review visual design', 'dim');
        log('   /design-review src/         Audit codebase', 'dim');
      }
      break;

    case '2':
      // Cursor only
      success = installCursor(projectRoot, packageDir);
      if (success) {
        log('\n📖 Usage:', 'blue');
        log('   Cursor will automatically use .cursorrules', 'dim');
        log('   Ask Cursor to audit designs or code', 'dim');
      }
      break;

    case '3':
      // Codex only
      success = await installCodex(projectRoot, packageDir);
      if (success) {
        log('\n📖 Usage:', 'blue');
        log('   Codex will automatically read AGENTS.md', 'dim');
        log('   Ask Codex to audit designs or code', 'dim');
      }
      break;

    case '4':
      // All platforms
      const claudeSuccess = installClaude(projectRoot, packageDir);
      const cursorSuccess = installCursor(projectRoot, packageDir);
      const codexSuccess = await installCodex(projectRoot, packageDir);

      success = claudeSuccess || cursorSuccess || codexSuccess;

      if (success) {
        log('\n📖 Usage:', 'blue');
        log('   Claude Code: /design-review', 'dim');
        log('   Cursor: Ask Cursor to audit designs', 'dim');
        log('   Codex: Ask Codex to audit designs', 'dim');
      }
      break;

    default:
      log('❌ Invalid choice. Installation cancelled.\n', 'red');
      process.exit(1);
  }

  if (success) {
    log('\n🔗 Documentation: https://www.designreview.cc\n', 'cyan');
  }
}

main().catch(err => {
  log(`\n❌ Unexpected error: ${err.message}`, 'red');
  process.exit(1);
});
