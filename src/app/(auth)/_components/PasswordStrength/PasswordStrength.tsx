import { defaultOptions } from "check-password-strength";



interface Props {
    passStrength: number
}

function PasswordStrength({passStrength}: Props) {
    let strengthColor:any;
    let wordColor:any;

    switch(passStrength) {

        case(0) : 
            strengthColor = {
              backgroundColor: '#e84118',
            }
            wordColor = {
                color: '#e84118'
            }
            break;
        case(1) : 
            strengthColor = {
                backgroundColor: '#e67e22',
                
            }
            wordColor = {
                color: '#e67e22'
            }
            break;
        case(2):
            strengthColor = {
                backgroundColor: '#f1c40f'
            }
            wordColor = {
                color: '#f1c40f'
            }
            break;
        case(3): 
            strengthColor = {
                backgroundColor: '#2ecc71'
            }
            wordColor = {
                color: '#2ecc71'
            }
            break;
    }
  return (
    <div style={{display: 'flex', gap: '4px', alignItems: 'center'}}>
      {
        Array.from({length: passStrength+1}).map((i, index) => (
            <div key={index} style={{...strengthColor, 
                height: 4,
                width: 32,
                borderRadius: 50
            }}>

            </div>
        ))
      }
      <p style={{...wordColor, fontSize: '12px', textTransform: 'lowercase'}}>{defaultOptions[passStrength].value}</p>
    </div>
  )
}

export default PasswordStrength
