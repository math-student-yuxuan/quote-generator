export function fadeTextIn(prevColor, newColor) {
  return `
        @keyframes fadeTextIn {
            0% {opacity: 0; color: ${prevColor}; font-size: 10px;}
            100% {opacity: 1; color: ${newColor}; font-size: 30px;}
        }
    `;
}
export function fadeTextOut(prevColor, newColor) {
  return `
        @keyframes fadeTextOut {
            0% {opacity: 1; color: ${prevColor}; font-size: 30px;}
            100% {opacity: 0; color: ${newColor}; font-size: 10px;}
        }
    `;
}
export function fadeColor(prevColor, newColor) {
  return `
        @keyframes fadeColor  {
            0% {background-color: ${prevColor}}
            100% {background-color: ${newColor}}
        }  
    `;
}

export function combine(prevColor, newColor) {
  return `
        @keyframes fadeTextIn {
            0% {opacity: 0; color: ${prevColor}; transform: translateY(-20px)}
            100% {opacity: 1; color: ${newColor}; transform: translateY(0px)}
        }
        @keyframes fadeTextOut {
            0% {opacity: 1; color: ${prevColor};}
            100% {opacity: 0; color: ${newColor};}
        }
        @keyframes fadeColor  {
            0% {background-color: ${prevColor}}
            100% {background-color: ${newColor}}
        }  
    `;
}
