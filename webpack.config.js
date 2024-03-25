const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.ts', // Asegúrate de que este sea tu punto de entrada principal
  output: {
    filename: 'app.min.js', // Nombre del archivo de salida
    path: path.resolve(__dirname, ''), // Directorio de salida
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resuelve estas extensiones
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Todos los archivos .ts
        use: 'ts-loader', // se procesarán con ts-loader
        exclude: /node_modules/, // excepto los que estén en node_modules
      },
    ],
  },
  optimization: {
    minimize: false, // Habilita la minificación
    minimizer: [new TerserPlugin()], // Usa TerserPlugin para la minificación
  },
};
