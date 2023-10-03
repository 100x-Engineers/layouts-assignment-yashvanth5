module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "neutral-50" : "#F9F9F9",
        "neutral-200" : "#E4E4E4",
        "neutral-400" : "#A2A2A2",
        "neutral-500" : "#737373",
        "neutral-600" : "#525252",
        "neutral-700" : "#404040",
        "neutral-800": " #262626",
        "neutral-1000"  : "#000000",
         "red-error" : " #8B141A" ,
         "twitter-blue" : "#1D9BF0",
         "dark-blue" : "#1871CA",
            "stroke" : "#FFFFFF3D",
            // "stroke-2":"rgba(29, 155, 240, 0.24)",
            "searchbar-fill" : "#212327",
            'para-color' : '#FFFFFF99',
 
 
        
         
       } ,
       spacing: {
        // paading
        '0.9375' :'0.9375rem',

        // gap 
        '0.625': '0.625rem', 

        //absolute
        '5.625': '5.625rem',
        '16.6875': '16.6875rem',
        
      },
      lineHeight: {
        '1.125': '1.125rem',
      },
      letterSpacing: {
        '0.01031': '-0.01031rem',
      },

      fontFamily: {
        'inter': ['Inter', 'sans'], 
        'chirp': ['font-chirp', 'sans'],
      },
      width: {
        "21" : "21rem", 
        '23': '23rem',
        '24.375' : '24.375rem',
       '4.1875' : '  4.1875rem' ,
       "0.10713" : "0.10713rem",
      },

      height: {
        '46': '46rem',
        '20.8': '20.8rem',
        "0.0625": "0.0625rem",

        "0.57144" : "0.57144rem",
        "0.71431" : "0.71431rem",
        "0.92856": "0.92856rem",
        "0.42856": "0.42856rem",
      },
      borderRadius: {
        "4.0625": "4.0625rem",
       
        "1.875" : "1.875rem",
       "6249.9375"  : "6249.9375rem",
       '8xl' : '6.25rem'
        
      },
      boxShadow: {
        'custom-shadow-one': '0px 8px 16px 0px rgba(0, 0, 0, 0.25)',
      },

      fontSize: {
        '0.9375': '0.9375rem',
      },
    },
  },
  plugins: [],
};
