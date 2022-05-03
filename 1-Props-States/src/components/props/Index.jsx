export default function Welcome(props){
    return(
        <div 
            style={
                {
                    width:'100%',backgroundColor:'red',
                    display:'flex',
                    flexDirection:'column',alignItems:'center'
                }
            }>
            <h1 
                style={
                    {
                        marginBottom:'1rem'
                    }
                }
            >
                Ola, {props.name? props.name: 'default'}
            </h1>
            <p>Bla BlaBla Bla</p>
        </div>
    )
}