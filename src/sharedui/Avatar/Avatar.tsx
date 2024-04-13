import Typography from "../Typography/Typography"


function Avatar() {
    const abbrStyle = {
        width: 40,
        height: 40,
        borderRadius: '50%',
        backgroundColor: '#047D99',
        textAlign: 'center',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    }
  return (
    <Typography variant="paragraph" component="span" weight="medium" style={abbrStyle}>AR</Typography>
  )
}

export default Avatar