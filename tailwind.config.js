/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  errorMode: 'class',
  theme: {
    extend: {
      keyframes: {
        "b-t-t": { 
          "0%": { transform: "translateY(100%)", "-webkit-transform": "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", "-webkit-transform": "translateY(0%)", opacity: "1"  },
        },
        "t-t-b": { 
          "0%": { transform: "translateY(0%)", "-webkit-transform": "translateY(0%)", opacity: "1" },
          "100%": { transform: "translateY(100%)", "-webkit-transform": "translateY(100%)", opacity: "0",},
        },
        "cross-in-t":{
          "0%": { transform: "rotate(0deg)", "transform-origin": "100% 50%", "-webkit-transform": "rotate(0deg)", "-webkit-transform-origin": "100% 50%" },
          "100%": { transform: "rotate(-45deg)", "transform-origin": "100% 50%", "-webkit-transform": "rotate(-45deg)", "-webkit-transform-origin": "100% 50%" }
        },
        "cross-out-t":{
          "0%": { transform: "rotate(-45deg)", "transform-origin": "100% 50%", "-webkit-transform": "rotate(-45deg)", "-webkit-transform-origin": "100% 50%"  },
          "100%": { transform: "rotate(0deg)", "transform-origin": "100% 50%", "-webkit-transform": "rotate(0deg)", "-webkit-transform-origin": "100% 50%" },
        },
        "cross-in-b":{
          "0%": { transform: "rotate(0deg)", "transform-origin": "100% 50%", "-webkit-transform": "rotate(0deg)", "-webkit-transform-origin": "100% 50%" },
          "100%": { transform: "rotate(45deg)", "transform-origin": "100% 50%", "-webkit-transform": "rotate(45deg)", "-webkit-transform-origin": "100% 50%" }
        },
        "cross-out-b":{
          "0%": { transform: "rotate(45deg)", "transform-origin": "100% 50%", "-webkit-transform": "rotate(45deg)", "-webkit-transform-origin": "100% 50%"  },
          "100%": { transform: "rotate(0deg)", "transform-origin": "100% 50%", "-webkit-transform": "rotate(0deg)", "-webkit-transform-origin": "100% 50%" },
        },
        "dropdown-open-b":{
          "0%": { transform: "scaleY(0)", "transform-origin": "50% 0%", "-webkit-transform": "scaleY(0)", "-webkit-transform-origin": "50% 0%"  },
          "100%": { transform: "scaleY(1)", "transform-origin": "50% 0%", "-webkit-transform": "scaleY(1)", "-webkit-transform-origin": "50% 0%" },
        },
        "dropdown-close-b":{
          "0%": { transform: "scaleY(1)", "transform-origin": "50% 0%", "-webkit-transform": "scaleY(1)", "-webkit-transform-origin": "50% 0%"  },
          "100%": { transform: "scaleY(0)", "transform-origin": "50% 0%", "-webkit-transform": "scaleY(0)", "-webkit-transform-origin": "50% 0%" },
        },
        "dropdown-open-t":{
          "0%": { transform: "scaleY(0)", "transform-origin": "50% 100%", "-webkit-transform": "scaleY(0)", "-webkit-transform-origin": "50% 100%"  },
          "100%": { transform: "scaleY(1)", "transform-origin": "50% 100%", "-webkit-transform": "scaleY(1)", "-webkit-transform-origin": "50% 100%" },
        },
        "dropdown-close-t":{
          "0%": { transform: "scaleY(1)", "transform-origin": "50% 100%", "-webkit-transform": "scaleY(1)", "-webkit-transform-origin": "50% 100%"  },
          "100%": { transform: "scaleY(0)", "transform-origin": "50% 100%", "-webkit-transform": "scaleY(0)", "-webkit-transform-origin": "50% 100%" },
        },
        "dropdown-open-arrow":{
          "0%": { transform: "rotate(45deg)", "-webkit-transform": "rotate(45deg)", },
          "100%": { transform: "rotate(-135deg)", "-webkit-transform": "rotate(-135deg)", },
        },
        "dropdown-close-arrow":{
          "0%": { transform: "rotate(-135deg)", "-webkit-transform": "rotate(-135deg)", },
          "100%": { transform: "rotate(-315deg)", "-webkit-transform": "rotate(-315deg)", },
        },
        "tabs-in": {
          "0%": {transform: "translateX(5%)", opacity: 0, "-webkit-transform": "translateX(5%)",},
          "100%": {transform: "translateY(0%)", opacity: 1, "-webkit-transform": "translateX(0%)",},
        },
        "tabs-out": {
          "0%": {transform: "translateX(0%)", opacity: 1, "-webkit-transform": "translateX(0%)",},
          "100%": {transform: "translateX(5%)", opacity: 0, "-webkit-transform": "translateX(5%)",},
        },
        "fade-in":{
          from: { opacity: 0, },
          to: { opacity: 1, }
        },
        "fade-out":{
          from: { opacity: 1, },
          to: { opacity: 0, }
        },
      },
      animation: {
        "in-bottom": "b-t-t 200ms ease-in-out forwards",
        "in-top": "t-t-b 200ms ease-in-out forwards",
        "cross-start-top": "cross-in-t 200ms ease-in-out forwards",
        "cross-destroy-top": "cross-out-t 200ms ease-in-out forwards",
        "cross-start-bottom": "cross-in-b 200ms ease-out forwards",
        "cross-destroy-bottom": "cross-out-b 200ms ease-in-out forwards",
        "dropdown-open-b": "dropdown-open-b 300ms ease-in-out forwards",
        "dropdown-close-b": "dropdown-close-b 300ms ease-in-out forwards",
        "dropdown-open-t": "dropdown-open-t 300ms ease-in-out forwards",
        "dropdown-close-t": "dropdown-close-t 300ms ease-in-out forwards",
        "dropdown-open-arrow": "dropdown-open-arrow 300ms ease-in-out forwards",
        "dropdown-close-arrow": "dropdown-close-arrow 300ms ease-in-out forwards",
        "tabs-in": "tabs-in 150ms ease-in-out forwards",
        "tabs-out": "tabs-out 150ms ease-in-out forwards",
        "fade-in": "fade-in 150ms ease-in-out forwards",
        "fade-out": "fade-out 150ms ease-in-out forwards",
      }
    },
  },
  plugins: [],
}
