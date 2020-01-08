import React from 'react';

export default class YouTubeDebugger extends React.Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }
        
    
        handleClick = () => {
            console.log('bitrate')
            this.setState({
                settings: {
                    ...this.state.settings,
                    bitrate: 12

                }
            })
        }


        handelClickTwo = () => {
            console.log(this.state.settings.video)
             this.setState({
                 settings: {...this.state.settings, 
                 video:{
                     ...this.state.settings.video,
                     resolution: '720p'
                 }}
             })
        }


        
    render() {
        return <div>
               <button onClick={this.handleClick} className='bitrate'></button>
                <button onClick={this.handelClickTwo} className='resolution'></button>
                </div>
        
    }

}