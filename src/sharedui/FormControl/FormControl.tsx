'use client';

import { useState } from "react";
import Typography from "../Typography/Typography";
import classes from './formControl.module.scss';
import Image from "next/image";
import React from "react";


interface Props {
    type?: 'text' | 'file' | 'email' |  'password' | 'select' | 'longtext' | 'number' | 'radio'| 'checkbox';
    size?: 'large' | 'medium' | 'small';
    label?: string;
    placeholder?: string;
    required?: boolean;
    register?: any;
    trigger?:any;
    setValue?:any;
    name?: string;
    error?:any;
    options?: any[]

}

function FormControl({
    type = 'text',
    label,
    placeholder,
    required = false,
    options,
    size,
    register,
    trigger,
    setValue,
    name,
    error,
    ...rest
}: Props) {
  
    const [uploadFileInputLabel, setUploadFileInputLabel] = useState('Add Cover Image');
    const [file, setFile] = useState<any>();

    let sizeStyles = {
        width: '100%',
        height: type === 'longtext' ? '150px' : '50px'
    }

    const {onChange, onBlur, name:fieldName} = register(name);

    const fileUploadHandler = async(e:any) => {
       setValue(name, e.target.files)
       const output = await  trigger(name);
       if(!output) return ;
       setUploadFileInputLabel(e.target.files[0].name)
       setFile(e.target.files[0]);

    }


    switch(type) {

        case 'text' : return (
            <div className={classes.formControl}>
                <Typography variant="paragraph" component="label" theme="gray" weight="bold">{label}</Typography>
                <input type="text" placeholder={placeholder}  {...rest} style={{...sizeStyles, borderColor: error && '#ff7675'}} {...register(name)}/>
                {
                    error && ( <p style={{color: '#ff7675'}}>{error.message}</p>
                    )
                }
            </div>
        )


        case 'longtext' : return (
            <div className={classes.formControl}>
                <Typography variant="paragraph" component="label" theme="gray" weight="bold">{label}</Typography>
                <textarea  placeholder={placeholder} required={required} {...rest} style={{...sizeStyles, borderColor: error && '#ff7675'}} {...register(name)}/>
                {
                    error && ( <p style={{color: '#ff7675'}}>{error.message}</p>
                    )
                }
            </div>
        )

        case 'select' : return (
            <div className={classes.formControl}>
                <Typography variant="paragraph" component="label" theme="gray" weight="bold">{label}</Typography>
                <select style={{...sizeStyles, borderColor: error && '#ff7675'}} {...register(name)} >
                    {
                        options?.map((opt,index) => (
                            <option value={opt.toLowerCase()} key={index} disabled={index===0}>{opt}</option>
                        ))
                    }
                </select>
                {
                    error && ( <p style={{color: '#ff7675'}}>{error.message}</p>
                    )
                }
            </div>
        )

        case 'file': return (
            <div className={classes.formControl}>
                <label htmlFor="cover" className={classes.formControl_upload_label} style={{ borderColor: error && '#ff7675'}}>
                    <Image src={file ? URL.createObjectURL(file) : '/images/upload.gif'} width={50} height={50} alt=""/>
                    <Typography variant="paragraph" component="p" theme="primary" style={{ color: error && '#ff7675'}}>{error ? error.message : uploadFileInputLabel}</Typography>
                 
                </label>
                <input type="file" id="cover" accept="image/*" name={name} onChange={fileUploadHandler} onBlur={onBlur}/>
            </div>
        )

        case 'number': return (
            <div className={classes.formControl}>
                <Typography variant="paragraph" component="label" theme="gray" weight="bold">{label}</Typography>
                <input type="number" placeholder={placeholder} required={required} {...rest} style={{...sizeStyles, borderColor: error && '#ff7675'}} min={1} {...register(name, {
                    valueAsNumber: true
                })}  />
                {
                    error && ( <p style={{color: '#ff7675'}}>{error.message}</p>
                    )
                }
            </div>
        )

        case 'radio': return (
            <div className={classes.formControl}>
                <Typography variant="paragraph" component="label" theme="gray" weight="bold">{label}</Typography>
                <div className={classes.formControl_radio_container}>
                {
                    options?.map((option,index) => (
                        <React.Fragment key={index}>
                         <input type="radio" name={name}  id={index.toString()} value={option.value}  {...register(name)}/>
                        <label htmlFor={index.toString()} className={classes.formControl_question_type_label}>
                            <Image src={option.src} width={50} height={50} alt=""/>
                            <Typography variant="paragraph" component="p" theme="gray" weight="bold">{option.label}</Typography>
                        </label>

                        </React.Fragment>
                    ))
                }
                </div>
                {
                    error && ( <p style={{color: '#ff7675'}}>{error.message}</p>
                    )
                }
            </div>
        )

        case "checkbox" : return (
            <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                <input type="checkbox" name={name} id={name} {...register(name)} />
                <Typography component="label" variant="paragraph" theme="gray" weight="bold">{label}</Typography>
            </div>
        )
    }
}

export default FormControl