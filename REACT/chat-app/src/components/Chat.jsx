import cam from '../img/cam.png'
import Input from './Input'
import Messages from './Messages'
const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span> Devanshi   </span>
            <div className="chatIcons">
                <img src={cam} alt="" />
                <img src={cam} alt="" />
                <img src={cam} alt="" />
            </div>
      </div>
    <Messages/>
    <Input/>
    </div>
  )
}

export default Chat
