export default {
  index: {
    type: 'page',
    display: 'hidden'
  },
  documentation: {
    type: 'page',
    title: 'Documentation',
    items: {
      index: {
        title: 'Introduction'
      },
      guide: {
        title: 'Guide',
        items: {
          "first-slash-command": {
            title: 'Your First Slash Command'
          },
          "using-commands": {
            title: 'Using Commands'
          },
          caret: {
            title: 'Caret',
          }
        }
      },
      advanced: {
        title: 'Advanced',
        items: {
          "glob-patterns": {
            title: 'Glob Patterns'
          }
        }
      }
    }
  }
}
