const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true,
  },
  // images: {
  //   domains: ['res.cloudinary.com', 'media.dev.to']
  // },
  output: 'export',
  distDir: 'out'
}