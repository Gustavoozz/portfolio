/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
  	screens: {
  		sm: '640px',
  		md: '768px',
  		lg: '1024px',
  		xl: '1280px'
  	},
  	extend: {
  		fontFamily: {
  			inter: ["inter", "sans-serif"],
  			poppins: ["Poppins", "sans-serif"]
  		},
  		colors: {
  			mainColors: {
  				gray: '#1B1B1F',
  				blue: '#0077B6',
  				light: '#464647',
  				white: '#E7E7E7'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundImage: {
  			bkgGradient: 'linear-gradient(to right, #1B1B1F 30%, #000000 100%)',
  			btnGradient: 'linear-gradient(149deg, #0077B6 0%, #6CA6E9 100%)'
  		},
  		'animation': {
  			'flip': 'flip 6s infinite steps(2, end)',
  			'rotate': 'rotate 3s linear infinite both',
  			'text-gradient': 'text-gradient 1.5s linear infinite',
  			'shine': 'shine 2s linear infinite'
  		},
  		'keyframes': {
  			'flip': {
  				'to': {
  					'transform': 'rotate(360deg)'
  				},
  				'text-gradient': {
  					'to': {
  						'backgroundPosition': '200% center'
  					}
  				}
  			},
  			'rotate': {
  				'to': {
  					'transform': 'rotate(90deg)'
  				}
  			},
  			'shine': {
  				'from': {
  					'backgroundPosition': '0 0'
  				},
  				'to': {
  					'backgroundPosition': '-200% 0'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")]
}

