import React from "react";


interface Props{
    name: string;
    note: number;
    istrue?: boolean;
}

class UserClass extends React.Component<Props>{

    constructor(props: any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick = () => {
        alert('Bonjour les amis')
      }
    
    render(){

        const {name, note, istrue} = this.props

        if(note < 10) throw new Error('Votre note est inferieur à 10')
        
        return(
                <>
                    <p>Bonjour {name.toUpperCase()} votre note est : {note}, 
                    vous êtes: {istrue ? 'Admin': ''} au BACCALAUREAT 2022</p>
                    <button onClick={this.handleClick}>VALIDER</button>                    
                </>
        )
    }
}

export default UserClass