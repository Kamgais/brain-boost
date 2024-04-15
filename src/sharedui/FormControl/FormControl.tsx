import Typography from "../Typography/Typography";
import classes from './formControl.module.scss';
import Image from "next/image";


interface Props {
    type?: 'text' | 'file' | 'email' |  'password' | 'select' | 'longtext' | 'number' | 'radio';
    size?: 'large' | 'medium' | 'small';
    label?: string;
    placeholder?: string;
    required?: boolean;
    options?: any[]

}

function FormControl({
    type = 'text',
    label,
    placeholder,
    required = false,
    options,
    size,
    ...rest
}: Props) {
  

    let sizeStyles = {
        width: '100%',
        height: type === 'longtext' ? '150px' : '50px'
    }


    switch(type) {

        case 'text' : return (
            <div className={classes.formControl}>
                <Typography variant="paragraph" component="label" theme="gray" weight="bold">{label}</Typography>
                <input type="text" placeholder={placeholder} required={required} {...rest} style={sizeStyles} />
            </div>
        )


        case 'longtext' : return (
            <div className={classes.formControl}>
                <Typography variant="paragraph" component="label" theme="gray" weight="bold">{label}</Typography>
                <textarea  placeholder={placeholder} required={required} {...rest} style={sizeStyles} />
            </div>
        )

        case 'select' : return (
            <div className={classes.formControl}>
                <Typography variant="paragraph" component="label" theme="gray" weight="bold">{label}</Typography>
                <select style={sizeStyles}>
                    {
                        options?.map((opt,index) => (
                            <option value={opt.toLowerCase()} key={index}>{opt}</option>
                        ))
                    }
                </select>
            </div>
        )

        case 'file': return (
            <div className={classes.formControl}>
                <label htmlFor="image" className={classes.formControl_upload_label}>
                    <Image src='/images/upload.gif' width={50} height={50} alt=""/>
                    <Typography variant="paragraph" component="p" theme="primary">Add Cover Image</Typography>
                </label>
                <input type="file" id="image"  />
            </div>
        )

        case 'number': return (
            <div className={classes.formControl}>
                <Typography variant="paragraph" component="label" theme="gray" weight="bold">{label}</Typography>
                <input type="number" placeholder={placeholder} required={required} {...rest} style={sizeStyles} min={1} />
            </div>
        )

        case 'radio': return (
            <div className={classes.formControl}>
                <Typography variant="paragraph" component="label" theme="gray" weight="bold">{label}</Typography>
                <div className={classes.formControl_radio_container}>
                {
                    options?.map((option,index) => (
                        <>
                         <input type="radio" name="question_type"  id={index.toString()}/>
                        <label htmlFor={index.toString()} className={classes.formControl_question_type_label}>
                            <Image src={option.src} width={50} height={50} alt=""/>
                            <Typography variant="paragraph" component="p" theme="gray" weight="bold">{option.label}</Typography>
                        </label>
                      
                        </>
                    ))
                }
                </div>
            </div>
        )
    }
}

export default FormControl