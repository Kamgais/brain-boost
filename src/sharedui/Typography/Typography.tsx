


interface Props {
  variant?: "headline" | "middleline" | "subtitle" | "menu" | "paragraph";
  children: React.ReactNode;
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span";
  theme?: "black" | "gray" | "white" | "primary" | "secondary-dark" | "secondary-light" | "secondary-bright";
  weight?: "regular" | "medium" | "bold";
  style?:any
}



function Typography({variant = "paragraph",component: Component = "div", theme = "black", weight = "regular" , style, children}: Props) {

  let variantStyles: any;
  let weightStyles:any;
  let themeStyles: any;

  switch(variant) {
    case "headline" : 
      variantStyles = {
        fontSize: 48,
        fontWeight: 'bold'
      }
      break;
    case "middleline" : 
      variantStyles = {
        fontSize: 32,
        fontWeight: 'light'
      }
      break;

    case "subtitle": 
      variantStyles = {
        fontSize: 20,
        fontWeight: 'regular'
      }
      break;
    
    case "menu":
      variantStyles = {
        fontSize: 16,
        fontWeight: 'bold'
      }
      break;
    case "paragraph":
      variantStyles = {
        fontSize: 16,
        fontWeight: 'regular'
      }
      break;
  }

  switch(theme) {

    case "black": 
      themeStyles = {
        color: 'black',
      }
      break;
    case "gray": 
      themeStyles = {
        color: '#656565'
      }
      break;
    case "primary": 
      themeStyles = {
        color: "#029FC8"
      }
      break;
    case "secondary-dark":
      themeStyles = {
        color: "#047D99"
      }
      break;
    case "secondary-light":
      themeStyles = {
        color: '#28C4E8'
      }
      break;
    case "secondary-bright": 
      themeStyles = {
        color: '#6ADCEF'
      }
      break;
    case "white": 
      themeStyles = {
        color: '#ffffff'
      }
      break;

  }


  switch(weight) {
    case 'regular': 
      weightStyles = {
        fontWeight: 'regular'
      }
      break;
    case 'medium' :
      weightStyles = {
        fontWeight: 'medium'
      }
      break;
    case "bold": 
      weightStyles = {
        fontWeight: 'bold'
      }
      break;
  }
  return (
    <Component style={{...variantStyles, ...themeStyles,  ...style }}>
    {children}
    </Component>
  )
}

export default Typography
