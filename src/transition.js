export function fadeTextIn(prevColor, newColor) {
  return `
        @keyframes fadeTextIn{
            0% {opacity: 0; color: ${prevColor};}
            100% {opacity: 1; color: ${newColor}}
        }
    `;
}
export function fadeTextOut(prevColor, newColor) {
  return `
        @keyframes fadeTextOut{
            0% {opacity: 1; color: ${prevColor};}
            100% {opacity: 0; color: ${newColor};}
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
