"use client";


import { useState } from 'react';


interface ButtonProps  {
   size:  "small" | "medium" | "large";
   variant?: "accent" | "secondary" | "outline-primary" |  "gray" | "disabled" | "ico" |"danger";
   icon?:any;
   rounded: "md" | "lg" | "full";
   iconTheme?: "accent" | "secondary" | "gray";
   iconPosition?: "left"| "right";
   disabled?: boolean;
   isLoading?: boolean;
   type?: "button" | "submit";
   children?: React.ReactNode;
   style?: any
}
function Button({
    size = "medium",
    variant = "accent",
    icon,
    iconTheme = "accent",
    iconPosition = "right",
    disabled,
    rounded,
    isLoading,
    type = "button",
    children,
    style
}: ButtonProps) {

    const [isHovered, setHovered] = useState(false);

    let variantStyles: any;
    let sizeStyles: any;
    let defaultStyles = {
        outline: 'none',
        borderRadius: rounded === 'md' ? '7px': '50px',
        cursor: 'pointer',
        transition: 'all 0.2s ease-out',
        fontFamily: 'inherit'
    }
    let icoSize: number = 0;

    switch (variant) {
        case "accent": //Default
            variantStyles = {
                backgroundColor: isHovered ?'#2acaf1': '#029FC8',
                borderWidth: '0px',
                color: 'white',

            };
            break;
        case "secondary":
            variantStyles = {
                backgroundColor: isHovered ? 'rgb(5, 162, 197)' : '#047D99',
                borderWidth: '0px',
                color: '#f3f3f3'
            };
            break;
        case "disabled":
            variantStyles = {
                backgroundColor: '#B0B0B0',
                border: 'none',
                cursor: 'not-allowed',
                borderWidth: '1px',
                color: '#f3f3f3'

            };
            break;
        case "ico":
            if(iconTheme === 'accent') {
                variantStyles = {
                    backgroundColor: isHovered ?'#2acaf1': '#029FC8',
                    borderWidth: '0px',
                    color: 'white',
                    borderRadius: '50%'
                };
            }
            if(iconTheme === 'secondary') {
                variantStyles = {
                backgroundColor: isHovered ? '#28C4E8' : '#047D99',
                borderWidth: '0px',
                color: '#f3f3f3'
                }; 
            }
            

            break;
        case "outline-primary":
            variantStyles = {
                backgroundColor: 'white',
                color: '#029FC8',
                borderWidth: '2px',
                borderColor: '#029FC8',
                borderStyle: 'solid',

            };
            break;
        case "gray":
            variantStyles = {
                backgroundColor: isHovered? '#EAEAEA': '#EAEAEA',
                color: '#878787',
                fontWeight: 'regular',
                border: 'none'
                

            }
        break;
        case "danger":
            variantStyles = {
                backgroundColor: isHovered? '#EAEAEA': '#EAEAEA',
                color: '#FD6262',
                border: 'none',
                fontWeight: '100px'
                

            }
        break;
            
        default :
            variantStyles = {
                backgroundColor: isHovered ?'#029FC8': '#029FC880',
                textColor: 'white',
            }
    }

    switch (size) {
        case "small":
            sizeStyles =  {
              fontWeight: 'bold',
              fontSize: '14px',
              padding: '10px 20px',
              
            };
            break;
        case "medium":
            sizeStyles = {
            fontWeight: 'bold',
              fontSize: '15px',
              padding: '15px 35px',
            };
            break;
        case "large":
            sizeStyles = {
                 fontWeight: 'bold',
                fontSize: '15px',
                maxWdth: '423px',
                width: '100%',
                height: 52, 
            };
            break;
    }


  return (
   <>
   <button
   type={type}
   style={{...defaultStyles, ...sizeStyles,...variantStyles,...style}}
   disabled={disabled}
   onMouseEnter={() => setHovered(true)}
   onMouseLeave={() => setHovered(false)}
   >
    {
        icon && variant === 'ico' ? <>{icon}</> : <>{children}</>
    }
   </button>
  
   </>
  )
}

export default Button
