/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jsx,js}",
    "./index.html"
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      fontFamily : {
        inter : ["inter", "sans-serif"],
        poppins : ["Poppins", "sans-serif"]
      },
      colors : {
        mainColors : {
          gray : "#1B1B1F",
          blue : "#0077B6",
          light : "#464647",
          white : "#E7E7E7"
        },
      },
      backgroundImage : {
        bkgGradient : "linear-gradient(to right, #1B1B1F 30%, #000000 100%)",
        btnGradient : "linear-gradient(149deg, #0077B6 0%, #6CA6E9 100%)"
    },
        "animation": {
          "flip": "flip 6s infinite steps(2, end)",
          "rotate": "rotate 3s linear infinite both",
          "text-gradient": "text-gradient 0.5s linear infinite",
           "shine": "shine 2s linear infinite"
        },
        "keyframes": {
          "flip": {
            "to": {
              "transform": "rotate(360deg)"
            },
            
            
            "text-gradient": {
            "to": {
              "backgroundPosition": "200% center"
            }
          }
          },
          "rotate": {
            "to": {
              "transform": "rotate(90deg)"
            }
          },
          "shine": {
            "from": {
              "backgroundPosition": "0 0"
            },
            "to": {
              "backgroundPosition": "-200% 0"
            }
          }

          
        },
        
      

  
    },
  },
  plugins: [],
}

