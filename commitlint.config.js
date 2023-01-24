// commitlint.config.js
module.exports = {
  extends: [
    "@commitlint/config-conventional"
  ],
  // 这里定义的任何规则都将覆盖@commitlint/config常规中的规则
  "rules": {
    "type-enum": [2, 'always', [
      'feat', 'fix', 'docs', 'perf', 'revert', 'ci', 'test', 'refactor','build','style','chore'
    ]],
  }
}
