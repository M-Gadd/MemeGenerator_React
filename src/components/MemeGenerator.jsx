import React, { Component } from 'react'


class MemeGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      topText: '',
      bottomText: '',
      randomImg: 'http://i.imgflip.com/1bij.jpg',
      allMemeImgs: []
     }
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(response => {
      const { memes } = response.data
      this.setState({allMemeImgs : memes})
    })
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({[name] : value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const newImg = this.state.allMemeImgs[Math.floor(Math.random() * this.state.allMemeImgs.length)]
    // console.log(newImg)
    this.setState({randomImg: newImg.url})
  }
  render() { 
    // console.log(this.state.allMemeImgs)
    // const filteredArr = this.state.allMemeImgs.map(one => <img src={one.url} alt="problem" />)
    return ( 
      
        
        <div>
                <form onSubmit={this.handleSubmit} className="meme-form">

                <input 
                    type="text" 
                    name="topText"
                    placeholder = "Top Text"
                    value={this.state.topText}
                    onChange = {this.handleChange}
                />

                <input 
                    type="text" 
                    name="bottomText"
                    placeholder = "Bottom Text"
                    value={this.state.bottomText}
                    onChange = {this.handleChange}
                />
                    <button>Gen</button>
                </form>
                {/* {filteredArr} */}

                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>

            </div>
      
      
      
     );
  }
}
 
export default MemeGenerator;