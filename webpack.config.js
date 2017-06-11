module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Nav: 'app/components/Nav.jsx',
      Main: 'app/components/Main.jsx',
      ArticlesList: 'app/components/ArticlesList.jsx',
      ListElement: 'app/components/ListElement.jsx',
      Article: 'app/components/Article.jsx',
      NewArticle: 'app/components/NewArticle.jsx',
      MainAdmin: 'app/components/MainAdmin.jsx',
      ArticlesListAdmin: 'app/components/ArticlesListAdmin',
      ListElementAdmin: 'app/components/ListElementAdmin',
      EditArticle: 'app/components/EditArticle',
      Page: 'app/components/Page',
    },
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules)/
      }
    ]
  }
}
