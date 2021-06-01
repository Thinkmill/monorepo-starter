module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          useBuiltIns: "usage",
          corejs: "3.8",
          targets: {
            node: 14,
            browsers: [
              'last 2 chrome versions',
              'last 2 firefox versions',
              'last 2 safari versions',
              'last 2 edge versions',
            ],
          },
        },
      } 
    ],
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
    {
      "corejs": 3
    },
  ],
  ]
};
