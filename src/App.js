import Card from './Card'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'


function App () {


    return (
        <div>
            <nav>
                <h1>Personal Digital Assitances</h1>
            </nav>
            <div className='column'>
                 < Card 
                 image={AlexaImage}
                 title='Alexa'
                 subtitle='@alexa99'
                 message='I will help you buy stuff off Amazon'
                 />
                 < Card 
                 image={CortanaImage}
                 title='Cortana'
                 subtitle='@alexa99'
                 message='Personal Assistant by Microsoft'
                 />
                 < Card 
                 image={SiriImage}
                 title='Alexa'
                 subtitle='@alexa99'
                 message='I do not get a lot of updates anymore'
                 />
            </div>
           
        </div>
        
    
    )
}

export default App