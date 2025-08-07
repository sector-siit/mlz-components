module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // Nueva funcionalidad
        'fix',      // Corrección de bugs
        'docs',     // Documentación
        'style',    // Cambios de formato (espacios, punto y coma, etc)
        'refactor', // Refactorización de código
        'perf',     // Mejoras de performance
        'test',     // Agregar o corregir tests
        'chore',    // Cambios en el build, herramientas auxiliares
        'ci',       // Cambios en CI/CD
        'build',    // Cambios en el sistema de build
        'revert'    // Revertir commits anteriores
      ]
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 100],
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always']
  }
};
