/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:[
            "images.pexels.com"
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.svg'], // Add '.svg' if it's not already there
      },
    
}

module.exports = nextConfig
