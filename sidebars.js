

const sidebars = {

  docs: [
    'index',
    {
      type: 'category',
      label: '入门',
      link: {
        type: 'generated-index' // 添加此参数可以在点击这个 label 的时候有一个概览的界面
      },
      collapsed: false,
      items: [
        'installation',
        'tutorial'
      ]
    },
    {
      type: 'category',
      label: '基础组件',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'elements'
        }
      ]
    },
    {
      type: 'category',
      label: '布局组件',
      collapsed: true,
      items: [
        'layout/box',
        'layout/bottomnavigation',
        'layout/column',
        'layout/modalbottomsheetlayout',
        'layout/row',
        'layout/scaffold',
        'layout/surface',
        'layout/spacer',
        'layout/topappbar',
        'layout/custom_layout',
        'layout/intrinsic',
        'layout/subcomposelayout',
        'layout/parent_data'
      ]
    },
    {
      type: 'category',
      label: '设计',
      link: {
        type: 'generated-index'
      },
      collapsed: false,
      items: [
        {
          type: 'category',
          label: '动画（Animation）',
          link: {
            type: 'generated-index'
          },
          collapsed: true,
          items: [
            'design/animation/overview',
            'design/animation/animationVisibility',
            'design/animation/animateAsState',
            'design/animation/animatable',
            'design/animation/updateTransition'
          ]
        },
        {
          type: 'category',
          label: '主题（Theming）',
          link: {
            type: 'generated-index'
          },
          collapsed: true,
          items: [
            'design/theme/meetMaterialTheme',
            'design/theme/understandingMaterialTheme',
            'design/theme/customYourTheme',
          ]
        },
        {
          type: 'category',
          label: '手势（Gesture）',
          link: {
            type: 'generated-index'
          },
          collapsed: true,
          items: [
            'design/gesture/overview',
            'design/gesture/clickable&combinedClickable',
            'design/gesture/draggable',
            'design/gesture/swipeable',
            'design/gesture/transformer',
            'design/gesture/scrollable',
            'design/gesture/nestedScroll',
            'design/gesture/customGesture',
            'design/gesture/gesture_with_anim'
          ]
        },
        {
          type: 'category',
          label: '列表（Lists）',
          link: {
            type: 'generated-index'
          },
          collapsed: true,
          items: [
            'design/lists/overview',
            'design/lists/listItemClick',
          ]
        },
        {
          type: 'category',
          label: '图形（Graphics）',
          link: {
            type: 'generated-index'
          },
          collapsed: true,
          items: [
            'design/graphics/customDraw',
          ]
        },
      ]
    },
    'resources',
    {
      type: 'category',
      label: '技术原理',
      link: {
        type: 'generated-index'
      },
      collapsed: true,
      items: [
        'principle/recompositionScope',
        'principle/snapshot',
        'principle/recomposeWorkingPrinciple',
        'principle/gapBuffer',
        'principle/modifierStructure',
        'principle/composeAnnotation',
        'principle/composeRemoteImage'
      ]
    }
  ],

  opensourceProject: [
    {
      type: 'autogenerated',
      dirName: 'open-source-project'
    }
  ]

};

module.exports = sidebars;
