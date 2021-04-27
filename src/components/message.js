import React from 'react';

class Message extends React.Component{
    render(){
        return(
            <div className="messagerie">
                <div className="amis"> 
                    <input type="text" className="in1" placeholder="Rechercher des amis" />
                    {/*<input type="submit" value="OK" className="ok" /> */}

                    <div className="liste">
                        <table>
                            <tr>
                                <td>Ibrahim Khalil Drame</td>
                            </tr>
                            <tr>
                                <td>Khalil Drame</td>
                            </tr>
                            <tr>
                                <td>Ibrahim Drame</td>
                            </tr>
                        </table>
                    </div>

                    <div className="option">
                    <a href="/" className="gr">
                        <button style={{backgroundColor:"green", color:'white', width:"250px", borderRadius:"50px", opacity:"0.9", marginBottom:"10px", height:"35px"}} className="form-control">
                            Creer un groupe <span className="span">+</span>
                        </button>
                    </a>
                    <a href="/" className="gr">
                        <button style={{backgroundColor:"green", color:'white', width:"250px", borderRadius:"50px", opacity:"0.9", height:"35px"}} className="form-control">
                            Mes groupes
                        </button>
                    </a>
                    </div>

                </div>


                <div className="message"> kkh</div>
                
        </div>
        )
    }
}
export default Message;