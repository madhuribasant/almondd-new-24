/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env:{
    service_id:process.env.NEXT_PUBLIC_SERVICE_ID,
    template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID,
  },
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'cdn.sanity.io',
      }
    ]
  }
}

module.exports = nextConfig
