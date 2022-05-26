/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true 
  },
  redirects() {
		return [
			{
				source: '/github',
				destination: 'https://github.com/ProxityStudios',
				permanent: true
			},
			{
				source: '/discord',
				destination: 'https://discord.gg/wrhwwJQwas',
				permanent: true
			},
                        {
                               source: '/support-center'
                               destination: 'https://discord.gg/wrhwwJQwas'
                               permanent: true
                        }
		];
	}

}
