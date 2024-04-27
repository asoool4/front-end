module.exports = {
    // Other configurations...
    module: {
       rules: [
         // Other rules...
         {
           test: /\.css$/,
           use: ['style-loader', 'css-loader'],
         },
       ],
    },
   };
   